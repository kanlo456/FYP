import { useState, useReducer } from "react";
import useInput from "../../../Hooks/user-InputHook";

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
    console.log(userIDhasError);
    console.log(passwordhasError);
    resetUserID();
    resetPassword();
  };

  const loginErrorUi = userIDhasError ? "border-rose-600" : "border-inherit";
  const passwordErrorUi = passwordhasError
    ? "border-rose-600"
    : "border-inherit";

  return (
    <section className="">
      <div className="border-2 grid grid-cols-1 gap-4 place-items-center">
        <h1>Welcome to the WSIG ticket System</h1>
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <p>Login ID:</p>
          <input
            className={`border-solid rounded-sm border-2 + ${loginErrorUi}`}
            type="text"
            value={userIDValue}
            onChange={userIDChangeHandler}
            onBlur={userIDBlurHandler}
          />
          <p>Password:</p>
          <input
            className={`border-solid rounded-sm border-2 + ${passwordErrorUi}`}
            type="password"
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHanler}
          />
          <div className="flex justify-center relative top-3.5">
            <button className="rounded-full bg-lime-500 w-40 ">Login</button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default AuthForm;
