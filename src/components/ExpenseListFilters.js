import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from "../actions/filters";
import { useState } from "react";
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';
// import moment from "moment";


const ExpenseListFilters = (props) => {
    const [ state, setState ] = useState({
        calenderFocused: ""
    })

    function onDateChange({ startDate, endDate }) {
        props.dispatch(setStartDate(startDate));
        props.dispatch(setEndDate(endDate));
    }

    function onFocusChange(calenderFocused) {
        setState(() => ({ calenderFocused }))
    }

    return (
        <div>
            <input type="text" value={props.filters.text} onChange={(e) => {
                props.dispatch(setTextFilter({text: e.target.value}))
            }} /> 
            <select value={props.filters.sortBy} onChange={(e) => {
                if (e.target.value === "amount") {
                    props.dispatch(sortByAmount())
                } else if (e.target.value === "date") {
                    props.dispatch(sortByDate())
                }
            }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker 
                startDate={props.filters.startDate}
                endDate= {props.filters.endDate}
                onDatesChange = {onDateChange}
                focusedInput= {state.calenderFocused}
                showClearDate = {true}
                onFocusChange = {onFocusChange}
                numberOfMonths = {1}
                isOutsideRange = {() => false }
            />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        filters: state.filter
    };
}

export default connect(mapStateToProps)(ExpenseListFilters);