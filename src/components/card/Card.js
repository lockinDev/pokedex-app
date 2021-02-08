import React from "react";
import LazyLoad from 'react-lazyload';
import { fetchTypes } from '../../helpers/api'; 

import "./card.css";

export const Card = ({ pokemon: { name, id, sprites, types }, onClick }) => {
  const [typesFetch, setTypesFetch] = useState([]);

  // get pokemon image
  const imgURL = sprites.other["official-artwork"].front_default;

  // add css classes according to pokemon type
  const cssClass = types.map((t) => "type-" + t.type.name).join(" ");

  // pad pokemon id with zeros
  const paddedId = "#" + id.toString().padStart(3, "000");

  useEffect(() => {
    fetchTypes(types, typesFetch, setTypesFetch);
    console.log();
  }, [types]);

  return (
    <div className={`card ${cssClass}`} onClick={onClick}>
      <div className="bg-pokeball"></div>
      <span className="pokemon-id">{paddedId}</span>

      <div className="card-title">
        <h2>{name.replace(/-/g, " ")}</h2>

        <div className="pokemon-types">
          {typesFetch.map((t, i) => {
            return (
              <span className="type" key={i}>
                {t}
              </span>
            );
          })}
        </div>

        <div className="pokemon-image">
          <LazyLoad once>
            <div className="pokemon-image">
              <img width={100} alt={name} src={imgURL} />
            </div>
          </LazyLoad>
        </div>
      </div>
    </div>
  );
};
