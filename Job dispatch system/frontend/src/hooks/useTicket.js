import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useTicket = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const insert = async (
    ticketNum,
    caller,
    category,
    subcategory,
    service,
    offering,
    configItem,
    contactType,
    state,
    impact,
    urgency,
    priority,
    assignmentGroup,
    assigned,
    shortDesciption,
    Description,
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/ticket/insert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ticketNum,
        caller,
        category,
        subcategory,
        service,
        offering,
        configItem,
        contactType,
        state,
        impact,
        urgency,
        priority,
        assignmentGroup,
        assigned,
        shortDesciption,
        Description,
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      //save the ticket to local storage
      localStorage.setItem("ticket", JSON.stringify(json));

      //update the ticket context
      dispatch({ type: "INSERT", payload: json });
      setIsLoading(false);
    }
  };

  return { insert, isLoading, error };
};
