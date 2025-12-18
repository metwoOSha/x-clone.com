import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createSignInSlice, SignInSlice } from './SignInSlice';
import { createSignUpSlice, SignUpSlice } from './SignUpSlice';

type StoreState = SignInSlice & SignUpSlice;

export const useXStore = create<StoreState>()(
    devtools(
        (...a) => ({
            ...createSignInSlice(...a),
            ...createSignUpSlice(...a),
        }),
        { name: 'X-Clone store' }
    )
);


