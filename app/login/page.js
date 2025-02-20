'use client';

import React, { useState } from 'react';
import { Box, Card, Flex } from '@radix-ui/themes';
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/loading_button";
import { CloudCog } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

function Page() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [user_info, setUserInfo] = useState({
        user_id: '',
        password: ''
    });
    
    const handleChange = (e,name) => {
        setUserInfo({...user_info,
            [name]: e.target.value
        });
    };

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
                console.log("data.userRole",data.user[0].role);
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
            <section
                className="flex flex-col items-center justify-center h-screen"
                style={{ backgroundColor: `#FFC800` }}
            >
                
                {/* Larger white background box for the login form */}
                <Box className="bg-white p-8 rounded-lg shadow-lg w-[80vw] sm:w-[40vw]">
                    <Card>
                        <Flex direction="column" gap="4" align="center">
                            <Box className="w-full">
                                {/* Larger input fields */}
                                <Input onChange={(e) => handleChange(e, 'user_id')} className="mb-4 w-full h-12 text-lg p-4" placeholder="Email" type="text" />
                                <Input onChange={(e) => handleChange(e, 'password')} className="mb-4 w-full h-12 text-lg p-4" placeholder="Password" type="password" />
                                {/* Centered loading button */}
                                <Flex justify="center">
                                    
                                    <LoadingButton onClick={handleLogin} isLoading={isLoading} className="w-full mt-8" />
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
