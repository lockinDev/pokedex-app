import React from "react";
import { useTranslation } from "react-i18next";

import { Loader } from "../../Loader";
import { fetchPokemonEvolutionChain, fetchPokemonData } from "../../../api";

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
    <div>
      <h1>evolution</h1>
    </div>
  );
};

const extractId = ( url ) => {

    return url.match( /\/(\d+)\// )[1];

}
