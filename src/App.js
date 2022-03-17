
import Footer from './Footer';
import Header from './Header';
import Content from './Content';
import { useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';


function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem
    ('shoppinglist_dave')))

  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const setAndSaveItems = (newItems) => {
    setItems(newItems)
    localStorage.setItem('shoppinglist_dave', JSON.stringify(newItems))
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem]
    setAndSaveItems(listItems)

  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {
      ...item,
      checked: !item.checked
    } : item)
    setAndSaveItems(listItems)
    // setItems(listItems);
    // localStorage.setItem('shoppinglist_dave', JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems)
    // setItems(listItems)
    // localStorage.setItem('shoppinglist_dave', JSON.stringify(listItems))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    //additem
    addItem(newItem);

    setNewItem('');
    console.log('submitted')
  }

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search}
        setSearch={setSearch}
      />
      <Content items={items.filter(item => ((item.item).toLowerCase()).includes
        (search.toLowerCase()))}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
