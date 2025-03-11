import { createClient } from '@/utils/supabase/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(req) {
  try {
    const supabase = await createClient();
    const { product_name, description, category } = await req.json();

    console.log("Received data:", { product_name, description, category });

    // Current date generate karna
    const now = new Date();
    const currentDate = now.toISOString();
    console.log("Current date generated:", currentDate);

    // Ab data postcategory table me insert ho raha hai, image system hata diya gaya hai
    const { data, error } = await supabase
      .from('add_product_list')
      .insert([{
        product_name: product_name,
        description: description,
        category: category,
        currentDate: currentDate // Or the correct column name like 'created_at'
      }])
      .select();

    if (error) {
      console.error("Supabase error:", error.message); // Log the error from Supabase
      return new Response(JSON.stringify({ message: '서버 접속 실패', error: error.message }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log("Data returned after insert:", data);

    if (data.length === 0) {
      console.log("No data returned after insertion.");
      return new Response(JSON.stringify({ message: '서버 접속 실패', data: "failed" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      console.log("Data inserted successfully:", data);
      return new Response(JSON.stringify({ message: '서버 접속 성공', data: "success" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error("Unexpected error occurred:", error.message);
    return new Response(JSON.stringify({ message: 'Unexpected server error', error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
