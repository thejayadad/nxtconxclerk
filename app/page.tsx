'use client';
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div>
      <h1>homePage</h1>

      {/* Display UserButton for signed-in users */}
      <SignedIn>
        <div>
          <h2>Welcome back!</h2>
          <UserButton />
          {/* SignOut button for signed-in users */}
          <SignOutButton />
        </div>
      </SignedIn>

      {/* Display SignIn and SignUp buttons for signed-out users */}
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
