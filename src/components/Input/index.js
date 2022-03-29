import { Component } from 'react';
import './index.css'

class Input extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='input-container'>
                <input placeholder='Enter todo item' id='input-value'></input><br></br>
                <button className='add-button' onClick={this.props.handleTodo}>Add</button>
            </div>
        )
    }
}

export default Input