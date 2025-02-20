import { createClient } from '@/utils/supabase/server';

export default async function Notes() {
    const supabase = await createClient();

    // Replace 'column_name' with the actual column you want to filter by
    // Replace 'value' with the value you are looking for
    const { data, error } = await supabase
      .from('user')
      .select('*')
      .eq('user_id', 'admin')
      .eq('password', 'admin');
  
    if (error) {
      console.error('Error fetching data:', error);
      return;
    }
  
    if (data.length > 0) {
      console.log('Data found:', data);
    } else {
      console.log('No data found matching the condition.');
    }
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}