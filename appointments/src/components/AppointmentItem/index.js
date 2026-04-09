// Write your code here
import './index.css'
import {format} from 'date-fns'

const AppointmentsItems = props => {
  const {val, changeFavStatus} = props
  const {id, title, date, isfav} = val
  const changeFav = () => {
    changeFavStatus(id)
  }

  const imgurl = isfav
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const newFormatedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  return (
    <li className="AppointmentsItems">
      <div className="itemContainer">
        <p className="heading">{title}</p>
        <button data-testid="star" className="starbtn" onClick={changeFav}>
          <img src={imgurl} alt="star" />
        </button>
      </div>
      <p className="dateTime">{newFormatedDate}</p>
    </li>
  )
}

export default AppointmentsItems
