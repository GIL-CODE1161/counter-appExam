import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='flex justify-center items-center min-h-screen w-full bg-slate-300'>
        <div className='grid justify-center gap-5'>
            <span className='text-7xl font-bold'>404</span>
            <div className='flex justify-center '>
                <Link className='py-3 px-5 border' to='/'>Home</Link>
            </div>
        </div>
    </div>
  )
}
