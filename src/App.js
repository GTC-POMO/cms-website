import React, { Component } from "react";
import "./App.css";
import siteData from "./Data/website-config.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {pageIndex:0};
  }
  componentDidMount() {
 console.log(siteData.pages)
  }

  advanceIndex = () => {

  }
  render() {
   const { title } = siteData.pages[this.state.pageIndex];
   const {pageIndex} = this.state;
    return (
      <div>
         <h1 className="title">{title}</h1> 
         <button onClick={()=>{this.setState({pageIndex:pageIndex + 1})}}/>
      </div>
    );
  }
}

export default App;
