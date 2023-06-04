import "./RecipeDetail.css";
import clock from "../img/clock.svg";
import users from "../img/users.svg";
import plus from "../img/plus-circle.svg";
import minus from "../img/minus-circle.svg";
import bookmarker from "../img/bookmark1.svg";
import tick from "../img/tick.svg";
import right_arr from "../img/right-arrow.svg";
import { useState, useEffect, useRef } from "react";
import { fetchRecipeDetail } from "../Helperfunctions/fetchData";

const RecipeDetail = (props) => {
  console.log("rendered recDetail");
  const [recipeDetailData, setRecipeDetailData] = useState("");
  const [recipeID, setRecipeID] = useState("");
  const initialRenderCall = useRef("0");
  const hashChangeHandler = (e) => {
    const hashChangedValue = e.newURL.split("#")[1];
    setRecipeID(hashChangedValue);
  };
  useEffect(() => {
    window.addEventListener("hashchange", hashChangeHandler);
    return () => {
      window.removeEventListener("hashchange", hashChangeHandler);
    };
  }, []);
  useEffect(() => {
    if (initialRenderCall.current < 2) {
      initialRenderCall.current++;
    } else {
      fetchRecipeDetail(recipeID, setRecipeDetailData);
    }
  }, [recipeID]);

  if (!recipeDetailData) return <div>No data</div>;

  return (
    <div className="recipe_detail detail">
      <figure className="recipe_image_wrap">
        <img src={recipeDetailData.image} className="recipe_image" />
      </figure>
      <h1 className="recipe_title">
        <span>{recipeDetailData.title}</span>
      </h1>
      <div className="recipe_info">
        <div className="serving_minutes_wrap">
          <div className="recipe_time">
            <img src={clock} className="time_logo" />
            <span>{recipeDetailData.cooking_time} Minutes</span>
          </div>
          <div className="recipe_serving">
            <img src={users} className="time_logo" />
            <span>{recipeDetailData.servings} Servings</span>
            <div className="user_count">
              <img src={minus} className="users_plus counter" />
              <img src={plus} className="users_minus counter" />
            </div>
          </div>
        </div>
        <button className="recipe_bookmark">
          <img src={bookmarker} className="bookmarker_logo" />
        </button>
      </div>
      <div className="recipe_ingredients">
        <div className="ingredients_title">RECIPE INGREDIENTS</div>
        <ul className="ingredients_list">
          {recipeDetailData &&
            recipeDetailData?.ingredients?.map((el, index) => {
              return (
                <li className="ingredient" key={index}>
                  <img
                    src={tick}
                    className="ingredient_check"
                    alt="tick mark"
                  />
                  {el.quantity && <div className="quantity">{el.quantity}</div>}
                  {el.unit && <span>{el.unit}</span>}
                  {el.description}
                </li>
              );
            })}
        </ul>
      </div>
      <div className="recipe_direction">
        <div className="direction_title">HOW TO COOK IT</div>
        <div className="direction_desc">
          This Recipe was carefully designed and tested by
          <span>ALL recipies</span>. Please checkout directions at their website
        </div>
        <button className="directions_link">
          <span>DIRECTIONS</span>
          <img src={right_arr} className="direction_arr" />
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail;
