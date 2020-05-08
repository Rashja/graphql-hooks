import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { SET_INPUT_VALUE, GET_FORM_VALUE } from "../graphl/form";
import { GET_COUNTER, DECREASE_COUNTER } from "../graphl/counter";

export default function Counter() {
  /*------------------------------- state ---------------------------- */
  const [inputValue, setValue] = useState();
  /*------------------------------ useQuery -------------------------- */
  const { data } = useQuery(GET_FORM_VALUE);
  const { data: counterData } = useQuery(GET_COUNTER);
  /*----------------------------- useMutation ------------------------ */
  const [setInputValue] = useMutation(SET_INPUT_VALUE);
  const [decreaseCounter] = useMutation(DECREASE_COUNTER);
  /*----------------------------- input change ----------------------- */
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  /*----------------------------- form submit ------------------------ */
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue({ variables: { value: inputValue } });
  };
  /*------------------------- counter functions ---------------------- */
  const handleDecrease = () => {
    decreaseCounter();
  };
  /*------------------------------------------------------------------ */
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button>add</button>
        <div>{data.formValue}</div>
      </form>
      <h5>counter : {counterData.counter}</h5>
      <button children="-" onClick={handleDecrease} />
      <button children="+" />
      <button children="reset" />
    </>
  );
}
