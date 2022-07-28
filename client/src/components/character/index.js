import React from "react";

const Character = ({ name, origin, species, image }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h4>{origin}</h4>
      <h4>{species}</h4>
      <img src={image} alt="/" />
    </div>
  );
};

export default Character;
