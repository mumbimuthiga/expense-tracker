import React ,{useState} from 'react'

export const AddTransaction = () => {
    const [text,setText]=useState('');
    const [amount ,setAmount]=useState('');
    return (
        <div>
           <h3>Add Transaction</h3> 
           <form id="form">
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