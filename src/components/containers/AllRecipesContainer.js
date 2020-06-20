import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllRecipesThunk } from "../../thunks";

//THE ALLRECIPES IS BASICALLY THE SEARCHBAR, SEARCH FOR RECIPES USING SEARCH TERM

class AllRecipesContainer extends Component {
  componentDidMount() {
    this.props.fetchAllRecipes();
  }
  render() {
    console.log(this.props.allRecipes);
    return <h1>AllRecipesContainer</h1>;
  }
}

const mapState = (state) => {
  return {
    allRecipes: state.allRecipes,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchAllRecipes: () => dispatch(fetchAllRecipesThunk()),
  };
};

export default connect(mapState, mapDispatch)(AllRecipesContainer);
