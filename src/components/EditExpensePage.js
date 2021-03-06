import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpenses, startRemoveExpense } from '../actions/expenses.js'

export class EditExpensePage extends React.Component {
    editExpense = (expense) => {
        this.props.startEditExpenses(this.props.expense.id, expense);
        this.props.history.push("/");
    };
    onRemove = (e) => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push("/");
    };
    render() {
        return (
            <div>
                <div className="page-header">
                <div className="content-container">
                    <h1 className="page_header__title">Edit Expense</h1>
                </div>
                </div>
                <ExpenseForm expense={this.props.expense} onSubmit={this.editExpense} />
                <div className="content-container">
                    <button className="button button--secondary" onClick={this.onRemove}>Remove Item</button>              
                </div>
            </div>
        );
    };    
}

const mapStateToProps = (state, props) => {
    return  {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id ),
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpenses: (id, expense)=> dispatch(startEditExpenses(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);