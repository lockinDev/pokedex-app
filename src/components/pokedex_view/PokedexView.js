import React, { Fragment } from "react";
import lngs from "../../helpers/languages";
import { Navigation } from "../navigation/Navigation";

import "./pokedex.css";

export const PokedexView = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [language, setLanguage] = useState();

  const { i18n } = useTranslation();

  const handleChangeLanguage = (language) => {
    console.log(language);
    localStorage.setItem("language", language);
    setLanguage(language);
    i18n.changeLanguage(language);
  };

  if (isLoading) {
    return <Loader />;
  }

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
