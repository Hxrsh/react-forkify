import Navbar from "./NavigationBar/Navbar";
import "./App.css";
import RecipeList from "./RecipeList/RecipeList";
import { useState, useEffect } from "react";
import RecipeDetail from "./RecipeDetail/RecipeDetail";

function App() {
  console.log("rendered App");
  const [liftedSearchVal, setLiftedSearchVal] = useState("");
  const onLiftvalue = (value) => {
    setLiftedSearchVal(value);
  };

  return (
    <div className="wrap">
      <Navbar onSearchVal={onLiftvalue}></Navbar>
      <RecipeList onSearchValRec={liftedSearchVal}></RecipeList>
      <RecipeDetail></RecipeDetail>
    </div>
  );
}

export default App;
