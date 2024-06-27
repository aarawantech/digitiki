'use client';

import React from 'react';
import { useSession, signOut, signIn } from 'next-auth/react';

const LoginButton = () => {
    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <div className="flex items-center gap-8">
                <h1 className="text-white">{session.user.name}</h1>
                <button
                    onClick={() => signOut()}
                    className="px-[32px] py-[10px] bg-white rounded-[40px]"
                >
                    Logout
                </button>
            </div>
        );
    }
    return (
        <button
            onClick={() => signIn('google')}
            className="px-[32px] py-[10px] bg-white rounded-[40px]"
        >
            Login
        </button>
    );
};

export default LoginButton;
