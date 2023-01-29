import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { redirect } from "react-router-dom";
import { RedirectFunction } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (response.status === 500 || response.status === 404) {
      setError("Cannot connect Server");
    }
    //asynchronous method for get json data
    const json = await response.json();
    //can't get the json data
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      console.log(response.status);
    }
    if (response.ok) {
      //save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));
      //update the auth context
      dispatch({ type: "LOGIN", payload: json });
      window.location.replace("/dashboard");
    }
  };

  return { login, isLoading, error };
};
