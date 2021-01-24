import React from "react";
import { useTranslation } from 'react-i18next';
 
import CustomNavLink from './CustomNavLink';
import generations from '../../helpers/generations';
import "./navigation.css"; 

export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <div className="navigation-container">
      <h3 className="navigation-title"> {t("navigation.title_gen")}</h3>

      <div className="links-container">
        {generations.map((gen, i) => (
          <CustomNavLink exact key={i} to={gen.link}>
            {gen.text}
          </CustomNavLink>
        ))}
      </div>
    </div>
  );
};
