import React, { useState } from 'react'
import logo from '../assets/logo.png'

const Container = 'bg-slate-200 w-72 h-12 flex justify-center items-center rounded-md';
const InputContainer = 'h-8 w-64 outline-none p-2 bg-transparent';

const Login = ({ setAccount }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const profile = {
            email,
            password
        }
        setUser(profile);
        setEmail('');
        setPassword('');

        // setAccount(user);
    }

    return (
        <form className='flex items-center justify-evenly h-screen flex-col bg-[#969557]' onSubmit={handleFormSubmit}>
            <img src={logo}/>
            <div className='h-[460px] w-[400px] bg-white rounded-xl flex items-center justify-evenly flex-col p-6'>
                <div>
                    <h1 className='text-3xl mb-2'>Username</h1>
                    <div className={Container}>
                        <input type="text" placeholder="Enter Username" className={InputContainer} onChange={handleEmailChange} value={email}/>
                    </div>
                </div>

                <div>
                    <h1 className='text-3xl mb-2'>Password</h1>
                    <div className={Container}>
                        <input type="password" placeholder='Enter your Password' className={InputContainer} onChange={handlePasswordChange} value={password}/>
                    </div>
                </div>
                <button className='bg-slate-400 w-24 h-10 rounded-md'>Login</button>
            </div>
        </form>
    )
}

export default Login
