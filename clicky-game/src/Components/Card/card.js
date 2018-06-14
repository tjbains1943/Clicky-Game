import React from "react";
import "./card.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container" onClick={() => props.randomize()}>
      <img className="valueReset" value="1" alt={props.name} id={props.id} src={props.image} clicks={props.count} onClick={(e) => props.clicks(e)} />
    </div>
    </div>
);

export default FriendCard;
