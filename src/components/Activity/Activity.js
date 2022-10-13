import React, { useEffect, useState } from 'react';
import './Activity.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Task from '../Task/Task';
import Details from '../Details/Details';


const Activity = () => {
    const [tasks,setTasks]= useState([]);
    console.log(tasks)
    // this state is to set time 
    const [time,setTime]= useState(0);



    // this state is to send the whole card as props in details 
    const [product,setProduct]= useState([]);
    

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setTasks(data))
    },[])

    const handleAddToDetails =(task) =>{
        
        const newTime = time + task.time;
        setTime(newTime);

        const newProduct = task;
        setProduct(newProduct);
        
        
        
        
    }
    return (
        <div className='container mx-auto  grid grid-cols-8  '>
            <div className='col-span-full lg:col-span-6 lg:px-20 px-5 mt-20 '>

                <h1 className=' text-5xl font-bold text-indigo-500 '><FontAwesomeIcon icon={faDumbbell} /> ULTRA-ACTIVE-CLUB</h1>

                <div>
                        <h3 className='my-10 text-2xl font-semibold'>Select Today's exercise</h3>
                       <div className='grid sm:grid-cols-1
                       md:grid-cols-2 lg:grid-cols-3  gap-3'>
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

            <div className='bg-gray-100 col-span-8 lg:col-span-2 p-4 lg:mt-0 md:mt-10 mt-5 '>
                
                <Details
                    time ={time}
                    product={product}
                ></Details>
             
            </div>

        </div>
        
    );
};

export default Activity;