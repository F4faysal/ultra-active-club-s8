import React, { useEffect, useState } from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import Profile from "../Profile/Profile";
import "./MyActivity.css";
const MyActivity = () => {
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    fetch("fackData.json")
      .then((res) => res.json())
      .then((data) => setActivity(data));
  }, []);

  const [timeAdd, setTimeAdd] = useState([]);

  const handelar = (selectedCours) => {
    const newSelecte = [...timeAdd, selectedCours];
    setTimeAdd(newSelecte);
  };

  return (
    <div className="shop-continer">
      <div className="prodacts-continer">
        {activity.map((a) => (
          <ActivityCard
            acitiList={a}
            key={a.id}
            handelar={handelar}
          ></ActivityCard>
        ))}

        <div className="qusctin">
          <p>
            <strong>1. How does react work</strong>
          </p>
          <p>
            React uses a declarative paradigm that makes it easier to reason
            about your application and aims to be both efficient and flexible.
            It designs simple views for each state in your application, and
            React will efficiently update and render just the right component
            when your data changes.
          </p>
        </div>
        <div className="qusctin">
          <p>
            <strong>2. Props and state difference in react</strong>
          </p>
          <p>
            Props are used to pass data from one component to another. The state
            is a local data storage that is local to the component only and
            cannot be passed to other components.
          </p>
          </div>
          <div className="qusctin">
            {" "}
            <p>
              <strong>3. how useeffect works in react</strong>
            </p>
            <p>
              What does useEffect do? By using this Hook, you tell React that
              your component needs to do something after render. React will
              remember the function you passed (we'll refer to it as our
              “effect”), and call it later after performing the DOM updates.
            </p>
          </div>
      </div>

      <div className="peofile-continer">
        <Profile timeAdd={timeAdd}></Profile>
      </div>
    </div>
  );
};

export default MyActivity;
