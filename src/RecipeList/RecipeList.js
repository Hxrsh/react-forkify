import "./RecipeList.css";
import { useState, useEffect } from "react";
import Pagination from "./pagination/Pagination";
import { fetchRecipeList } from "../Helperfunctions/fetchData";

const RecipeList = (props) => {
  console.log("rendered RecipeList");
  const [recipeListData, setRecipeListData] = useState("");
  const { onSearchValRec: SearchedVal } = props;

  useEffect(() => {
    fetchRecipeList(SearchedVal, setRecipeListData);
  }, [SearchedVal]);

  if (!recipeListData.length) return <div>No data</div>;

  return (
    <div className="search__results list">
      <ul className="recipe_list">
        {recipeListData &&
          recipeListData?.map((el, index) => {
            while (index < 10) {
              return (
                <li className="recipe" key={index}>
                  <a className="recipe_link" href={`${"#"}${el.id}`}>
                    <div className="recipe_img_wrap">
                      <img src={el.image_url} className="list_image" />
                    </div>
                    <div className="list_recipe_wrap">
                      <span className="list_title">{el.title}</span>
                      <span className="list_publisher">{el.publisher}</span>
                    </div>
                  </a>
                </li>
              );
            }
          })}
      </ul>
      <Pagination></Pagination>
    </div>
  );
};
export default RecipeList;
