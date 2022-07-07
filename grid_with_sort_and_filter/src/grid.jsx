import { Component } from "react";

class Grid extends Component{
  render(){
    return (
      <table className="m-5 w-96 h-52 border border-green-600">
        <thead>
          <tr>
            <th onClick={this.props.orderByName} className="bg-green-600 bg-clip-content">Name{this.props.nIcon}</th>{/*174 & 175*/}
            <th onClick={this.props.orderByPower} className="bg-green-600 bg-clip-content">Power{this.props.pIcon}</th>
          </tr>
        </thead>
        <TableBody gridData={this.props.gridData}/>
      </table>
    )
  }
}
export default Grid;
function TableBody (props){
  let arr = props.gridData;
  let tableRows = arr.map(gridOb => {
    return (
      <tr key={gridOb.power}>
        <td className="bg-slate-200 bg-clip-content">{gridOb.name}</td>
        <td className="bg-slate-200 bg-clip-content">{gridOb.power}</td>
      </tr>
    )
  })
  return (
    <tbody>
      {tableRows}
    </tbody>
  )
}