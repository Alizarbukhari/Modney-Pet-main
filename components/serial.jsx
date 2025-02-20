'use client'
import React from 'react'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { setCookie} from '@/hooks/setCookie'
import changeSerialCode from '@/hooks/changeSerial'

function serial({isValid,setIsValid}) {
  const [serial, setSerial] = useState('');

  const handleChange = (e) => {
    setSerial(e.target.value);
  }

  const handleSearch = () => {
    try{
      axios.post('/api/check_user/check_serial', 
        {serial_number: serial}
    )
      .then(res => {
        if (res.data.valid === true) {
          setIsValid(true);
          alert('유효한 시리얼 번호입니다.'+ JSON.stringify(res.data.data[0]));
          console.log("res.data.data[0]",res.data.data[0]);
          setCookie('user_serial', res.data.data[0].serial_number, 30);

          console.log(res.data.data[0]);
        } else {
          alert('유효하지 않은 시리얼 번호입니다.');
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex flex-row justify-center items-center gap-2'>
      <Input onChange={handleChange}></Input>
      <Button className='bg-black text-white px-8 py-2 hover:bg-gray-800'
      onClick={handleSearch}
      >승인</Button>
    </div>
  )
}

export default serial