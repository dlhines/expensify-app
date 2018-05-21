import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

// This little script will take any date and convert it to day/time format of the string
// const now = moment().format('MMM Do YYYY H:m:ss')
// const then = moment(1234567890);
// console.log(then._d)

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: '',
        };        
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }; 
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        } else {
            return this.state.amount;
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt){
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({error: "A description and amount are both required."}));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
            });
        ;}
    };
    render() {
        return (
            <div> 
                <p>{this.state.error && this.state.error}</p>
                <form onSubmit={this.onSubmit}>
                    <input type="text" 
                        placeholder="Description" 
                        value={this.state.description} 
                        onChange={this.onDescriptionChange} 
                        autoFocus
                    />
                    <input 
                        type="text" 
                        placeholder="Amount" 
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        enableOutsideDays={true}
                        isOutsideRange={() => false}
                    />
                    <textarea 
                        placeholder="Add a note for your expense: (Optional)" 
                        onChange={this.onNoteChange}
                        value={this.state.note} 
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

