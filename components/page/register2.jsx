'use client';

import React, { useState, useEffect } from 'react';
import { Box, Card, Flex } from '@radix-ui/themes';
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/loading_button";
import { CloudCog } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { getCookie } from '@/hooks/setCookie';
import changeSerialCode from '@/hooks/changeSerial';
import './register2.css';
import PostCode from '../postCode';
import { Checkbox } from "@/components/ui/checkbox";

function Register2() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [changeSerial, setChangeSerial] = useState("");
    const [user_info, setUserInfo] = useState({
        user_id: '',
        password: '',
        password_check: '',
        user_serial: '',
        dog_name: '',
        dog_birth: '',
        dog_body_shape: '',
        dog_body_kg: '',
        dog_body_length: '',
        dog_type: '',
        address: '',
        address_detail: '',
        phone: '',
        phone_check: '',
        email: '',
        agree1: false,
        agree2: false,

    });

    const [showPostCode, setShowPostCode] = useState(false);
    const completeHandler = (data) => {
        const { address, zonecode } = data;
        setZonecode(zonecode);
        setAddress(address);
    };


    useEffect(() => {
        let user_serial = getCookie('user_serial');
        const result = changeSerialCode(user_serial);
        console.log("result", result);
        let change_user_serial = result.apartment + " " + result.building + " " + result.unit;

        if (user_serial) {
            setUserInfo({ ...user_info, user_serial: user_serial });
            setChangeSerial(change_user_serial);
        }
    }, [user_info.user_serial]);

    const handleChange = (e, name) => {
        console.log(user_info)

        setUserInfo({
            ...user_info,
            [name]: e.target.value
        });
        
    };

    const handleLogin = async () => {

        if (!user_info.agree1 || !user_info.agree2) {
            alert("동의를 확인해주세요.");
            return;
        }


        setIsLoading(true);
        console.log("user_info", user_info);
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
                className="w-full mt-20 flex flex-col items-center justify-center"

            >

                {/* Larger white background box for the login form */}
                <Box className="bg-white p-8 rounded-lg shadow-lg sm:w-[80vw] lg:w-[60vw]">
                    <Card>
                        <Flex direction="column" gap="4" align="center">
                            <Box className="w-full px-10">
                                <h2 className="text-[2.5rem] mb-20 font-[900] text-center mt-20 text-[#000]">하우스백 분양서</h2>
                                {/* Larger input fields */}

                                <label className="text-lg font-bold">회원 주소</label>
                                <Input onChange={(e) => handleChange(e, 'user_id')} className="mt-2 mb-7 w-full h-12 text-lg p-4" value={changeSerial} type="text" disabled />
                                {/*  */}
                                <label className="text-lg font-bold mt-4">아이디</label>
                                <Input onChange={(e) => handleChange(e, 'user_id')} className="mt-2 mb-7 w-full h-12 text-lg p-4" placeholder="아이디" type="text">

                                </Input>
                                {/*  */}

                                <label className="text-lg font-bold mt-4">비밀번호</label>
                                <Input onChange={(e) => handleChange(e, 'password')} className="mt-2 mb-7 w-full h-12 text-lg p-4" placeholder="비밀번호" type="password" />
                                {/*  */}
                                <label className="text-lg font-bold mt-4">비밀번호 확인</label>
                                <Input onChange={(e) => handleChange(e, 'password_check')} className="mt-2 mb-7 w-full h-12 text-lg p-4" placeholder="비밀번호 확인" type="password" />

                                {/* 강아지 정보 */}

                                <div className="double-col flex flex-row justify-between gap-10">
                                    <div className='label-wrap w-full'>
                                        <label className="text-lg font-bold mt-4">강아지 이름</label>
                                        <Input onChange={(e) => handleChange(e, 'dog_name')} className="mt-2 mb-7 w-full h-12 text-lg p-4" placeholder="강아지 이름" type="text" />
                                    </div>

                                    <div className='label-wrap w-full'>
                                        <label className="text-lg font-bold mt-4">강아지 출생년도</label>
                                        <Input onChange={(e) => handleChange(e, 'dog_birth')} className="mt-2 mb-7 w-full h-12 text-lg p-4" placeholder="강아지 출생년도"
                                            min="1900"
                                            max="2024"
                                            type="number" />
                                    </div>

                                </div>
                                {/*  */}

                                <div className="double-col flex flex-row justify-between items-end gap-4">
                                    <div className="label-wrap relative">
                                        <label className="text-lg font-bold mt-4">강아지 체형</label>
                                        <div className="input-with-unit ">
                                            <input
                                                onChange={(e) => handleChange(e, 'dog_body_shape')}
                                                className="mt-2 mb-7 w-full h-12 text-lg p-4 pr-10"
                                                placeholder="몸무게"
                                                type="text"
                                            />
                                            <span className="unit">cm</span>
                                        </div>
                                    </div>
                                    <div className="label-wrap relative">

                                        <div className="input-with-unit">
                                            <input
                                                onChange={(e) => handleChange(e, 'dog_body_kg')}
                                                className="mt-2 mb-7 w-full h-12 text-lg p-4 pr-10"
                                                placeholder="체고"
                                                type="text"
                                            />
                                            <span className="unit">kg</span>
                                        </div>
                                    </div>

                                    <div className="label-wrap relative">

                                        <div className="input-with-unit">
                                            <input
                                                onChange={(e) => handleChange(e, 'dog_body_length')}
                                                className="mt-2 mb-7 w-full h-12 text-lg p-4 pr-10"
                                                placeholder="등길이"
                                                type="text"
                                            />
                                            <span className="unit">kg</span>
                                        </div>
                                    </div>

                                </div>
                                {/*  */}

                                <label className="text-lg font-bold mt-4">강아지 견종</label>
                                <Input onChange={(e) => handleChange(e, 'dog_type')} className="mt-2 mb-7 w-full h-12 text-lg p-4" placeholder="강아지 종" type="text"></Input>

{/*  */}
                                <label className="text-lg font-bold mt-4">주소</label>
                                <Input onClick={() => setShowPostCode(true)}
                                    onChange={(e) => handleChange(e, 'address')} className="mt-2 mb-2 w-full h-12 text-lg p-4" placeholder="주소를 입력하세요" type="text"></Input>
                                {showPostCode && <PostCode show={showPostCode} onComplete={completeHandler}></PostCode>}
                                <Input onChange={(e) => handleChange(e, 'address_detail')} className="mb-7 w-full h-12 text-lg p-4" placeholder="상세주소를 입력하세요" type="text"></Input>

                                {/*  */}
                                <label className="text-lg font-bold">전화번호</label>
                                <div className='double-col flex flex-row justify-center items-start gap-4 mb-[-20px] mt-2'>

                                    
                                    
                                    <Input onChange={(e) => handleChange(e, 'phone')} className=" mb-7 w-2/3 h-12 text-lg p-4" placeholder="전화번호" type="text"></Input>
                                    <Button variant="outline" className='w-1/3 h-12 text-lg p-4'>인증번호 받기</Button>


                                </div>

                                <div className='double-col flex flex-row justify-between items-start gap-4 mb-7'>
                                    <div className='flex flex-row w-2/3 gap-0'>
                                    <Input onChange={(e) => handleChange(e, 'phone_check')} className=" w-full h-12 text-lg p-4" placeholder="인증번호" type="text"></Input>
                                    <Button variant="outline" className='w-1/2 h-12 text-lg p-4 bg-black text-white'>확인</Button>
                                    </div>
                                    <Button variant="outline" className='w-1/3 h-12 text-lg p-4'>재발송</Button>
                                </div>
                                {/*  */}

                                <label className="text-lg font-bold mt-4">이메일</label>
                                <Input onChange={(e) => handleChange(e, 'email')} className="mt-2 mb-7 w-full h-12 text-lg p-4" placeholder="이메일" type="text"></Input>


                                {/* check box for agree and check state*/}
                                <div className='flex flex-row items-center gap-4'>
                                    <Checkbox onClick={() => {
                                        setUserInfo({...user_info, agree1: !user_info.agree1})
                                    }} />
                                    <label className="text-lg font-bold">개인정보 수집 및 이용에 동의합니다.</label>
                                </div>

                                <div className='flex flex-row items-center gap-4'>
                                    <Checkbox onClick={() => {
                                        setUserInfo({...user_info, agree2: !user_info.agree2})
                                    }} />
                                    <label className="text-lg font-bold">개인정보 수집 및 이용에 동의합니다.</label>
                                </div>





                                {/* Centered loading button */}



                                <Flex justify="center">

                                    <LoadingButton buttonText="회원가입" onClick={handleLogin} isLoading={isLoading} className="w-full mt-8" />
                                </Flex>
                            </Box>
                        </Flex>
                    </Card>
                </Box>
                <div className='mb-20'></div>
            </section>
        </div>
    );
}
export default Register2