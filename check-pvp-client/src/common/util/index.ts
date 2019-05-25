import {  useEffect, useRef } from 'react';
import { Region } from '../../../../check-pvp-common/models';

export const getImageUrlPrefix = (region: Region) =>
    `https://render-${region}.worldofwarcraft.com/character/`;

export function useInterval(callback: () => void, delay: number) {
    const savedCallback = useRef<any>();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}