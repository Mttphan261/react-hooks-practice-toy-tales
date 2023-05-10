import React from "react";

function ToyCard({ toy, handleDelete, updateLikes }) {
  
  function handleClick() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => handleDelete(data));
  }

  function handleLike() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify({
        ...toy,
        'likes': toy.likes + 1,
    })
    })
      .then ((r) => r.json())
      .then((data) => updateLikes(data))
  }

  return (
    <div className="card">
      <h2>{toy.name /* Toy's Name */}</h2>
      <img
        src={toy.image /* Toy's Image */}
        alt={toy.name /* Toy's Name */}
        className="toy-avatar"
      />
      <p>{toy.likes /* Toy's Likes */} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
