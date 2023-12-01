import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Main from "./components/home.jsx";
import Data from "./components/data.jsx";
import { useState, createContext } from "react";

const foodContext = createContext();
function App() {
  const [foodName, setFoodName] = useState("hello world");
  
  return (
    <>
      <foodContext.Provider value={{ setFoodName }}>
        <div className="app-Container">
          <Header></Header>
          <Routes>
            <Route path="/" element={<Main />} />

            <Route path="/:foodName" element={<Data />} />
          </Routes>
        </div>
      </foodContext.Provider>
    </>
  );
}
export  {App, foodContext};
