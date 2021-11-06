import React, { FunctionComponent } from 'react';
import { Redirect } from 'react-router-dom';

export const redirect: FunctionComponent<{url: string}> = ({url}) => {
    console.log('url', url);
    return (
        <Redirect to={url} />
    );
}