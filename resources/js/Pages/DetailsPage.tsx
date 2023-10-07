import Layout from "@/Layouts/Layout";
import { HouseListing, PageProps } from "@/types";
import { format_currency } from "@/utils";
import { Head } from "@inertiajs/react";

export default function DetailsPage({ listing, auth }: PageProps<{ listing: HouseListing }>) {
    return (
        <Layout user={auth.user}>
            <Head title="Home" />

            <div className="px-4 lg:px-24 pt-24">
                <h1 className='text-4xl font-thin text-gray-800'>Detalhes do Imovel</h1>
            </div>

            <div className="px-4 lg:px-24 mt-4">
                <div className="grid lg:grid-cols-3 gap-4 bg-white py-4 px-4 rounded-lg">
                    <div className="lg:col-span-2 rounded-lg">
                        <img src={listing.cover_image_url} className="rounded-lg"/>
                    </div>
                    <div className="px-4 flex flex-col">
                        <div className="flex justify-between">
                            <div className="flex items-center space-x-2">
                                <img src="/assets/bedroom.png" width="38" />
                                <span className="text-xl font-semibold">{listing.total_bedrooms}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <img src="/assets/bathroom.png" width="38" />
                                <span className="text-xl font-semibold">{listing.total_bedrooms}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <img src="/assets/garage.png" width="38" />
                                <span className="text-xl font-semibold">{listing.total_garages}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <img src="/assets/squarefoot.png" width="38" />
                                <span className="text-xl font-semibold">
                                    {400}
                                    <span className="relative text-base">
                                        m
                                        <span className="absolute top-0 text-xs">2</span>
                                    </span>
                                </span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-orange-500 font-bold text-2xl">Descrição</h3>
                            <p className="pl-2 mt-2">{listing.description}</p>
                        </div>

                        <div className="mt-4 lg:mt-auto">
                            <h3 className="text-orange-500 font-bold text-2xl">Preço: <span className="text-gray-900">{format_currency(listing.price, 'MZN')}</span></h3>
                            <div className="grid grid-cols-3 lg:grid-cols-2 gap-x-4">
                                <a role="button" className='px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-md font-bold text-white mt-4 text-lg flex items-center space-x-2'>
                                    <img width="24" src='/assets/phone-call-white.png' />
                                    <span>Ligar Agora</span>
                                </a>
                                <a role="button" className='px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-md font-bold text-white mt-4 text-lg flex items-center space-x-2'>
                                    <img width="24" src='/assets/whatsapp_white.png' />
                                    <span>Whatsapp</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
