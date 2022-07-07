import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import List from './list';

//components
class ListWithTransitions extends Component {
  constructor(props){
    super(props)
    this.state={
      rowsArray: [1, 2, 3, 4, 5],
      sortedRows: [1, 2, 3, 4, 5],
    }
    this.insertAtRandomIndex = this.insertAtRandomIndex.bind(this)
    this.reset = this.reset.bind(this)
  }
  insertAtRandomIndex(){
    let arr = this.state.sortedRows;
    let num = arr.length;
    let randomIndex = Math.floor(Math.random()*num);
    let newElement = arr[num-1] + 1;
    this.state.sortedRows.push(newElement)
    this.state.rowsArray.splice(randomIndex, 0, newElement);
    this.setState({
      rowsArray: this.state.rowsArray,
      sortedRows: this.state.sortedRows,
    })
  }
  reset(){
    let num = this.state.rowsArray.length;
    this.state.rowsArray.splice(0, num, ...this.state.sortedRows)
    this.setState({
      rowsArray: this.state.rowsArray,
    })
  }
  render(){
    return (
      <div className='p-2'>
        <h1 className='font-extrabold text-4xl p-10 ml-60'>
          List With Transitions
        </h1>
        <p>
          Vue and React have one way data flow unlike Angular. This prevents child components from accidentally mutating the parent's state, which can make your app's data flow harder to understand.
        </p>
        <section id='nav' className='space-x-1 font-bold'>
          <button onClick={this.insertAtRandomIndex} className='bg-green-800 rounded-sm'>
            insert at random index
          </button>
          <button onClick={this.reset} className='bg-blue-800 rounded-sm'>
            reset
          </button>
        </section>
        <List rowsArray={this.state.rowsArray}/>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ListWithTransitions />)