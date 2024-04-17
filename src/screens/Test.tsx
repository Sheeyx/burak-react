//@ts-nocheck
import React, {Component} from "react";

class Test extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }

    changeDetail = () => {
      this.setState({color: "blue", brand: "Tesla", model: "S", year: "2023"});
    }

    componentDidMount() {
        console.log("componentDidMount");      
        // runs after first render => fetch data from backend server             
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");  
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        // runs before component unmount              
    }
    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            Color: {this.state.color} - Model: {this.state.model} - from {this.state.year}.
          </p>
          <button
            type="button"
            onClick={this.changeDetail}
          >Change color</button>
        </div>
      );
    }
  }

  export default Test;