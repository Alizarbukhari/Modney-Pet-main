'use client'
import useAuth from "@/hooks/useAuth"

export default function AdminLayout({ children }) {
  const userData = useAuth();
  if (!userData.valid) {
    return <div></div>;
  }
  return children;
}