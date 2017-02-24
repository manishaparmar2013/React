import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      deadline: 'August 04, 2017'
    }
  }

 render (){
    return(
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <div>
            <div className="Clock-days">w days</div>
            <div className="Clock-hours">x hours</div>
            <div className="Clock-minutes" >y minutes</div>
            <div className="Clock-seconds">z seconds</div>
        </div>
        <div>
            <input placeholder="new date"/>
            <button>Submit</button>
        </div>

      </div>

    )
 }
}
export default App;
