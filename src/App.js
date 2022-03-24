import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className='bg-container'>

        <div className='todo-container'>
        
          <h1 className='heading'>Enter the task todo</h1>
          <div className='input-container'>
            <input placeholder='Enter todo item'></input><br></br>
            <button className='btn btn-success mt-3'>Add</button>
          </div>

          <div className='todo-list'>
            <h1 className='heading'>Todo Tasks</h1>
            <div className='todo-item'>
              <p className='todo-name'>Learn HTML</p>
              <button className='delete-button'>Delete</button>
            </div>

            <div className='todo-item'>
              <p className='todo-name'>Learn HTML</p>
              <button className='delete-button'>Delete</button>
            </div>
            <div className='todo-item'>
              <p className='todo-name'>Learn HTML</p>
              <button className='delete-button'>Delete</button>
            </div>
          </div>
        
        </div>
      </div>
    )
  }
}

export default App;
