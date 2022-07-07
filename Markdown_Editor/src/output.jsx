import { Component } from "react"
class Output extends Component {
  render(){
    return (
      <section className='flex-1'>
          <div className='w-full border h-screen border-l-orange-500 p-20 ml-20 text-green-900'>{this.props.value}</div>
      </section>
    )
  }
}
export default Output;