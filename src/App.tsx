import React, { Component } from "react";
import Validator from "./ValidatorComponent/Validator";
import Char from "./ChartComponent/Char";
import "./App.css";

class App extends Component {
  state = {
    paragraph: ''
  };

  onParagraphChangeHandler = (event: any) => {
    const newParagraph = event.target.value;
    this.setState({
      paragraph: newParagraph
    });
  };

  onRemoveClickHanlder = (index: number) => {
    let oldParagraph: String =  this.state.paragraph 
    let newParagraph = oldParagraph.split('');
    newParagraph.splice(index,1);
    this.setState(
      {
        paragraph: newParagraph.join('')
      }
    )
  }

  render () {
    return (
      <div className="App">
        <input
          value={this.state.paragraph}
          onChange={this.onParagraphChangeHandler}
        />
        <p>{this.state.paragraph.length}</p>
        <Validator length={this.state.paragraph.length} />
        {this.state.paragraph.split('').map( (character, index) => {
          return <Char char={character} key={index} click = {() => this.onRemoveClickHanlder(index)}/>;
        })}
      </div>
    );
  }
};

export default App;
