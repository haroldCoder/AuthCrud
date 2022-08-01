import React from 'react'
import { useTask } from '../context/TaskContext'
import { useEffect } from 'react'
import Card from '../utils/cards.js'


export default function TaskList() {
    const { tasks, getTasks } = useTask()
    useEffect(() => {
        getTasks()
    }, [])
    return (
        <div className='container flex p-9'>
            {
                tasks.map(task => {
                    return <Card key={task.id} name={task.name} id={task.id} done={task.done} />
                }
                )
            }
        </div>
    )
}
