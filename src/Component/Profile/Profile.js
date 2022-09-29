import React from "react";
import "./Profile.css";
import img from "../../img/faysal-pro-img.jpg";

const Profile = ({timeAdd}) => {
  return (
    <div className="profile-continer">
      <PeofileInfo></PeofileInfo>
      <PeofileAwaite></PeofileAwaite>
      <AddABreak></AddABreak>
      <h4>Exercise Details</h4>
      <ExerciseDetails times = {timeAdd}></ExerciseDetails>
      <BreakTime></BreakTime>
      <button className="batton">Activity Completed</button>
    </div>
  );
};
const PeofileInfo = () => {
  return (
    <div className="profile-info">
      <img src={img} alt=""></img>
      <div className="name-location">
        <h3>Faysal Hossain</h3>
        <p>
          <small>Ishwardi , Pabna</small>
        </p>
      </div>
    </div>
  );
};

const PeofileAwaite = () => {
  return (
    <div>
      <div className="profile-info">
        <div>
          <h3>
            75<small>kg</small>
          </h3>
          <small>Weight</small>
        </div>
        <div>
          <h3>6.5</h3>
          <small>Height</small>
        </div>
        <div>
          <h3>
            24
            <small>yrs</small>
          </h3>
          <small>Age</small>
        </div>
      </div>
    </div>
  );
};

const AddABreak = () => {
  return (
    <div>
      <h4>Add A Break</h4>
      <div className="profile-info">
        <div className="time">
          <small>10s</small>
        </div>
        <div className="time">
        <small>20s</small>
        </div>
        <div className="time">
        <small>30s</small>
        </div>
        <div className="time">
        <small>40s</small>
        </div>
        <div className="time">
        <small>50s</small>
        </div>
      </div>
    </div>
  );
};

const ExerciseDetails = ({times}) => {
    let totalTime =0;
    for (const time of times){
        totalTime = totalTime +  +time.time ;
      }
    return (
      <div className="exercise-time">
        <small>Exercise Details</small>
        <div> <small>{totalTime} seconds</small>   </div>
      </div>
    );
  };
const BreakTime = () => {
    return (
      <div className="exercise-time">
        <small>Break Time</small>
        <div>
        </div>
      </div>
    );
  };
export default Profile;
