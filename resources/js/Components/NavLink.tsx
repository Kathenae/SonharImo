import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                '' +
                (active
                    ? 'bg-orange-500 text-white font-extrabold rounded-lg px-4 py-1'
                    : 'font-medium rounded-lg px-4 py-1') +
                className
            }
        >
            {children}
        </Link>
    );
}
