import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as PaintBrushes } from '../assets/images/paint_brushes.svg';

const PaintBadge = ({title}) => {
    const { t } = useTranslation();
    return (
        <div className='paint-badge'>
            <PaintBrushes />
            <div className='badge-label'>{t(title)}</div>
        </div>
    )
}

export default PaintBadge;