import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/client";

export const TaskContext = createContext();

export const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) throw new Error("useTask must be used within a TaskContextProvider");

    return context;
}

export const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const getTasks = async () => {
       const res = await supabase.from("tasks").select()
       setTasks(res.data)
    }
    const updateTask = async (done) => {
        await supabase.from("tasks").update(done)
    }
    return <TaskContext.Provider value={{tasks, getTasks, updateTask}}>
        {children}
    </TaskContext.Provider>
}