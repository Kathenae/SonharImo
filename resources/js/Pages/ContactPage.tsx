import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function ContactPage({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>){
    return (
        <Layout user={auth.user}>
            <Head title="Contactos" />

            <div className="pt-24 px-4 lg:px-24">
                <h1 className="text-gray-900 text-5xl lg:text-6xl font-bold">Contacte-<span className="text-orange-500">Nos</span></h1>
                <div className='flex flex-col space-y-4 text-4xl mt-8 pl-8'>
                    <div className='flex items-center space-x-2'>
                        <img width="32" src='/assets/phone-call-grey.png' />
                        <a href="">Telefone</a>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <img width="32" src='/assets/whatsapp_grey.png' />
                        <a href="">Whatsapp</a>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <img width="32" src='/assets/instagram_grey.png' />
                        <a href="">Instagram</a>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <img width="32" src='/assets/facebook_grey.png' />
                        <a href="">Facebook</a>
                    </div>
                </div>
                <div className="mt-12">
                    <a href="/" className="border-4 border-orange-500 text-orange-500 font-bold text-4xl py-2 px-4 rounded-xl block lg:inline-block">Encontrar Meu Lar</a>
                </div>
            </div>

            <img className="absolute right-0 top-24 hidden lg:block" width={600} src="/assets/contact.png" />
        </Layout>
    )
}
