import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);
  const handleAddItems = (item) => {
    setItems([...items, item]);
  };
  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const handleCheckItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handleClearItems = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    confirmed && setItems([]);
  };

  const numItems = items.length;
  const numPacked = items.reduce((cum, cur) => {
    return cur.packed ? cum + 1 : cum;
  }, 0);

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onCheckItem={handleCheckItem}
        onClearItems={handleClearItems}
      />
      <Stats numItems={numItems} numPacked={numPacked} />
    </div>
  );
}

export default App;
