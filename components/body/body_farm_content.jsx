"use client"
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Box, Card, Flex } from '@radix-ui/themes';
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/loading_button";
import { CloudCog } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { getCookie } from '@/hooks/setCookie';
import changeSerialCode from '@/hooks/changeSerial';
import PostCode from '../postCode';
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";

export default function Body_Form_Content() {
    const [selectedImage, setSelectedImage] = useState(false);
    const [dob, setDob] = useState("");
    const dateInputRef = useRef(null);
    const [uploadedImage, setUploadedImage] = useState(null); // For image preview
    const [selectedFile, setSelectedFile] = useState(null); // For storing actual file

    const handleCalendarClick = () => {
        console.log('test')
        console.log("dateInputRef.current", dateInputRef.current);
        if (dateInputRef.current) {
            dateInputRef.current.showPicker?.() || dateInputRef.current.click();
            
        }
    };

    // On file select, set preview and file only
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
    
        if (!file.type.startsWith('image/')) {
            alert('Please upload an image file.');
            return;
        }
    
        const imageUrl = URL.createObjectURL(file);
        setUploadedImage(imageUrl); // Set preview
        setSelectedFile(file); // Save file for later upload
    };

    // Data state for user info
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [changeSerial, setChangeSerial] = useState("");
    const [user_info, setUserInfo] = useState({
        user_id: '',
        password: '',
        user_serial: '',
        dog_name: '',
        dog_date_of_birth: '',
        dog_body_shape: '',
        dog_body_kg: '',
        dog_body_length: '',
        dog_type: '',
        address: '',
        address_detail: '',
        phone: '',
        email: '',
        agree1: false,
        agree2: false,
        imageName: '',
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
            setUserInfo(prev => ({ ...prev, user_serial: user_serial }));
            setChangeSerial(change_user_serial);
        }
    }, [user_info.user_serial]);

    const handleChange = (e, name) => {
        setUserInfo({
            ...user_info,
            [name]: String(e.target.value)
        });
        console.log("user_info", user_info);
    };

    const handleLogin = async () => {
        // Validate required fields
        const requiredFields = [
            'user_id', 'password', 'dog_name', 'dog_date_of_birth',
            'dog_body_shape', 'dog_body_kg', 'dog_body_length',
            'dog_type', 'address', 'address_detail', 'phone', 'email'
        ];
        for (let field of requiredFields) {
            if (!user_info[field] || user_info[field].trim() === '') {
                alert(`Please fill the ${field.replace(/_/g, " ")} field.`);
                return;
            }
        }

        // Check if image file selected
        if (!selectedFile) {
            alert("Please select an image file.");
            return;
        }

        // Check agreements
        if (!user_info.agree1 || !user_info.agree2) {
            alert("동의를 확인해주세요.");
            return;
        }

        setIsLoading(true);

        // First, upload the image only on submit
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('image_name', selectedFile.name);
    
        try {
            const resImage = await fetch('/api/upload_image', {
                method: 'POST',
                body: formData,
            });
            const dataImage = await resImage.json();
            if (!resImage.ok) {
                alert(dataImage.message);
                setIsLoading(false);
                return;
            }
            // Image uploaded successfully.
            // Use a local variable to update imageName so that state update delay doesn't affect the registration data.
            const updatedUserInfo = { ...user_info, imageName: selectedFile.name };
    
            // Now, send the registration data with updatedUserInfo to backend
            const response = await fetch('/api/add_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUserInfo)
            });
            if (!response.ok) {
                alert("Registration failed: " + response.statusText);
                setIsLoading(false);
                return;
            }
    
            const data = await response.json();
            setIsLoading(false);
            if (data.data === "success") {
                alert("회원가입이 완료되었습니다.");
                router.push('/login/user/');
            } else {
                alert(data.message);
            }
    
        } catch (error) {
            console.error('Error:', error);
            alert('Error during registration');
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className='md:w-[600px] h-full w-[90%] mb-16 md:mb-[200px] flex flex-col gap-[35px]'>
                <div className='flex flex-col gap-[20px]'>
                    <div className='text-[23px] noto-sans-kr-bold'>아이디</div>
                    <input onChange={(e) => handleChange(e, 'user_id')} type="text" placeholder='이름을 입력해주세요.'
                        className='w-full md:h-[50px] md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-6 border-[#D7D7D7]' />
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <div className='text-[23px] v'>비밀번호</div>
                    <input onChange={(e) => handleChange(e, 'password')} type="password" placeholder='비밀번호를 입력해주세요.'
                        className='w-full md:h-[50px] md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-6 border-[#D7D7D7]' />
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <div className='text-[23px] noto-sans-kr-bold'>강아지 사진</div>
                    <label
                        htmlFor="file-upload"
                        style={{ cursor: 'pointer', display: 'block', marginBottom: '10px', border: '2px solid #D7D7D7' }}
                        className="flex flex-col justify-center bg-[#F8F8F8] items-center md:w-[600px] w-[280px] h-[104px] md:h-[195px] overflow-hidden"
                    >
                        {uploadedImage ? (
                            <img
                                src={uploadedImage}
                                alt="Uploaded"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="flex flex-col items-center justify-center mt-7 md:mt-12">
                                <div className="md:w-[38px] md:h-[48px] w-[21px] h-[21px]">
                                    <Image
                                        src="/Uploadimg.png"
                                        alt="Upload Icon"
                                        height={50}
                                        width={50}
                                        className="w-full h-full"
                                    />
                                </div>
                                <p className="md:text-[16px] text-[#939393] text-[11px] noto-sans-kr">이미지 업로드</p>
                            </div>
                        )}
                    </label>
                    <input
                        type="file"
                        id="file-upload"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: 'none' }}
                    />
                </div>
                <div className='flex  w-full gap-2 justify-between'>
                    <div className='flex flex-col gap-[20px]'>
                        <div className='md:text-[23px] text-[12px] noto-sans-kr-bold'>강아지 이름 </div>
                        <input onChange={(e) => handleChange(e, 'dog_name')} type="text" placeholder='이름을 입력하세요.'
                            className='md:w-[300px] w-[140px] placeholder:text-start md:placeholder:text-[16px] placeholder:text-[10px] md:h-[50px] border-[2px] px-6 border-[#D7D7D7]' />
                    </div>
                    <div className='flex flex-col gap-[20px]'>
                        <div className='md:text-[23px] text-[12px] noto-sans-kr-bold'>생년월일</div>
                        <div className='relative '>
                            <input onChange={(e) => {
                                handleChange(e, 'dog_date_of_birth')
                                console.log("e.target.value", e.target.value)
                            }} type="date"
                                ref={dateInputRef}
                                value={user_info.dog_date_of_birth}
                                placeholder='생년월일'
                                className='md:w-[300px] placeholder:text-start w-[140px] md:h-[50px] border-[2px] px-6 border-[#D7D7D7] md:placeholder:text-[16px] placeholder:text-[10px]'
                            />
                            <div className="md:w-[24px] absolute right-2 md:right-7 top-1/2 transform -translate-y-1/2 md:h-[24px] w-[12px] h-[12px] "
                                onClick={handleCalendarClick}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-[290px] md:w-full ">
                    <div className='text-[23px] noto-sans-kr-bold'>강아지 신체 정보</div>
                    <div className="flex  md:gap-4  gap-1">
                        <div className="md:w-[230px] w-[110px] h-[31px] relative md:h-[50px]">
                            <input
                                onChange={(e) => handleChange(e, 'dog_body_kg')}
                                type="text" placeholder='몸무게'
                                className='w-full h-full md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-2 border-[#D7D7D7]' />
                            <span className="absolute md:text-[16px] text-[11px] noto-sans-kr text-[#939393] md:right-3 right-2 md:mt-3 mt-2"> kg</span>
                        </div>
                        <div className="md:w-[230px] w-[110px] h-[31px] relative  md:h-[50px]">
                            <input
                                onChange={(e) => handleChange(e, 'dog_body_shape')}
                                type="text" placeholder='체고'
                                className='w-full h-full md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-2 border-[#D7D7D7]' />
                            <span className="absolute text-[11px] md:text-[16px] noto-sans-kr md:right-3 text-[#939393] md:mt-3 right-2 mt-2"> cm</span>
                        </div>
                        <div className="md:w-[230px] w-[110px] h-[31px] relative md:h-[50px]">
                            <input
                                onChange={(e) => handleChange(e, 'dog_body_length')}
                                type="text" placeholder='등길이'
                                className='w-full h-full md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-2 border-[#D7D7D7]' />
                            <span className="absolute text-[11px] noto-sans-kr md:text-[16px] text-[#939393]  md:right-3 md:mt-3 right-16 mt-2"> cm</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='text-[23px] noto-sans-kr-bold'>강아지 견종</div>
                        <input
                            onChange={(e) => handleChange(e, 'dog_type')}
                            type="text" placeholder='강아지 견종을 입력하세요.'
                            className='w-full md:h-[50px] md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-6 border-[#D7D7D7]' />
                    </div>
                </div>
                <div>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='text-[23px] noto-sans-kr-bold'>주소</div>
                        <input
                            onChange={(e) => handleChange(e, 'address')}
                            type="text" placeholder='주소를 입력하세요.'
                            className='w-full md:h-[50px] md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-6 border-[#D7D7D7]' />
                    </div>
                </div>
                <div className=" flex flex-row gap-4">
                    <div className='flex flex-col gap-[10px]'>
                        <div className='text-[23px] noto-sans-kr-bold'>휴대전화 번호</div>
                        <input
                            onChange={(e) => handleChange(e, 'phone')}
                            type="text" placeholder='01012345678 (-없이)'
                            className='w-[170px] md:w-[443px] md:h-[50px] md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-6 border-[#D7D7D7]' />
                            
                    </div>
                    <button className="w-[81px] md:w-[167px] md:h-[50px] md:text-[16px] mt-11 bg-[#333333] h-[31px] noto-sans-kr-bold text-white text-[11px]"> 인증번호 전송 </button>
                </div>
                <div className="flex flex-row  gap-4">
                    <div className="flex flex-row">
                        <div className='flex flex-col gap-[10px]'>
                            
                            <input
                                onChange={(e) => handleChange(e, 'address_detail')}
                                type="text" placeholder='인증번호 입력'
                                className='w-[130px] md:w-[349px] md:h-[50px] md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-6 border-[#D7D7D7]' />
                        </div>
                        <button className="w-[45px] md:w-[90px] md:h-[50px]  noto-sans-kr-bold text-white text-[11px] md:text-[16px]  bg-[#333333]">
                            확인
                        </button>
                    </div>
                    <button className="w-[86px] md:w-[167px] md:h-[50px] md:text-[16px]  bg-[#333333] h-[31px] noto-sans-kr-bold text-white text-[11px]"> 재전송</button>
                </div>
                <div className=" flex flex-col gap-[17px]">
                    <div className='flex flex-col gap-[10px]'>
                        <div className='text-[23px] noto-sans-kr-bold'>이메일</div>
                        <input
                            onChange={(e) => handleChange(e, 'email')}
                            type="text" placeholder='이메일 주소를 입력하세요.'
                            className='w-full md:h-[50px] md:placeholder:text-[16px] placeholder:text-[11px] border-[2px] px-6 border-[#D7D7D7]' />
                    </div>
                    <div className=" md:text-[17px] text-[8px]  text-[#939393] noto-sans-kr">
                        <p>서비스 알림, 이벤트, 프로모션 등 다양한 정보를 이메일로 전달해드립니다.</p>
                        <p>비밀번호를 잊은 경우 이메일을 통해 발송되기 때문에 입력을 권장합니다.</p>
                    </div>
                </div>
                <div>
                    <div className=" flex gap-2 ">
                        <div>
                            <input
                                onClick={() => {
                                    setUserInfo({ ...user_info, agree1: !user_info.agree1 });
                                }}
                                type="checkbox"
                                className="md:h-5 md:w-5 h-[13px] w-[13px] text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                        </div>
                        <div className="text-[11px] md:text-[17px] text-[#363940] noto-sans-kr">
                            <span className="border-b-2 border-[#65B8FD] text-[#65B8FD]">서비스 이용</span> ,
                            <span className="border-b-2 border-[#65B8FD] text-[#65B8FD]">개인정보 수집</span> ,
                            <span className="border-b-2 border-[#65B8FD] text-[#65B8FD]">위치정보</span> 활용 동의
                        </div>
                    </div>
                    <div className=" flex gap-2 ">
                        <div>
                            <input
                                onClick={() => {
                                    setUserInfo({ ...user_info, agree2: !user_info.agree2 });
                                }}
                                type="checkbox"
                                className="md:h-5 md:w-5 h-[13px] w-[13px] text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                        </div>
                        <div className="text-[11px] md:text-[17px] text-[#363940] noto-sans-kr">
                            마케팅 정보 수신 동의(선택)
                        </div>
                    </div>
                </div>
                <div className="border boderd-b-2 border-[#D7D7D7]"></div>
                <div className=" h-[42px] md:h-[80px] bg-[#FFC800] rounded-2xl ">
                    <button onClick={handleLogin} className="w-full h-full flex items-center justify-center text-[#000000] md:text-[23px] text-[14px]">
                        회원가입
                        {/* {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} */}
                    </button>
                </div>
            </div>
        </>
    );
}
