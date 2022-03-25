import './index.css'

const DisplayTodo = (props) => {
    const {details, deleteTodo} = props;
    const {uniqueId, name} = details;

    const onDeleteTodo = () => {
      deleteTodo(uniqueId);
    }

    return (
      <div className='todo-item'>
        <p className='todo-name'>{name}</p>
        <button className='delete-button' onClick={onDeleteTodo}>Delete</button>
      </div>
    )
}

  export default DisplayTodo;