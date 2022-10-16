import React, { Component } from "react";

class App extends Component {
  state = {
    person:{
      fullName: "MOHAMED AMINE",
      bio: "I just love Develloppment",
      imgSrc: "",
      profession: "etudient"
    },
    show: false,
    count:0
  };

  handleShow = ()=>{
    this.setState({show:!this.state.show})
  }
componentDidMount() { 
  setInterval(()=>{
    this.setState({count: this.state.count + 1})
  },1000)
 }
  render() {
    console.log("this is show", this.state.show);
    return (
     
      <div>
         <button onClick={this.handleShow}>{!this.state.show ? "Show informaiton" : "Hidde information"}</button>
         {
          this.state.show ? ( <p>Hello my name is {this.state.person.fullName}</p>) : ( <p>I can't show you the info</p>)
         }
    <p>This component was mounted for {this.state.count} seconds</p>
    </div>
    )
  }
}
export default App;
