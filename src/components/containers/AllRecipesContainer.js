import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllRecipesThunk } from "../../thunks";
import { AllRecipesView } from "../views";

//THE ALLRECIPES IS BASICALLY THE SEARCHBAR, SEARCH FOR RECIPES USING SEARCH TERM

class AllRecipesContainer extends Component {
  componentDidMount() {
    this.props.fetchAllRecipes();
  }
  render() {
    console.log(this.props.allRecipes);
    return <AllRecipesView recipes={this.props.allRecipes} />;
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
