'use client'
import React from "react"

import { getCookie } from "@/hooks/setCookie"
import IpJu from "@/components/page/IpJu"
import changeSerialCode from "@/hooks/changeSerial"


function page() {
  
  return (
    <div>
      <IpJu></IpJu>
    </div>
  )
}

export default page