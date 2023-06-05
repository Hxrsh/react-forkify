import "./RecipeList.css";
import { useState, useEffect } from "react";
import Pagination from "./pagination/Pagination";
import { fetchRecipeList } from "../Helperfunctions/fetchData";

const RecipeList = (props) => {
  console.log("rendered RecipeList");
  const [recipeListData, setRecipeListData] = useState("");
  const { onSearchValRec: SearchedVal } = props;
  const [paginationDisp, setPaginationDisp] = useState({ start: 0, end: 9 });
  const recipeListDisplayed = recipeListData.slice(
    paginationDisp.start,
    paginationDisp.end
  );
  useEffect(() => {
    fetchRecipeList(SearchedVal, setRecipeListData);
  }, [SearchedVal]);

  if (!recipeListData.length) return <div>No data</div>;

  return (
    <div className="search__results list">
      <ul className="recipe_list">
        {recipeListData &&
          recipeListDisplayed?.map((el, index) => {
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
          })}
      </ul>
      <Pagination
        onListLoadDataLength={recipeListData.length}
        onPaginationClicked={setPaginationDisp}
      ></Pagination>
    </div>
  );
};
export default RecipeList;
