import { createClient } from '@/utils/supabase/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import bcrypt from 'bcrypt';

export async function POST(req) {
  const supabase = await createClient();
  const { user_id, password } = await req.json();

  let hashed_password;
  hashed_password = password;
  hashed_password = await bcrypt.hash(hashed_password, 10);


  const { data, error } = await supabase
    .from('user')
    .select('*')
    .eq('user_id', user_id)
    

    // const isPasswordValid = await bcrypt.compare(hashed_password, data.password);
    console.log(hashed_password)
    console.log(data)
      

  if (error) {
    return new Response(JSON.stringify({ message: 'Invalid email or password', error: error.message }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!data) {
    return new Response(JSON.stringify({ message: 'Invalid email or password' , data : "failed "}), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // 토큰 생성 로그인시
  

  else {
    const token = jwt.sign({ user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });


    // Set token in HTTP-only cookie
    cookies().set({
      name: 'userInfo',
      userRole : data.role,
      value: token,
      user_id : user_id,
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production', // Secure in production
      maxAge: 60 * 60, // 1 hour
      path: '/',
    });
  

    return new Response(JSON.stringify({ message: 'Login successful', user: data , data : "success"}), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}