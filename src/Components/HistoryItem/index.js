import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    onDeleteHistoryItem(id)
  }

  return (
    <li className="list-main-container">
      <div className="mid-details-container">
        <p className="time-indication">{timeAccessed}</p>
        <div className="history-details-container">
          <img className="domain-logo" src={logoUrl} alt="domain logo" />
          <div className="url-title-and-url-container">
            <p className="visited-url-title">{title}</p>
            <p className="visited-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button type="button" onClick={onDelete}>
        <img
          className="delete-logo"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
