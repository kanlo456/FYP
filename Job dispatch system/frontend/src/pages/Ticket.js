import { useState } from 'react'
import {useTicket} from "../hooks/useTicket"

import signIn from "./SignIn";

const TicketCust = () => {
    const [caller, setcaller] = useState('')
    const [category, setcategory] = useState('')
    const [subcategory, setsubcategory] = useState('')
    const [service, setservice] = useState('')
    const [offering, setoffering] = useState('')
    const [configItem, setconfigItem] = useState('')
    const [contactType, setcontactType] = useState('')
    const [state, setstate] = useState('')
    const [impact, setimpact] = useState('')
    const [urgency, seturgency] = useState('')
    const [priority, setpriority] = useState('')
    const [assignmentGroup, setassignmentGroup] = useState('')
    const [assigned, setassigned] = useState('')
    const [shortDesciption, setshortDesciption] = useState('')
    const [Description, setDescription] = useState('')
    const {insert, error, isLoading} = useTicket()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(caller+"'s ticket has been created")
        await insert(caller, category, subcategory, service, offering, configItem, contactType, state, impact, urgency, priority, assignmentGroup, assigned, shortDesciption, Description)
    }
    
    return(
        <form className="ticket" onSubmit={handleSubmit}>
            <h3>Ticket System</h3>
            <label>Caller:</label>
            <input
                type="string"
                onChange={(e)=>setcaller(e.target.value)}
                value={caller}
            />

            <label>Category:</label>
            <select
                onChange={(e)=>setcategory(e.target.value)}
                value={category}
            >
                <option value="hardware">Hardware</option>
                <option value="software">Software</option>
            </select>

            <label>Sub Category:</label>
            <input
                type="string"
                onChange={(e)=>setsubcategory(e.target.value)}
                value={subcategory}
            />

            <label>Service:</label>
            {/*<input*/}
            {/*    type="string"*/}
            {/*    onChange={(e)=>setservice(e.target.value)}*/}
            {/*    value={service}*/}
            {/*/>*/}
            <select
                onChange={(e)=>setservice(e.target.value)}
                value={service}
            >
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
            </select>

            <label>Offering:</label>
            <input
                type="string"
                onChange={(e)=>setoffering(e.target.value)}
                value={offering}
            />

            <label>Config Item:</label>
            <input
                type="string"
                onChange={(e)=>setconfigItem(e.target.value)}
                value={configItem}
            />

            <label>Contact Type:</label>
            {/*<input*/}
            {/*    type="string"*/}
            {/*    onChange={(e)=>setcontactType(e.target.value)}*/}
            {/*    value={contactType}*/}
            {/*/>*/}
            <select
                onChange={(e)=>setcontactType(e.target.value)}
                value={contactType}
            >
                <option value="email">Email</option>
                <option value="mobile phone">Mobile Phone</option>
            </select>

            <label>State:</label>
            {/*<input*/}
            {/*    type="string"*/}
            {/*    onChange={(e)=>setstate(e.target.value)}*/}
            {/*    value={state}*/}
            {/*/>*/}
            <select
                onChange={(e)=>setstate(e.target.value)}
                value={state}
            >
                <option value="on create">On Create</option>
                <option value="holding">Holding</option>
                <option value="on progress">On Progress</option>
                <option value="solved">Solved</option>
            </select>

            <label>Impact:</label>
            {/*<input*/}
            {/*    type="string"*/}
            {/*    onChange={(e)=>setimpact(e.target.value)}*/}
            {/*    value={impact}*/}
            {/*/>*/}
            <select
                onChange={(e)=>setimpact(e.target.value)}
                value={impact}
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>


            <label>Urgency:</label>
            {/*<input*/}
            {/*    type="string"*/}
            {/*    onChange={(e)=>seturgency(e.target.value)}*/}
            {/*    value={urgency}*/}
            {/*/>*/}
            <select
                onChange={(e)=>seturgency(e.target.value)}
                value={urgency}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <label>Priority:</label>
            {/*<input*/}
            {/*    type="string"*/}
            {/*    onChange={(e)=>setpriority(e.target.value)}*/}
            {/*    value={priority}*/}
            {/*/>*/}

            <select
                onChange={(e)=>setpriority(e.target.value)}
                value={priority}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <label>Assignment Group:</label>
            {/*<input*/}
            {/*    type="string"*/}
            {/*    onChange={(e)=>setassignmentGroup(e.target.value)}*/}
            {/*    value={assignmentGroup}*/}
            {/*/>*/}
            <select
                onChange={(e)=>setassignmentGroup(e.target.value)}
                value={assignmentGroup}
            >
                <option value="hardware">hardware</option>
                <option value="software">software</option>
            </select>

            <label>Assigned to:</label>
            <input
                type="string"
                onChange={(e)=>setassigned(e.target.value)}
                value={assigned}
            />

            <label>Short Description:</label>
            <input
                type="string"
                onChange={(e)=>setshortDesciption(e.target.value)}
                value={shortDesciption}
            />

            <label>Description:</label>
            <input
                type="string"
                onChange={(e)=>setDescription(e.target.value)}
                value={Description}
            />

            <button disabled={isLoading}>Create</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}
export default TicketCust