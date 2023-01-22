import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useCustSignup = () =>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async(username,password,email,firstname,lastname)=>{
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/customer/signup',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({username,password,email,firstname,lastname})
        })
        //asynchronous method for get json data
        const json = await response.json()
        //can't get the json data
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            //save the customer to local storage
            localStorage.setItem('customer',JSON.stringify(json))

            //update the auth context 
            dispatch({type:'LOGIN',payload:json})

            setIsLoading(false)
        }
    }
    return{signup,isLoading,error}
}