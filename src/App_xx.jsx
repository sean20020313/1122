import { ToastContainer } from 'react-toastify';
import { nanoid } from 'nanoid';
import Form_xx from './Form_xx';
import Items_40 from './Items_40';
import { useState } from 'react';
const defaultItems = [
  { id: nanoid(), title: 'walk the dog', isDone: false },
  { id: nanoid(), title: 'wash dishes', isDone: false },
  { id: nanoid(), title: 'drink coffee', isDone: true },
  { id: nanoid(), title: 'take a nap', isDone: false },
];
const App_xx = () => {
  const [items, setItems] = useState(defaultItems);
  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form_xx />
      <Items_40 items={items} />
    </section>
  );
};
export default App_xx;
