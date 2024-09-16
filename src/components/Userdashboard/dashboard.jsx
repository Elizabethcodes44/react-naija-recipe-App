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
import Profile from "./Profile.jsx";
import AuthorsList from "./authors.jsx";
import WishList from "./wishlist.jsx";
import SearchComponent from "./search.jsx";
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
        <div className="dashboard-content flex flex-col md:flex-row">
        <Leftbar></Leftbar>
        <div className="main-content  flex-1 p-4">
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
            <Route path="myprofile" element={<Profile />} />
            <Route path="authorslist" element={<AuthorsList />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="searchlist" element={<SearchComponent />} />


          </Routes>
        </div>
        <Sidebar></Sidebar>
      </div>
      </div>
    </>
  );
}
