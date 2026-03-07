import './index.css'

const TodoItem = props => {
  const {eachitem, ondelete} = props
  const {id, title} = eachitem

  const click = () => {
    ondelete(id)
  }
  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={click}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
