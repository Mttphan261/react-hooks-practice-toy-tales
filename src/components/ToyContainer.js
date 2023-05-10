import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyArray, updateToy, deleteToy }) {
  const mappedToys = toyArray.map((el) => {
    return <ToyCard key={el.id} toy={el} updateToy={updateToy} deleteToy={deleteToy}/>;
  });

  return (
    <div id="toy-collection">{/* Render the collection of ToyCards */}
    {mappedToys}
    </div>
  );
}

export default ToyContainer;
