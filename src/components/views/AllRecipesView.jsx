import React from "react";
const imageUrl = "https://spoonacular.com/recipeImages/";

const AllRecipesView = (props) => {
  const { handleLogout } = props;
  return (
    <div className="all-recipes">
      <h1>
        <button onClick={handleLogout}>Logout</button>
      </h1>
      {props.recipes.map((recipe) => (
        <div key={recipe.id}>
          <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
            {" "}
            <h3>{recipe.title}</h3>
          </a>

          <p> Time required: {recipe.readyInMinutes} </p>
          <p> Servings: {recipe.servings}</p>
          <p>
            <img src={imageUrl + recipe.image} alt="" />
          </p>
          <hr />
          <br></br>
          <button>Add</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AllRecipesView;
