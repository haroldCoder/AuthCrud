import './App.css';
import Login from './pages/Login';
import {BrowserRouter, Route, useNavigate, Routes} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import {useEffect} from 'react';
import {supabase} from './supabase/client';
import { TaskContextProvider } from './context/TaskContext';

let navigate;
function Nav(){
  navigate = useNavigate();
}

function App() {
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if(!session) {
        navigate('/login')
      }
      else {
        navigate('/')
      }
    }
    )
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <TaskContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </TaskContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
