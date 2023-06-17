import "./RecipeList.css";
import { useState, useEffect } from "react";
import Pagination from "./pagination/Pagination";
import { fetchRecipeList } from "../Helperfunctions/fetchData";
import smiley from "../img/smiley.svg";
import { SpinnerCircularFixed } from "spinners-react";

const RecipeList = (props) => {
  const [recipeListData, setRecipeListData] = useState("");
  const [paginationDisp, setPaginationDisp] = useState({ start: 0, end: 9 });
  const [isloading, setisLoading] = useState("");
  const { onSearchValRec: SearchedVal } = props;

  const recipeListDisplayed = recipeListData.slice(
    paginationDisp.start,
    paginationDisp.end
  );
  useEffect(() => {
    fetchRecipeList(SearchedVal, setRecipeListData, setisLoading);

    setPaginationDisp({ start: 0, end: 9 });
  }, [SearchedVal]);

  if (!recipeListData.length) {
    return (
      <div className="no_data list">
        <div className="no_data_msg">
          <img src={smiley} className="no_data_logo" />
          <p>
            Please start with Searching for a Recipe to see the Results here.
          </p>
        </div>
      </div>
    );
  } else {
    return isloading ? (
      <div className="no_data list">
        <div className="no_data_msg">
          <SpinnerCircularFixed
            size={70}
            thickness={150}
            speed={129}
            color="rgba(244, 137, 130, 1)"
            secondaryColor="rgb(251, 219, 137)"
          />
        </div>
      </div>
    ) : (
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
  }
};
export default RecipeList;
