import React from 'react'
/* TO edit the style for the IncomeExpenses, find "inc-exp-container" in App.css */
export const IncomeExpenses = () => {
    return (

        <div className="inc-exp-container"> 
        <div>
          <h4>Income</h4>
          <p className="money plus">+$0.00</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-$0.00</p>
        </div>
      </div>

    )
}
