import React, { useEffect, useState } from 'react';
import './Activity.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Task from '../Task/Task';
import Details from '../Details/Details';


const Activity = () => {
    const [tasks,setTasks]= useState([]);
    const [time,setTime]= useState(0);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setTasks(data))
    },[])

    const handleAddToDetails =(task) =>{
        console.log(task);
        const newTime = time + task.time;
        setTime(newTime);
        console.log(newTime)
    }
    return (
        <div className='container mx-auto  grid grid-cols-8 gap-5 '>
            <div className='col-span-6 px-20 mt-20 '>

                <h1 className=' text-3xl font-bold text-indigo-500 '><FontAwesomeIcon icon={faDumbbell} /> ULTRA-ACTIVE-CLUB</h1>

                <div>
                        <h3 className='my-10 text-2xl font-semibold'>Select Today's exercise</h3>
                       <div className='grid grid-cols-3 gap-3'>
                            {
                                    tasks.map(task=><Task
                                        key={task.id}
                                        task={task}
                                        handleAddToDetails={handleAddToDetails}
                                    ></Task>)
                                }
                       </div>

                </div>

            </div>

            <div className='bg-gray-100 col-span-2 p-4 '>
                
                <Details
                    time ={time}
                ></Details>
             
            </div>

        </div>
        
    );
};

export default Activity;