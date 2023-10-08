import { SVGAttributes } from 'react';

interface ApplicationLogoProps {
    black: boolean
}

import logoBlackPng from '../../../public/assets/logo-black.png'
import logoWhitePng from '../../../public/assets/logo-full-white.png'

export default function ApplicationLogo({ black }: ApplicationLogoProps) {
    return (
        <>
            <img
                className='hidden lg:block'
                src={black ? logoBlackPng : logoWhitePng}
                width="148"
            />
            <img className='lg:hidden' src={logoBlackPng} width="148" />
        </>
    );
}
