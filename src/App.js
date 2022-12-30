import React from 'react';
import './App.css';

export class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			count: 0
		}
	}

	componentDidMount() {
		this.setState({
			count: this.state.count+15
		});
	}

	add = () => {
		this.setState({
			count: this.state.count + 1
		});
	}

	subtract = () => {
		this.setState({
			count: this.state.count - 1
		});
	}

	render() {
		return (
      <div id="counter" style={{
        'display': "flex",
				'flexDirection': "row"}
			}>
				<button onClick={this.subtract} style={{backgroundColor: "red",
				color: "white"}}>-</button>
				<h3>{this.state.count} Narciarz(y) </h3>
				<button onClick={this.add} style={{backgroundColor: "green",
				color: "white"}}>+</button>
			</div>
			
		);
	}
}



export default App;
