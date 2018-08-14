import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


var TakeHour = function () {
  return <div className="timer">
    <div className="hour">
      <h1>00:</h1>
      <h1>00:</h1>
      <h1>00</h1>
    </div>
    <div className="texthour">
      <h6> Hours</h6>
      <h6> Seconds</h6>
      <h6> Minutes</h6>
    </div>
  </div>
}

ReactDOM.render(<TakeHour />, document.body)  
