import React from 'react'
import { useTranslation } from 'react-i18next';
import {RangeView} from '../../range_view/RangeView'

export const BaseStats = ({ stats }) => {

    const { t } = useTranslation();
    const total = stats.reduce( ( sum, current ) => {
        return sum + parseInt( current.base_stat );
    }, 0 );

    return (
        <div className="tab tab-base-stats">
            
            <table>

                <tbody>
                    <tr>
                        <td>HP</td>
                        <td>
                            { stats[0].base_stat }
                            <RangeView value={ stats[0].base_stat } />
                        </td>
                    </tr>
                    
                    <tr>
                        <td>{t('details.stats.attack')}</td>
                        <td>
                            { stats[1].base_stat }
                            <RangeView value={ stats[1].base_stat } />
                        </td>
                    </tr>

                    <tr>
                        <td>{t('details.stats.defense')}</td>
                        <td>
                            { stats[2].base_stat }
                            <RangeView value={ stats[2].base_stat } />
                        </td>
                    </tr>

                    <tr>
                        <td>{t('details.stats.sp_atk')}</td>
                        <td>
                            { stats[3].base_stat }
                            <RangeView value={ stats[3].base_stat } />
                        </td>
                    </tr>

                    <tr>
                        <td>{t('details.stats.sp_def')}</td>
                        <td>
                            { stats[4].base_stat }
                            <RangeView value={ stats[4].base_stat } />
                        </td>
                    </tr>

                    <tr>
                        <td>{t('details.stats.speed')}</td>
                        <td>
                            { stats[5].base_stat }
                            <RangeView value={ stats[5].base_stat } />
                        </td>
                    </tr>

                    <tr>
                        <td>Total</td>
                        <td>
                            { total }
                            <RangeView value={ total } max="600" />
                        </td>
                    </tr>
                </tbody>

            </table>

        </div>
    )
}
