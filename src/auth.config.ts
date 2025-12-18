import { User } from './generated/prisma/browser';
import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authlized({ auth, request: {nextUrl} }) {
            const isLoggedIn = !!auth?.User;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard') || nextUrl.pathname.startsWith('/manage');
            if(isOnDashboard) {
                if(isLoggedIn) return true;
                return false; // redirect unauthenticated user to login page
            } else if(isLoggedIn && nextUrl.pathname === '/login') {
                return Response.redirect(new URL('/dashboard', nextUrl));
            }
            return true;
        }
    },
    providers: [], // Add Providers with an empty array for now
} satisfies NextAuthConfig