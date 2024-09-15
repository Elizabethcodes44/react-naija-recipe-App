import { useState, useEffect } from "react";
import "./author.css";
const apiUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:5432" // Local backend URL for development
    : "https://foodblog-server-side.onrender.com"; // Production backend URL
const AuthorProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`${apiUrl}/user/me`, {
          credentials: 'include',
        });
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUser();
  }, []);

  if (!user) {
    return <p>Loading author profile...</p>;
  }
  const defaultImageUrl = '/author.jpg';
  const profileImageUrl = user?.profile_image_url
    ? `${apiUrl}${user.profile_image_url}`
    : defaultImageUrl;
  return (
    <div className="flex justify-center items-center  min-h-screen">
      <div className="bg-black shadow-lg rounded-lg p-6 w-full max-w-lg profile-container">
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">Author Profile</h1>
          <img
            src={profileImageUrl}
            alt={`${user.name}'s profile`}
            className="my-profile-image border-2 border-gold mt-2"
            onError={(e) => {
                console.error("Image load error:", e);
                e.target.src = defaultImageUrl; // Optional fallback
              }}
          />
          <h2 className="profile-name">{user.name}</h2>
          {user.email ? (
  <p className="profile-email text-white">{user.email}</p>
) : (
  <p className="text-red-500">Email not available</p>
)}
<p>Bio: </p>
<p className="mb-2 w-1/2 italic">I write amazing recipes and share my experiences while I travel round the world. Follow me to read more about my posts! Feel free to reach me via email below</p>
          <p className="profile-role">{user.role === 'AUTHOR' ? 'AUTHOR' : 'Admin'}</p>
          
         

         
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;
