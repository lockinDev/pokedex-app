import React from 'react'
import { useTranslation } from 'react-i18next';

import { Loader } from '../../Loader';
import { fetchPokemonEvolutionChain, fetchPokemonData } from '../../../api';




export const Evolution = ({ pokemon, changePokemon }) => {


    const [ currentEvolution, setCurrentEvolution ] = useState( [] );
    const [ evolutionChain, setEvolutionChain ] = useState( [] );
    const [ loading, setLoading ] = useState( true );
    
    const { t } = useTranslation();
    const triggersDisplayName = {

        'level-up': 'Lvl',
        'trade': 'Trade',
        'use-item': 'Use'

    };


    useEffect( () => {

        setLoading( true );

        fetchPokemonEvolutionChain( pokemon.id ).then( ( data ) => {

            setEvolutionChain( [] );
            setCurrentEvolution( data.chain );
            setLoading( false );

        });

    }, [ pokemon ]);


    useEffect( () => {

        getNextEvolution();

        // eslint-disable-next-line
    }, [ currentEvolution ])



    return (
        <div>
            <h1>evolution</h1>
        </div>
    )
}
