import { ButtonHTMLAttributes } from 'react';
import Checkbox from './Checkbox';

interface CheckedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    checked?: boolean
    onCheck?: (checked: boolean) => void
}

export default function CheckedButton({ className = '', disabled, children, checked, onCheck, ...props }: CheckedButtonProps) {
    return (
        <div className='flex items-center'>
            <button
                {...props}
                className={
                    `inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-l-md font-semibold text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 transition ease-in-out duration-150 ${disabled && 'opacity-25'
                    } ` + className
                }
                disabled={disabled}
            >
                {children}
            </button>
            <button onClick={() => onCheck? onCheck(!checked) : undefined} className={`inline-flex items-center px-2 py-2 border border-gray-800 font-semibold text-white uppercase tracking-widest transition ease-in-out duration-150 rounded-r-md ${checked? 'bg-green-500' : 'bg-red-500'}`}>
                <span>{checked? 'Sim' : 'Não'}</span>
            </button>
        </div>
    );
}
