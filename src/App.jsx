import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";

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
