import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//components
import Output from './output';

class MarkdownEditor extends Component{
  state = {
    value: "using props and states to dynamically render. States relate with ref() in vue3 composition."
  }
  vmodel = (event) => {
    this.setState({
      value: event.target.value
    })
  }
  render(){
    let value = this.state.value;
    return (
      <div className="flex flex-row">
        <section className='flex-1'>
          <textarea onInput={this.vmodel} className='w-full ml-10 border border-blue-900 h-screen text-orange-700'></textarea>
      </section>
        <Output value={value} />
      </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MarkdownEditor />)