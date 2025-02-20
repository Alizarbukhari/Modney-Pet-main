// middleware.js
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request) {
  const token = request.cookies.get('userInfo');

  if (!token) {
    // Redirect to login if no token is found
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET);
    // If verification is successful, continue to the requested page
    return NextResponse.next();
  } catch (error) {
    // If verification fails, redirect to login
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/admin/:path*'], // Apply middleware to specific routes
};