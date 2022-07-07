import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Grid from './grid';

//components
class GridWithSortAndFilter extends Component {
  recordedGrid = [
    {name: "Chuck Norris", power: Infinity},
    {name: "Bruce Lee", power: 9000},
    {name: "Jackie Chan", power: 7000},
    {name: "Jet Li", power: 8000}
  ]
  constructor(props){
    super(props)
    this.state = {
      gridData: this.recordedGrid,
      nameAscending: true,
      nIcon: "»",
      powerAscending: true,
      pIcon: "»",
    }
    this.orderByName = this.orderByName.bind(this);
    this.orderByPower = this.orderByPower.bind(this)
    this.search = this.search.bind(this)
  }

  str = ""
  search(event){
    this.str = event.target.value;
    let newElements = []
    for (let i = 0; i < this.recordedGrid.length; i++) {
      let element = this.recordedGrid[i]
      let nameProof = element.name.toLowerCase().includes(this.str)
      let tekProof = element.power.toString().toLowerCase().includes(this.str)
      if(nameProof || tekProof){
        newElements.push(element)
      }
    }
    this.setState({
      gridData: newElements,
    })
  }

  orderByName(){
    if(this.state.nameAscending){
      this.state.gridData.sort((a,b) => {
        return a.name < b.name ? 1: -1;
      })
      this.setState({
        gridData: this.state.gridData,
        nIcon: "»"
      })
    } else {
      this.state.gridData.sort((a,b) => {
        return a.name > b.name ? 1: -1;
      })
      this.setState({
        gridData: this.state.gridData,
        nIcon: "«"
      })
    }
    this.setState({
      nameAscending: !this.state.nameAscending,
    })
  }
  orderByPower(){
    if(this.state.powerAscending){
      this.state.gridData.sort((a,b) => {
        return a.power < b.power ? 1: -1;
      })
      this.setState({
        pIcon: "»",
        gridData: this.state.gridData,
      })
    } else {
      this.state.gridData.sort((a,b) => {
        return a.power > b.power ? 1: -1;
      })
      this.setState({
        pIcon: "«",
        gridData: this.state.gridData,
      })
    }
    this.setState({
      powerAscending: !this.state.powerAscending
    })
  }
  render(){
    return(
      <div className='flex flex-col items-center'>
        <h1 className="text-red-800 text-4xl font-extrabold">Grid with Sort & Filter</h1>
        <p className='bg-slate-100 italic w-96 m-4'>You've to be cautious when using state and setState. They're asycnhronous. Any synchronous data shouldn't be included in the states. Otherwise you'll end up in HELL.</p>
        <section>
          <form>
            <label htmlFor="search">Search </label>
            <input onInput={this.search} id="search" type="text" className="border border-slate-300" />
          </form>
          <Grid
            gridData = {this.state.gridData}
            orderByName={this.orderByName}
            orderByPower={this.orderByPower}
            pIcon = {this.state.pIcon}
            nIcon = {this.state.nIcon}
          />
        </section>
      </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GridWithSortAndFilter />)