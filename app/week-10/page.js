"use client";

import { useEffect } from "react";
import { useUserAuth } from "./_utils/auth-hooks";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const login = async () => {
    await gitHubSignIn();
  };

  const logout = async () => {
    await firebaseSignOut();
  };

  const goToShoppingList = () => {
    router.push("/week-10/shopping-list"); // Redirect to shopping list page
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">Week 10</h1>
      <div className="text-center">
        {user ? (
          <div>
            <p>Welcome, {user.displayName}!</p>
            <p>I know your email address. It is {user.email}.</p>
            <button
              onClick={logout}
              className="bg-red-500 text-white py-2 px-4 rounded mt-4"
            >
              Logout
            </button>
            <button
              onClick={goToShoppingList}
              className="bg-blue-500 text-white py-2 px-4 rounded mt-4 ml-4"
            >
              Go to Shopping List
            </button>
          </div>
        ) : (
          <button
            onClick={login}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Login with GitHub
          </button>
        )}
      </div>
    </main>
  );
}
