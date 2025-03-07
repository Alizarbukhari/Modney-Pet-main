import { createClient } from '@/utils/supabase/server';

export async function GET(req) {
  const supabase = await createClient();
  console.debug("Supabase client created successfully");
  console.debug("Fetching data from 'user' table...");

  // Query the user table to get the dog_name and imageName for all users
  let { data, error } = await supabase
    .from('user')
    .select('dog_name, imageName,dog_date_of_birth');
    
  console.debug("Query result - Data:", data, "Error:", error);

  if (error) {
    console.error("Error while fetching data:", error);
    return new Response(JSON.stringify({ message: 'Error fetching data', error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (data && data.length > 0) {
    console.info("Data fetched successfully:", data);
    return new Response(JSON.stringify({ message: 'Data fetched successfully', data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    console.warn("No users found in the database.");
    return new Response(JSON.stringify({ message: 'No users found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
