import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './details.css'


export const Details = ({ pokemon, setPokemonData }) => {

  const { t } = useTranslation();

  const getClassName = (tabName) => {
    return `tab-switch ${tab === tabName ? "active" : ""}`;
  };

  return (
    <div className="details">



    </div>
)
};
