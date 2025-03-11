// File: /api/check_user/get_products.js
import { createClient } from '@/utils/supabase/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');

  const supabase = await createClient();
  let query = supabase
    .from('add_product_list')
    .select('*');

  if (category) {
    query = query.eq('category', category);
  }

  const { data, error } = await query;

  if (error) {
    return new Response(
      JSON.stringify({ message: 'Error fetching data', error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  return new Response(JSON.stringify({ data }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
