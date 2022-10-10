/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const Task = (props) => {
    const {name,img,age,time,text}= props.task;
    return (
        <div className="w-full  rounded-lg shadow-md lg:max-w-sm p-2 bg-white ">
        <img
            className=" object-cover w-full  h-30 rounded-lg"
            src={img}
            alt="image"
        />
        <div className="p-4">
            <h4 className="text-xl font-semibold tracking-tight text-blue-600 mb-2">
                {name}
            </h4>
            <p className="mb-2 text-gray-500">
               {text}
            </p>
            <h5 className='py-1'>For Age : <span className='font-semibold'>{age}</span></h5>
            <h5 className='py-1 mb-4' >Time Required : <span className='font-semibold'>{time}s</span></h5>

            <button onClick={()=> props.handleAddToDetails(props.task)} className="w-full px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                Add to list
            </button>
        </div>
    </div>
);
    }

export default Task;