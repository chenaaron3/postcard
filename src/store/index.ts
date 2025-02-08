import { create } from 'zustand';

interface PostcardState {
  postcardOpen: boolean;
  openPostcard: () => void;
}

export const useStore = create<PostcardState>()((set) => ({
  postcardOpen: false,
  openPostcard: () => set(() => ({ postcardOpen: true })),
}));
