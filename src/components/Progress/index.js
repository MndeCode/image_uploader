import './index.scss'; 
import { useRef, useEffect } from 'react';

const Progress = ({ progress }) => {
    const bar = useRef(null);
    useEffect(() => {
        bar.current.style.transform = `scaleX(${progress})`;
        console.log(`scaleX(${progress})`)
    })

    return (
        <div className='progress__container'>
            <h2>Uplouding...</h2>
            <div className='progress__bar'>
                <span className='progress' ref={ bar }></span>
            </div>
            <span className='percentage'>{ Math.floor(progress * 100) }%</span>
        </div>
    );
}

export default Progress;