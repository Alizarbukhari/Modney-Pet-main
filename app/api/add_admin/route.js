import { createClient } from '@/utils/supabase/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import bcrypt from 'bcrypt';

export async function POST(req) {
  const supabase = await createClient();
  const { user_id, password} = await req.json();



//   존재하지 않는 아이디일 경우 회원가입 진행 
    let temp_user_id = "modnepet";
    let temp_password = "modnepet";

    let hashed_password = await bcrypt.hash(temp_password, 10);

    
    const { data, error } = await supabase
    .from('user')
    .insert([
    { user_id: temp_user_id, password: hashed_password, role : "admin" },
    ])
    .select()
        
 

  // 토큰 생성 
  

    const token = jwt.sign({ temp_user_id }, process.env.JWT_SECRET, { expiresIn: '24h' });


    // Set token in HTTP-only cookie
    cookies().set({
      name: 'userInfo',
      userRole : "default",
      value: token,
      user_id : temp_user_id,
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production', // Secure in production
      maxAge: 60 * 60, // 1 hour
      path: '/',
    });
  

    return new Response(JSON.stringify({ message: '회원가입 성공', user: data , data : "success"}), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
}