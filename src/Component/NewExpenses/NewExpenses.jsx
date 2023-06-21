import React,{useState} from 'react'
import './NewExpenses.css'  
import ExpenseForm from './ExpenseForms'

const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false); 
  // [state, function  to update state

  const saveExpenseDataHandler = (enteredExpenseData) =>{   
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    
    props.onAddExpense(expenseData);
  };
   const startEditingHandler = () => {

    setIsEditing(true);
  };
  const stopEditingHandler = () => {    
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
         {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button> }   
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
    
  )
}

export default NewExpenses