import React, { Component } from "react";
import "./App.css";
import siteData from "./Data/website-config.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pageIndex: 0 };
  }
  componentDidMount() {
    console.log(siteData.pages);
  }

  advanceIndex = () => {
    siteData.pages.length > this.state.pageIndex + 1
      ? this.setState({ pageIndex: this.state.pageIndex + 1 })
      : console.log("out of pages");
  };
  render() {
    const { title, backgroundColor, pageType } = siteData.pages[this.state.pageIndex];
    const { pageIndex } = this.state;
    return (
      <div className='root-div' style={{backgroundColor:backgroundColor}}>
        <h1 className="title" >{title}</h1>
        <button
        className='advance-button'
          onClick={() => {
            this.advanceIndex();
          }}
        />
      </div>
    );
  }
}

export default App;
