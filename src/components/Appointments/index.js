import './index.css'
import {Component} from 'react'
import {v4 as uudiv4} from 'uuid'
import AppointmentsItems from '../AppointmentItem'

class Appointments extends Component {
  state = {title: '', date: '', appointments: [], isStared: false}
  titleInput = event => {
    this.setState({title: event.target.value})
  }
  dateInput = event => {
    this.setState({date: event.target.value})
  }
  addAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uudiv4(),
      title,
      date,
      isfav: false,
    }
    this.setState(prevState => {
      return {
        appointments: [...prevState.appointments, newAppointment],
        title: '',
        date: '',
      }
    })
  }

  changeFavStatus = id => {
    this.setState(prev => {
      return {
        appointments: prev.appointments.map(eachPerson => {
          if (eachPerson.id === id) {
            return {...eachPerson, isfav: !eachPerson.isfav}
          }
          return eachPerson
        }),
      }
    })
  }
  star = () => {
    this.setState(prev => {
      return {
        isfav: !prev.isfav,
      }
    })
  }
  finalResult = () => {
    const {isfav, appointments} = this.state
    if (!isfav) {
      return appointments
    }
    return appointments.filter(eachAppointment => {
      if (eachAppointment.isfav) {
        return eachAppointment
      }
    })
  }

  render() {
    const {title, date, isStared} = this.state
    const filterdAppointments = this.finalResult()
    console.log(filterdAppointments)
    const btn = isStared ? 'favbtn' : 'notfav'

    return (
      <div className="main">
        <div className="card">
          <form className="form">
            <div className="inputs">
              <h1>Add Appointments</h1>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={this.titleInput}
              />
              <label htmlFor="date">Date</label>
              <input
                id="date"
                type="date"
                placeholder="dd/mm/yyyy"
                value={date}
                onChange={this.dateInput}
              />
              <div>
                <button onClick={this.addAppointment}>Add</button>
              </div>
            </div>
            <div className="img">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="imgs"
              />
            </div>
          </form>
          <div className="bottom-card">
            <div className="head-btn">
              <h1>Appointments</h1>
              <button onClick={this.star} className={btn}>
                Starred
              </button>
            </div>
            <div className="AppointmentsItems">
              <ul>
                {filterdAppointments.map(val => {
                  return (
                    <AppointmentsItems
                      key={val.id}
                      val={val}
                      changeFavStatus={this.changeFavStatus}
                    />
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Appointments
