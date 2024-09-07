
import "./author.css";

import { Link } from "react-router-dom";
export default function AuthorHeader() {
    return(
        <header className="author-header"
        >
            <div>
                <img />
            </div>
            <div className="text-center">
                
            <h1 className="text-2xl font-bold">Welcome Author!</h1>
            
            </div>
            <div>
                
           <ul className="flex space-x-4 p-4">
            <li className="border-2 rounded-full border-gold w-[100px] text-center hover:bg-orange-500"><Link to="/">Home</Link></li>
            <li className="border-2 rounded-full border-gold w-[100px] text-center hover:bg-orange-500"><Link to="user-dashboard/profile">Profile</Link></li>
            <li className="border-2 rounded-full border-gold w-[150px] text-center hover:bg-orange-500"><Link to="user-dashboard/authors">Published Blogs</Link></li>
           </ul>
           </div>
           
           
        </header>
    )
}
   
