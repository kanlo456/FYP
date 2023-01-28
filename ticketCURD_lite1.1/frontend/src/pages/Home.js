import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"

function H2() {
  const[data,setData] = useState([])
  
  useEffect(()=>{
    getUsers()
  })

  const getUsers = async()=>{
    const response = await axios.get("/api/tickets/")
    if(response.status === 200){
      setData(response.data)
    }
  }

  const onDeleteTicket = async (id) =>{
    if(
      window.confirm(`Are you sure to delete the ticket?`)
    ){
      const response = await axios.delete(`/api/tickets/${id}`)
      if(response.status === 200){
        //console.log(response.data)
        getUsers()
      }
    }
  }
  
  //console.log("data=>",data)

  return (
    <div style={{marginTop:"150px"}}>
      <table className='styled-table'>
        <thead>
          <tr>
            <th style={{textAlign:"center"}}>No.</th>
            <th style={{textAlign:"center"}}>Name</th>
            <th style={{textAlign:"center"}}>Servic</th>
            <th style={{textAlign:"center"}}>Assign To</th>
            <th style={{textAlign:"center"}}>Description</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item,index)=>{
            return(
              <tr key={index}>
                <th scope='row'>{index+1}</th>
                <td>{item.caller}</td>
                <td>{item.service}</td>
                <td>{item.assignedTo}</td>
                <td>{item.shortDescription}</td>
                <td>
                  <Link to={`/update/${item._id}`}>
                    <button className='btnEdit'>Edit</button>
                  </Link>
                    <button className='btnDelete' onClick={()=>onDeleteTicket(item._id)}>Delete</button>

               </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default H2