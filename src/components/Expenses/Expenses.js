import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021');

  const changeYearFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };
  // const filteredExpenses = props.items.filter(expense =>{
  //   return expense.date.getFullYear().toString() === filteredYear
  // })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeYearFilter={changeYearFilterHandler}
        />

        {props.items.map((expense) => {
          let currentYear = expense.date.getFullYear().toString();
          if (currentYear === filteredYear)
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
        })}
      </Card>
    </div>
  );
}
export default Expenses;
