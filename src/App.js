
import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import ItemList from './components/ItemList';
import Filter from './components/Filter';


function App() {

  const [items, setItems] = useState([
    'Apples',
    'Orange Juice',
    'Oreos',
    'Milk'
  ]);

  const [filter, setFilter] = useState('');

  //Adds a new item to the list
  const handleAdd = (newItem) => {
    setItems([...items, newItem]);
  };

  //Removes an item from the list based on its index
  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  //contains items that match the filter text
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  //Clears all items from the list
  const handleClearAll = () => {
    setItems([]);
  };

  return (
    <div className='container'>
      <header>
      <h1>Shopping List</h1>
      </header>
      <Form onAdd={handleAdd}/>
      <Filter filter={filter} onFilterChange={setFilter} />
      <ItemList items={filteredItems} onDelete={handleDelete} />
      <button id="clear" className="btn-clear" onClick={handleClearAll}>
          Clear All
        </button>
    </div>
  );
}

export default App;
