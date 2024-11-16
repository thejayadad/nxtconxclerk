'use client';
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from '@clerk/nextjs';
import Logo from '../ui/logo'

const Header = () => {
  return (
    <header className='w-full border-b'>
        <nav className='mx-auto max-w-screen-xl p-8 flex items-center justify-between'>
            <div>
                <Logo />
            </div>
            <div className='flex items-center space-x-3'>
                <div>Search</div>
                <div>

      <SignedIn>
        <div className='flex items-center space-x-2'>
          <UserButton />
          <SignOutButton />
        </div>
      </SignedIn>

      <SignedOut>
      <div className='flex items-center space-x-2'>
      <SignInButton />
          <SignUpButton />
        </div>
      </SignedOut>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header