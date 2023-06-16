//import ExpenseItem from "./Component/ExpenseItem";
import React,{useState} from "react";
import Expenses from "./Component/Expenses/Expenses"; //importing Expenses component
import NewExpenses from "./Component/NewExpenses/NewExpenses"; //importing NewExpenses component

  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Pune",
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) , location : "banglore",},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location : "Mumbai",
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location : "Delhi",
    },
  ];
  function App(props) {
    const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) =>{
       setExpenses((prevExpenses) => {
          return [expense,...prevExpenses];
        }
        );

        

    };


  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
