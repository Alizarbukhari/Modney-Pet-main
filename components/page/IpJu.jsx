'use client'
import React, {useState, useEffect} from 'react';

import changeSerialCode from '@/hooks/changeSerial'
import { getCookie } from '@/hooks/setCookie'

function IpJu() {

    const [serial, setSerial] = useState("");
    useEffect(()=>{
        const getserial = getCookie('user_serial');
        setSerial(getserial);

        if(getserial){
            let changedSerial = changeSerialCode(getserial);
            setSerial(changedSerial);
        }

    },[])
    
  return (
    <div
      className="w-full h-[100vh] flex justify-center items-center flex-col gap-10"
      style={{
        backgroundImage: "url('/backYellow.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='text-[2.5rem] font-[900] text-center'>분양이 완료되었습니다 <br></br> 25년 입주예정</div>
      <div
        className="relative bg-white border-[3px] border-[#000] flex flex-col items-center justify-center p-4 rounded shadow-lg"
        style={{ width: '400px', height: '50px' }} // Adjust width and height as needed
      >
        <div className="text-center text-[1.5rem] text-[#000] font-[700]">{serial? serial.apartment + " " + serial.building + " " + serial.unit : ""}</div>
      </div>
    </div>
  );
}

export default IpJu;