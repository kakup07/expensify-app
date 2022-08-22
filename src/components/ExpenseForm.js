import React from "react";
import { useState } from "react";
import moment from 'moment';
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';

// const now = moment();
// console.log(now.format('MMM Do, YYYY'))

export default function ExpenseForm (props) {

    const [state, setState] = useState({
        description: props.expense ? props.expense.description : '',
        note:  props.note ? props.expense.note : '',
        amount: props.expense ? (props.expense.amount / 100).toString() : '',
        createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
        calenderFocused: false,
        error: ''
    })

    function onDescriptionChange(e) {
        const description = e.target.value
        setState((prev) => ({...prev, description}))
    }   

    function onNoteChange(e) {
        const note = e.target.value
        setState((prev) => ({...prev, note}))
    }

    function onAmountChange(e) { 
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setState((prev) => ({...prev, amount}))
        }
    }

    function onDateChange(createdAt){
        if (createdAt){
            setState((prev) => ({...prev, createdAt}))
        }
        
    }

    function onFocusChange({ focused }){
        setState((prev) => ({...prev, calenderFocused: focused}))
    }
    
    function onSubmit(e){
        e.preventDefault()

        if (!state.description || !state.amount) {
            setState((prev) => ({...prev, error: "Please Provide description and amount."}))
        } else {
            setState((prev) => ({...prev, error:''}))
            props.onSubmit({
                description: state.description,
                amount: parseFloat(state.amount, 10) * 100,
                createdAt: state.createdAt.valueOf(),
                note: state.note
            })
        }
    }

    return (
        <div>
            {state.error && <p>{state.error}</p>}
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={state.description}
                    onChange = {(e) => onDescriptionChange(e)}
                />
                <input
                    type="text"
                    placeholder="Amount"
                    value= {state.amount}
                    onChange={(e) => onAmountChange(e)}
                />
                <SingleDatePicker
                    date = {state.createdAt}
                    onDateChange = {onDateChange}
                    focused = {state.calenderFocused}
                    onFocusChange = {onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea
                    placeholder="Add a note for expense"
                    value= {state.note}
                    onChange = {(e) => onNoteChange(e)}
                >
                </textarea>
                <button>Add Expense</button>
            </form>
        </div>
    )
}

