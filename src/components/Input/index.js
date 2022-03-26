import { Component } from 'react';
import './index.css'

class Input extends Component {

    click = () => {
        this.props.handleTodo();
    }

    render() {
        return (
            <div className='input-container'>
                <input placeholder='Enter todo item' id='input-value'></input><br></br>
                <button className='add-button' onClick={this.click}>Add</button>
            </div>
        )
    }
}

export default Input