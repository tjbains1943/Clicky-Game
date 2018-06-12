import React from "react";
import "./card.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    </div>
);

export default FriendCard;
