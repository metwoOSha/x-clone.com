import { StateCreator } from 'zustand';

export interface SignUpSlice {
    signUpEmail: string;
    signUpPassword: string;
    signUpSetEmail: (email: string) => void;
    signUpSetPassword: (password: string) => void;
}

export const createSignUpSlice: StateCreator<SignUpSlice> = (set) => ({
    signUpEmail: '',
    signUpPassword: '',
    signUpSetEmail: (signUpEmail) => set({ signUpEmail }),
    signUpSetPassword: (signUpPassword) => set({ signUpPassword }),
});
