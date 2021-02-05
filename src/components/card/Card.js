import React from "react";

export const Card = ({ pokemon: { name, id, sprites, types }, onClick }) => {
  return (
    <div className={`card ${cssClass}`} onClick={onClick}>
      <div className="bg-pokeball"></div>
      <span className="pokemon-id">{paddedId}</span>

      
      
    </div>
  );
};
