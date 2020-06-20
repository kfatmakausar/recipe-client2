import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllBookmarksThunk } from "../../thunks";

class AllBookmarksContainer extends Component {
  componentDidMount() {
    this.props.fetchAllBookmarks();
  }
  render() {
    return <h1>Hello AllBookmarksContainer</h1>;
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allBookmarks: state.allBookmarks,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllBookmarks: () => dispatch(fetchAllBookmarksThunk()),
  };
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllBookmarksContainer);
