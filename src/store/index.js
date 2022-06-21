import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const fileStore = (set) => ({
    link: '',
    file: {},
    addFiles: (newFile) => {           
        set((state) => ({
            file: {newFile, ...state.file},
        }))
    },
    addLinks: (link) => {
        set((state) => ( state.link = link ))
    }
});

const useFileStore = create(
    devtools(
        persist(fileStore, {
            name: 'files'
        })
    )
)

export default useFileStore;