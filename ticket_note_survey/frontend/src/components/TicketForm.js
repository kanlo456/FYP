import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { useAuthContext } from "../hooks/useAuthContext"; //**
// import { useTicketsContext } from "../hooks/useTicketsContext"

const TicketForm = ()=>{
    //part for edit the ticket
const {id} = useParams()
const {user} = useAuthContext()
useEffect(()=>{
    if(id){
        getSingleTicket(id)
    }
},[id])

const getSingleTicket = async(id)=>{
    const response = await axios.get(`/api/tickets/${id}`)
    if(response.status === 200){
      setCaller(response.data.caller)
        setCategory(response.data.category)
        setSubcategory(response.data.subcategory)
        setService(response.data.service)
        setOffering(response.data.offering)
        setConfigItem(response.data.configItem)
        setContactType(response.data.contactType)
        setState(response.data.state)
        setImpact(response.data.impact)
        setPriority(response.data.priority)
        setAssignmentGroup(response.data.assignmentGroup)
        setAssignedTo(response.data.assignedTo)
        setDescription(response.data.description)
        setShortDescription(response.data.shortDescription)
        setUser_id(response.data.user_id)
    }
}

    // const{dispatch} = useTicketsContext()//make page syn with db

    const [caller,setCaller] = useState('')
    const [category,setCategory] = useState('')
    const [subcategory,setSubcategory] = useState('')
    const [service,setService] = useState('')
    const [offering,setOffering] = useState('')
    const [configItem,setConfigItem] = useState('')
    const [contactType,setContactType] = useState('')
    const [state,setState] = useState('')
    const [impact,setImpact] = useState('')
    const [priority,setPriority] = useState('')
    const [assignmentGroup,setAssignmentGroup] = useState('')
    const [assignedTo,setAssignedTo] = useState('')
    const [description,setDescription] = useState('')
    const [shortDescription,setShortDescription] = useState('')
    const [user_id,setUser_id] = useState('')
    const [error,setError] = useState(null)

    const handleSubmit = async(event) =>{
        event.preventDefault()

        if(!user){ //**
            setError('You muust be login')
            return 
        }
        
        const ticket ={caller,category,subcategory,service,offering,configItem,contactType,state,
        impact,priority,assignmentGroup,assignedTo,description,
        shortDescription,user_id}
        
        if(!id){ 
            const response = await fetch('/api/tickets',{
        method:'POST',
        body:JSON.stringify(ticket),
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${user.token}`
        }
    })
        }else{
            const response = await fetch(`/api/tickets/${id}`,{
                method:'PATCH',
                body:JSON.stringify(ticket),
                headers:{ // **
                    'Content-Type':'application/json'
                }
            })
        }
    }

    

    return(
        <form className="ticket" onSubmit={handleSubmit}>
            <h3>Ticket System</h3>
            <label>Caller:</label>
            <input
                type="string"
                id="caller" 
              name='caller'
                onChange={(e)=>setCaller(e.target.value)}
                value={caller}
            />

            <label>Category:</label>
            <select
                onChange={(e)=>setCategory(e.target.value)}
                value={category}
            >
                <option value=" "> </option>
                <option value="hardware">Hardware</option>
                <option value="software">Software</option>
            </select>

            <label>Sub Category:</label>
            <input
                type="string"
                onChange={(e)=>setSubcategory(e.target.value)}
                value={subcategory}
            />

            <label>Service:</label>
            <select
                onChange={(e)=>setService(e.target.value)}
                value={service}
            >
                <option value=" "> </option>
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
            </select>

            <label>Offering:</label>
            <input
                type="string"
                onChange={(e)=>setOffering(e.target.value)}
                value={offering}
            />

            <label>Config Item:</label>
            <input
                type="string"
                onChange={(e)=>setConfigItem(e.target.value)}
                value={configItem}
            />

            <label>Contact Type:</label>
            <select
                onChange={(e)=>setContactType(e.target.value)}
                value={contactType}
            >                
                <option value=" "> </option>
                <option value="email">Email</option>
                <option value="mobile phone">Mobile Phone</option>
            </select>

            <label>State:</label>
            <select
                onChange={(e)=>setState(e.target.value)}
                value={state}
            >
                <option value=" "> </option>
                <option value="on create">On Create</option>
                <option value="holding">Holding</option>
                <option value="on progress">On Progress</option>
                <option value="solved">Solved</option>
            </select>

            <label>Impact:</label>
            <select
                onChange={(e)=>setImpact(e.target.value)}
                value={impact}
            >
                <option value=" "> </option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <label>Priority:</label>
            <select
                onChange={(e)=>setPriority(e.target.value)}
                value={priority}
            >
                <option value=" "> </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <label>Assignment Group:</label>
            <select
                onChange={(e)=>setAssignmentGroup(e.target.value)}
                value={assignmentGroup}
            >
                <option value=" "> </option>
                <option value="hardware">hardware</option>
                <option value="software">software</option>
                <option value="network">network</option>
            </select>

            <label>Assigned to:</label>
            <input
                type="string"
                onChange={(e)=>setAssignedTo(e.target.value)}
                value={assignedTo}
            />

            <label>Short Description:</label>
            <input
                type="string"
                onChange={(e)=>setShortDescription(e.target.value)}
                value={shortDescription}
            />

            <label>Description:</label>
            <input
                type="string"
                onChange={(e)=>setDescription(e.target.value)}
                value={description}
            />  
            <button id="btn">Submit</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}
export default TicketForm