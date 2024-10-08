
import { useState } from "react";
import { Link  } from "react-router-dom";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import "./author.css";
const apiUrl = import.meta.env.MODE === 'development'
  ? 'http://localhost:5432'  // Local backend URL for development
  : 'https://foodblog-server-side.onrender.com';  // Production backend URL
export default function LeftBar() {
   const [active, setActive] = useState(0);
   const navigate = useNavigate();
    
   const handleLogout = async () => {
    try {
        // Send a POST request to the backend logout route
        const response = await fetch(`${apiUrl}/user/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            // Clear the token from cookies
            Cookies.remove('token');
            
            // Optionally navigate to the login page or home page
            navigate('/');
        } else {
            // Handle logout failure
            console.error('Logout failed');
        }
    } catch (error) {
        console.error('An error occurred during logout', error);
    }
};
  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0" , link: "/author-dashboard"},
    { name: "Notifications", icon: "notifications-outline", dis: "translate-x-16" , link: "/author-dashboard/notifications"},
  
   
    
    { name: "Settings", icon: "cog", dis: "translate-x-96" , link: "/author-dashboard/settings", },
    { name: "Logout", icon: "log-out", dis: "translate-x-96" , link: "", onClick: handleLogout },

  ];
  
  return (
    <div className="left-sidebar ">
       
      <ul className="menus-list">
       

       
     
     
        {Menus.map((menu, i) => (
         <li key={i} className={`menus-item ${i === active ? "active" : ""}`}>
           {menu.onClick ? (
              <a
                href="#"
                className="menus-link flex items-center"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  menu.onClick(); // Call the onClick handler
                }}
              >
                <span className="menus-icon">
                  <ion-icon name={menu.icon}></ion-icon>
                </span>
                <span className="menus-text">{menu.name}</span>
              </a>
            ) : (
         <Link
            to={menu.link}
            className="menus-link flex items-center"
            onClick={() => setActive(i)}
         >
            <span className= "menus-icon">
               <ion-icon name={menu.icon}></ion-icon>
               </span>
              <span className="menus-text">{menu.name}</span>
              
                 
         </Link>
            )}
      </li>
      
        ))}
      </ul>
    </div>
  );
}