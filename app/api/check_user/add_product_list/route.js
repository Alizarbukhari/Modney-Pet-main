import { createClient } from '@/utils/supabase/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(req) {
  const supabase = await createClient();
  const { product_name, description, category } = await req.json();

  // Current date generate karna
  const now = new Date();
  const currentDate = now.toISOString();

  // Ab data postcategory table me insert ho raha hai, image system hata diya gaya hai
  const { data, error } = await supabase
    .from('add_product_list')
    .insert([{ 
      product_name: product_name, 
      description: description, 
      category: category, 
      date: currentDate 
    }])
    .select();

  if (error) {
    return new Response(JSON.stringify({ message: '서버 접속 실패', error: error.message }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (data.length === 0) {
    return new Response(JSON.stringify({ message: '서버 접속 실패', data: "failed" }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    return new Response(JSON.stringify({ message: '서버 접속 성공', data: "success" }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
