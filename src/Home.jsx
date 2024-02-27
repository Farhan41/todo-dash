import React, { useEffect } from 'react'
import Create from './Create'
import { useState } from 'react';
import './App.css'
import axios from 'axios'
import { BsFillCircleFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BiCheckCircle } from "react-icons/bi";

// <BiCheckCircle />

function Home() {
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
      axios.get('http://localhost:8000/get')
      .then((result)=>{
        setTodos(result.data)
      })
      
    },[])

    let handleEdit =(id)=>{
      axios.put('http://localhost:8000/update/' +id)
      .then((result)=>{
        location.reload()
      })
    }

    let handleDelete = (id) => {
      axios.delete('http://localhost:8000/delete/' +id)
      .then((result)=>{
        location.reload()
      })
    }

  return (
   <div className='home'>
     <h2 className='font-bold text-xl'>Todo List</h2>
     <Create/>
     {
        todos.length == 0
        ?
        <div><h2 className='text-sm text-red-400'>No Records</h2></div>
        :
        todos.map((item, index)=>(
            <div className='task'>

              <div className='checkbox' onClick={()=>handleEdit(item._id)}>
                {item.done
                ?
                <BiCheckCircle className="icon" />
                :
                <BsFillCircleFill className="icon" />
                }
                <p
                className={
                  item.done
                  ?
                  "line_through"
                  :
                  ""
                }
                >
                  {item.task}
                </p>
              </div>

              <div>
                <span>
                <BsFillTrashFill className="icon"
                onClick=
                {()=>handleDelete(item._id)}
                />
                </span>
              </div>
            </div>
        ))
        
     }
   </div>
    
  )
}

export default Home