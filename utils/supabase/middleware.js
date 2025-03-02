import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export const createClient = (request) => {
  let response = NextResponse.next({
    request: { headers: request.headers }
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          // Sirf RESPONSE cookies ko update karo
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set({
              name,
              value,
              ...options // Options add karo (path, secure, etc.)
            });
          });
        },
        removeAll(cookiesToRemove) {
          cookiesToRemove.forEach(({ name, options }) => {
            response.cookies.set({
              name,
              value: "",
              ...options,
              maxAge: 0 // Cookie delete karne ke liye
            });
          });
        }
      }
    }
  );

  return { supabase, response };
};