//import { Link } from "react-router-dom"
import Logo from "/logo.png";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
export default function Header() {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            // Send a POST request to the backend logout route
            const response = await fetch('http://localhost:5432/user/logout', {
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
    return(
        <header className="main-header flex items-center justify-between p-4 bg-gray-800 text-white  ">
            <img src= {Logo} alt="Logo" className="h-10"/>
            <ul className="flex space-x-4 p-4">
                <li> Home</li>
                <li>Home</li>
                <li>Home</li>
               
            </ul>
            <button onClick={handleLogout}>LogOut</button>
        </header>
    )
}