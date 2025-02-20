// pages/api/verifyToken.js
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { token } = await req.json();

  if (!token) {
    return NextResponse.json({ message: 'Token is required' }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return NextResponse.json({ valid: true, decoded }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ valid: false, message: 'Invalid token' }, { status: 401 });
  }
}
