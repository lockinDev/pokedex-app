import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { fetchTypes } from '../../../helpers/api';

export const About = ({ pokemon }) => {
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
