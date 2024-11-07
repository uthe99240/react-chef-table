import PropTypes from "prop-types";

const Cook = ({ preparecook,totalcalorie,totaltime }) => {

    return (
        <div className='mt-5'>
            <h6 className='text-xl text-center font-bold'>Currently cooking : {preparecook.length} </h6>
            <hr className='my-3 mx-12' />
            <table className='text-gray-500 text-xs w-full text-center'>
                <thead>
                    <tr className="border-collapse border-b-2 border-gray-300">
                        <th className='p-2'>#</th>
                        <th className='p-2'>Name</th>
                        <th className='p-2'>Time</th>
                        <th className='p-2'>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        preparecook.map((item, index) => (
                            <tr key={item.recipe_id} className="border-collapse border-b-2 border-gray-300">
                                <td className='p-2'>{index + 1}</td>
                                <td className='p-2'>{item.recipe_name}</td>
                                <td className='p-2'>{item.preparing_time} minutes</td>
                                <td className='p-2'>{item.calories} calories</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='flex flex-col items-end text-xs text-gray-800 mt-3'>
                <p>Total Time = {totaltime} minutes</p>
                <p>Total Calories = {totalcalorie} calories</p>
            </div>
        </div>
    );
};

Cook.propTypes = {
    preparecook: PropTypes.array.isRequired,
    totaltime: PropTypes.number.isRequired,
    totalcalorie: PropTypes.number.isRequired,
};

export default Cook;