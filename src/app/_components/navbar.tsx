import React from 'react'
import Logo from './logo'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='sticky top-0 left-0 w-full min-h-8 border px-[12%] py-6 border-border bg-background'>
        <Link href="/" className='flex items-center'>
        <Logo />
        <p className='text-lg font-bold text-white ml-3'>Finite-Loop-Club</p>
        </Link>
        <Link>Home</Link>
        <Link>Events</Link>
        <Link>Team</Link>
        <Link>Register</Link>
    </nav>
  )
}

export default Navbar