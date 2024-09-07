
import searchbar from "../../assets/search.png";
import "./aside1.css";
import background from "../../assets/userdashboardbg.png";
import { Link } from "react-router-dom";
export default function UserHeader() {
    return(
        <header className="user-header flex items-center  justify-between p-4 text-white "
        style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover", // Ensures the image covers the entire area
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
            backgroundPosition: "center", // Centers the background image
            
          }}>
            <div>
                <img />
            </div>
            <div className="text-center">
                
            <h1 className="text-2xl font-bold">Welcome User!</h1>
            <p>Dont forget to check our blog today!</p>
            </div>
            <div>
                
           <ul className="flex space-x-4 p-4">
            <li className="border-2 rounded-full border-gold w-[100px] text-center hover:bg-orange-500"><Link to="/">Home</Link></li>
            <li className="border-2 rounded-full border-gold w-[100px] text-center hover:bg-orange-500"><Link to="user-dashboard/profile">Profile</Link></li>
            <li className="border-2 rounded-full border-gold w-[100px] text-center hover:bg-orange-500"><Link to="user-dashboard/authors">Authors</Link></li>
           </ul>
           </div>
           <div className="flex items-center">
            <input 
            placeholder="search blog" className="border-2 rounded-full border-gold w-[150px] h-[30px] bg-transparent text-center hover:bg-orange-500"/>
            <div className="ml-[-3rem] h-1/2 w-1/2">
            <img src = {searchbar} alt = "searchbar" className="h-full w-full object-contain" />
            </div>
           </div>
           
        </header>
    )
}