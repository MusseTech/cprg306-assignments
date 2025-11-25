"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    const { user, loading, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push("/week-10/shopping-list");
        }
    }, [user, router]);

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Error signing in:", error);
        }
    }
    
    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    }

    if (loading) {
        return (
            <main className="flex item-center justify-center min-h-screen bg-gray-900 text-white">
                <p>Checking authentication status...</p>
            </main>
        );
    }

    return (
        <main className="flex item-center justify-center min-h-screen bg-gray-900">
            <div className="text-center">
                {!user ? (
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-8">
                            Shopping List App
                        </h1>
                        <button
                            onClick={handleSignIn}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 rounded-lg">
                            Sign in with GitHub
                        </button>
                    </div>
                ) : (
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-4">
                            Welcome, {user.displayName}!
                            </h1>
                            <p className="text-gray-300 mb-8">{user.email}</p>
                            <div className="space-x-4">
                                <Link 
                                href="/week-10/shopping-list" 
                                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg inline-block">
                                    Go to Shopping List
                                </Link>
                                <button 
                                    onClick={handleSignOut}
                                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg">
                                    Sign Out
                                </button>
                            </div>
                    </div>
                )}
            </div>
        </main>
    );
}