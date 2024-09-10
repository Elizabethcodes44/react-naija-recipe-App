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
      className="user-header flex items-center justify-between p-4 text-white"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center">
        {user && (
          <div className="flex  items-center">
            <div> 
            <img
              src={`${apiUrl}${user.profile_image_url}`}
              alt={`${user.name}'s profile`}
              className="w-16 h-16 rounded-full object-cover"
            />
             <p className="text-sm text-gray-300">
                {user.role}
              </p>{" "}
              {/* Display user roles */}
              </div>
            <div className="mt-2 text-center">
              <h1 className="text-2xl font-bold">Welcome {user.name}!</h1>
              <p>Don't forget to check our blog today!</p>
              {/* Display user roles */}
            </div>
          </div>
        )}
      </div>
      
      <div>
        <ul className="flex space-x-4 p-4">
          <li className="border-2 rounded-full border-gold w-[100px] text-center hover:bg-orange-500">
            <Link to="myprofile">Profile</Link>
          </li>
          <li className="border-2 rounded-full border-gold w-[100px] text-center hover:bg-orange-500">
            <Link to="authorslist">Authors</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center relative">
        <input
          placeholder="search blog"
          className="border-2 rounded-full border-gold w-[150px] h-[30px] bg-transparent text-center pl-8 hover:bg-orange-500"
        />
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
          <img
            src={searchbar}
            alt="searchbar"
            className="h-4 w-4 object-contain"
          />
        </div>
      </div>
    </header>
  );
}
