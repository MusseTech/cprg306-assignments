"use client";

import { useUserAuth } from "../contexts/AuthContext.js";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LandingPage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();

    const handleLogin = async () => {
        try {
            await gitHubSignIn();
            router.push("/week-9/shopping-list");
        } catch (error) {
            console.error(error);
        }
    }

    const handleLogout = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="min-h-screen flex flex-col item-center justify-center bg-gray-900 text-white p-4">
    <h1 className="text-4xl font-bold mb-6">Welcome to the Shopping List App</h1>

    {user ? (
        // user is Logged in
        <div className="text-center">
            <p className="mb-4 text-xl">Welcome, {user.displayName || user.email}!</p>
        <div className="space-x-4">
            <Link 
                href="/week-9/shopping-list"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
                Go to Shopping List
            </Link>
            <button 
                onClick={handleLogout} 
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
                Logout
            </button>
        </div>
        </div>
    ) : (
        // user is Logged out
        <div className="text-center">
            <p className="mb-4 text-xl">Please sign in to view your shopping list.</p>
            <button
                onClick={handleLogin}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
                Login with GitHub
            </button>
        </div>
    )}
</div>
    );
}

