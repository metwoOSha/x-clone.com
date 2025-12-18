import { months } from './SelectDate.data';
import { SelectDateProps } from './SelectDate.interface';

import cls from './SelectDate.module.css';

export default function SelectDate({ variant }: SelectDateProps) {
    return (
        <label className={cls.label} htmlFor={variant}>
            <div className={cls.placeholder}>
                <span>
                    {variant === 'month'
                        ? 'Month'
                        : variant === 'day'
                        ? 'Day'
                        : variant === 'year'
                        ? 'Year'
                        : ''}
                </span>
            </div>
            <select
                id={variant}
                name={variant}
                defaultValue=""
                className={cls.select}
            >
                <option value="" disabled></option>
                {variant === 'month' &&
                    months.map((item) => (
                        <option key={item.id}>{item.month}</option>
                    ))}
                {variant === 'day' &&
                    Array.from({ length: 31 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                {variant === 'year' &&
                    Array.from({ length: 100 }, (_, i) => {
                        const year = new Date().getFullYear() - i;
                        return (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        );
                    })}
            </select>
            <div className={cls.arrow}>
                <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    width="22.5"
                    height="22.5"
                >
                    <path d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" />
                </svg>
            </div>
        </label>
    );
}
