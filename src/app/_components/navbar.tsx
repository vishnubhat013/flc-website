import React from 'react'
import Logo from './logo'
import Link from 'next/link'
import { Button } from '~/components/ui/button'

const Navbar = () => {
    return (
        <nav className='sticky top-0 left-0 w-full min-h-8 border px-[12%] py-5 border-border bg-background flex items-center '>
            <Link href="/" className='flex items-center'>
                <Logo />
                <p className='text-lg font-bold text-white ml-3'>Finite-Loop-Club</p>
            </Link>
            <div className='flex gap-8 ml-auto items-center '>
                <Link href="/">Home</Link>
                <Link href="/">Events</Link>
                <Link className='ml-auto' href="/">Team</Link>
                <Button asChild><Link href="/">Register</Link></Button>
            </div>
            

        </nav >
    )
}

export default Navbar