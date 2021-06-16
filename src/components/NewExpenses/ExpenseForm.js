import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [deleteExpense, setDeleted] = useState("");
  const [error, setError] = useState();
  //  const[userInput,setUserInput]= useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // });//For secnd and third aapproach
  const titleChangeHandler = (event) => {
    //here we use evnt but in javascript we right document.getElementbyId('').addEventListener('click,(event)=>{})
    setEnteredTitle(event.target.value); //First Approach
    //    setUserInput({
    //    ...userInput,//... is a spread operator in javascript it makes sure that the other values are not lost likw we r using title so value of amount date are not lost as they are in single state.
    // enteredTitle:event.target.value,////Seecond Approach//In this approach we depends on previous state
    // })
    // setUserInput((prevState)=>{
    //     return{...prevState,enteredTitle:event.target.value};
    // });//third approach thiss approach make sure that you ll get the correct previous state
  };


  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    event.preventDefault();
    if (
      enteredTitle.trim().length === 0 ||
      enteredAmount.trim().length === 0 ||
      enteredDate.trim().length === 0
    ) {
      setError({
        title: "Invalid Value",
        message: "Set valid values(non-empty value)",
      });
      return;
    } // when we submit a form page sent a request to server then page will reload but to disable that we use prevent

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      delete: deleteExpense,
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setDeleted("");
  };

  const dismissHandler=()=>{
    setError(null);
  }
  // Two way binding is basically gud to use this forms bcz it gather the user inputs but then also change it
  //value={enteredTitle} is two -way binding in this we bind the value bcz we don't listen to changes to changes update in state but also feed the state back into the input so that when state change we can change input also
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={dismissHandler} />}
      <form onSubmit={submitHandler} >
        <div id='new-form_controls'>
          <div id='new-form_controls'>
            <label>Title</label>
            <input
            id="title"
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
              autoComplete='off'
            />
          </div>
          <div id='new-form_controls'>
            <label>Amount</label>
            <input
            id="amount"
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
              autoComplete='off'
            />
          </div>
          <div id='new-form_controls'>
            <label>Date</label>
            <input
            id="date"
              type="date"
              min="2021-05-01"
              max="2023-05-01"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div id='new-form_actions'>
            <button type="button" id="cancel" onClick={props.onCancel}>
              Cancel
            </button>
            <button type="submit" id="add">Add Expenses</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ExpenseForm;
