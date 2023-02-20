import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

function Home() {
    return (
        <div className='bg-black text-white w-screen h-screen flex flex-col justify-center items-center'>
            <NavBar />
            <div className=''>
                <div className='flex gap-56'>
                    <Link to="/countries"><button className='border-2 w-56 h-24 hover:bg-blue-300 transition ease-in-out hover:-translate-y-1 hover:text-black'>Click Here For Countries</button></Link>
                    <Link to="/rivers"><button className='border-2 w-56 h-24 hover:bg-blue-300 transition ease-in-out hover:-translate-y-1 hover:text-black'>Click Here For Rivers</button></Link>
                    <Link to="/mountains"><button className='border-2 w-56 h-24 hover:bg-blue-300 transition ease-in-out hover:-translate-y-1 hover:text-black'>Click Here For Mountains</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home