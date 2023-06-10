import Navbar from "./NavigationBar/Navbar";
import "./App.css";
import RecipeList from "./RecipeList/RecipeList";
import { useState, useEffect } from "react";
import RecipeDetail from "./RecipeDetail/RecipeDetail";

function App() {
  console.log("rendered App");
  const [liftedSearchVal, setLiftedSearchVal] = useState("");
  const [liftedBookmark, setLiftedBookmark] = useState("");

  return (
    <div className="wrap">
      <Navbar
        onSearchVal={setLiftedSearchVal}
        onBookmarkRec={liftedBookmark}
      ></Navbar>
      <RecipeList onSearchValRec={liftedSearchVal}></RecipeList>
      <RecipeDetail onBookmark={setLiftedBookmark}></RecipeDetail>
    </div>
  );
}

export default App;
