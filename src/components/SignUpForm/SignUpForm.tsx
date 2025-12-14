import { signUp } from '@/actions/auth';
import cls from './SignUpForm.module.css';
import { useActionState } from 'react';

const initialState = { error: '' };

export default function SignUpForm() {
    const [state, FormAction] = useActionState(signUp, initialState);
    return <form action={FormAction}>
		
	</form>;
}
