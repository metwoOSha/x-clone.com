import { ButtonProps } from './Button.interface';
import cls from './Button.module.css';
import cn from 'classnames';

export default function Button({ type, disabled = false }: ButtonProps) {
    return (
        <button
            type="button"
            disabled={disabled}
            className={cn(cls.btn, {
                [cls.follow]: type === 'follow',
                [cls.following]: type === 'following',
                [cls.edit]: type === 'edit',
                [cls.post]: type === 'post',
            })}
        >
            <span>
                {type === 'follow'
                    ? 'Follow'
                    : type === 'following'
                    ? ''
                    : type === 'edit'
                    ? 'Edit profile'
                    : type === 'post'
                    ? 'Post'
                    : ''}
            </span>
        </button>
    );
}
