import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyData, handleDelete, updateLikes }) {
  return (
    <div id="toy-collection">
      {toyData.map((toy) => {
        return (
          <ToyCard
            key={toy.id}
            toy={toy}
            handleDelete={handleDelete}
            updateLikes={updateLikes}
          />
        );
      })}
    </div>
  );
}

export default ToyContainer;

// import React from "react";
// import ToyCard from "./ToyCard";

// function ToyContainer() {
//   return (
//     <div id="toy-collection">{/* Render the collection of ToyCards */}</div>
//   );
// }

// export default ToyContainer;
