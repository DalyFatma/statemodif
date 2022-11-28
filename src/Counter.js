import React, { Component } from "react";

class Counter extends Component {

    state = {
        counterCount:0
      }
    componentDidMount(){
        console.log("component Counter mounted");
        setInterval(()=>{
            this.setState({counterCount:this.state.counterCount+1})
          },1000)
       }
       componentWillUnmount(){
        console.log("component app unmouted")

       }
    render() { 
        return (
        <div>
          <p>Counter:{this.state.counterCount}</p> 
        </div>  );
    }
}
 
export default Counter;