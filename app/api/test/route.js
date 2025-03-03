import { createClient } from '@/utils/supabase/server';

export async function GET(req) {
  const supabase = await createClient();

  // Query the user table to get the dog_name and imageName for all users
  let { data, error } = await supabase
    .from('user')
    .select('dog_name, imageName');

  if (error) {
    return new Response(JSON.stringify({ message: 'Error fetching data', error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // If data is found, return it, else return an appropriate message
  if (data && data.length > 0) {
    return new Response(JSON.stringify({ message: 'Data fetched successfully', data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    return new Response(JSON.stringify({ message: 'No users found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}


