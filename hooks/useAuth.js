import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie } from './setCookie';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState({});
  const router = useRouter();

  useEffect(() => {
    const tokenEntry = document.cookie.split('; ').find(row => row.startsWith('userInfo='));
    if (!tokenEntry) {
      console.log('No token found');
      alert('로그인이 필요합니다.');
      router.push('/login');
      return;
    }

    const tokenValue = tokenEntry.split('=')[1];

    // Call the API to verify token
    fetch('/api/checkToken', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: tokenValue }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.valid) {
          
          setIsAuthenticated({valid : true, decoded : data.decoded.user_id,data:data.decoded});
          setCookie("user_serial",data.decoded.serial,30);

        } else {
          console.log('Token is invalid');
          router.push('/login');
        }
      })
      .catch(error => {
        console.log(tokenEntry)
        console.error('Token verification error:', error);
        router.push('/login');
      });
  }, [router]);

  return isAuthenticated;
};

export default useAuth;
