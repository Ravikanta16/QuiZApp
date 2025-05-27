import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
    return (
        <div>
            {/* <div className='bg-cover bg-center bg-gray-100 h-screen w-full pt-3 flex justify-between flex-col'> */}
            <div className='bg-cover bg-center bg-[url(https://imgs.search.brave.com/QhhZQgMRZxUgeW4_d3GoEstxMfvVRlh4sECHEXNqg5U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20veVF5aHZj/TnFVLXdqN0RFaHZZ/ZVRzX09jM3pHNUw3/ZjllTFZ2U2dnUmp3/US9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/TG5CcC9ibWx0Wnk1/amIyMHZiM0pwL1oy/bHVZV3h6THpNeEx6/YzMvTHpsa0x6TXhO/emM1WkRObS9OelU1/WkRZNFpHRmlaVFV5/L1ptVTNNemM1TURr/NU1ESm0vTG1wd1p3)] h-screen w-full pt-3 flex justify-between flex-col'>
            
            <div className="flex flex-col justify-center items-center h-screen">
                <h2 className="text-4xl font-bold text-black">
                    Welcome to QuizApp!
                </h2>
                <p className="text-2xl text-gray-900 mt-1">Sharpen your mind and test your knowledge with our fun and challenging quizzes.</p>
                <Link to='/signup' className='bg-gray-600 rounded-lg p-1 text-2xl text-white mt-4 py-3'>Let's Start</Link>
            </div>
                
            </div>
        </div>
    );
};

export default Start;