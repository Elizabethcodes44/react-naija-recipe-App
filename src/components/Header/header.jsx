import { NavLink } from "react-router-dom"



export default function Header() {
    
    return(
        <header className="main-header flex items-end justify-between p-4 bg-gray-800 text-white  ">
         
            <ul className="flex space-x-4 ml-auto p-4 text-2xl">
                <li> <NavLink to ="/" className={({ isActive }) => (isActive ? "underline" : "hover:underline")}>Home</NavLink> </li>
                <li> <NavLink to ="/aboutus" className={({ isActive }) => (isActive ? "underline" : "hover:underline")}>About</NavLink> </li>
                <li> <NavLink to ="/contactus" className={({ isActive }) => (isActive ? "underline" : "hover:underline")}>Contact</NavLink> </li>
                
               
            </ul>
           
        </header>
    )
}