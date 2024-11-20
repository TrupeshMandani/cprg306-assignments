// week-9/page.js
"use client";
import { useUserAuth } from "./_utils/auth-hooks";
import Link from "next/link";

export default function Home() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-6">
      <h1 className="text-3xl font-semibold mb-8">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      {user ? (
        <div className="text-center">
          <p className="mb-4">
            Welcome,{" "}
            <span className="font-bold">{user.displayName || "User"}</span>!
          </p>
          <button
            onClick={firebaseSignOut}
            className="bg-red-500 text-white px-4 py-2 rounded mb-4 hover:bg-red-600 transition"
          >
            Logout
          </button>
          <br />
          <Link
            href="/week-9/shopping-list"
            className="text-blue-500 underline hover:text-blue-600"
          >
            Go to Shopping List
          </Link>
        </div>
      ) : (
        <button
          onClick={gitHubSignIn}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Login with GitHub
        </button>
      )}
    </div>
  );
}
