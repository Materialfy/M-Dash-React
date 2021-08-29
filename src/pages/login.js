import React from 'react'

export default function login() {
    return (
        <div className='grid h-screen w-screen content-center justify-center'>
            <div className='login-wrapper tester'>
                <h1 className=''>Please Log In</h1>
                <form>
                    <label>
                        <p>Username</p>
                        <input type='text' />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type='password' />
                    </label>
                    <div>
                        <button type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
