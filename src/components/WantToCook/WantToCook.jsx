import PropTypes from 'prop-types';

const WantToCook = ({wantcook,handleprepareCook}) => {
    return (
        <div>
            <h6 className='text-xl text-center font-bold'>Want to cook : {wantcook.length}</h6>
            <hr className='my-3 mx-12' />
            <table className='text-gray-500 text-xs w-full text-center'>
                <thead>
                    <tr className="border-collapse border-b-2 border-gray-300">
                        <th className='p-2'>#</th>
                        <th className='p-2'>Name</th>
                        <th className='p-2'>Time</th>
                        <th className='p-2'>Calories</th>
                        <th className='p-2'></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        wantcook.map((item,index) => (
                            <tr key={item.recipe_id} className="border-collapse border-b-2 border-gray-300">
                            <td className='p-2'>{index+1}</td>
                            <td className='p-2'>{item.recipe_name}</td>
                            <td className='p-2'>{item.preparing_time} minutes</td>
                            <td className='p-2'>{item.calories} calories</td>
                            <td><button className='py-2 px-6 text-black font-bold rounded-full bg-green-400' onClick={()=> {handleprepareCook(item)}}>Preparing</button></td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

WantToCook.propTypes = {
    wantcook: PropTypes.array.isRequired,
    handleprepareCook: PropTypes.func.isRequired,
};

export default WantToCook;
