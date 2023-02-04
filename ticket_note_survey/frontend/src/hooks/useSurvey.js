import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSurvey = () =>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch,user } = useAuthContext()

    const createSurvey = async(friendStfLV,knowlegStfLV,quickStfLV,useAgain,improve)=>{
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/surveys',{
            method:'POST',
            headers:{'Content-Type':'application/json',
            'Authorization':`Bearer ${user.token}`},
            body: JSON.stringify({friendStfLV,knowlegStfLV,quickStfLV,useAgain,improve})
        })
        //asynchronous method for get json data
        const json = await response.json()
        //can't get the json data
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            //save the user to local storage
            // localStorage.setItem('survey',JSON.stringify(json))

            //update the auth context 
            // dispatch({type:'LOGIN',payload:json})

            setIsLoading(false)
        }
    }
    return{createSurvey,isLoading,error}
}