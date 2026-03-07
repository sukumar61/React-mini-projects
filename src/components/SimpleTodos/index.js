import './index.css'

import {Component} from 'react'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todo: initialTodosList}

  ondelete = key => {
    const {todo} = this.state
    const filterdarr = todo.filter(val => {
      return val.id !== key
    })
    this.setState({todo: filterdarr})
  }

  render() {
    const {todo} = this.state
    return (
      <div className="maincard">
        <div className="innerCard">
          <h1>Simple Todos</h1>
          <ul>
            {todo.map(val => (
              <TodoItem eachitem={val} key={val.id} ondelete={this.ondelete} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

// Write your code here
export default SimpleTodos
