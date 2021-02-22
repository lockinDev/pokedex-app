import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "./details.css";

export const Details = ({ pokemon, setPokemonData }) => {
  const [tab, setTab] = useState("about");

  const { t } = useTranslation();

  const sprites = pokemon.sprites.other;
  const imgURL = sprites["official-artwork"].front_default;

  const switchTab = (e) => {
    e.preventDefault();
    setTab(e.target.dataset.tab);
  };

  const getClassName = (tabName) => {
    return `tab-switch ${tab === tabName ? "active" : ""}`;
  };

  const changePokemon = (pokemon) => {
    setTab("about");
    setPokemonData(pokemon);
  };

  return (
    <div className="details">
      <img src={imgURL} className="pokemon-image" alt={pokemon.name} />

      <div className="tabs-switch-container">
        <button
          className={getClassName("about")}
          data-tab="about"
          onClick={switchTab}
        >
          {t("details.about.title")}
        </button>
        <button
          className={getClassName("base-stats")}
          data-tab="base-stats"
          onClick={switchTab}
        >
          {t("details.stats.title")}
        </button>
        <button
          className={getClassName("evolution")}
          data-tab="evolution"
          onClick={switchTab}
        >
          {t("details.evol.title")}
        </button>
      </div>

      {tab === "about" }

      {tab === "base-stats" }

      {tab === "evolution" }
    </div>
  );
};
