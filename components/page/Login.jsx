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

function Login({ setIsValid }) {
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
    <div>

      <main
        className="h-svh gap-28 flex-col bg-cover bg-center bg-[url('/bg-login.jpg')] w-full flex items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <div className='relative image-container w-[80vw] h-[200px]'>  {/* or any specific height you want */}
            <Image
              src={logo2.src}
              alt="logo"
              fill
              className="object-contain"  // or object-cover depending on your needs
            />
          </div>
          <Button
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className={`bg-[#FAC600] rounded-full font-bold text-2xl py-8 mt-10 w-fit px-12 ${isHovered ? 'text-white' : 'text-black'}
            lg:w-fit lg:px-16 lg:py-8 lg:text-3xl lg:font-bold lg:rounded-full lg:mt-10
            
            `}
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          >
            하우스백 정품 인증 하기
          </Button>
          {isClicked && (
            <div className='mt-10'>
              <Serial setIsValid={setIsValid}></Serial>
            </div>
          )}
        </div>
        <div className="id-pw-container flex flex-col  gap-7
        w-[90%]
        lg:w-[426px]
        ">
          <div className="flex flex-col gap-3 w-full">
            <label className="text-lg font-bold text-[#BCBCBC]" htmlFor="아이디">
              아이디
            </label>
            <div className="relative">
              <Input
                placeholder="아이디를 입력하세요"
                className="user-input pr-10 h-12 text-lg bg-transparent border-b-2 border-t-0 border-x-0 rounded-none focus-visible:ring-0 focus-visible:border-primary"
                id="아이디"
                type="text"
                onChange={(e) => {
                  setUserInfo({ ...user_info, user_id: e.target.value });
                }}
              />
              {user_info.user_id ? (
                <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white transition-opacity duration-500 opacity-100" />
              ) : (
                <Circle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white transition-opacity duration-500 opacity-100" />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label className="text-lg font-bold text-[#BCBCBC]" htmlFor="패스워드">
              패스워드
            </label>
            <div className="relative">
              <Input
                placeholder="비밀번호를 입력하세요"
                className="user-input pr-10 h-12 text-lg bg-transparent border-b-2 border-t-0 border-x-0 rounded-none focus-visible:ring-0 focus-visible:border-primary"
                id="패스워드"
                type="password"
                onChange={(e) => {
                  setUserInfo({ ...user_info, password: e.target.value });
                }}
              />
              {user_info.password ? (
                <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
              ) : (
                <Circle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white" />
              )}
            </div>
          </div>
          <Button
            className="bg-white  text-black rounded-xl mt-3 text-2xl font-medium text-center py-6 hover:text-white"
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
      </main>
    </div>
  );
}

export default Login;