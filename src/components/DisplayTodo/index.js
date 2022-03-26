import './index.css'
import { Component } from 'react';

class DisplayTodo extends Component {
  
  onDeleteTodo = () => {
    this.props.deleteTodo(this.props.details.uniqueId);
  }

  render() {
    return (
      <div className='todo-item'>
        <p className='todo-name'>{this.props.details.name}</p>
        <button className='delete-button' onClick={this.onDeleteTodo}>Delete</button>
      </div>
    )
  }
  
}

export default DisplayTodo;