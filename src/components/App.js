import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyArray, setToyArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((data) => setToyArray(data));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function AddToy(toy) {
    setToyArray([...toyArray, toy]);
  }

  //updateToy for PATCH

  function updateToy(toy) {
    setToyArray([...toyArray].map((el) => {
      return el.id === toy.id ? toy : el;
    }))
  }

  function deleteToy(toy) {
    setToyArray(
      [...toyArray].filter((el) => {
        if (el.id === toy.id) {
          return false ;
        } else {
          return true ;
        }
      })
      )
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm AddToy={AddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyArray={toyArray} updateToy={updateToy} deleteToy={deleteToy}/>
    </>
  );
}

export default App;
