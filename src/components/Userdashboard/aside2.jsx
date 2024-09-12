import { useState, useEffect } from "react";
import "./aside1.css";
const apiUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:5432" // Local backend URL for development
    : "https://foodblog-server-side.onrender.com"; // Production backend URL
export default function Sidebar() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`${apiUrl}/user/me`, {
          credentials: "include", // Ensures cookies are sent with the request
        }); // Update with actual endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUser();
  }, []);
  return (
    <div className="right-sidebar ">
      {error && <p className="error">{error}</p>}
      {user ? (
        <div className="user-info">
          <img
            src={`${apiUrl}${user.profile_image_url}`}
            alt="profile-picture"
            className="profile-image"
          />
          <h1 className="username">{user.name}</h1>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      <form className="chat-form ">
        <input placeholder="Say hello" type="text" className="hello-input" />
      </form>
    </div>
  );
}
