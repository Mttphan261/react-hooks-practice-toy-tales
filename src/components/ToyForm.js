import React, {useState} from "react";

function ToyForm({AddToy}) {

  const initialForm = {
    name: '',
    image: '',
  }
  const [form,setForm] = useState(initialForm)

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function handlePOST(e) {
    e.preventDefault();
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        image: form.image,
        likes: 0,
      })
    })
    .then((r) => r.json())
    .then((data) => {
      AddToy(data)
      setForm(initialForm)
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handlePOST}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          onChange={(e) => handleChange(e)}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          onChange={(e) => handleChange(e)}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
