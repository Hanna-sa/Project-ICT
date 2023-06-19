import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [incomeAmount, setIncomeAmount] = useState('');
  const [incomeLabel, setIncomeLabel] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseLabel, setExpenseLabel] = useState('');
  const [expenses, setExpenses] = useState([]);
  console.log(expenses)
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    fetchExpenses();
    fetchIncomes();
  }, []);

  const fetchExpenses = () => {
    fetch('http://localhost:8080/api/v1/get-expenses')
      .then((response) => response.json())
      .then((data) => {
        setExpenses(data); // Assuming the server returns an array of expenses
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const fetchIncomes = () => {
    fetch('http://localhost:8080/api/v1/get-incomes')
      .then((response) => response.json())
      .then((data) => {
        setIncomes(data); // Assuming the server returns an array of incomes
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const addIncome = () => {
    // Call the addIncome API with the incomeAmount
    fetch('http://localhost:8080/api/v1/add-income', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: incomeAmount }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Display the added income
        setIncomeLabel(data.label); // Assuming the server returns a 'label' field
        setIncomeAmount(''); // Clear the input field
        fetchIncomes(); // Fetch updated incomes
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const addExpense = () => {
    // Call the addExpense API with the expenseAmount
    fetch('http://localhost:8080/api/v1/add-expense', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: expenseAmount }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Display the added expense
        setExpenseLabel(data.label); // Assuming the server returns a 'label' field
        setExpenseAmount(''); // Clear the input field
        fetchExpenses(); // Fetch updated expenses
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Income and Expense Tracker</h1>

      {/* Add Income section */}
      <h2>Add Income</h2>
      <input
        type="text"
        value={incomeAmount}
        onChange={(e) => setIncomeAmount(e.target.value)}
        placeholder="Enter income amount"
      />
      <button onClick={addIncome}>Submit</button>

      {/* Display Income section */}
      <h2>Income</h2>
      <label>{incomeLabel}</label>
      {incomes.map((income, index) => (
        <div key={index}>{income.amount}</div>
      ))}

      {/* Add Expense section */}
      <h2>Add Expense</h2>
      <input
        type="text"
        value={expenseAmount}
        onChange={(e) => setExpenseAmount(e.target.value)}
        placeholder="Enter expense amount"
      />
      <button onClick={addExpense}>Submit</button>

      {/* Display Expense section */}
      <h2>Expense</h2>
      <label>{expenseLabel}</label>
      {expenses.map((expense, index) => (
        <div key={index}>{expense.amount}</div>
      ))}
    </div>
  );
}

export default Dashboard;

