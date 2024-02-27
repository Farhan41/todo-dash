import React from 'react'
import './App.css'
import { useState } from 'react'
import axios from 'axios'

function Create()
{
    const [task, setTask] = useState()
    const handleAdd = () =>{
        axios.post('http://localhost:8000/create', {task: task})
        .then(result => console.log(result))
        .catch(err => console.log(err))
        location.reload();
    }

    return(
        <div className='create'>
            <input  type="text" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} />
            <button type='button' onClick={handleAdd}>Post</button>
        </div>
    )
}
export default Create