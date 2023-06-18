import "./Navbar.css";
import logo from "../img/logo.png";
import search_logo from "../img/mag-glass.svg";
import bookmark from "../img/bookmark.svg";
import note from "../img/note.svg";
import { useEffect, useState } from "react";
import warning from "../img/warning.svg";

const Navbar = (props) => {
  const { onBookmarkRec: bookmarkRecieved } = props;
  const [recipeBookmarkDisplayed, setRecipeBookmarkDisplayed] = useState([]);
  useEffect(() => {
    setRecipeBookmarkDisplayed(bookmarkRecieved);
    console.log(bookmarkRecieved, "bookmarkdata");
  }, [bookmarkRecieved]);
  useEffect(() => {
    console.log(recipeBookmarkDisplayed, "recbookmarkdata");
  }, [recipeBookmarkDisplayed]);
  const onInputHandler = (e) => {
    const searchKey = document.getElementById("searched_keyword").value;
    if (!searchKey) return;
    props.onSearchVal(searchKey);
  };
  return (
    <div className="header">
      <img src={logo} className="header__logo" alt="forkify logo" />
      <form className="searchbar" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="search__field"
          placeholder="Search over 1,000,000 recipe"
          id="searched_keyword"
        ></input>
        <button className="search_btn" type="submit" onClick={onInputHandler}>
          <img src={search_logo} className="search_logo" alt="Search logo" />
          <span>Search</span>
        </button>
      </form>
      <div className="utility">
        <div className="add_recipe">
          <img src={note} className="add_recipe_logo" alt="Add Recipe logo" />
          <span>ADD RECIPE</span>
          <div className="add_recipe_hover">
            <div className="no_addrecipe">
              <img src={warning} className="no_bookmark_logo" />
              <p>This feature is coming soon.....</p>
            </div>
          </div>
        </div>
        <div className="bookmarks">
          <img src={bookmark} className="bookmarks_logo" alt="Bookmark logo" />
          <span>BOOKMARKS</span>
          <div className="bookmark_list">
            {!recipeBookmarkDisplayed.length && (
              <div className="no_bookmark">
                <img src={warning} className="no_bookmark_logo" />
                <p>No Bookmarks yet, Start by bookmarking a Recipe</p>
              </div>
            )}
            <ul className="recipe_list">
              {recipeBookmarkDisplayed &&
                recipeBookmarkDisplayed?.map((el, index) => {
                  return (
                    <li className="recipe" key={index}>
                      <a className="recipe_link" href={`${"#"}${el.id}`}>
                        <div className="recipe_img_wrap">
                          <img src={el.image} className="list_image" />
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

// {
//   id: "5ed6604591c37cdc054bcb37",
//   ingredients: [
//     {
//       quantity: null,
//       unit: "",
//       description: "Pizza dough",
//     },
//     {
//       quantity: null,
//       unit: "",
//       description: "Olive oil",
//     },
//     {
//       quantity: null,
//       unit: "",
//       description:
//         "Standard toppings of tomato sauce herbs cheese and maybe some thinly sliced onions tomatoes mushrooms or pepperoni",
//     },
//     {
//       quantity: null,
//       unit: "",
//       description:
//         "Some flour or corn meal for dusting the cookie sheet or pizza peel",
//     },
//   ],
//   image:
//     "http://forkify-api.herokuapp.com/images/howtogrillpizzad300x20086a60e1b.jpg",
//   publisher: "Simply Recipes",
//   title: "How to Grill Pizza",
//   source: "http://www.simplyrecipes.com/recipes/how_to_grill_pizza/",
//   servings: 4,
//   cooking_time: 30,
//   is_bookmarked: false,
// },
// {
//   id: "5ed6604591c37cdc054bcb37",
//   ingredients: [
//     {
//       quantity: null,
//       unit: "",
//       description: "Pizza dough",
//     },
//     {
//       quantity: null,
//       unit: "",
//       description: "Olive oil",
//     },
//     {
//       quantity: null,
//       unit: "",
//       description:
//         "Standard toppings of tomato sauce herbs cheese and maybe some thinly sliced onions tomatoes mushrooms or pepperoni",
//     },
//     {
//       quantity: null,
//       unit: "",
//       description:
//         "Some flour or corn meal for dusting the cookie sheet or pizza peel",
//     },
//   ],
//   image:
//     "http://forkify-api.herokuapp.com/images/howtogrillpizzad300x20086a60e1b.jpg",
//   publisher: "Simply Recipes",
//   title: "How to Grill Pizza",
//   source: "http://www.simplyrecipes.com/recipes/how_to_grill_pizza/",
//   servings: 4,
//   cooking_time: 30,
//   is_bookmarked: false,
// },
// {
//   id: "5ed6604591c37cdc054bcb37",
//   ingredients: [
//     {
//       quantity: null,
//       unit: "",
//       description: "Pizza dough",
//     },
//     {
//       quantity: null,
//       unit: "",
//       description: "Olive oil",
//     },
//     {
//       quantity: null,
//       unit: "",
//       description:
//         "Standard toppings of tomato sauce herbs cheese and maybe some thinly sliced onions tomatoes mushrooms or pepperoni",
//     },
//     {
//       quantity: null,
//       unit: "",
//       description:
//         "Some flour or corn meal for dusting the cookie sheet or pizza peel",
//     },
//   ],
//   image:
//     "http://forkify-api.herokuapp.com/images/howtogrillpizzad300x20086a60e1b.jpg",
//   publisher: "Simply Recipes",
//   title: "How to Grill Pizza",
//   source: "http://www.simplyrecipes.com/recipes/how_to_grill_pizza/",
//   servings: 4,
//   cooking_time: 30,
//   is_bookmarked: false,
// },
