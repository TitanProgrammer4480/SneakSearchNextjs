import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className='w-full min-h-[5vh] bg-slate-800 text-white flex items-center justify-between'>
        <div className='ml-10 w-[70%]'>
            <Link href="/"><h2>Sneak Search</h2></Link>
        </div>
        <div className='mr-10 w-[30%] flex justify-around'>
            <Link href="/login" className='pr-2 pl-2 pt-1 pb-1 rounded-[25%] border-2 border-white border-solid'>Login</Link>
            <Link href="/signup" className='pr-2 pl-2 pt-1 pb-1 rounded-[25%] border-2 border-white border-solid'>Sign In</Link>
        </div>
    </header>
  )
}

export default Header