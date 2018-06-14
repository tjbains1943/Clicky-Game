import React from "react";
import "./contain.css";

const Wrapper = props => 
<div>
{props.error === true ? <div class="alert alert-danger" role="alert">You already clicked on that. Better luck next time!</div> : ""}
{props.score === 12 ? <div class="alert alert-success" role="alert">You Won! Congratulations!</div> : ""}
<div className="wrapper">{props.children}</div>;
</div>

export default Wrapper;
