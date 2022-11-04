import {Todo} from './components/Todo';
import React, {useState} from 'react';
import './App.css';
import {MyHeader} from './components/MyHeader';
import {QueryClient, QueryClientProvider} from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient();

function App() {
  console.log('password:', process.env.REACT_APP_PASSWORD)
  const [isLoggedIn,setIsLoggedIn]=useState(true)

  return (
      
    <QueryClientProvider client={queryClient}>
    
    <MyHeader isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    {isLoggedIn? <Todo/> :<p className="text-center p-3 border rounded shadow">Bejelentkezés szükséges</p>}
    </QueryClientProvider>
      
  );
}

export default App;