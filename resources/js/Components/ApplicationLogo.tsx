import { SVGAttributes } from 'react';

interface ApplicationLogoProps {
    black?: boolean
    size?: number
}

import logoBlackPng from '../../../public/assets/logo-black.png'
import logoWhitePng from '../../../public/assets/logo-full-white.png'

export default function ApplicationLogo({ black, size }: ApplicationLogoProps) {
    return (
        <>
            <img
                className='hidden lg:block'
                src={black ? logoBlackPng : logoWhitePng}
                width={size ?? "148"}
            />
            <img className='lg:hidden' src={logoBlackPng} width="148" />
        </>
    );
}
