import React,{useState}from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
   const startEditingHandler=() => {
        setIsEditing(true);
   };
   const changeEditingHandler=() => {
    setIsEditing(false);
};

  return (
    <div id='new-expense' >
      {!isEditing && <button id="click" onClick={startEditingHandler}> Add new Expenses </button>}
      {isEditing &&<ExpenseForm 
      onSaveExpenseData={saveExpenseDataHandler}
       onCancel={changeEditingHandler} />}
    </div>
  );
};

export default NewExpense;