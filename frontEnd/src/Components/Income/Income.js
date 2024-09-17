import React, { useEffect } from 'react'
import './income.css'
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
    const {addIncome, incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

    useEffect(() =>{
        getIncomes()
    }, [])
    return (
        <div className='income-layout'>
            <h1>Incomes</h1>
            <h2 className="total-income">Total Income: <span>${totalIncome()}</span></h2>
            <div className="income-content">
                <div className="form-container">
                    <Form />
                </div>
                <div className="incomes">
                <table className="incomes-table">
    <thead>
        <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {incomes.map((income) => {
            const { _id, title, amount, date, category, description, type } = income;
            return (
                <tr key={_id}>
                    <td>{title}</td>
                    <td>{description}</td>
                    <td>{amount}</td>
                    <td>{date}</td>
                    <td>{type}</td>
                    <td>{category}</td>
                    <td>
                        <button onClick={() => deleteIncome(_id)}>Delete</button>
                    </td>
                </tr>
            );
        })}
    </tbody>
</table>

                </div>
            </div>
        </div>
    )
}

export default Income