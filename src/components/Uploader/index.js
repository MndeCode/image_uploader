import './index.scss';
import { useState } from 'react';
import convertSize from '../../utils/convert';
import { UploadIcon } from '@heroicons/react/outline';
import { app } from '../../firebase.config'; 
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { v4 } from 'uuid';
import useFileStore from '../../store/index';

const Uploader = () => {
    const [entered, setEntered] = useState(false);
    const [file, setFile] = useState({}); 
    const addFile = useFileStore((state) => state.addFile);

    const upload = (file) => {
        const storage = getStorage(app);
        const storageRef = ref(storage, `images/${ v4() }`);
        
        const uploadTask = uploadBytesResumable(storageRef, file);
        // Register observers:
        // running - This event fires when the tasks start or resumes uploading, and often used in conjunction with the pause event. For larger uploads this event may fire multile times as a progress update.
        uploadTask.on("state_changed", (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes);
            console.log(`Upload is ${Math.floor(progress * 100)}% done`);
        }, (error) => {
            console.log(`The error is: \n ${error}`);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
                console.log(`File available at ${downloadURL}`);
            });
        });

        addFile(file)
    }
    
    return (
        <>
            <h3 className="uploader__title">Upload your image</h3>
            <p className="uploader__subtitle">File should be jpeg and png...</p>
            {
                ( file ) ? (
                    <div 
                        onDrop={ (e) => {
                            e.preventDefault();
                            setFile([...e.dataTransfer.files][0]);
                            setEntered(false);
                        } } 
                        onDragOver={ (e) => { 
                            e.preventDefault();
                            setEntered(true); 
                        } } 
                        onDragLeave={ () => setEntered(false) } 
                        className={ `uploader__zone ${entered && 'dragover'}` }
                    >
                        <img src="./assets/img/upload.svg" alt="Upload" loading="eager" />
                        <p>Drag &amp; drop your image here...</p>
                    </div>
                ) : (
                    <div className="uploader__items">  
                        {
                            <div className="uploader__item">
                                <p>
                                    {file.name}
                                    <span>{ convertSize(file.size) }</span>
                                </p>
                            </div>
                        }
                    </div>
                )

            }
            { (file) && (<span>Or</span>) }
            <div className="buttons">
                <label htmlFor="file" tabIndex={1}>Choose image</label>
                <input type="file" id='file' accept="image/*" multiple={false} onChange={ (e) => { 
                    setFile([...e.target.files][0]);
                    } } />
                {
                    (file) && (
                        <button type="submit" onClick={() => upload(file)}>
                            <UploadIcon /> Upload
                        </button>
                    )
                }
            </div>
        </>
    );
}

export default Uploader;