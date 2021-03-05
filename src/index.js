import React from 'react';
import reactDom from 'react-dom'; 

import { PokedexApp } from './PokedexApp';
import './index.css';

reactDom.render(
    <PokedexApp />,
  document.getElementById('root')
);

