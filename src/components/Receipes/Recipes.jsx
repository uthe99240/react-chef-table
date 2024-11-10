import { useEffect, useState } from 'react';
import Receipe from '../Recipe/Recipe';
import WantToCook from '../WantToCook/WantToCook';
import Cook from '../Cook/Cook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToLS, getStoredCart, removeToLS } from '../../utilities/localstorage';


const Receipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [wantcook, setWantcook] = useState([]);
    const [preparecook, setPreparecook] = useState([]);
    const [totaltime, setTotaltime] = useState(0);
    const [totalcalorie, setTotalcalorie] = useState(0);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, [])

    useEffect(() => {
        const storedcart = getStoredCart();
        setWantcook(storedcart);
    }, [])

    const wantToCook = item => {
        const existItem = wantcook.find(witem => witem.recipe_id === item.recipe_id);
        if (existItem) {
            toast("Item is already added!");
        } else {
            addToLS(item);
            const cookItem = [...wantcook, item];
            setWantcook(cookItem);
            toast("Item added to the list!");
        }
    }

    const handleprepareCook = item => {
        const prepareItem = [...preparecook, item];
        setPreparecook(prepareItem);
        const remainItem = wantcook.filter(witem => witem.recipe_id !== item.recipe_id);
        removeToLS(item);
        setWantcook(remainItem);
        handleTotal(item);
    }

    const handleTotal = (item) => {
        const updateTimes = totaltime + item.preparing_time;
        setTotaltime(updateTimes);
        const updateCalories = totalcalorie + item.calories;
        setTotalcalorie(updateCalories);
    }

    return (
        <div className='my-5 '>
            <h2 className='text-3xl font-bold text-center'>Our Receipes</h2>
            <p className='max-w-3xl mx-auto my-3 text-center'>Recipes are step-by-step guides to creating delicious dishes, blending ingredients and techniques to bring flavors to life. They’re the perfect way to explore new cuisines and recreate beloved meals at home.</p>
            <div className='flex'>
                <div className='w-2/3'>
                    <div className='grid grid-cols-2 gap-6'>
                        {
                            recipes.map(recipe => <Receipe key={recipe.recipe_id} recipe={recipe} wantToCook={wantToCook}></Receipe>)
                        }
                    </div>
                </div>
                <div className='w-1/3 ms-6'>
                    <div className='border-2 border-gray-300 rounded-lg p-5'>
                        <WantToCook wantcook={wantcook} handleprepareCook={handleprepareCook}></WantToCook>
                        <Cook preparecook={preparecook} totaltime={totaltime} totalcalorie={totalcalorie}></Cook>
                    </div>
                </div>
                <ToastContainer />
            </div>

        </div>
    );
};

export default Receipes;