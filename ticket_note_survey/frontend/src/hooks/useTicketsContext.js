import { TicketContext } from "../context/TicketContext";
import { useContext } from "react";

export const useTicketsContext = ()=>{
    const context = useContext(TicketContext)

    if(!context){
        throw Error('useTicketsContext must be used inside an TicketsContextProvider')
    }

    return context
}