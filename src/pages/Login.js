import React, {useEffect, useState} from 'react'
import {supabase} from '../supabase/client'
import {useNavigate} from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const res = await supabase.auth.signIn({
                email,
            })
            console.log(res);
        }
        catch{
            console.log('error')
        }
    } 
    useEffect(() => {
        if (supabase.auth.user()) {
            navigate('/')
        }
    }
    , [navigate])
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder='youremail@site.com' onChange={e => setEmail(e.target.value)} />
            <button>Send</button>
        </form>
    </div>
  )
}

export default Login

