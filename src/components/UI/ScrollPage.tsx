import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import { animateScroll as scroll, Element, Events } from 'react-scroll';

interface ScrollPateProps {
    name: string;
    pageNumber: number;
}

const ScrollPage: FunctionComponent<ScrollPateProps> = (props) => {
    return (
        <Element name={`scroll__${props.pageNumber}`} id={`scroll__${props.pageNumber}`}>
            {props.children}
        </Element>
    );
}

export default ScrollPage;