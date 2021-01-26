import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


    //InitialState
    const initialstate={
        transactions:[
            
        ]
    }
    //CreateContext
    export const GlobalContext=createContext(initialstate);
    
    //ProviderComponent
     export  const GlobalProvider=({children})=>{
     const [state,dispatch]=useReducer(AppReducer ,initialstate);

     //Actions
     function deleteTransaction(id) {
         dispatch({
             type:'DELETE_TRANSACTION',
             payload:id
         });
         
     }
     function addTransaction(transaction){
         dispatch({
             type:'ADD_TRANSACTION',
             payload:transaction
         })
     }



     return(<GlobalContext.Provider value={{
         addTransaction, 
         transactions:state.transactions ,
         deleteTransaction
        }
         
        
        }>
    {children}
     </GlobalContext.Provider>
        );
    }
    

