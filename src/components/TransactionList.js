import React ,{useContext} from 'react';
import {GlobalContext} from '../context/Globalstate';
import {Transaction} from '../components/Transaction';

const TransactionList = () => {
    const {transactions}=useContext(GlobalContext);
    //console.log(context);
    return (
        <div>
        <h3>History</h3> 
        {transactions.map(transaction=>(
           <Transaction key={transaction.id} transaction={transaction}></Transaction>
        ))}
          
        </div>
    )
}
export default TransactionList;