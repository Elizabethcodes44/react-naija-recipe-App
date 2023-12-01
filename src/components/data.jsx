import initialData from "../recipes";
import { useState, useEffect } from "react";
import "../components/data.css";
import { useLocation, useParams } from "react-router-dom";
import Showrecipe from "../components/showrecipe";
import { useContext } from "react";

import { foodContext } from "../App";

function Data() {
  const { setFoodName } = useContext(foodContext);
  const [dataItems, setDataItems] = useState(initialData);
  const [selectedFood, setSelectedFood] = useState(null);
  const location = useLocation();
  const { foodName } = useParams();

  useEffect(() => {
    console.log("foodName:", foodName);
    const fetchData = async () => {
      if (dataItems.length === 0) {
        setDataItems(initialData);
      }
      if (foodName) {
        const selected = dataItems.find((food) => food.name === foodName);
        if (selected) {
          setSelectedFood(selected);
          setFoodName(selected.name);
        }
      }
    };
    fetchData();
  }, [foodName, setFoodName, dataItems]);

  const moreInformation = (food) => {
    setSelectedFood(food);
    setFoodName(food.name);
  };
  console.log("foodName outside useEffect:", foodName);
  return (
    <div className="dataitems">
      {dataItems.map((food, index) => (
        <li key={`${food.name} ${index}`}>
          <img className="images" src={food.image} alt={food.name} />
          <button onClick={() => moreInformation(food)}>{food.name}</button>
        </li>
      ))}

      {selectedFood && <Showrecipe food={selectedFood} />}
      
    </div>
  );
}

export default Data;
