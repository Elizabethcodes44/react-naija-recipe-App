import Leftbar from "./nav.jsx";
import background from "../../assets/userdashboardbg.png";
import Sidebar from "./aside2.jsx";
import Home from "./home.jsx";
import UserHeader from "./up.jsx";
import "./aside1.css";
export default function UserDashBoard() {
  return (
    <>
      <div
        className="dashboard-wrapper "
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover", // Ensures the image covers the entire area
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          backgroundPosition: "center", // Centers the background image
          minHeight: "100vh", // Ensures the div takes up the full height of the viewport
        }}
      >
        <UserHeader></UserHeader>
        
          <Leftbar></Leftbar>
          <div className="main-content">
            <Home></Home>
          </div>
          <Sidebar></Sidebar>
        </div>
     
    </>
  );
}
