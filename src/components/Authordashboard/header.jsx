import { useState, useEffect } from "react";
import "./author.css";
import { Link } from "react-router-dom";

const apiUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:5432" // Local backend URL for development
    : "https://foodblog-server-side.onrender.com"; // Production backend URL

export default function AuthorHeader() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`${apiUrl}/user/me`, {
          credentials: "include", // Ensures cookies are sent with the request
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser(data);
        console.log('User data fetched:', data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser(null); // Ensure user is set to null on error
      }
    }

    fetchUser();
  }, []);

  // Fallback image URL
  const defaultImageUrl = '/author.jpg';

  // Ensure user and profile_image_url are defined before rendering
  const profileImageUrl = user?.profile_image_url
    ? `${apiUrl}${user.profile_image_url}`
    : defaultImageUrl;

  return (
    <header className="author-header">
      {user ? (
        <>
          <div>
            <img
              src={profileImageUrl}
              alt={`${user.name}'s profile`}
              className="header-profile-image"
              onError={(e) => {
                console.error("Image load error:", e);
                e.target.src = defaultImageUrl; // Optional fallback
              }}
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Welcome {user.name}!</h1>
          </div>
          <div>
            <ul className="flex space-x-4 p-4">
              <li className="border-2 rounded-full border-gold w-[100px] text-center hover:bg-orange-500">
                <Link to="authorprofile">Profile</Link>
              </li>
              <li className="border-2 rounded-full border-gold w-[150px] text-center hover:bg-orange-500">
                <Link to={`publishedposts/${user.id}`}>Published Blogs</Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div>Loading...</div> // Fallback UI while user data is being fetched
      )}
    </header>
  );
}
