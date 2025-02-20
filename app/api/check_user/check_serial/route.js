import { createClient } from '@/utils/supabase/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const supabase = await createClient();

  const { serial_number } = await req.json();
    let { data, error } = await supabase
    .from('product')
    .select('*').eq('serial_number', serial_number)
        
  if (error) {
    return new Response(JSON.stringify({ message: '서버 접속 실패', error: error.message }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (data.length === 0) {
    return new Response(JSON.stringify({ valid: false, message: '데이터 없음', data : "failed "}), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // 토큰 생성 로그인시
  else {
    return NextResponse.json({ valid: true, data: data}, { status: 200 });
  }
}