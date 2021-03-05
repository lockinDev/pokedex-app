import React from 'react' 
import "./back_button.css"

export const BackButton = ({ onClick }) => {
    return (
        <div className="back-button" onClick={ onClick }></div>
    )
}
