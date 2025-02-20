import { createClient } from '@/utils/supabase/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import bcrypt from 'bcrypt';

export async function POST(req) {
  const supabase = await createClient();
  const { user_id, password, user_serial, dog_name, dog_birth, dog_body_shape, dog_body_kg, dog_body_length, dog_type, address, address_detail, phone, email } = await req.json();
  // console.log("user_id", user_id, "password", password, "user_serial", user_serial, "dog_name", dog_name, "dog_birth", dog_birth, "dog_body_shape", dog_body_shape, "dog_body_kg", dog_body_kg, "dog_body_length", dog_body_length, "dog_type", dog_type, "address", address, "address_detail", address_detail, "phone", phone, "email", email);

  let { data: check_serial, error: res_error } = await supabase
    .from('product')
    .select("*")
    .eq('serial_number', user_serial)

  let { data, error } = await supabase
    .from('user')
    .select("*")
    .or(`user_id.eq.${user_id},serial.eq.${user_serial}`)

  console.log(data);



  if (error) {
    return new Response(JSON.stringify({ message: 'Invalid email or password', error: error.message }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (data && data.length !== 0) {
    return new Response(JSON.stringify({ message: '이미 존재하는 아이디 혹은 시리얼입니다.', data: "failed " }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!check_serial || check_serial.length == 0) {
    return new Response(JSON.stringify({ message: '존재하지 않는 시리얼입니다.', data: "failed " }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  //   존재하지 않는 아이디일 경우 회원가입 진행 
  else {

    let hashed_password;
    hashed_password = password;
    hashed_password = await bcrypt.hash(hashed_password, 10);


    const { data, error } = await supabase
      .from('user')
      .insert([
        { user_id: user_id, password: hashed_password, serial: user_serial, dog_name: dog_name, dog_birth: dog_birth, dog_body_shape: dog_body_shape, dog_body_kg: dog_body_kg, dog_body_length: dog_body_length, dog_type: dog_type, address: address, address_detail: address_detail, phone: phone, email: email },
      ])
      .select()

    console.log("data", data, "error", error);

    if (error) {
      return new Response(JSON.stringify({ message: '회원가입 실패', data: "failed " }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    else {
      // 토큰 생성 


      const token = jwt.sign({ user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });


      // Set token in HTTP-only cookie
      cookies().set({
        name: 'userInfo',
        userRole: "default",
        value: token,
        serial: user_serial,
        user_id: user_id,
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production', // Secure in production
        maxAge: 60 * 60, // 1 hour
        path: '/',
      });


      return new Response(JSON.stringify({ message: '회원가입 성공', user: data, data: "success" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

  }



}