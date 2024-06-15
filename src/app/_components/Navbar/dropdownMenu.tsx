import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

import {  Menu } from 'lucide-react';
import Link from 'next/link';


const NavBarMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='sm:hidden'><Menu/> </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator /> */}
        <Link href='/events'><DropdownMenuItem>Events</DropdownMenuItem></Link>
        <Link href='/team'><DropdownMenuItem>Team</DropdownMenuItem></Link>
        {/* <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default NavBarMenu