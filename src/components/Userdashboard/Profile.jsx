import { useState, useEffect } from "react";
import "./aside1.css";
const apiUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:5432" // Local backend URL for development
    : "https://foodblog-server-side.onrender.com"; // Production backend URL
const Profile = () => {
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
    return <p>Loading user profile...</p>;
  }

  return (
    <div className="flex justify-center items-center  min-h-screen">
      <div className="bg-black shadow-lg rounded-lg p-6 w-full max-w-lg profile-container">
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">My Profile</h1>
          <img
            src={user.profile_image_url ? `${apiUrl}${user.profile_image_url}` : 'https://via.placeholder.com/150'}
            alt={`${user.name}'s profile`}
            className="my-profile-image border-2 border-gold mt-4"
          />
          <h2 className="profile-name">{user.name}</h2>
          {user.email ? (
  <p className="profile-email text-white">{user.email}</p>
) : (
  <p className="text-red-500">Email not available</p>
)}

          <p className="profile-role">{user.role === 'USER' ? 'Regular User' : 'Admin'}</p>
          
          {/* Display other user details */}
          <div className="profile-status mt-4">
            {user.is_author ? (
              <p className="text-green-500">Author</p>
            ) : user.requested_author ? (
              <p className="text-yellow-500">Requested to be an Author</p>
            ) : (
              <p className="text-red-500">Not an Author</p>
            )}
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Profile;
