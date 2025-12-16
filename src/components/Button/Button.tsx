import { ButtonProps } from './Button.interface';
import cls from './Button.module.css';
import cn from 'classnames';

export default function Button({ variant, disabled, children, ...props }: ButtonProps) {
    return (
        <button
            type="button"
            disabled={disabled}
            className={cn(cls.btn, {
                [cls.follow]: variant === 'follow',
                [cls.following]: variant === 'following',
                [cls.edit]: variant === 'edit',
                [cls.post]: variant === 'post',
                [cls.social]: variant === 'social',
                [cls.socialBlack]: variant === 'social-black',
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
                    : variant === 'social' || variant === 'social-black'
                    ? children
                    : ''}
            </span>
        </button>
    );
}
