import React, { useEffect } from 'react';
import './App.css';
import { decrement, increment } from './Components/Redux/Main.slice';
import { useAppDispatch, useAppSelector } from './Components/Hooks/ReduxHook';
import { fetchUsers } from './Components/Redux/actions';

const App: React.FC = () => {
  const {count, error, isloading, users} = useAppSelector(state=> state.counter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
    console.log(users)
  }, [])

  if(isloading) return <h1>loading...</h1>

  return (
    <>
      <div>
        <h1>hello!</h1>
        {users.map(({id, name, email}) => {
          <div key={id}>
            <h1>{name}</h1>
            <h1>{email}</h1>
          </div>
        })}
        {error && <h1>{error}</h1>}
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
    </>
  );
};

export default App;
