import React, { useEffect, useState } from 'react';
import ActivityCard from '../ActivityCard/ActivityCard';
import Profile from '../Profile/Profile';
import './MyActivity.css'
const MyActivity = () => {   
    
    const [activity , setActivity] = useState([]);
    useEffect(() => {
        fetch('fackData.json')
        .then(res => res.json())
        .then(data => setActivity(data))
    },[])

    const [timeAdd , setTimeAdd] = useState([])
   
    const handelar = (selectedCours) => {
      const newSelecte = [...timeAdd ,selectedCours ]
      setTimeAdd(newSelecte);
    }
    
    return (
        <div className='shop-continer'>
            <div className='prodacts-continer'>
               {
                activity.map(a => <ActivityCard acitiList = {a} key={a.id} handelar={handelar} ></ActivityCard>)
               }
            </div>
            <div className='peofile-continer'>
                <Profile timeAdd={timeAdd}  ></Profile>
            </div>
        </div>
    );
};

export default MyActivity;