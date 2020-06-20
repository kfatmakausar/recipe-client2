import React from "react";

const AllReviewsView = (props) => {
  const { handleLogout } = props;
  return (
    <div>
      <h1>
        <button onClick={handleLogout}>Logout</button>
      </h1>
      {props.allReviews.map((review) => (
        <div key={review.id}>{review.description}</div>
      ))}
    </div>
  );
};

export default AllReviewsView;
