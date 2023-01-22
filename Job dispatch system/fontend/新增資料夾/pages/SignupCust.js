import {useState} from 'react'
import{useCustSignup} from "../hooks/useCustSignup"

const SignupCust = () =>{
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const {signup, error, isLoading} = useCustSignup()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        // console.log(email,password)
        await signup(username,password,email,firstname,lastname)
    }

    return(
        <form className='signup' onSubmit={handleSubmit}>
        <h3>Sign up</h3>

        <label>User Name:</label>
        <input
            type="string"
            onChange={(e)=>setUsername(e.target.value)}
            value={username}
        />

        <label>Password:</label>
        <input
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
        />

        <label>Email:</label>
        <input
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
        />

        <label>Fist Name:</label>
        <input
            type="string"
            onChange={(e)=>setFirstname(e.target.value)}
            value={firstname}
        />

        <label>Last Name:</label>
        <input
            type="string"
            onChange={(e)=>setLastname(e.target.value)}
            value={lastname}
        />

        <button disabled={isLoading}>Sign up</button>
        {error && <div className='error'>{error}</div>}
        </form>
    )
}
export default SignupCust