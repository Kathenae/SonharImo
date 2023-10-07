import { SVGAttributes } from 'react';

interface ApplicationLogoProps {
    black: boolean
}

export default function ApplicationLogo({ black }: ApplicationLogoProps) {
    return (
        <>
            <img
                className='hidden lg:block'
                src={black ? '/assets/logo-black.png' : '/assets/logo-full-white.png'}
                width="148"
            />
            <img className='lg:hidden' src={'/assets/logo-black.png'} width="148" />
        </>
    );
}
