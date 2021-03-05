import React from 'react' 
import { useTranslation } from 'react-i18next';
import './loader.css';

export const Loader = ({isItem = false}) => {
    const { t } = useTranslation();

    return (
        <div className={` ${isItem ? "loader-item" :  "loader"}`}>
            {t('loading')}
        </div>
    )
}
