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
    };
  }
  componentDidMount() {
    this.props.me();
  }

  render() {
    return (
      <div>
        <h1>email {this.props.email}</h1>
      </div>
    );
  }
}

UserProfile.propTypes = {};

const mapUser = (state) => {
  return {
    email: state.user.email,
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
