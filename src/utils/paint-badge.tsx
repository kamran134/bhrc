import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as PaintBrushes } from '../assets/images/paint_brushes.svg';

interface PaintBadgeProps {
    title: string;
}

const PaintBadge: FunctionComponent<PaintBadgeProps> = ({title}) => {
    const { t } = useTranslation();
    return (
        <div className='paint-badge'>
            <PaintBrushes />
            <div className='badge-label'>{t(title)}</div>
        </div>
    )
}

export default PaintBadge;