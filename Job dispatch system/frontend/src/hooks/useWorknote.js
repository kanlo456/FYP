import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useWorknote = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch, user } = useAuthContext();
  const navigate = useNavigate();

  const createWorknote = async (notes, ticket_id) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/worknotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ notes, ticket_id }),
    });
    //asynchronous method for get json data
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
      navigate(0);
      setIsLoading(false);
    }
  };
  return { createWorknote, isLoading, error };
};
