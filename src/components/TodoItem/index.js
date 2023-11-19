// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodo, deleteTodo} = props
  const {title, id} = eachTodo
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo">
      <p className="todo-text"> {title}</p>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
