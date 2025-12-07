import { ButtonProps } from './Button.interface';
import cls from './Button.module.css';
import cn from 'classnames';

export default function Button({ variant, disabled, ...props }: ButtonProps) {
    return (
        <button
            type="button"
            disabled={disabled}
            className={cn(cls.btn, {
                [cls.follow]: variant === 'follow',
                [cls.following]: variant === 'following',
                [cls.edit]: variant === 'edit',
                [cls.post]: variant === 'post',
            })}
            {...props}
        >
            <span>
                {variant === 'follow'
                    ? 'Follow'
                    : variant === 'following'
                    ? ''
                    : variant === 'edit'
                    ? 'Edit profile'
                    : variant === 'post'
                    ? 'Post'
                    : ''}
            </span>
        </button>
    );
}
