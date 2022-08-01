import React from 'react'
import {useEffect} from 'react';
import {supabase} from '../supabase/client';
import {useNavigate} from 'react-router-dom';
import TaskForm from '../components/tasksForm';
import {TaskContext, useTask} from '../context/TaskContext';
import {useContext} from 'react';
import TaskList from '../components/TaskList';

function Home() {
  const navigate = useNavigate();
  const {tasks} = useTask();
  useEffect(() => {
    if (!supabase.auth.user()) {
      navigate('/login')
    }
  }, [navigate]);
  return (
    <div className='mt-2'><h2 className='text-black'>Home</h2>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>supabase.auth.signOut()} >Logut</button>
        <TaskForm />
        <TaskList/>
    </div>
  )
}

export default Home