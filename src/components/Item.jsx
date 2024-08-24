
const Item = ({item, onDelete}) => {
  return (
    <li>
      {item}
      <button className="remove-item btn-link text-red" onClick={onDelete}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </li>
  )
}

export default Item
