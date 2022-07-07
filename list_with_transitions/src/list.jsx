import { Component } from "react";

class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      rowNumber: this.props.rowsArray
    }
  }
  render(){
    return (
      <section id='list'>
            <RowsArray rowNumber={this.state.rowNumber}/>
      </section>
    )
  }
}

function RowsArray (props){
  let tableRows = props.rowNumber.map((number) => {
    return (
      <tr key={number.toString()} className='border border-black'>
        <td>{number}
          <button className='bg-red-700 w-5 m-1'>X</button>
        </td>
      </tr>
    )
  })
  return (
    <table className='w-60'>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  )
}

export default List;