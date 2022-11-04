import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

export const useWindowResize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const listener = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    const debounceHandler = debounce(listener, 300)

    useEffect(() => {
        window.addEventListener('resize', debounceHandler);

        return () => {
            window.removeEventListener('resize', debounceHandler)
        }
    },[])

    return {
        width,
        height,
    };
}