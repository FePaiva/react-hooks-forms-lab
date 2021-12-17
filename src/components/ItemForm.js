import React, {useState} from "react";
import { v4 as uuid } from "uuid";



function ItemForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce",
  });

function handleChange(event) {
  const name = event.target.name;
  let value = event.target.value;

  setFormData({
    ...formData,
    [name]: value,
  });
}

  function handleFormSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: formData.name,
      category: formData.category,
    };

    props.onItemFormSubmit(newItem);
  }


  return (
    <form onSubmit={handleFormSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" 
        name="name"
        onChange={handleChange}
        value={formData.name} 
        />
      </label>

      <label>
        Category:
        <select onChange={handleChange} name="category">
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
