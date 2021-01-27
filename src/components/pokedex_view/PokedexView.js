import React, { Fragment } from "react";
import lngs from '../../helpers/languages'
import { Navigation } from "../navigation/Navigation";

import './pokedex.css';

export const PokedexView = () => {

  return (
    <Fragment>
      <div className="flags">
        {Object.keys(lngs).map((lng) => (
          <img
            key={lng}
            src={lngs[lng].image}
            alt={lngs[lng].alt}
            onClick={() => handleChangeLanguage(lng)}
          ></img>
        ))}        
      </div>

      <Navigation />


    </Fragment>
  );
};
