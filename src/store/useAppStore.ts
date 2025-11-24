import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
    count: number;
    theme: 'light' | 'dark';
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    toggleTheme: () => void;
}

export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            count: 0,
            theme: 'light',
            increment: () => set((state) => ({ count: state.count + 1 })),
            decrement: () => set((state) => ({ count: state.count - 1 })),
            reset: () => set({ count: 0 }),
            toggleTheme: () =>
                set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
        }),
        {
            name: 'app-storage',
        }
    )
);
