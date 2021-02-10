import React, { Fragment, useRef, useState } from 'react'
import ReactDOM from "react-dom";

import { Card } from "../card/Card";
import { BackButton } from "../back_button/BackButton";

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
          <div className="details-view-container shown" ref={ref}>
            <BackButton onClick={handleBackClick} />
            <Card pokemon={pokemon} />
           
          </div>
        </Fragment >,
        document.body
      );
    };
