'use client';

import React, { useState,useEffect } from 'react';
import { Box, Card, Flex } from '@radix-ui/themes';
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/loading_button";
import { CloudCog } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { getCookie } from '@/hooks/setCookie';
import changeSerialCode from '@/hooks/changeSerial';

function Page() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [user_info, setUserInfo] = useState({
        user_id: '',
        password: '',
        user_serial: ''
    });

    useEffect(() => {
        let user_serial = getCookie('user_serial');
        const result = changeSerialCode(user_serial);
        user_serial = result.apartment + " " + result.building + " " + result.unit;

        if (user_serial) {
            setUserInfo({...user_info, user_serial: user_serial});
        }
    }, [user_info.user_serial]);
    
    const handleChange = (e,name) => {
        setUserInfo({...user_info,
            [name]: e.target.value
        });
    };

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/add_user', {
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
                alert("회원가입이 완료되었습니다.");
                router.push('/login/user/');
                return;
            }
            else {
                alert(data.message);
            }

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

    return (
        <div>
            <section
                className="flex flex-col items-center justify-center h-screen"
                style={{ backgroundColor: `#FFC800` }}
            >
                
                {/* Larger white background box for the login form */}
                <Box className="bg-white p-8 rounded-lg shadow-lg w-[80vw] sm:w-[40vw]">
                    <Card>
                        <Flex direction="column" gap="4" align="center">
                            <Box className="w-full">
                                <h2 className="text-2xl mb-20 font-bold text-center mt-20 text-[#961E1E]">회원가입</h2>
                                {/* Larger input fields */}
                                <label className="text-lg font-bold">회원 주소</label>
                                <Input onChange={(e) => handleChange(e, 'user_id')} className="mb-4 w-full h-12 text-lg p-4"  value={user_info.user_serial} type="text" disabled />
                                <label className="text-lg font-bold mt-4">아이디</label>
                                <Input onChange={(e) => handleChange(e, 'user_id')} className="mb-4 w-full h-12 text-lg p-4" placeholder="아이디" type="text">
                                    
                                </Input>
                                
                                <label className="text-lg font-bold mt-4">비밀번호</label>
                                <Input onChange={(e) => handleChange(e, 'password')} className="mb-4 w-full h-12 text-lg p-4" placeholder="비밀번호" type="password" />
                                {/* Centered loading button */}
                                <Flex justify="center">
                                    
                                    <LoadingButton buttonText="회원가입" onClick={handleLogin} isLoading={isLoading} className="w-full mt-8" />
                                </Flex>
                            </Box>
                        </Flex>
                    </Card>
                </Box>
            </section>
        </div>
    );
}

export default Page;
