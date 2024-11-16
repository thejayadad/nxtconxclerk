'use client';
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div>
      <h1>homePage</h1>

      <SignedIn>
        <div>
          <h2>Welcome back!</h2>
          <UserButton />
          <SignOutButton />
        </div>
      </SignedIn>

      <SignedOut>
        <div>
          <h2>Please sign in or sign up</h2>
          <SignInButton />
          <SignUpButton />
        </div>
      </SignedOut>
    </div>
  );
}
