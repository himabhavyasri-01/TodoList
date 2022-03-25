import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayTodo from './components/DisplayTodo'

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

class App extends Component {

  state = {
    todoList: initialtodoList,
  } 

  deleteTodo = uniqueId => {
    const {todoList} = this.state;
    const filteredData = todoList.filter(
      each => each.uniqueId !== uniqueId
    )
    console.log(filteredData);
    this.setState({
      todoList: filteredData
    })
    console.log({todoList});
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
            <DisplayTodo
              details = {eachItem} 
              key = {eachItem.uniqueId}
              deleteTodo = {this.deleteTodo}
            />
          ))}
          </div>
        
        </div>
    )
  }
}

export default App;
