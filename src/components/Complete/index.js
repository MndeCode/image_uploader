import './index.scss';
import { useState } from 'react';
import { CheckCircleIcon, RefreshIcon } from '@heroicons/react/solid';
import { DuplicateIcon } from '@heroicons/react/outline';
import useFileStore from '../../store';

const Complete = () => {
    const setProgress = useFileStore(state => state.setProgress);
    const [copied, setCopied] = useState(false);
    const link = useFileStore(state => state.link);
    const setLink = useFileStore(state => state.setLink);
    const setFile = useFileStore(state => state.addFile);

    const copyLink = () => {
        navigator.clipboard.writeText(link);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
        setLink('');
        setFile({});
    }

    return (
        <>
            <div className='complete'>
                <div className="complete__header">
                    <CheckCircleIcon />
                    <h2>Upload Successfully!</h2>
                </div>
                <img src={ link } alt="upload" className="complete__image" />
                <div className="complete__link">
                    <p>{ link }</p>
                    <button onClick={ () => copyLink() }>
                        {
                            (!copied) ? (
                                <>
                                    <DuplicateIcon />
                                    <span>Copy Link</span>
                                </>
                            ) : <span>Copied!</span>
                        }
                    </button>
                </div>
            </div>
            <button className="restart" onClick={ () => setProgress(0) }>Go back to the root page <RefreshIcon /> </button>
        </>
    );
}

export default Complete;