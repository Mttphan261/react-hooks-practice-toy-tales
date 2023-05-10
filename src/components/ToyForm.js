import React, { useState } from "react";

function ToyForm({handleSubmit}) {

  const [form, setForm] = useState({
    name: "",
    image: "",
  })


  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  function handlePOST(e) {
    e.preventDefault()
    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        'name': form.name,
        'image': form.image,
        'likes': 0,
      })
    })
    .then((r) => r.json())
    .then(newToy => {
    handleSubmit(newToy);
    })
  }


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handlePOST}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={form.image}
          onChange={handleChange}
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
