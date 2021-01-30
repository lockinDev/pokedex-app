import React from 'react'
import './loader.css';

export const Loader = ({isItem = false}) => {
    const { t } = useTranslation();

    return (
        <div className={` ${isItem ? "loader-item" :  "loader"}`}>
            {t('loading')}
        </div>
    )
}
