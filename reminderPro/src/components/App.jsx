import React, { Component } from 'react';

class App extends Component{
  render(){
    return(
      <div>
        <div className="title">Reminder Pro</div>
        <div className="form-inline">
            <input placeholder="enter text"/>
            <button type="button">Submit</button>
        </div>


      </div>
    )
  }
}

export default App;
