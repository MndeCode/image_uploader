import './index.scss';
import Uploader from '../Uploader/index';
import Progress from '../Progress/index';
import Complete from '../Complete/index';
import useFileStore from '../../store';

const Layout = () => {  
    let progress = useFileStore((state) => state.progress);   
    return (
        <>
            { (progress <= 0) && ( <Uploader /> ) }
            { (progress > 0 && progress < 1) && <Progress progress={ progress } />}
            { (progress === 1) && ( <Complete /> ) }
        </>
    );
}

export default Layout;