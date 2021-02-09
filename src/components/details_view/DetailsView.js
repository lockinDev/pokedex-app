import React, { Fragment, useRef, useState } from 'react'
import ReactDOM from "react-dom";

import { Card } from "../card/Card";
import './details_view.css';




export const DetailsView = (props) => {

    const ref = useRef(null);
    const [pokemon, setPokemon] = useState(props.pokemon);
    const [hideOverlay, setHideOverlay] = useState(false);

    const handleBackClick = () => {
        setHideOverlay(true);
    
        ref.current.classList.add("hidden");
    
        setTimeout(() => {
          props.setSelectedPokemon(-1);
        }, 500);
      };
    
     const setPokemonData = (data) => {
        setPokemon(data);
      }
    


      return ReactDOM.createPortal(
        <Fragment >
          <Overlay hidden={hideOverlay} onClick={handleBackClick} />
          <div className="details-view-container shown" ref={ref}>
            <Card pokemon={pokemon} />
           
          </div>
        </Fragment >,
        document.body
      );
    };
