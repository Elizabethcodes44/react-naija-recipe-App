import "./aside1.css";
import Category from "./category";
import Landingpage from "./landingpage";
export default function Home() {
    return(
        <div className="home-page ">
            <Landingpage/>
            <Category/>
        </div>
    )
}