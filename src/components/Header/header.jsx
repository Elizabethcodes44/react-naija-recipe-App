//import { Link } from "react-router-dom"
import Logo from "/logo.png";


export default function Header() {
    
    return(
        <header className="main-header flex items-center justify-between p-4 bg-gray-800 text-white  ">
            <img src= {Logo} alt="Logo" className="h-10"/>
            <ul className="flex space-x-4 p-4">
                <li> Home</li>
                <li>Home</li>
                <li>Home</li>
               
            </ul>
           
        </header>
    )
}