import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

let initialtodoList = [
  {
    uniqueId: 1,
    name: "Learn HTML"
  },
  {
    uniqueId: 2,
    name: "Learn CSS"
  },
  {
    uniqueId: 3,
    name: "Learn Bootstrap"
  }
]

const Display = (props) => {
  const {text} = props;
  console.log({text});
  return (
    <div className='todo-item'>
      <p className='todo-name'>{text}</p>
      <button className='delete-button'>Delete</button>
    </div>

  )
}

class App extends Component {
  state = {
    todoList: initialtodoList,
  } 

  displaytodoList = (props) => {
    const {todoList} = props;
    console.log({todoList});
  }


  addTodo = () => {
    let {todoList} = this.state;
    let text = document.getElementById("input-value").value;
    this.setState(prevState => ({
      todoList: [...prevState.todoList, {uniqueId: todoList.length + 1, name: text}]
    }))
    this.displaytodoList({todoList});
  }

  render() {
    const {todoList} = this.state;
    return (
      <div className='bg-container'>

        <div className='todo-container'>
        
          <h1 className='heading'>Enter the task todo</h1>
          <div className='input-container'>
            <input placeholder='Enter todo item' id='input-value'></input><br></br>
            <button className='btn btn-success mt-3' onClick={this.addTodo}>Add</button>
          </div>

            <h1 className='heading'>Todo Tasks</h1>
            {todoList.map(eachItem => (
            <Display
              text = {eachItem.name}
            />
          ))}
          </div>
        
        </div>
      
    )
  }
}

export default App;
