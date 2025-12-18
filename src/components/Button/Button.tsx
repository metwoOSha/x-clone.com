import Image from 'next/image';
import { ButtonProps } from './Button.interface';
import cls from './Button.module.css';
import cn from 'classnames';

export default function Button({
    variant,
    disabled,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            type="button"
            disabled={disabled}
            className={cn(
                cls.btn,
                {
                    [cls.follow]: variant === 'follow',
                    [cls.following]: variant === 'following',
                    [cls.edit]: variant === 'edit',
                    [cls.post]: variant === 'post',
                    [cls.social]:
                        variant === 'social' ||
                        variant === 'social-google' ||
                        variant === 'social-github',
                    [cls.socialBlack]: variant === 'social-black',
                },
                variant === 'large' && [cls.social, cls.large]
            )}
            {...props}
        >
            <span>
                {variant === 'follow' ? (
                    'Follow'
                ) : variant === 'following' ? (
                    ''
                ) : variant === 'edit' ? (
                    'Edit profile'
                ) : variant === 'post' ? (
                    'Post'
                ) : variant === 'social' ||
                  variant === 'social-black' ||
                  variant === 'large' ? (
                    children
                ) : variant === 'social-google' ? (
                    <div className={cls.socialLogin}>
                        <span style={{ marginRight: '8px' }}>
                            <Image
                                src="/icons/google.svg"
                                alt="google icon"
                                width={20}
                                height={20}
                            />
                        </span>
                        <span className={cls.google}>Sign up with Google</span>
                    </div>
                ) : variant === 'social-github' ? (
                    <div className={cls.socialLogin}>
                        <span style={{ marginRight: '8px' }}>
                            <Image
                                src="/icons/github.svg"
                                alt="google icon"
                                width={20}
                                height={20}
                            />
                        </span>
                        <span className={cls.github}>Sign up with Github</span>
                    </div>
                ) : (
                    ''
                )}
            </span>
        </button>
    );
}
