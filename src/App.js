import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import DisplayTodo from './components/DisplayTodo'
import Input from './components/Input'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {todoList: [{uniqueId: 1, name: "Learn HTML"}]}
  }

  deleteTodo = uniqueId => {
    const {todoList} = this.state;
    const filteredData = todoList.filter(
      each => each.uniqueId !== uniqueId
    )
    this.setState({
      todoList: filteredData
    })
  }

  addTodo = () => {
    let {todoList} = this.state;
    let text = document.getElementById("input-value").value;
    this.setState(prevState => ({
      todoList: [...prevState.todoList, {uniqueId: todoList.length + 1, name: text}]
    }))
  }

  render() {
    const {todoList} = this.state;
    return (
      <div className='bg-container'>

        <div className='todo-container'>
        
          <h1 className='heading'>Enter the task todo</h1>
          
          <Input handleTodo={this.addTodo}/>

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
