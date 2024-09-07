import "./App.css";
import { Routes, Route ,  useLocation} from "react-router-dom";
import Header from "./components/Header/header";

import Home from "./components/Home/home";
import Login from "./components/Home/login";
import Signup from "./components/Home/signup";
import UserDashBoard from "./Components/Userdashboard/dashboard";
import AuthorDashBoard from "./Components/Authordashboard/Adashboard";
import AdminDashBoard from "./Components/AdminDashboard/ADdashboard";
import UserHeader from "./components/Userdashboard/up";
import AuthorHeader from "./components/Authordashboard/header";
import AdminHeader from "./components/AdminDashboard/header";


function App() {
  const location = useLocation();
  const getHeaderComponent = () => {
    if (location.pathname.startsWith('/user-dashboard')) {
      return <UserHeader />;
    }
    if (location.pathname.startsWith('/author-dashboard')) {
      return <AuthorHeader />;
    }
    if (location.pathname.startsWith('/admin-dashboard')) {
      return <AdminHeader />;
    }
    return <Header />;
  };
  return (
    <>
    <div className="app-Container">
    {getHeaderComponent()}
     
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path = "/login" element= {<Login/>}></Route>
        <Route path = "/signup" element= {<Signup/>}></Route>
        <Route path = "/user-dashboard/*" element= {<UserDashBoard/>}></Route>
        <Route path = "/author-dashboard/*" element= {<AuthorDashBoard/>}></Route>
        <Route path = "/admin-dashboard/*" element= {<AdminDashBoard/>}></Route>
      </Routes>
     
      </div>
    </>
  );
}
export default App ;
