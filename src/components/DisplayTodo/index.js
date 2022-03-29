import './index.css'
import { Component } from 'react';

class DisplayTodo extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='todo-item'>
        <p className='todo-name'>{this.props.details.name}</p>
        <button className='delete-button' onClick={this.props.deleteTodo} value={this.props.details.uniqueId}>Delete</button>
      </div>
    )
  }
  
}

export default DisplayTodo;