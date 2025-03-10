'use client';
import React, { useState } from 'react';
import { Box, Card, Flex } from '@radix-ui/themes';
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/loading_button";
import { CloudCog } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import Serial from '../serial';
import logo2 from '@/public/logo2.png'
import { Check, Circle } from "lucide-react"
import Image from 'next/image'
import './Login.css'

function  Login({ setIsValid }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [user_info, setUserInfo] = useState({
    user_id: '',
    password: ''
  });

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/check_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user_info)
      });
      if (!response.ok) {
        // Handle HTTP errors
        console.error('Login failed:', response.statusText);
        return;
      }

      const data = await response.json();
      // Handle successful login, e.g., redirect or update state
      setIsLoading(false);
      if (data.data === "success") {
        console.log("data.userRole", data.user[0].role);
        if (data.user[0].role === "admin") {

          router.push('/login/admin/');
        }
        else {
          router.push('/login/user/');
        }

        return;
      }

      else {
        alert("아이디 또는 비밀번호가 틀렸습니다.");
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    
    <>
<div className="md:h-[100vh] h-[76vh] w-[100%] bg-cover bg-center bg-[url('/bg-login.jpg')] relative flex justify-center items-center">
  <div className='top-[100px] left-0 right-0 flex justify-center items-center flex-col '>
          <div className="flex w-[257.9999694824219px]  md:w-[414.9999694824219px] h-[107.99999237060547px] md:h-[197.99998474121094px] items-center justify-center ">
          <h1 className="built-titling-font text-[58px] md:text-[90px] text-center text-white m-0 leading-none mb-[100px]">
            HOUSE OF<br />MODNEYPET
          </h1>
        </div>



        <div className="flex flex-col gap-6 items-center justify-center  lg:w-[414.9999694824219px]">
          <div className="flex flex-col w-[254px] h-[65px]">
            <label className="text-lg font-bold text-[#BCBCBC]" htmlFor="아이디">
              아이디 
            </label>
            <div className="relative">
            <input
  placeholder="아이디를 입력하세요"
  className="user-input h-12 text-lg bg-transparent border-b-2 border-t-0 border-x-0 rounded-none focus-visible:ring-0 focus-visible:border-primary"
  id="아이디"
  type="text"
  onChange={(e) => {
    setUserInfo({ ...user_info, user_id: e.target.value });
  }}
/>
              {user_info.user_id ? (
                <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700 transition-opacity duration-500 opacity-100 bg-white rounded-full" />
              ) : (
                <Circle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white transition-opacity duration-500 opacity-100" />
              )}
            </div>
          </div>

          <div className="flex flex-col  w-[254px] h-[65px]  ">
            <label className="text-lg font-bold text-[#BCBCBC]" htmlFor="패스워드">
              패스워드 
            </label>
            <div className="relative">
              <Input
                placeholder="비밀번호를 입력하세요"
                className="user-input pr-10 h-12 text-lg bg-transparent focus:bg-transparent border-b-2 border-t-0 border-x-0 rounded-none focus-visible:ring-0 focus-visible:border-primary"
                id="패스워드"
                type="password"
                onChange={(e) => {
                  setUserInfo({ ...user_info, password: e.target.value });
                }}
              />
              {user_info.password ? (
                <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700 transition-opacity duration-500 opacity-100 bg-white rounded-full" />
              ) : (
                <Circle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
              )}
            </div>
          </div>
<div className="flex flex-col gap-3">
          <Button
            className="bg-white text-black rounded-xl   text-[15px] font-medium text-center py-6 px-4 flex flex-col hover:text-white  w-[268px] "
            onClick={handleLogin}
          >
            Login
          </Button>

          <Button
            className="bg-[#7B7B7B] text-white rounded-xl  text-[15px] font-medium text-center py-6 flex flex-col  w-[268px] "
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            onClick={() => {
              setIsClicked(!isClicked);
            }}          >
           하우스백 정품 인증하기
          </Button>
          {isClicked && (
            <div className='mt-10'>
              <Serial setIsValid={setIsValid}></Serial>
            </div>
          )}
          </div>

        </div>

      </div>
      </div>
    </>
  );
}

export default Login;