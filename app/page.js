'use client';
import "./page.css"
import { useEffect, useState } from 'react';

const Page = () => {
  
  let [items, setItems] = useState([])

  let [newItem, setNewItem] = useState({ value: "", price: 0 });

  const handleInputChange = (e) => {
    setNewItem(prev => ({...prev, value: e.target.value}))
  }

  const handlePriceChange = (e) => {
    setNewItem(prev => ({...prev, price: e.target.value}))
  }

  const handleSubmit = () => {
    if (newItem.price != "" && newItem.price != undefined && newItem.value.trim().length) {
      setItems(prev => [...prev, newItem]);
      setNewItem({ value: "", price: 0 });
      console.clear();
      console.table(items)
    }
  }

  const onPressEnter = (e) => {

    if (e.key !== "Enter") return;

    handleSubmit();
  }

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  }

  return (
    <div id='container'>
        <h1>Expense Tracker</h1>
        <div className='box'>
          <div className='inputs'>
            <input type='text' placeholder='Enter Item' value={newItem.value} onChange={handleInputChange} onKeyDown={onPressEnter} />
            <input type='number' placeholder='Enter PKR' value={newItem.price} min={0} onChange={handlePriceChange} onKeyDown={onPressEnter} />
            <button onClick={handleSubmit}>+</button>
          </div>
          <div className='lists'>
            <ul>
              { items.map((item, index) => (
                <li key={ index }>
                  <div className="items">
                    <p className='item'>{item.value}</p>
                    <p className='price'>{ item.price } pkr</p>
                  </div>
                  <button onClick={() => handleDelete(index)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Page;