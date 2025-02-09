import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className='w-full h-[100px] bg-slate-800 text-white flex items-center justify-between'>
        <div className='ml-10 w-[70%]'>
            <h2>Sneak Search</h2>
        </div>
        <div className='mr-10 w-[30%] flex justify-around'>
            <Link href="/login">Login</Link>
            <Link href="/reg">Sign In</Link>
        </div>
    </header>
  )
}

export default Header