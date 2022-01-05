import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import NewsHeader from '../../Elements/NewsHeader/NewsHeader';

const News: FunctionComponent = () => {
    return (
        <>
            <NewsHeader />
            <Outlet />
        </>
    );
}

export default News;