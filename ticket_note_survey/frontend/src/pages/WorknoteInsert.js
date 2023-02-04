import { useState } from 'react'
import {useWorknote} from "../hooks/useWorknote"

// import signIn from "./SignIn";

const Worknote = () => {
    const [notes, setticketNotes] = useState('')
    const {createWorknote,error,isLoading} = useWorknote()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Worknote has been created")
        await createWorknote(notes)
    }
    
    return(
        <form className="worknote" onSubmit={handleSubmit}>
            
            <label>Notes:</label>
            <input
                type="string"
                onChange={(e)=>setticketNotes(e.target.value)}
                value={notes}
            />

            <button disabled={isLoading}>Create</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}
export default Worknote