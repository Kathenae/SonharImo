import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

// assets
import phoneIconPng from '@assets/phone-call-grey.png';
import whatsappIconPng from '@assets/whatsapp_grey.png';
import instagramIconPng from '@assets/instagram_grey.png';
import facebookIconPng from '@assets/facebook_grey.png';
import contactPng from '@assets/contact.png';

export default function ContactPage({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <Layout user={auth.user}>
            <Head title="Contactos" />

            <div className="pt-24 px-4 lg:px-24">
                <h1 className="text-gray-900 text-5xl lg:text-6xl font-bold">Contacte-<span className="text-orange-500">Nos</span></h1>
                <div className='flex flex-col space-y-4 text-4xl mt-8 pl-8'>
                    <div className='flex items-center space-x-2'>
                        <img width="32" src={phoneIconPng} />
                        <a href="">Telefone</a>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <img width="32" src={whatsappIconPng} />
                        <a href="">Whatsapp</a>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <img width="32" src={instagramIconPng} />
                        <a href="">Instagram</a>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <img width="32" src={facebookIconPng} />
                        <a href="">Facebook</a>
                    </div>
                </div>
                <div className="mt-12">
                    <a href="/" className="border-4 border-orange-500 text-orange-500 font-bold text-4xl py-2 px-4 rounded-xl block lg:inline-block">Encontrar Meu Lar</a>
                </div>
            </div>

            <img className="absolute right-0 top-24 hidden lg:block" width={600} src={contactPng} />
        </Layout>
    )
}
