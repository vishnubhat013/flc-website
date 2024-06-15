import React from 'react'
import Logo from '../logo'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import NavBarMenu from './dropdownMenu'

const Navbar = () => {
    return (
        <nav className='sticky top-0 left-0 w-full min-h-8  border px-[8%] sm:px-[12%] py-5 border-border bg-background flex items-center '>
            <Link href="/" className='flex items-center'>
                <Logo />
                <p className='text-sm md:text-lg font-bold text-white ml-3'>Finite-Loop-Club</p>
            </Link>
            <div className='flex gap-4 ml-auto items-center '>
                <div className='hidden sm:flex gap-8'>
                <Link href="/">Home</Link>
                <Link href="/events">Events</Link>
                <Link className='ml-auto' href="/team">Team</Link>
                </div>
                <Button size='sm' asChild><Link href="/">Register</Link></Button>
                <NavBarMenu />
            </div>
            
        </nav >
    )
}

export default Navbar