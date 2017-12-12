import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var person = prompt("Please enter your name", "...");

// var UserGreeting;	
var time = new Date().getHours();
// let achtergrond = 'https://static.pexels.com/photos/697244/pexels-photo-697244.jpeg'
let Image;

let imgUrlochtend = 'https://static.pexels.com/photos/297954/pexels-photo-297954.jpeg';
let imgUrlmiddag = 'https://static.pexels.com/photos/697244/pexels-photo-697244.jpeg';
let imgUrlavond = 'https://static.pexels.com/photos/697244/pexels-photo-697244.jpeg';

let message;

if (time < 12) {
  message = ( person );
  document.getElementById("root").style.backgroundImage = "url("+ imgUrlochtend +")";


} else if (time < 18) {
	message = ( person );
	document.getElementById("root").style.backgroundImage = "url("+ imgUrlmiddag +")";

} 
else {
  message = ( person );
  document.getElementById("root").style.backgroundImage = "url("+ imgUrlavond +")";
};




class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
        <h2>Hallo, {message}!</h2>
      </div>
    );
  }
};

ReactDOM.render(
  <Clock />, document.getElementById('root')
);



