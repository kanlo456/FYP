import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useWorknote = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch, user } = useAuthContext();

  const createWorknote = async (notes, ticket_id) => {
    setIsLoading(true);
    setError(null);
    
    const response = await fetch("/api/worknotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({notes, ticket_id}),
    });
    //asynchronous method for get json data
    console.error();
    const json = await response.json();
    //can't get the json data
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // //save the user to local storage
      // localStorage.setItem('worknote',JSON.stringify(json))

      // //update the auth context
      // dispatch({type:'LOGIN',payload:json})
      console.log("WorkNotes OK!");
      setIsLoading(false);
    }
  };
  return { createWorknote, isLoading, error };
};
