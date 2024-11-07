import React from 'react';
import PropTypes from 'prop-types';
import { FaRegClock } from "react-icons/fa";
import { FaFire } from "react-icons/fa";

const Receipe = ({ recipe }) => {
    const { recipe_name, recipe_image, short_description, ingredients,preparing_time,calories } = recipe;
    return (
        <div className='border-2 border-gray-300 rounded-lg p-5'>
            <img className='object-cover h-52 w-full rounded-lg' src={recipe_image} alt="" />
            <h4 className='my-4 text-xl font-bold '>{recipe_name}</h4>
            <p className='h-12 text-gray-500'>{short_description}</p>
            <hr className='my-3' />
            <h4 className='font-bold'>Ingredients : {ingredients.length}</h4>
            <ul className='list-disc text-gray-500 ms-5'>
                {
                    ingredients.map((ingredient,index) => <li key={index}>{ingredient}</li>)
                }
            </ul>

            <hr className='my-3' />
            <div className='flex justify-between'>
                <span className='flex items-center'> <FaRegClock></FaRegClock> <p className='ms-2'>{preparing_time} minutes</p></span>
                <span className='flex items-center'> <FaFire></FaFire> <p className='ms-2'>{calories} calories</p></span>
            </div>
           
            <button className='mt-3 py-2 px-5 text-black font-bold rounded-full me-4 bg-green-400'>Want to Cook</button>

        </div>
    );
};

Receipe.propTypes = {
    recipe: PropTypes.object.isRequired
};

export default Receipe;