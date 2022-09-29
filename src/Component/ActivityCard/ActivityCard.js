import React from "react";
import "./ActivityCard.css";

const ActivityCard = (props) => {
    const {name , img ,age , time , info} = props.acitiList
    console.log(props)
  return (
    <div className="prodact-continer">
      <img src={img} alt=""></img>
      <div className="prodact-mane">
        <h6>{name}</h6>
        <p>{info}</p>
        <p>Time required : <strong>{time}s</strong> </p>
      </div>
      <div className="prodact-info">
        <p>For Age : <strong>{age} </strong></p>
      </div>
      <div>
        <button  className="prodact-btn"> Add to List </button>
      </div>
    </div>
  );
};

export default ActivityCard;
