import { create } from 'zustand';

interface usePostsData {
    postsData: undefined | null | [];
    setPostsData: (state: undefined | null | []) => void;
}

const usePostsData = create<usePostsData>((set) => ({
    postsData: undefined,
    setPostsData: (state) => set({ postsData: state })
}));

export default usePostsData;