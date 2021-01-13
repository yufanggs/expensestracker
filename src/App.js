
import './App.css';
/* Create a component in components folder first */
/* Add information into the component */
/* In App.js import the component */

import { Header } from './components/Header'; /* This is to create the header Expense Tracker*/
import { Balance } from './components/Balance'; /* This is to create the Balance Portion*/
import { IncomeExpenses } from './components/IncomeExpenses'; /* This is to create the Income Expense Portion*/
import { TransactionList } from './components/TransactionList'; /* This is to create the History portion*/
import { AddTransaction } from './components/AddTransaction'; /* This is to create the Add new transaction portion*/

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
