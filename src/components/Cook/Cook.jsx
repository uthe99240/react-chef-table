
const Cook = () => {
    return (
        <div className='mt-5'>
            <h6 className='text-xl text-center font-bold'>Currently cooking : </h6>
            <hr className='my-3 mx-12' />
            <table className='text-gray-500 text-xs w-full text-center border-separate border-spacing-y-4'>
                <thead>
                    <tr>
                        <th className='px-4'>#</th>
                        <th className='px-4'>Name</th>
                        <th className='px-4'>Time</th>
                        <th className='px-4'>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='px-4'>1</td>
                        <td className='px-4'>Chicken Caesar</td>
                        <td className='px-4'>20 minutes</td>
                        <td className='px-4'>400 calories</td>
                    </tr>
                    <tr>
                        <td className='px-4'>2</td>
                        <td className='px-4'>Chicken Caesar</td>
                        <td className='px-4'>20 minutes</td>
                        <td className='px-4'>400 calories</td>
                    </tr>
                </tbody>
            </table>
            <div className='flex justify-end text-xs text-gray-800'>
                <p className='me-3'>Total Time = 45 minutes</p>
                <p>Total Calories = 1050 calories</p>
            </div>
        </div>
    );
};

export default Cook;