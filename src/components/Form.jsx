import { useState } from "react";

const Form = ({onAdd}) => {
    const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input.trim());
      setInput('');
    }
  };
  return (
    <form id="item-form" onSubmit={handleSubmit}>
    <div className="form-control">
      <input
        type="text"
        className="form-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter Item"
      />
    </div>
    <div className="form-control">
      <button type="submit" className="btn">
        <i className="fa-solid fa-plus"></i> Add Item
      </button>
    </div>
  </form>
  )
}

export default Form
