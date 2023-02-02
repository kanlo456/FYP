import {createContext,useReducer} from 'react'
//keep the page refash data after the action
export const TicketContext = createContext()

export const ticketsReducer = (state,action) =>{
    switch(action.type){
        case'SET_TICKETS':
            return{
                tickets:action.payload
            }
        case'CREATE_TICKETS':
            return{
                tickets:[action.payload, ...state.tickets]
            }
        case 'DELETE_WORKOUT':
            return { 
                workouts: state.tickets.filter(t => t._id !== action.payload._id) 
            }
        default:
            return state
    }
}

export const TicketContextProvider = ({children}) =>{ //children = the App in index.js 
    const [state,dispatch] = useReducer(ticketsReducer,{
        tickets:null
    })

    return(
        <TicketContext.Provider value={{...state,dispatch}}>
            {children}
        </TicketContext.Provider>
    )
}