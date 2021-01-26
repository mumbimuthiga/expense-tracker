import React from 'react'

 export const Transaction=({transaction })=> {
     const sign=transaction.amount < 0 ? '-' :'+';
    return (
        
        <ul id="list" className="list">
        <li className={transaction.amount < 0 ?"minus": "plus"}>{transaction.text}
        <span> {sign}${Math.abs(transaction.amount)}</span><button className="delete-btn">X</button></li>
        </ul>  
        
    )
}

