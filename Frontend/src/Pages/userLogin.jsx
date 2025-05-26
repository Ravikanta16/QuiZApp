import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const {userData,setUserData}=useContext(UserDataContext)
    const navigate=useNavigate()

    const submitHandler= async (e)=>{
        e.preventDefault();

        const UserDetails = {
            username:userName,
            password:password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`,UserDetails);
        if(response.status === 201){
            const data=response.data;
            setUserData(data.user)  
            localStorage.setItem('token',data.token)
            if(data.user.role==='user'){
                navigate('/')
            }
            else{
                navigate('/admin')
            }
        }

        console.log(UserDetails);

        setUserName('')
        setPassword('')
        // navigate('/')
    }
    return (
        <div className='p-7 h-screen w-full flex items-center justify-center flex-col'>
        <div className=" bg-gray-100 border border-gray-200 rounded-lg p-10 w-11/12 max-w-2xl">
            <form onSubmit={(e)=>{
                submitHandler(e)}
            }>
                <h1 className="text-xl font-bold mb-4 text-blue-400 flex items-center justify-center">Sign In Form</h1>
                <h1 className='text-xl font-medium mb-2'>What's your Name?</h1>
                <input 
                    className='bg-slate-100 border-slate-200 border rounded w-full mb-7 px-2 py-2' 
                    value={userName}
                    onChange={(e)=>{
                        setUserName(e.target.value)}
                    }
                    required type='text' 
                    placeholder='name'
                
                />
                <h1 className='text-xl font-medium mb-2'>Enter Password</h1>
                <input 
                    className='bg-slate-100 border-slate-200 border rounded w-full mb-7 px-2 py-2' 
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)}
                    }
                    required type='password' 
                    placeholder='password'
                />
                <button className='w-full rounded bg-gray-700 text-white font-bold px-2 py-2'>Login</button>
            </form> 
            <p className='justify-center mt-2 '>New here ? <Link to='/signup' className='text-blue-400'>Create New Account</Link></p>

        </div>
        </div>
    );
};

export default UserLogin;