import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Details = (props) => {
    
    const {time,product}= props
    const {text,age,id}=props.product

    const [number,setNumber]= useState(0);

    const handleBreak=(value) =>{
            
           console.log('clicked')
           setNumber(value);
    }
    const diffToast = ()=>{
        toast("Wow so easy!")
    }

    return (

    <div className='px-1 sticky top-0'>
        <div className="flex items-center justify-around space-x-4 ">
        <img className="w-20 h-20 rounded-full" src="https://img.freepik.com/premium-vector/person-avatar-design_24877-38137.jpg?w=2000" alt=""/>
            <div className="font-medium dark:text-green-400">
                <div className='text-2xl'>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
            </div>
        </div>
        <div className="flex justify-around  my-7 bg-slate-200 rounded-lg py-5">
            <div >
                <span className='text-3xl font-bold'>75</span><small>kg</small>
                <p>Weight</p>
            </div>
            <div>
                <span className='text-3xl font-bold'>6.5</span>
                <p>Height</p>
            </div>
            <div>
            <span className='text-3xl font-bold'>32</span><small>yrs</small>
                <p>Age</p>
            </div>
        </div>
        <h2 className='text-2xl font-semibold'>Add A Brake</h2>
        <div className="flex justify-around  my-7 bg-slate-200 rounded-lg py-5 text-lg font-semibold ">
            <button onClick={()=>handleBreak(10)} className='bg-white rounded-full p-4'>10s</button>
            <button onClick={()=>handleBreak(20)} className='bg-white rounded-full p-4'><span>20</span>s</button>
            <button onClick={()=>handleBreak(30)} className='bg-white rounded-full p-4'><span>30</span>s</button>
            <button onClick={()=>handleBreak(40)} className='bg-white rounded-full p-4'><span>40</span>s</button>
            
        </div>
        <h2 className='text-2xl font-semibold'>Exercise Details</h2>
        <div className="flex justify-between  my-7 bg-slate-200 rounded-lg p-5 text-lg font-semibold ">

    
                <span className='text-lg font-bold'>Exercise time </span>
                <p className='text-gray-400'><span>{time}</span> seconds</p>
            
        </div>
        <div className="flex justify-between  my-7 bg-slate-200 rounded-lg p-5 text-lg font-semibold ">

    
                <span className='text-lg font-bold'>Break time </span>
                <p className='text-gray-400'><span>{number}</span> seconds</p>
            
        </div>
        <button onClick={diffToast} className="w-full px-4 py-5 text-2xl text-blue-100 bg-blue-500 rounded shadow">
                Activity Completed
            </button>
            

<ToastContainer />
    </div>
    

    );
};

export default Details;