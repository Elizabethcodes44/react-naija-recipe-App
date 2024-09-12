import Leftbar from "./side1.jsx";
import background from "../../assets/authordashboardbg.png";

import AuthorHeader from "./header.jsx";
import "./author.css";
import Home from "../Authordashboard/home.jsx";
import { Routes, Route } from "react-router-dom";
import CreateAPost from "./postcreation.jsx";



export default function AuthorDashBoard() {
  
  return (
    <>
      <div
        className="dashboard-wrapper text-white "
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover", // Ensures the image covers the entire area
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          backgroundPosition: "center", // Centers the background image
          minHeight: "100vh", // Ensures the div takes up the full height of the viewport
        }}
      >
        <AuthorHeader></AuthorHeader>

        <Leftbar></Leftbar>
        <div className="author-content">
            <Routes>
                <Route path = "/" element = {<Home/>}> </Route>
                <Route path = "createapost" element = {<CreateAPost/>}> </Route>
            </Routes>
         
          
        </div>
       
      </div>
    </>
  );
}
