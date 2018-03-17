import React from 'react';

export default class Input extends React.Component {
   
        
    
    render(){
        return(
        <div>
        <p>Put your guess below</p>
        <form onSubmit={(event) => {
            event.preventDefault();
            let userInput= event.target.userInput.value;
            console.log(userInput);
            this.props.setValue(userInput)
        }}>
        <input type="text" name="userInput" />
        <input type="submit"  />
        </form>
        </div>
        )
    }

}