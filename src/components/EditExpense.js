import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";


const EditExpensePage = (props) => {
  const {id} = useParams()
  const nevigate = useNavigate()
  const expense = props.expense.find((expense) => expense.id === id)

  return (
    <div>
      <ExpenseForm 
        expense={expense}
        onSubmit={(expense) => {
          props.dispatch( editExpense( id , expense))
          nevigate('/')
          console.log("Done!")
        }}
      />
      <button onClick={() => {
          props.dispatch(removeExpense({id}))
          nevigate('/')
        }}>Remove</button>
      
    </div>
  )
}

const mapStateToProps = (state) => ({ expense: state.expenses })


export default connect(mapStateToProps)(EditExpensePage);