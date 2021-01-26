
import './App.css';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import Header from './components/Header';
import Balance  from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import {GlobalProvider} from './context/Globalstate';

function App() {
  return (
    <GlobalProvider>
    <Router>
    <Route exact path="/"></Route>
    <Header></Header>
    <div className="container">
    <Balance></Balance>
    <IncomeExpenses></IncomeExpenses>
    <TransactionList></TransactionList>
    <AddTransaction></AddTransaction>
    </div>
    </Router>
    
    </GlobalProvider>
  );
}

export default App;
