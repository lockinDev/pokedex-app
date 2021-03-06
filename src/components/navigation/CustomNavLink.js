import React from 'react'
import { NavLink } from 'react-router-dom'
  
 

export const CustomNavLink = (props) => {
    return (
        <NavLink className="navigation-link" activeClassName="active" { ...props }>
            { props.children }
        </NavLink>
    )
} 
