import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const apiUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:5432" // Local backend URL for development
    : "https://foodblog-server-side.onrender.com"; // Production backend URL

const SearchComponent = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const term = query.get('term');

    if (term) {
      fetch(`${apiUrl}/post/searchposts?term=${encodeURIComponent(term)}`)
        .then(response => response.json())
        .then(data => setResults(data.data))
        .catch(error => console.error('Search error:', error));
    }
  }, [location.search]);

  const defaultImageUrl = '/aifood.avif';

  return (
    <div className="container mx-auto px-4 py-[50px]"> {/* Add padding on the left and right */}
      <h1 className="text-white text-3xl mb-8">Search Results</h1> {/* Make the text white */}
      <ul className="space-y-8"> {/* Add spacing between posts */}
        {results.map(post => {
          const featuredImageUrl = post.featured_image_url
            ? `${apiUrl}${post.featured_image_url}`
            : defaultImageUrl;

          return (
            <li key={post.id} className=" rounded-md shadow-md"> {/* Background and padding for each post */}
              <img 
                src={featuredImageUrl} 
                alt={`${post.title}'s featured image`}
                className="w-full h-60 w-60 object-cover rounded-md mb-4"
                onError={(e) => {
                  console.error("Image load error:", e);
                  e.target.src = defaultImageUrl; // Optional fallback
                }}
              />
              <h2 className="text-white text-2xl font-bold mb-2">{post.title}</h2> {/* White text for post title */}
              <p className="text-white text-sm">{post.content}</p> {/* White text for post content */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchComponent;
