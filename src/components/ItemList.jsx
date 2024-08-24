import Item from "./Item"

const ItemList = ({items, onDelete}) => {
  return (
    <ul id="item-list" className="items">
      {items.map((item, index) => (
        <Item key={index} item={item} onDelete={() => onDelete(index)} />
      ))}
    </ul>
  )
}

export default ItemList
