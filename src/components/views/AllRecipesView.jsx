import React from "react";

const AllRecipesView = (props) => {
  const { handleLogout } = props;
  return (
    <div className="all-recipes">
      <h1>
        <button onClick={handleLogout}>Logout</button>
      </h1>
      {props.recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <ul>
            <li>ReadyInMinutes: {recipe.readyInMinutes}</li>
            <li>Servings: {recipe.servings}</li>
            <li>
              <a>Recipe Link: {recipe.sourceUrl}</a>
            </li>
            <li>
              img src={recipe.image}
              {/* style=
              {{
                width: "300px",
                height: "300px",
                objectFit: "fit",
                display: "block",
                boxShadow: "0 10px 10px rgba(0,0,0,.7)",
                padding: "5px",
              }} */}
            </li>
          </ul>
          <br></br>
          <button>Add</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AllRecipesView;
