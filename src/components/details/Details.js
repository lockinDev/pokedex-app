import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "./details.css";

export const Details = ({ pokemon, setPokemonData }) => {
  const { t } = useTranslation();

  const switchTab = (e) => {
    e.preventDefault();
    setTab(e.target.dataset.tab);
  };

  const getClassName = (tabName) => {
    return `tab-switch ${tab === tabName ? "active" : ""}`;
  };

  return (
    <div className="details">
      <div className="tabs-switch-container">
        <button>{t("details.about.title")}</button>
        <button>{t("details.stats.title")}</button>
        <button>{t("details.evol.title")}</button>
      </div>
    </div>
  );
};
