'use client';

import { useUserAuth } from "./_utils/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter(); // Initialize the router object

  const handleSignIn = async () => {
    try {
      await gitHubSignIn(); // Sign in via GitHub
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut(); // Sign out from Firebase
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      {!user ? (
        <button onClick={handleSignIn}>Login with GitHub</button>
      ) : (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleSignOut}>Logout</button>
          <button onClick={() => router.push("/week-9/shopping-list")}>
            Go to Shopping List
          </button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
