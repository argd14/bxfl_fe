import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { API_URL } from '../lib/constants';
import * as jose from 'jose';

const allowedOrigins = ['http://localhost:3000/', 'http://localhost:3000'];

const corsOptions = {
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function middleware(request: NextRequest) {
    const cookie = request.cookies.get(API_URL.ACCESS_TOKEN.toString())?.value;
    let url = request.url;

    //Check the origin from the request
    const origin = request.headers.get('origin') ?? '';
    const isAllowedOrigin = allowedOrigins.includes(origin);

    // Handle preflighted requests
    const isPreflight = request.method === 'OPTIONS';

    if (isPreflight) {
        const preflightHeaders = {
            ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
            ...corsOptions,
        };
        return NextResponse.json({}, { headers: preflightHeaders });
    }

    // Handle simple requests
    const response = NextResponse.next();

    if (isAllowedOrigin) {
        response.headers.set('Access-Control-Allow-Origin', origin);
    }

    Object.entries(corsOptions).forEach(([key, value]) => {
        response.headers.set(key, value);
    });

    // try {
    //     const { payload } = await jose.jwtVerify(cookie as string, new TextEncoder().encode(process.env['ACCESS_TOKEN_SECRET']));

        // if (!payload) {
        // const expiry = payload.exp;
        // const now = new Date();
        // return now.getTime() > (expiry ?? 0) * 1000;
        // NextResponse.redirect(`${API_URL.LOCALHOST}/`);
        // }
    
    // if (url === 'http://localhost:3000/' || API_URL.LOCALHOST === url) {
    //         return NextResponse.redirect(`${API_URL.LOCALHOST}${API_URL.HOME}`);
    //     }
    // } catch (error) {
    //     if (url === 'http://localhost:3000/' || API_URL.LOCALHOST === url) {
    //         return NextResponse.next();
    //     }
    //     return NextResponse.redirect(API_URL.LOCALHOST);
    // }
    // return response;
}

export const config = {
    matcher: [`/`, '/login', '/orders', '/auth/login',],
};
