import React from 'react'

export const BaseStats = ({ stats }) => {
    return (
        <div className="tab tab-base-stats">
            
            <table>

                <tbody>
                    <tr>
                        <td>HP</td>
                        <td>
                            { stats[0].base_stat }
                        </td>
                    </tr>
                    
                    <tr>
                        <td>{t('details.stats.attack')}</td>
                        <td>
                            { stats[1].base_stat }
                        </td>
                    </tr>

                    <tr>
                        <td>{t('details.stats.defense')}</td>
                        <td>
                            { stats[2].base_stat }
                        </td>
                    </tr>

                    <tr>
                        <td>{t('details.stats.sp_atk')}</td>
                        <td>
                            { stats[3].base_stat }
                        </td>
                    </tr>

                    <tr>
                        <td>{t('details.stats.sp_def')}</td>
                        <td>
                            { stats[4].base_stat }
                        </td>
                    </tr>

                    <tr>
                        <td>{t('details.stats.speed')}</td>
                        <td>
                            { stats[5].base_stat }
                        </td>
                    </tr>

                    <tr>
                        <td>Total</td>
                        <td>
                            { total }
                        </td>
                    </tr>
                </tbody>

            </table>

        </div>
    )
}
