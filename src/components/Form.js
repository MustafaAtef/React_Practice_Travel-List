import { useState } from "react";

export default function Form({ onAddItems }) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const handleItemSubmit = (e) => {
    e.preventDefault();
    onAddItems({ description: item, quantity, id: Date.now() });
    setItem("");
    setQuantity(1);
  };
  return (
    <form className="add-form" onSubmit={handleItemSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((no) => (
          <option value={no} key={no}>
            {no}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
