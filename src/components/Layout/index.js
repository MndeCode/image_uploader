import './index.scss';
import Uploader from '../Uploader/index';
// import Progress from '../Progress/index';
// import Complete from '../Complete/index';

const Layout = () => {    
    return (
        <div className="container">
            <Uploader />
            {/* <Progress /> */}
            {/* <Complete /> */}
        </div>
    );
}

export default Layout;