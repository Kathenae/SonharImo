import Layout from "@/Layouts/Layout";
import { HouseListing, PageProps } from "@/types";
import { cn, format_currency, lerp } from "@/utils";
import { Head } from "@inertiajs/react";

// assets
import bedroomIconPng from '@assets/bedroom.png';
import bathroomIconPng from '@assets/bathroom.png';
import garageIconPng from '@assets/garage.png';
import squarefootageIconPng from '@assets/squarefoot.png';
import phoneIconPng from '@assets/phone-call-white.png';
import whatsappIconPng from '@assets/whatsapp_white.png';
import ImageGallery from "@/Components/ImageGallery";

export default function DetailsPage({ listing, auth, flash }: PageProps<{ listing: HouseListing }>) {

    return (
        <Layout user={auth.user} flashMessages={flash}>
            <Head title="Home" />

            <div className="px-4 lg:px-24 pt-24">
                <h1 className='text-4xl font-thin text-gray-800'>Detalhes do Imovel</h1>
            </div>

            <div className="px-4 lg:px-24 mt-4">
                <div className="grid lg:grid-cols-3 gap-4 bg-white py-4 px-4 rounded-lg">
                    <ImageGallery images={listing.images} />

                    <div className="px-4 flex flex-col mt-6 lg:mt-0">
                        <div className="flex justify-between">
                            <div className="flex items-center space-x-2">
                                <img src={bedroomIconPng} className="w-6 lg:w-8"/>
                                <span className="text-xl font-semibold">{listing.total_bedrooms}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <img src={bathroomIconPng} className="w-6 lg:w-8"/>
                                <span className="text-xl font-semibold">{listing.total_bedrooms}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <img src={garageIconPng} className="w-6 lg:w-8"/>
                                <span className="text-xl font-semibold">{listing.total_garages}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <img src={squarefootageIconPng} className="w-6 lg:w-8"/>
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
                            <div className="flex flex-col">
                                <a href={`tel:${listing.owner_phone_number}`} role="button" className='px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-md font-bold text-white mt-4 text-lg flex items-center space-x-2'>
                                    <img width="24" src={phoneIconPng} />
                                    <span>Ligar Agora</span>
                                </a>
                                <a href={`https://wa.me/${listing.owner_phone_number}`} role="button" className='px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-md font-bold text-white mt-4 text-lg flex items-center space-x-2'>
                                    <img width="24" src={whatsappIconPng} />
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
