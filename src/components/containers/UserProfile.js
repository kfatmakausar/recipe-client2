import React, { Component } from "react";
import { me } from "../../thunks";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      lastName: "",
      firstName: "",
    };
  }
  componentDidMount() {
    this.props.me();
    console.log(this.props.firstName);
  }

  render() {
    return (
      <div className="profile-page-view">
        <h2>
          Name: {this.props.firstName} {this.props.lastName}
        </h2>
      </div>
    );
  }
}

UserProfile.propTypes = {};

const mapUser = (state) => {
  return {
    name: "user",
    displayName: "User",
    error: state.user.error,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    isLoggedIn: !!state.user.id,
  };
};

// Map login dispatch to props;
const mapDispatchUser = (dispatch) => {
  return {
    me: () => dispatch(me()),
  };
};

export default connect(mapUser, mapDispatchUser)(UserProfile);
