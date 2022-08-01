import React, { Component } from "react";
import { supabase } from "../supabase/client";

export default class TaskForm extends Component{
    state = {
        task: "",
        description: "",
    }
    handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const user = supabase.auth.user()
            const res = await supabase.from("tasks").insert({
                name: this.state.task,
                userid: user.id,
            }) 
            }
            catch (err){
                console.log(err)
        }
    }
    render(){
        return(
            <div>
                <form className="mt-4" onSubmit={this.handleSubmit}>
                    <input className="w-60 border-gray-300 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" type="text" name="taskName" placeholder="write a task name"
                    onChange={e=>this.setState({task: e.target.value})} />
                    <button className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
                </form>
            </div>
        )
    }
}