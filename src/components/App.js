import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toyData, setToyData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [search, SetSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((data) => {
        setToyData(data);
      });
  }, []);

  console.log(toyData);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleSubmit(newToy) {
    setToyData([...toyData, newToy]);
  }

  function handleDelete(deletedToy) {
    const updatedToys = toyData.filter((el) => el.id !== deletedToy.id);
    setToyData(updatedToys);
  }

  function handleSearch (e) {
    SetSearch(e.target.value)
  }

  function updateLikes(toy) {
    setToyData(
      [...toyData].map(el => {
        return el.id === toy.id ? toy : el
      })
    )
  }

  const filteredToys = [...toyData].filter(el => {
    return el.name.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleSubmit={handleSubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <div className="container">
        <form className="add-toy-form">
          <input onChange={handleSearch} className="input-text" placeholder="Search..." value={search}></input>
        </form>
      </div>
      <ToyContainer toyData={filteredToys} handleDelete={handleDelete} updateLikes={updateLikes}/>
    </>
  );
}

export default App;
