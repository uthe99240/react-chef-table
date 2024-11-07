import { useEffect, useState } from 'react';
import Receipe from '../Recipe/Recipe';
import WantToCook from '../WantToCook/WantToCook';
import Cook from '../Cook/Cook';


const Receipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, [])

    return (
        <div className='my-5 '>
            <h2 className='text-3xl font-bold text-center'>Our Receipes</h2>
            <p className='max-w-3xl mx-auto my-3 text-center'>Recipes are step-by-step guides to creating delicious dishes, blending ingredients and techniques to bring flavors to life. They’re the perfect way to explore new cuisines and recreate beloved meals at home.</p>
            <div className='flex'>
                <div className='w-2/3'>
                    <div className='grid grid-cols-2 gap-6'>
                        {
                            recipes.map(recipe => <Receipe key={recipe.recipe_id} recipe={recipe}></Receipe>)
                        }
                    </div>
                </div>
                <div className='w-1/3 ms-6'>
                    <div className='border-2 border-gray-300 rounded-lg p-5'>
                        <WantToCook></WantToCook>
                        <Cook></Cook>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Receipes;