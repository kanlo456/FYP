
const userInput = (props) => {
  return (
    <input type={props.type} className={props.tw} value={props.value} onChange={props.onChange}>
      {props.name}
      userInput
    </input>
  );
};

export default userInput;
