import PropTypes from 'prop-types'
import { supabase } from '../supabase/client';
import $ from 'jquery';
import { useTask } from '../context/TaskContext'
import React, { PureComponent, useEffect } from 'react'

export default function Cards(props){
  const { tasks, getTasks } = useTask()

  async function onChangeCheckbox (e, id) {
    await supabase.from("tasks").update({"done": e.target.checked}).eq("id", id)
    getTasks()
  }
  async function RemoveTasks(id){
    await supabase.from("tasks").delete(id).eq("id", id)
    getTasks()
  }
    return (
      <div className='bg-black card text-left'>
        <h4 className='text-blue-500'>{props.name}</h4>
        <section className='flex justify-between pt-3 px-2'>
        <p className='text-white'>ID: {props.id}</p>
        <div className='flex align-center'>
          <input className={props.name+" checkbox form-check-input mt-0"} checked={props.done} id={props.name} type="checkbox" onClick={(e)=>{onChangeCheckbox(e, props.id)}} />
          <span className="remove material-icons text-red-600 ml-2" onClick={()=>RemoveTasks(props.id)}>do_not_disturb_on</span>
        </div>
        </section>
      </div>
    )
}
