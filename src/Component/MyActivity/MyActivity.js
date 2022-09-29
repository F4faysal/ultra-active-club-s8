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
    
    return (
        <div className='shop-continer'>

            <div className='prodacts-continer'>
               {
                activity.map(a => <ActivityCard acitiList = {a}></ActivityCard>)
               }
            </div>
            <div className='peofile-continer'>
                <Profile></Profile>
            </div>
        </div>
    );
};

export default MyActivity;