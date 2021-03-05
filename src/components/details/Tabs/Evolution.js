import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Loader } from "../../loader/Loader";
import { fetchPokemonEvolutionChain, fetchPokemonData } from "../../../helpers/api";

export const Evolution = ({ pokemon, changePokemon }) => { 
  const [currentEvolution, setCurrentEvolution] = useState([]);
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [loading, setLoading] = useState(true);

  const { t } = useTranslation();
  const triggersDisplayName = {
    "level-up": "Lvl",
    trade: "Trade",
    "use-item": "Use",
  };

  useEffect(() => {
    setLoading(true);

    fetchPokemonEvolutionChain(pokemon.id).then((data) => {
      setEvolutionChain([]);
      setCurrentEvolution(data.chain);
      setLoading(false);
    });
  }, [pokemon]);

  useEffect(() => {
    getNextEvolution();

    // eslint-disable-next-line
  }, [currentEvolution]);

  const getNextEvolution = () => {
    if (
      currentEvolution.length === 0 ||
      currentEvolution.evolves_to.length === 0
    )
      return null;

    const nextEvolution = currentEvolution.evolves_to[0];
    const details = nextEvolution.evolution_details[0];

    // extract useful data
    const current = currentEvolution.species.name;
    const next = nextEvolution.species.name;
    const trigger = triggersDisplayName[details.trigger.name];
    const triggerValue =
      details.min_level ||
      details.min_happiness ||
      details.item?.name.replace("-", " ") ||
      "";
    const currentId = extractId(currentEvolution.species.url);
    const nextId = extractId(nextEvolution.species.url);

    // get images URL
    const currentImage = getImageURL(currentId);
    const nextImage = getImageURL(nextId);

    // set current evolution to next evolution
    setCurrentEvolution((prev) => prev.evolves_to[0]);

    // push new evolution object
    setEvolutionChain((prev) => {
      return [
        ...prev,
        {
          current,
          next,
          trigger,
          triggerValue,
          currentId,
          nextId,
          currentImage,
          nextImage,
        },
      ];
    });
  };

  const getImageURL = (id) => {
    const baseURL =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other";

    return `${baseURL}/official-artwork/${id}.png`;
  };

  const fetchPokemon = (name) => {
    if (!name || pokemon.name === name) {
      return;
    }

    setLoading(true);
    fetchPokemonData(name).then((data) => {
      changePokemon(data);
    });
  };

  return (
    <div className="tab tab-evolution">
      <h3>{t("details.evol.subtitle")}</h3>

      {loading && <Loader />}

      {!loading && evolutionChain.length === 0 && (
        <div>This pokemon doesn't evolove</div>
      )}

      {!loading &&
        evolutionChain.map((e, i) => {
          return (
            <div className="evolution-container" key={i}>
              <div className="evolve-container evolve-from">
                <div
                  className="image-container"
                  onClick={() => {
                    fetchPokemon(e.current);
                  }}
                >
                  <div className="bg-pokeball"></div>
                  <img alt={e.current} src={e.currentImage} />
                </div>

                <span>{e.current}</span>
              </div>

              <div className="trigger-container">
                <div className="arrow"></div>
                {e.trigger} {e.triggerValue}
              </div>

              <div
                className="evolve-container evolve-to"
                onClick={() => {
                  fetchPokemon(e.next);
                }}
              >
                <div className="image-container">
                  <div className="bg-pokeball"></div>
                  <img alt={e.next} src={e.nextImage} />
                </div>

                <span>{e.next}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

const extractId = (url) => {
  return url.match(/\/(\d+)\//)[1];
};
