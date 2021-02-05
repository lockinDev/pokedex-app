import React from "react";
import './card.css'

export const Card = ({ pokemon: { name, id, sprites, types }, onClick }) => {
  // get pokemon image
  const imgURL = sprites.other["official-artwork"].front_default;

  // add css classes according to pokemon type
  const cssClass = types.map((t) => "type-" + t.type.name).join(" ");

  // pad pokemon id with zeros
  const paddedId = "#" + id.toString().padStart(3, "000");

  return (
    <div className={`card ${cssClass}`} onClick={onClick}>
      <div className="bg-pokeball"></div>
      <span className="pokemon-id">{paddedId}</span>

      <div className="card-title">
        <h2>{name.replace(/-/g, " ")}</h2>  

        <div className="pokemon-types"></div>

        <div className="pokemon-image">
          <img width={100} alt={name} src={imgURL} />
        </div>
      </div>
    </div>
  );
};
