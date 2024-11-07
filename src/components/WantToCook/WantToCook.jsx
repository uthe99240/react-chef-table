import React from 'react';

const WantToCook = () => {
    return (
        <div>
            <h6 className='text-xl text-center font-bold'>Want to cook : </h6>
            <hr className='my-3 mx-12' />
            <table className='text-gray-500 text-xs w-full text-center border-separate border-spacing-y-4'>
                <thead>
                    <tr>
                        <th className='px-4'>#</th>
                        <th className='px-4'>Name</th>
                        <th className='px-4'>Time</th>
                        <th className='px-4'>Calories</th>
                        <th className='px-4'></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='px-4'>1</td>
                        <td className='px-4'>Chicken Caesar</td>
                        <td className='px-4'>20 minutes</td>
                        <td className='px-4'>400 calories</td>
                        <td><button className='py-2 px-6 text-black font-bold rounded-full bg-green-400'>Preparing</button></td>
                    </tr>
                    <tr>
                        <td className='px-4'>2</td>
                        <td className='px-4'>Chicken Caesar</td>
                        <td className='px-4'>20 minutes</td>
                        <td className='px-4'>400 calories</td>
                        <td><button className='py-2 px-6 text-black font-bold rounded-full bg-green-400'>Preparing</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default WantToCook;
