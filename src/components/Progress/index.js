import './index.scss';

const Progress = () => {
    
    return (
        <div className='progress__container'>
            <h2>Uplouding...</h2>
            <div className='progress__bar'>
                <span className='progress'></span>
            </div>
            <span className='percentage'>80%</span>
        </div>
    );
}

export default Progress;