import React from 'react'

export default function login() {
    return (
        <div className='grid h-screen w-screen content-center justify-center'>
            <div className='login-wrapper rounded globalmainbg-color tester opacity-75'>
                <h1 className='my-2 text-lg text-header'>Log Into M-Dash</h1>
                <form>
                    <label>
                        <p className='my-2 text-sub'>Username</p>
                        <input className='input-bar text-gray-400' type='text' placeholder='Email' />
                    </label>
                    <label>
                        <p className='my-2 text-sub'>Password</p>
                        <input className='input-bar text-gray-400' type='password' placeholder='Password' />
                    </label>
                    <div>
                        <button className='my-2 px-3 py-1 bg-gray-400 text-gray-200' type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
