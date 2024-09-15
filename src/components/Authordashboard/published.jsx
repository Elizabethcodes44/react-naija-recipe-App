import { useState, useEffect } from "react";

const apiUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:5432" // Local backend URL for development
    : "https://foodblog-server-side.onrender.com"; // Production backend URL

export default function PublishedPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPublishedPosts() {
      try {
        const response = await fetch(`${apiUrl}/post/posts?status=PUBLISHED`, {
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching published posts:", error);
      }
    }

    fetchPublishedPosts();
  }, []);
  const defaultImageUrl = '/aifood.avif';
 
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">Published Posts</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => {
          const featuredImageUrl = post.featured_image_url
            ? `${apiUrl}${post.featured_image_url}`
            : defaultImageUrl;
          return (
            <li key={post.id} className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col">
              <img
                src={featuredImageUrl}
                alt={`${post.title}'s featured image`}
                className="w-full h-48 object-cover rounded-md mb-4"
                onError={(e) => {
                  console.error("Image load error:", e);
                  e.target.src = defaultImageUrl; // Optional fallback
                }}
              />
              <h2 className="text-lg font-bold mb-2">{post.title}</h2>
              <h3 className="text-sm text-gray-500 mb-1">{post.status}</h3>
              <p className="text-gray-700 mb-2">{post.content}</p>
              <div className="mt-auto">
                <span className="text-sm text-blue-600">{post.tags}</span>
                <span className="text-sm text-gray-400 ml-2">{post.category}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
  
}
