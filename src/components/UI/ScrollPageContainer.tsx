import React, { FunctionComponent, useEffect, useState } from "react";

const ScrollPageContainer: FunctionComponent = (props) => {
    const bodyHeight = window.innerHeight;
    
    const [startPosition, setStartPosition] = useState<number>(0);
    const [scrolled, setScrolled] = useState<number>(0);
    const [scrollTrigger, setTrigger] = useState<boolean>(false);
    const currTime = new Date();

    const handleScroll = (e: Event) => {
        const newTime = new Date();
        if (newTime.getTime() - currTime.getTime() > 500 && startPosition + bodyHeight < bodyHeight * 4) {
            setScrolled(window.scrollY - startPosition);
            setTrigger(true);
        } else {
            setTrigger(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [window.scrollY]);

    useEffect(() => {
        if (scrolled > 0) {
            const scrollEnd: number = startPosition === 0 ? bodyHeight - 150 : startPosition + bodyHeight - 90;
            scrollTo(scrollEnd).then(() => {
                setStartPosition(scrollEnd);
                //setEndPosition(endPosition + bodyHeight);
                setTrigger(false);
            });
        }
        else if (scrolled < 0) {
            const scrollEnd = startPosition === bodyHeight - 150 ? 0 : startPosition - bodyHeight + 90;
            scrollTo(scrollEnd).then(() => {
                setStartPosition(scrollEnd);
                setTrigger(false);
            });
        }
    }, [scrollTrigger]);

    const scrollTo = async (position: number) => {
        const prom = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(window.scrollTo({behavior: 'smooth', top: position}));
            }, 500);
        });
        return prom;
    }

    return (
        <>
            {props.children}
        </>
    );
}

export default ScrollPageContainer;