import { create } from 'zustand';

interface useUsersData {
    usersData: undefined | null | [];
    setUsersData: (state: undefined | null | []) => void;
}

const useUsersData = create<useUsersData>((set) => ({
    usersData: undefined,
    setUsersData: (state) => set({ usersData: state })
}));

export default useUsersData;