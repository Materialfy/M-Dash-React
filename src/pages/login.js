import React, { useState } from 'react'
import PropTypes from 'prop-types'
import reqres from '../dashboard/reqresApi'

async function loginUser(credentials){
    let response = await reqres.get('/login')
}


export default function Login({setToken}) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async
    return (
        <div className='grid h-screen w-screen content-center justify-center bg-gray-400'>
            <div className='login-wrapper rounded-md globalmainbg-color opacity-70'>
            <a href="#" className="block relative">
              <img
                alt="User Icon"
                src="/images/m-icon.jpg"
                className="h-10 mx-auto object-cover rounded-md w-10"
              />
            </a>
                <h1 className='my-2 text-lg text-header'>Log Into M-Dash</h1>
                <form className='w-full px-4'>
                    <label>
                        <p className='my-2 text-sub'>Username</p>
                        <input className='input-bar text-gray-400' type='text' placeholder='Email' onChange={ e => setUsername(e.target.vale)} />
                    </label>
                    <label>
                        <p className='my-2 text-sub'>Password</p>
                        <input className='input-bar text-gray-400' type='password' placeholder='Password' onChange= {e => setPassword(e.target.value)} />
                    </label>
                    <div>
                        <button className='my-4 px-4 py-1 bg-gray-400 text-gray-200 rounded' type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}