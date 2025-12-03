"use client";

import React, { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function LoginPage() {
    const [error, setError] = useState("");
    const router = useRouter();

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            router.push("/dashboard");
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
            <div className="max-w-md w-full space-y-8 p-8 bg-neutral-900 rounded-xl border border-neutral-800">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold tracking-tight">
                        Welcome to Lypto
                    </h2>
                    <p className="mt-2 text-sm text-neutral-400">
                        Sign in to access your dashboard
                    </p>
                </div>

                {error && (
                    <div className="text-red-500 text-sm text-center">{error}</div>
                )}

                <div className="mt-8">
                    <Button
                        onClick={handleGoogleLogin}
                        className="w-full flex justify-center py-2 px-4 border border-neutral-700 rounded-md shadow-sm bg-neutral-800 text-sm font-medium text-white hover:bg-neutral-700"
                    >
                        Sign in with Google
                    </Button>
                </div>
            </div>
        </div>
    );
}
