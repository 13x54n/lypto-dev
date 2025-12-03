"use client";

import React, { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Button from "@/components/ui/Button";

export default function DashboardPage() {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
    }, [user, loading, router]);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            router.push("/login");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (!user) {
        return null; // Will redirect in useEffect
    }

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <Button
                        onClick={handleSignOut}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                    >
                        Sign Out
                    </Button>
                </div>

                <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800">
                    <h2 className="text-xl font-semibold mb-4">Welcome back!</h2>
                    <p className="text-neutral-400">
                        You are logged in as: <span className="text-white font-medium">{user.email}</span>
                    </p>
                    <div className="mt-6 p-4 bg-neutral-800 rounded-lg">
                        <p className="text-sm text-neutral-400">
                            This is a protected route. You can only see this if you are authenticated.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
