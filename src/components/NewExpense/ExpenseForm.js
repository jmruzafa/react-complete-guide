import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    //this is a valid way of keeping the state of different components or parts within a component
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmoumt] = useState('');
    const [enteredDate, setEnteredDate] = useState(''); 

    //this is also used when we have to store multiples states
    //but you have to save all the states to avoid they get lost 
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,//copy of existing values of different states to avoid they get lost 
        //     enteredTitle: event.target.value,
        // })
        
        //safer way to keep the previous state updates if you need to preserve them!
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // });

    };

    
    const amountChangeHandler = (event) => {
        setEnteredAmoumt(event.target.value);
    };

    
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min='0.02' step='0.01' onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min='2021-01-01' step='2022-02-28' onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button>Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;