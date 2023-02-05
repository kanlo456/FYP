import { useState } from 'react'
import {useSurvey} from "../hooks/useSurvey"

// import signIn from "./SignIn";

const Survey = () => {
    const [friendStfLV, setFriendStfLV] = useState('')
    const [knowlegStfLV, setKnowlegStfLV] = useState('')
    const [quickStfLV, setQuickStfLV] = useState('')
    const [useAgain, setUseAgain] = useState('')
    const [improve, setImprove] = useState('')
    const {createSurvey,error,isLoading} = useSurvey()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Sruvey has been created")
        await createSurvey(friendStfLV,knowlegStfLV,quickStfLV,useAgain,improve)
    }
    
    return(
        <form className="worknote" onSubmit={handleSubmit}>
       <label>Service Friendly:</label>
            <select
                onChange={(e)=>setFriendStfLV(e.target.value)}
                value={friendStfLV}
            >
                <option value="1">Very unsatisfied</option>
                <option value="2">Unsatisfied</option>
                <option value="3">Neutral</option>
                <option value="4">Satisfied</option>
                <option value="5">Very satisfied</option>
            </select>

            <label>Service Knowleg:</label>
            <select
                onChange={(e)=>setKnowlegStfLV(e.target.value)}
                value={knowlegStfLV}
            >
                <option value="1">Very unsatisfied</option>
                <option value="2">Unsatisfied</option>
                <option value="3">Neutral</option>
                <option value="4">Satisfied</option>
                <option value="5">Very satisfied</option>
            </select>

            <label>Service Quickness:</label>
            <select
                onChange={(e)=>setQuickStfLV(e.target.value)}
                value={quickStfLV}
            >
                <option value="1">Very unsatisfied</option>
                <option value="2">Unsatisfied</option>
                <option value="3">Neutral</option>
                <option value="4">Satisfied</option>
                <option value="5">Very satisfied</option>
            </select>

            <label>Would you use customer Service in the future ?</label>
            <select
                onChange={(e)=>setUseAgain(e.target.value)}
                value={useAgain}
            >
                <option value="1">Yes</option>
                <option value="0">No</option>
                <option value="2">May be</option>
            </select>

            <label>How can we improve our service?</label>
            <input
                type="string"
                onChange={(e)=>setImprove(e.target.value)}
                value={improve}
            />
     

            <button disabled={isLoading}>Create</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}
export default Survey