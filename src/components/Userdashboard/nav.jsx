
import { useState } from "react";
import { Link  } from "react-router-dom";

import "./aside1.css";
export default function LeftBar() {
   const [active, setActive] = useState(0);
  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0" , link: "/"},
    { name: "Books", icon: "book-outline", dis: "translate-x-16" , link: "/user-dashboard/books"},
    { name: "Categories", icon: "add-circle-outline", dis: "translate-x-32" , link:"/categories"},
    { name: "Trending", icon: "bonfire-outline", dis: "translate-x-48", link: "/trending" },
    { name: "Deals", icon: "diamond-outline", dis: "translate-x-64", link: "/deals" },
    { name: "WishList", icon: "podium-outline", dis: "translate-x-80" , link: "/wishlist", },
    { name: "Cart", icon: "cart-outline", dis: "translate-x-96" , link: "/cart", },

  ];
  
  return (
    <div className="left-sidebar bg-transparent text-white p-4 rounded-l-lg border-gold border-2 rounded-full">
       
      <ul className="menu-list">
       

       
     
     
        {Menus.map((menu, i) => (
         <li key={i} className={`menu-item ${i === active ? "active" : ""}`}>
         <Link
            to={menu.link}
            className="menu-link flex items-center"
            onClick={() => setActive(i)}
         >
            <span className= "menu-icon">
               <ion-icon name={menu.icon}></ion-icon>
               </span>
              <span className="menu-text">{menu.name}</span>
              
                 
         </Link>
      </li>
      
        ))}
      </ul>
    </div>
  );
}