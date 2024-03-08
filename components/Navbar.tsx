import { NavLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import AuthProviders from './AuthProviders';

const Navbar = () => {

    const session = {};

    const renderLinks = () => (

        NavLinks.map((link) => (
            <li key={link.key}>
                <Link href={link.href}>
                    {link.text}
                </Link>
            </li>
        ))
    );

    const renderAuthLinks = () => (
        
        session ? (
            <>
                UserPhoto
                <Link href='/create-project'>
                    Share Work
                </Link>
            </>
        ) 
            : 
        (
            <>
                <AuthProviders/>
            </>
        )
        
    )
    

    return (
        <nav className='flexBetween navbar'>
            <div className='flex-1 flexStart gap-10'>
                <Link href='/'>
                    <Image src='/logo.svg' width={115} height={43} alt='flexibble_logo'/>            
                </Link>
                <ul className='xl:flex hidden text-small gap-7'>
                    {   renderLinks()   }
                </ul>
            </div>

            <div className='flexCenter gap-4'>
                    {   renderAuthLinks() }
            </div>
        </nav>
    )
}

export default Navbar;