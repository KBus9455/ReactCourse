import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [showAddExpense, setShowAddExpense] = useState(false);
  const showAddExpenseHandler = () => {
    showAddExpense === true
      ? setShowAddExpense(false)
      : setShowAddExpense(true);
  };

  return (
    <div className="new-expense">
      {showAddExpense === false && (
        <button onClick={showAddExpenseHandler}>Show add Expense </button>
      )}

      {showAddExpense === true && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelAddExpense={showAddExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
