import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div>
            <Image src='/favicon.ico' width={20} height={20} alt='logo'></Image>
        </div>
    )
}

export default Logo