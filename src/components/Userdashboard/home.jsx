import "./aside1.css";
import { useNavigate } from "react-router-dom";

import Category from "./category";

import RequestRoleChange from "./landingpage";
export default function Home({onCategorySelect}) {
    const navigate = useNavigate();
    const handleCategorySelect = (category) => {
        onCategorySelect(category); // Trigger the parent function to update the selected category
        navigate("/user-dashboard/posts"); // Navigate to the PostList when a category is selected
      };

   
    return(
        <div className="home-page ">
            <RequestRoleChange/>
            <Category onCategorySelect={handleCategorySelect} />
        </div>
    )
}