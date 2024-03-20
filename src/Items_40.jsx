import SingleItem_40 from './SingleItem_40';
import { useQuery } from '@tanstack/react-query';

import { supabase } from './db/SupabaseClient.jsx';

const Items_40 = ({ items }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['task'],
    queryFn: async () => {
      try {
        let { data, error } = await supabase.from('task_40').select('*');
        console.log('data', data);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  console.log('tasks', data);

  if (isLoading) {
    return <p style={{ marginTop: '1rem' }}>Loading...</p>;
  }
  if (error) {
    return <p style={{ marginTop: '1rem' }}>{error.response.data}</p>;
  }
  return (
    <div className='items'>
      {data.map((item) => {
        return <SingleItem_40 key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items_40;
