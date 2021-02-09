import React, { Fragment, useRef, useState } from 'react'



export const DetailsView = (props) => {

    const ref = useRef(null);
    const [pokemon, setPokemon] = useState(props.pokemon);
    const [hideOverlay, setHideOverlay] = useState(false);


    return (
        <Fragment>
             <div className="details-view-container shown" ref={ref}>

                 
             </div>

        </Fragment>
    )
}
