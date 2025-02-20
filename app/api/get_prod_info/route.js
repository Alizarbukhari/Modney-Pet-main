import { createClient } from '@/utils/supabase/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(req) {
  const supabase = await createClient();
  const { id } = await req.json();

  const { data, error } = await supabase
  .from('product_list')
  .select('*')
  .eq('id', id); 

  if (error) {
    return new Response(JSON.stringify({ message: 'Invalid email or password', error: error.message }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }


  // 토큰 생성 로그인시
  else {
    return new Response(JSON.stringify({ message: 'Login successful', info: data , data : "success"}), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}