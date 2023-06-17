import "./RecipeDetail.css";
import clock from "../img/clock.svg";
import users from "../img/users.svg";
import plus from "../img/plus-circle.svg";
import minus from "../img/minus-circle.svg";
import bookmarker from "../img/bookmark1.svg";
import tick from "../img/tick.svg";
import right_arr from "../img/right-arrow.svg";
import smiley from "../img/smiley.svg";
import { useState, useEffect, useRef } from "react";
import { fetchRecipeDetail } from "../Helperfunctions/fetchData";
import { SpinnerCircularFixed } from "spinners-react";

const RecipeDetail = (props) => {
  console.log("rendered recDetail");
  const [recipeDetailData, setRecipeDetailData] = useState("");
  const [servingQuan, setServingQuan] = useState("");
  const [bookmarkList, setBookmarkList] = useState([]);
  const [isloading, setisLoading] = useState("");
  let bookmarkStyle = "recipe_bookmark";
  const hashChangeHandler = (e) => {
    const hashChangedValue = e.newURL.split("#")[1];
    if (!hashChangedValue) {
      return;
    }
    fetchRecipeDetail(hashChangedValue, setRecipeDetailData, setisLoading);

    console.log("fetch detail working");
  };
  const servingCalculator = (arrElquan, numberServe) => {
    const newServing = (arrElquan * numberServe) / recipeDetailData.servings;
    return newServing;
  };
  const addRecipetoBookmark = (recipeDet) => {
    setBookmarkList((prevState) => {
      return [...prevState, recipeDet];
    });
  };
  const removeRecipeBookmark = (recipeDet) => {
    setBookmarkList((prevState) => {
      if (bookmarkList.length == 1 && bookmarkList[0].id == recipeDet.id) {
        return [];
      } else {
        return prevState.filter((recipe) => {
          return recipe.id !== recipeDet.id;
        });
      }
    });
  };
  if (
    bookmarkList.some((recipe) => {
      return recipe.id == recipeDetailData.id;
    })
  ) {
    bookmarkStyle += " recipe_bookmarked";
  } else {
    bookmarkStyle = "recipe_bookmark";
  }

  const onBookmarkHandler = () => {
    const isRecAvailable = bookmarkList.findIndex((recipe) => {
      return recipe.id === recipeDetailData.id;
    });
    if (isRecAvailable == -1) {
      addRecipetoBookmark(recipeDetailData);
    } else {
      removeRecipeBookmark(recipeDetailData);
    }
  };
  useEffect(() => {
    props.onBookmark(bookmarkList);
  }, [bookmarkList]);
  useEffect(() => {
    setServingQuan(recipeDetailData?.servings);
    console.log(recipeDetailData);
  }, [recipeDetailData]);

  useEffect(() => {
    window.addEventListener("hashchange", hashChangeHandler);

    return () => {
      window.removeEventListener("hashchange", hashChangeHandler);
    };
  }, []);

  if (!recipeDetailData)
    return (
      <div className="no_data detail">
        <div className="no_data_msg">
          <img src={smiley} className="no_data_logo" />
          <p>Click on any recipe to see the Details</p>
        </div>
      </div>
    );
  return isloading ? (
    <div className="no_data_spinner detail">
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
            <span>{servingQuan} Servings</span>
            <div className="user_count">
              <img
                src={minus}
                className="users_minus counter"
                onClick={() => {
                  if (servingQuan === 1) return;
                  setServingQuan(servingQuan - 1);
                }}
              />
              <img
                src={plus}
                className="users_plus counter"
                onClick={() => {
                  setServingQuan(servingQuan + 1);
                }}
              />
            </div>
          </div>
        </div>
        <button className={bookmarkStyle} onClick={onBookmarkHandler}>
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
                  {el.quantity && servingQuan && (
                    <div className="quantity">
                      {servingCalculator(el.quantity, servingQuan)}
                    </div>
                  )}
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
          This Recipe was carefully designed and tested by&nbsp;
          <span>{recipeDetailData.publisher}</span>. Please checkout directions
          at their website.
        </div>
        <a
          href={recipeDetailData.source}
          className="directions_link"
          target="_blank"
        >
          <span>DIRECTIONS</span>
          <img src={right_arr} className="direction_arr" />
        </a>
      </div>
    </div>
  );
};

export default RecipeDetail;
