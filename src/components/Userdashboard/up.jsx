import { useState, useEffect } from "react";
import searchbar from "../../assets/search.png";
import "./aside1.css";

import background from "../../assets/userdashboardbg.png";
import { Link,} from "react-router-dom";
const apiUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:5432" // Local backend URL for development
    : "https://foodblog-server-side.onrender.com"; // Production backend URL
export default function UserHeader() {
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
          <div className="flex  items-center">
            <div> 
            <img
              src={`${apiUrl}${user.profile_image_url}`}
              alt={`${user.name}'s profile`}
              className="header-profile-image"
            />
            
              </div>
            <div className="welcome-text">
              <h1 className="text-2xl font-bold">Welcome {user.name}!</h1>
              <p>Don't forget to check our blog today!</p>
              {/* Display user roles */}
            </div>
          </div>
        )}
      </div>
      
      <div className="header-links">
        <ul className="flex space-x-4 p-4">
          <li className="border-2 rounded-full border-gold w-[150px] text-center hover:bg-orange-500 text-[20px]">
            <Link to="myprofile">Profile</Link>
          </li>
          <li className="border-2 rounded-full border-gold w-[150px] text-center hover:bg-orange-500 text-[20px]">
            <Link to="authorslist">Authors</Link>
          </li>
        </ul>
      </div>
      <div className="search-container">
        <input
          placeholder="search blog"
          className="search-input"
        />
        <div className="">
          <img
            src={searchbar}
            alt="searchbar"
            className="search-icon"
          />
        </div>
      </div>
    </header>
  );
}
