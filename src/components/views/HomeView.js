import React from "react";
import "./styles/HomeView.css";

const HomeView = (props) => {
  return (
    <home>
      <div className="home">
        <h1>Welcome to InstaRecipe!</h1>
        <h4>An online recipe planner!</h4>
        <h4>Navigate through recipes</h4>
        <h4>Try recipes!</h4>
        <h4>Write a review!</h4>
        <br></br>
        <h4>
          Stream through user profiles to get insight on what recipes they tried
          and their reviews!
        </h4>
        <h4>Guaranteed will change your cooking life for the better!</h4>
      </div>
    </home>
  );
};

export default HomeView;
