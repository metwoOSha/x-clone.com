import { StateCreator } from 'zustand';

export interface SignInSlice {
    signInEmail: string;
    signInPassword: string;
    signInSetEmail: (signInEmail: string) => void;
    signInSetPassword: (signInPassword: string) => void;
    signInreSetAuth: () => void;
}

export const createSignInSlice: StateCreator<SignInSlice> = (set) => ({
    signInEmail: '',
    signInPassword: '',
    signInSetEmail: (signInEmail) => set({ signInEmail }),
    signInSetPassword: (signInPassword) => set({ signInPassword }),
    signInreSetAuth: () => set({ signInEmail: '', signInPassword: '' }),
});
