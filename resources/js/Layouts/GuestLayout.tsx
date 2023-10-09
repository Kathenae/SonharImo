import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="w-full sm:max-w-xl mt-12 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <div className='mb-8 flex items-center justify-center bg-gray-50 py-4'>
                    <Link href="/">
                        <ApplicationLogo black={true} />
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
}
