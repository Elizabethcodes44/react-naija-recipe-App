import "./home.css";
import Data from "./data.jsx";
import {useNavigate} from "react-router-dom";

function Main() {
  const Navigate = useNavigate();
  const handleMoreDetails = (food) => {
    Navigate(`/${food.name}`);}
  return (
    <>
      <main>
        <h4>Ever heard the phrase Naija no dey carry last?</h4>
        <ul className="recipe-List">
          <Data moreInformation={handleMoreDetails} />
        </ul>
      </main>
    </>
  );
}
export default Main;
