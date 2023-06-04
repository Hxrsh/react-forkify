import Navbar from "./NavigationBar/Navbar";
import "./App.css";
import RecipeList from "./RecipeList/RecipeList";
import { useState, useEffect } from "react";
import RecipeDetail from "./RecipeDetail/RecipeDetail";

function App() {
  console.log("rendered App");
  const [liftedSearchVal, setLiftedSearchVal] = useState("");

  return (
    <div className="wrap">
      <Navbar
        searchVal={liftedSearchVal}
        onSearchVal={setLiftedSearchVal}
      ></Navbar>
      <RecipeList onSearchValRec={liftedSearchVal}></RecipeList>
      <RecipeDetail></RecipeDetail>
    </div>
  );
}

export default App;
