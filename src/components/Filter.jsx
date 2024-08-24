
const Filter = ({filter, onFilterChange}) => {
  return (
    <div className="filter">
      <input
        type="text"
        className="form-input-filter"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder="Filter Items"
      />
    </div>
  )
}

export default Filter
