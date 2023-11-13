import { Link, InertiaLinkProps } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

interface NavLinkProps extends PropsWithChildren{
    routeName: string,
    routeMatch?: string,
    mobile?: boolean,
    className?: string,
    method?: 'get' | 'post' | 'put' | 'patch' | 'delete'
}

export default function NavLink({ routeName, routeMatch, method, mobile = false, className = '', children, ...props }: NavLinkProps) {
    return (
        <Link
            href={route(routeName)}
            method={method}
            className={
                '' +
                (route().current(routeMatch ?? routeName)? 'bg-orange-500 text-white font-extrabold rounded-lg px-4 py-1' : 'font-medium rounded-lg px-4 py-1') +
                (mobile? 'block py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100' : '') +
                className
            }
        >
            {children}
        </Link>
    );
}
