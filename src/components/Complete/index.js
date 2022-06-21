import './index.scss';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { DuplicateIcon } from '@heroicons/react/outline';

const Complete = () => {
    
    return (
        <div className='complete'>
            <div className="complete__header">
                <CheckCircleIcon />
                <h2>Upload Successfully!</h2>
            </div>
            <div className="complete__image"></div>
            <div className="complete__link">
                <p>https://Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <button>
                    <DuplicateIcon />
                    <span>Copy Link</span>
                </button>
            </div>
        </div>
    );
}

export default Complete;