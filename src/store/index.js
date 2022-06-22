import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const fileStore = (set) => ({
    link: '',
    file: {},
    error: false,
    progress: 0,

    addFile: (newFile) => {           
        set((state) => (state.file = newFile))
    },
    setLink: (link) => (set({ link })),
    addError: (error) => ( set({error}) ),
    setProgress: (progress) => ( set({progress}) )
});

const useFileStore = create(
    devtools(
        persist(fileStore, {
            name: 'files'
        })
    )
)

export default useFileStore;