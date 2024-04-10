import './index.css'

const HistoryItem = props => {
  const {historyItems, deleteTodo} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItems

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-items">
      <div className="items-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <div>
        <button
          data-testid="delete"
          type="button"
          className="button"
          onClick={onDeleteTodo}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            data-testid="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
