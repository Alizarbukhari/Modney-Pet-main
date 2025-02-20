import { createClient } from '@/utils/supabase/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(req) {
  const supabase = await createClient();
  const { product_name,number } = await req.json();

  let temp_number  = parseInt(number);

  const rows = Array.from({ length: temp_number }, (_, index) => ({
    product_name: product_name,
  }));

  const { data, error } = await supabase
  .from('product')
  .insert(rows)
  .select()

  console.log("product_name",product_name,"number",temp_number);
        

  if (error) {
    return new Response(JSON.stringify({ message: '서버 접속 실패', error: error.message }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (data.length === 0) {
    return new Response(JSON.stringify({ message: '서버 접속 실패', data : "failed "}), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // 토큰 생성 로그인시
  

  else {
    return new Response(JSON.stringify({ message: '서버 접속 성공', data : "success"}), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}