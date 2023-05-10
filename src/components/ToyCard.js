import React from "react";

function ToyCard({toy, updateToy, deleteToy}) {

  //function to update likes via PATCH
  function handleLike() {
    fetch(`http://localhost:3001/toys/${toy.id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...toy,
      likes: toy.likes + 1,
    })
  })
  .then((r) => r.json())
  .then((data) => updateToy(data))
  }

  //delete Toy via DELETE

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'DELETE',})
      .then((r) => r.json())
      .then((data) => deleteToy(data))
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
