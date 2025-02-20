import { createClient } from '@/utils/supabase/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(req) {
  const supabase = await createClient();
  const { product_name,description,price,image_url } = await req.json();

  const now = new Date();
  const new_image_url = now.toISOString() + "_" + image_url;

  const { data, error } = await supabase
  .from('product_list')
  .insert([{product_name:product_name,description:description,price:price,image:new_image_url}])
  .select()
        

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
    return new Response(JSON.stringify({ message: '서버 접속 성공', data : "success",image_url:new_image_url}), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}