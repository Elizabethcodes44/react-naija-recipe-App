import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Home from "./Components/Home/home";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}
export { App };
