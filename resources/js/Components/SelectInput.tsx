import { forwardRef, useEffect, useImperativeHandle, useRef, InputHTMLAttributes } from 'react';

export default forwardRef(function SelectInput(
    { className = '', isFocused = false, children, ...props }: InputHTMLAttributes<HTMLSelectElement> & { isFocused?: boolean },
    ref
) {
    const localRef = useRef<HTMLSelectElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    return (
        <select
            {...props}
            className={
                'border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded-md shadow-sm ' +
                className
            }
            ref={localRef}
        >
            {children}
        </select>
    );
});
