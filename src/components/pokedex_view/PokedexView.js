import React, { Fragment, useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import { useTranslation } from "react-i18next";

import { Navigation } from "../navigation/Navigation";
import { Card } from "../card/Card";
import { Loader } from "../loader/Loader";
import { DetailsView } from "../details_view/DetailsView";
import { fetchPokemonData, fetchPokemons } from "../../helpers/api";
import { lngs } from "../../helpers/languages";

import "./pokedex.css";

export const PokedexView = ({generation}) => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);

  const [language, setLanguage] = useState();

  useEffect(() => {
    fillPokemonsArray();
  }, [generation, language]);

  const { i18n } = useTranslation();

  /**Functions */

  const handleChangeLanguage = (language) => {
    localStorage.setItem("language", language);
    setLanguage(language);
    i18n.changeLanguage(language);
  };

  const fillPokemonsArray = () => {
    // set loading state and reset pokemons array
    setIsLoading(true);
    setPokemons([]);

    if (generation.limit == null || generation.offset == null) {
      return;
    }

    // fetch first original 151 pokemons
    fetchPokemons(generation.limit, generation.offset).then(
      async ({ results }) => {
        let newPokemons = [];

        // iterate over each pokemon an add to array
        await Promise.all(
          results.map(async (pokemon, i) => {
            await fetchPokemonData(pokemon.name).then(async (json) => {
              newPokemons[i] = json;
            });
          })
        );

        setPokemons(newPokemons);
        setIsLoading(false);
      }
    );
  };


  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
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

      <div className="pokedex-view">
        {pokemons.map((p, i) => {
          return (
            <LazyLoad
              classNamePrefix={" card-container "}
              key={p.id}
              once
              resize
              placeholder={<Loader isItem={true} />}
            >
              <Card
                pokemon={p}
                key={p.id}
                onClick={() => setSelectedPokemon(i)}
              />
            </LazyLoad>
          );
        })}
      </div>

      {selectedPokemon !== -1 && (
        <DetailsView
          pokemon={pokemons[selectedPokemon]}
          setSelectedPokemon={setSelectedPokemon}
        />
      )}
    </>
  );
};
