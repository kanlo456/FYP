import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (
    username,
    password,
    email,
    firstname,
    lastname,
    role,
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        email,
        firstname,
        lastname,
        role,
      }),
    });
    //asynchronous method for get json data
    const json = await response.json();
    //can't get the json data
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));
      //update the auth context
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
      window.location.replace("/dashboard");
    }
  };
  return { signup, isLoading, error };
};
