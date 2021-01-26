import React ,{useState ,useContext} from 'react'
import {GlobalContext} from "../context/Globalstate"

export const AddTransaction = () => {
    const [text,setText]=useState('');
    const [amount ,setAmount]=useState('');
    const {addTransaction}=useContext(GlobalContext);
   const onSubmit=(e)=>{
e.preventDefault();
const newTransaction={
    id:Math.floor(Math.random()*1000000000),
    text,
    amount:+amount
}
addTransaction(newTransaction)
    }
    return (
        <div>
           <h3>Add Transaction</h3> 
           <form onSubmit={onSubmit}>
           <div className="form-control">
           <label htmlFor="text">Text</label>
           <input type="text" id="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text...."></input>
           </div>
           <div className="form-control">
           <label htmlFor="amount">Amount 
           
           (negattive -expense , positive  -income)</label>
           <input type="number" id="amount" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount"></input>
           </div>
           <button className="btn">Add Transaction</button>
           </form>
        </div>
    )
}
export default AddTransaction;