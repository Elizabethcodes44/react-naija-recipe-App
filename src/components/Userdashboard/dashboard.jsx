import Leftbar from "./nav.jsx";
import background from "../../assets/userdashboardbg.png";
import Sidebar from "./aside2.jsx";
import Home from "./home.jsx";
import UserHeader from "./up.jsx";
import "./aside1.css";
import { Routes, Route } from "react-router-dom";
import PostList from "./postlist.jsx";
import PostDetail from "./post.jsx";
import { useState } from "react";
export default function UserDashBoard() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // Set the selected category
  };
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
          <Routes>
            <Route
              path="/"
              element={<Home onCategorySelect={handleCategorySelect} />}
            ></Route>
            <Route
              path="posts"
              element={<PostList selectedCategory={selectedCategory} />}
            />
            <Route path="post/:postId" element={<PostDetail />} />

          </Routes>
        </div>
        <Sidebar></Sidebar>
      </div>
    </>
  );
}
