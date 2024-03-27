import {
  QueryClient,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { supabase } from './db/SupabaseClient';
import { toast } from 'react-toastify';

const SingleItem_40 = ({ item }) => {
  const queryClient = useQueryClient();

  // Edit Task Mutation
  const { mutate: editTask } = useMutation({
    mutationFn: async ({ taskId, isDone }) => {
      try {
        await supabase
          .from('task_40')
          .update({ is_done: isDone })
          .eq('id', taskId);
      } catch (error) {
        console.error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      });
      toast.success('Task updated');
    },
  });

  // Delete Task Mutation
  const { mutate: deleteTask } = useMutation({
    mutationFn: async ({ taskId }) => {
      try {
        await supabase.from('task_40').delete().eq('id', taskId);
      } catch (error) {
        console.error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      });
      toast.success('Task deleted');
    },
  });

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.is_done}
        onChange={() => editTask({ taskId: item.id, isDone: !item.is_done })}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.is_done ? 'line-through' : 'none',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => deleteTask({ taskId: item.id })} // 修正传递参数的方式
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem_40;
