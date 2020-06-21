import React from "react";

const AuthFormView = (props) => {
  const {
    name,
    displayName,
    handleSubmit,
    error,
    handleChange,
    isLoggedIn,
    userEmail,
  } = props;

  // display login form when user click on login
  const displayLogin = (
    <div className="auth-form-view">
      {isLoggedIn ? `The current logged in user is: ${userEmail}` : ""}
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" onChange={handleChange} />
        </div>
        <br></br>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );

  // Display sign up form when user click on sign up bottom
  const displaySignUp = (
    <div className="auth-form-view">
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="firstName">
            <small>First Name</small>
          </label>
          <input name="firstName" type="text" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lastName">
            <small>Last Name</small>
          </label>
          <input name="lastName" type="text" onChange={handleChange} />
        </div>
        <br></br>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );

  const displayLogout = (
    <div>
      <h2>Log out?</h2>
      <button type="submit" onClick={handleSubmit} name={name}>
        {displayName}
      </button>
    </div>
  );

  // if user is signed display login form, display sign up form otherwise
  if (name === "login") return <>{displayLogin}</>;
  else if (name === "signup") return <>{displaySignUp}</>;
  else return <>{displayLogout}</>;
};

export default AuthFormView;
