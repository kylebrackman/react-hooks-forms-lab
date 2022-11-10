// Action Plan:
// 1. Look back at previous labs to see were you are able to access inputs that you typed into a form
// 2. Go back to the application and console.log what you typed.
// — you see what you typed into the console
// *** look back at the stack overflow link (possible solution )


import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [cat, setCat] = useState("Produce")
  const [name, setName] = useState("")

  function newItemSubmit(event) {
    event.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: name,
      category: cat,
    };
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={newItemSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={(e) => setCat(e.target.value)} value={cat}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
