import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { fetchTypes } from '../../../helpers/api';

export const About = ({ pokemon }) => {

    const [typesFetch, setTypesFetch] = useState([]); 

    const { t } = useTranslation();

    useEffect(() => {
        fetchTypes(pokemon.types, typesFetch, setTypesFetch);
        

    }, [pokemon.types]);


     // join ability names
     const abilities = pokemon.abilities.map( ( t ) => {
        return t.ability.name.replace( '-', ' ' );
    }).join( ', ' );


    // calculate height in cm
    const height = pokemon.height * 10;

    // calculate weight in kg
    const weight = pokemon.weight / 10;

    return (
        <div className="tab tab-about">
            
        <table>

            <tbody>
                <tr>
                    <td>{t('details.about.species')}</td>
                    <td>{ typesFetch.join( ', ' ) }</td>
                </tr>
                
                <tr>
                    <td>{t('details.about.height')}</td>
                    <td>{ height }cm</td>
                </tr>

                <tr>
                    <td>{t('details.about.weight')}</td>
                    <td>{ weight }kg</td>
                </tr>

                <tr>
                    <td>{t('details.about.abilities')}</td>
                    <td>{ abilities }</td>
                </tr>
            </tbody>

        </table>

    </div>
    )
}
