import React from 'react';

//pass a function from parent to child through prop. call 
//function in child

export default function Results(props){
   
    
            return(<div>
               <p>{props.result}</p>
                </div>
        )
    
}