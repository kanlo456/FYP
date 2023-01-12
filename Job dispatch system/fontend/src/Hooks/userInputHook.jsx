import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
    if(action.type==='INPUT'){
        return {value:action.value,isTouched:state.isTouched}
    }
    if(action.type ==='BLUR'){
        return {isTouched:true,value:state.value}
    }
    if(action.type==='RESET'){
        return {isTouched:false,value:''}
    }
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState,
  );

  const valueIsVaild = validateValue(inputState.value)
  const hasError = !valueIsVaild&&inputState.isTouched

  const valueChangeHandler = (event) =>{
    dispatch({type:'INPUT',value:event.target.value})
  }
  
  const inputBlurHandler =()=>{
    dispatch({type:'BLUR'})
  }

  const reset =()=>{
    dispatch ({type:'RESET'})
  }
    
  return{
    value:inputState.value,
    isValild:valueIsVaild,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset

  }
};
export default useInput;
