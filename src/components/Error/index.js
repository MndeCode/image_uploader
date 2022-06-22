import { ExclamationIcon } from "@heroicons/react/solid";
import "./index.scss";
import useFileStore from '../../store/index';

const Error = ({errorMessage}) => {
    const setError = useFileStore((state) => state.addError);
    return (
        <div className='error__container'>
            <div className="error__bg"></div>
            <div className="error__modal">
                <div className="error__header">
                    <ExclamationIcon />
                    <h3>Warning!</h3>
                </div>
                <p>{ errorMessage }</p>
                <button onClick = {(e) => setError(false)}>Got it</button>
            </div>
        </div>
    )
}

export default Error;