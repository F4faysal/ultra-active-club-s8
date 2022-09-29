import React, { useState , toast } from "react";
import "./Profile.css";
import img from "../../img/faysal-pro-img.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin} from '@fortawesome/free-solid-svg-icons'

const Profile = ({timeAdd}) => {

    const [seconds , setSeconds] = useState([])
    const onClickDiv = (time) =>{
        setSeconds(time)
    }

    const notify = () => toast("Fetching the Model Do not Close", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 60000});

  return (
    <div className="profile-continer">
      <PeofileInfo></PeofileInfo>
      <PeofileAwaite></PeofileAwaite>
      <AddABreak onClickHandel = {onClickDiv}></AddABreak>
      <h4>Exercise Details</h4>
      <ExerciseDetails times = {timeAdd}></ExerciseDetails>
      <BreakTime seconds={seconds} ></BreakTime>
      <button onClick={notify} className="batton">Activity Completed</button>
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
          <small><FontAwesomeIcon icon={faLocationPin} /> Ishwardi , Pabna</small>
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

const AddABreak = ({onClickHandel}) => {

  return (
    <div>
      <h4>Add A Break</h4>
      <div className="profile-info">
        <button onClick={() => onClickHandel('10')} className="time">
          <small>10s</small>
        </button>
        <button onClick={() => onClickHandel('20')} className="time">
        <small>20s</small>
        </button>
        <button onClick={() => onClickHandel('30')} className="time">
        <small>30s</small>
        </button>
        <button onClick={() => onClickHandel('40')}className="time">
        <small>40s</small>
        </button>
        <button onClick={() => onClickHandel('50')}className="time">
        <small>50s</small>
        </button>
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
const BreakTime = ({seconds}) => {
    let a = '1st'
    const b = {};
    b[a] = seconds
    localStorage.setItem('Total' , JSON.stringify(b))

    return (
      <div className="exercise-time">
        <small>Break Time</small>
        <div>
            <small>{seconds} seconds</small>
        </div>
      </div>
    );
  };
export default Profile;
