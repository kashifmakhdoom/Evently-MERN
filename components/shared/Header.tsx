import { SignedOut, SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import NavItems from './NavItems';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex items-center justify-between'>
        <div className='flex justify-between'>
          <Link href='/'>
            <div className='flex justify-between'>
              <Image
                src='/assets/images/logo.png'
                width={220}
                height={140}
                alt='Eventplace Logo'
              />
              {/* <span className='text-2xl font-semibold decoration-dotted'>
                Eventplace 365
              </span> */}
            </div>
          </Link>
        </div>

        <SignedIn>
          <nav className='md:flex-between hidden w-full max-w-xs'>
            <NavItems />
          </nav>
        </SignedIn>
        <div className='flex w-32 justify-end gap-3'>
          <SignedIn>
            <UserButton />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className='rounded-full' size='lg'>
              <Link href='/sign-in'>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
