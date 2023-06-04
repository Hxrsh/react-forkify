import "./Navbar.css";
import logo from "../img/logo.png";
import search_logo from "../img/mag-glass.svg";
import bookmark from "../img/bookmark.svg";
import note from "../img/note.svg";
import React, { useState, useEffect } from "react";

const Navbar = (props) => {
  console.log("rendered Navbar");
  const [inputSearchValue, setInputSearchValue] = useState("");
  const onSubmitFormHAndler = (e) => {
    e.preventDefault();
  };
  const onInputHandler = (e) => {
    const searchKey = document.getElementById("searched_keyword").value;
    if (!searchKey) return;
    setInputSearchValue(searchKey);
    document.getElementById("searched_keyword").value = "";
  };
  useEffect(() => {
    props.onSearchVal(inputSearchValue);
  }, [inputSearchValue]);
  return (
    <div className="header">
      <img src={logo} className="header__logo" alt="forkify logo" />
      <form className="searchbar" onSubmit={onSubmitFormHAndler}>
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
        </div>
        <div className="bookmarks">
          <img src={bookmark} className="bookmarks_logo" alt="Bookmark logo" />
          <span>BOOKMARKS</span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
