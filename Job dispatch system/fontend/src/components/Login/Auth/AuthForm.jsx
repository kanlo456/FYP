import { useState, useReducer } from "react";
import useInput from "../../../Hooks/userInputHook";

const isNotEmpty = (value) => value.trim() !== "";

const AuthForm = (props) => {
  const {
    value: userIDValue,
    isValild: userIDisVail,
    hasError: userIDhasError,
    valueChangeHandler: userIDChangeHandler,
    inputBlurHandler: userIDBlurHandler,
    reset: resetUserID,
  } = useInput(isNotEmpty);

  const {
    value: passwordValue,
    isValid: passwordisVaild,
    hasError: passwordhasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHanler,
    reset: resetPassword,
  } = useInput(isNotEmpty);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(userIDValue, passwordValue);
    console.log(userIDhasError)
    resetUserID();
    resetPassword();
  };

  const checkUserIDErrorcss = userIDhasError
    ? "border-teal-500"
    : "border-inherit ";
  return (
    <section>
      <div className="border-2 grid grid-cols-1 gap-4 place-items-center">
        <h1>Welcome to the WSIG ticket System</h1>
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <p>Login ID:</p>
          <input
            className={
              "border-solid rounded-sm border-2" + checkUserIDErrorcss }
            type="text"
            value={userIDValue}
            onChange={userIDChangeHandler}
            onBlur={userIDBlurHandler}
          />
          <p>Password:</p>
          <input
            className={"border-solid rounded-sm border-inherit border-2"}
            type="password"
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHanler}
          />
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default AuthForm;
