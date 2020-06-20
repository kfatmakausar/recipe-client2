import React from "react";

const AllRecipesView = (props) => {
  const { handleLogout } = props;
  return (
    <div>
      <h1>
        <button onClick={handleLogout}>Logout</button>
      </h1>
      {props.recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <ul>
            <li>ReadyInMinutes: {recipe.readyInMinutes}</li>
            <li>Servings: {recipe.servings}</li>
            <li>Recipe Link: {recipe.sourceURL}</li>
            <li>img src={recipe.image}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AllRecipesView;
