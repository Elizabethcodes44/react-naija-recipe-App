import { useState, useEffect } from "react";

import "./aside1.css";
import {  useNavigate } from 'react-router-dom';
import background from "../../assets/userdashboardbg.png";
import { Link,} from "react-router-dom";
const apiUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:5432" // Local backend URL for development
    : "https://foodblog-server-side.onrender.com"; // Production backend URL
export default function UserHeader() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Hook for navigation
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
         
        
 
      
        const response = await fetch(`${apiUrl}/user/me`, {
          credentials: 'include', // Ensures cookies are sent with the request
        }); // Update with actual endpoint
        const data = await response.json();
        setUser(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUser();
  }, []);
  const handleSearch = (event) => {
    if (event.key === 'Enter') { // Trigger search on Enter key press
      event.preventDefault(); // Prevent form submission
      navigate(`searchlist?term=${encodeURIComponent(searchTerm)}`); // Navigate to search results page
    }
  };
  return (
    <header
      className="user-header text-white"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="header-left">
        {user && (
          <div className="flex  items-center space-x-4">
            <div> 
            <img
              src={`${apiUrl}${user.profile_image_url}`}
              alt={`${user.name}'s profile`}
              className="header-profile-image w-12 h-12 rounded-full object-cover"
            />
            
              </div>
            <div className="welcome-text">
              <h1 className="text-xl md:text-2xl  font-bold">Welcome {user.name}!</h1>
              <p className="text-sm md:text-base text-gray-200">Don't forget to check our blog today!</p>
              {/* Display user roles */}
            </div>
          </div>
        )}
      </div>
      
      <div className="header-links mt-4 md:mt-0">
        <ul className="flex  flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 p-4 p-4">
          <li className="border-2 rounded-full border-gold w-[150px] text-center hover:bg-orange-500 text-[16px] md:text-[20px]">
            <Link to="myprofile">Profile</Link>
          </li>
          <li className="border-2 rounded-full border-gold w-[150px] text-center hover:bg-orange-500 text-[16px] md:text-[20px]">
            <Link to="authorslist">Authors</Link>
          </li>
          <li className="border-2 rounded-full border-gold w-[150px] text-center hover:bg-orange-500 text-[16px] md:text-[20px]">
            <Link to="wishlist">WishList</Link>
          </li>
        </ul>
      </div>
      <div className="search-container mt-4 md:mt-0">
        <input
          type="text" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          onKeyDown={handleSearch}
          placeholder="Search posts"
          className="bg-transparent rounded-full border-2 border-white text-white px-4 py-2 w-full md:w-64" 
        />
        
      </div>
    </header>
  );
}
