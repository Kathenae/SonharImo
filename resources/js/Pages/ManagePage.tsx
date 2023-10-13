import DangerButton from "@/Components/DangerButton";
import Filters from "@/Components/Filters";
import PrimaryButton from "@/Components/PrimaryButton";
import Layout from "@/Layouts/Layout";
import { HouseListing, PageProps } from "@/types";
import { format_currency } from "@/utils";
import { Head, router } from "@inertiajs/react";

export default function ManagePage({ auth, listings, flash }: PageProps<{ listings: HouseListing[] }>) {
    return (
        <Layout user={auth.user} flashMessages={flash}>
            <Head title="Home" />

            <div className="px-4 lg:px-24 pt-24">
                <h1 className='text-6xl font-extrabold text-gray-800'>Meus Imóveis</h1>
                <PrimaryButton onClick={() => router.visit(route('listing.create'))} className="mt-4 bg-orange-500 hover:!bg-orange-600 active:!bg-orange-600">Novo Imóvel</PrimaryButton>
            </div>

            <div className="px-4 lg:px-24 mt-12">
                <Filters routeName="listing.manage" />
            </div>

            <section className='px-4 lg:px-24 mt-12 min-h-[300px]'>
                {listings.length > 0 &&
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12'>
                        {listings.map((listing) => (
                            <div key={listing.id} className="rounded-lg shadow-xl bg-white relative hover:cursor-pointer">
                                <div className={`px-4 rounded-ss-lg rounded-ee-lg shadow-xl font-bold text-white absolute text-2xl ${listing.deal_type === 'rent' ? 'bg-gray-800' : 'bg-orange-500'}`}>
                                    {listing.deal_type === 'rent' ? 'ALUGUER' : 'VENDA'}
                                </div>

                                <div className="px-6 mt-6">
                                    <div className="overflow-hidden h-[214px]">
                                        <img src={listing.images[0].url ?? "/assets/house-default.jpg"} className="w-full" />
                                    </div>
                                </div>

                                <div className="px-6 mt-4 text-2xl font-bold">
                                    {/* <span className="text-orange-500 ">Preço: </span> */}
                                    <span className="text-gray-800">{format_currency(listing.price, 'MZN')}</span>
                                </div>

                                <div className="flex space-x-4 mx-4 py-4">
                                    <div className="flex items-center space-x-2">
                                        <img src="/assets/bedroom.png" width="38" />
                                        <span className="text-xl font-semibold">{listing.total_bedrooms}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <img src="/assets/bathroom.png" width="38" />
                                        <span className="text-xl font-semibold">{listing.total_showers}</span>
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

                                <div className="px-4 py-4 space-x-4">
                                    <PrimaryButton onClick={() => router.visit(route('listing.edit', listing.id))}>Alterar</PrimaryButton>
                                    <DangerButton onClick={() => router.delete(route('listing.destroy', listing.id))}>Eliminar</DangerButton>
                                </div>
                            </div>
                        ))}
                    </div>
                }

                {listings.length <= 0 &&
                    <div className="flex items-center justify-center h-[300px]">
                        <h3 className="text-4xl text-gray-400">Nenhum Imóvel Encontrado</h3>
                    </div>
                }
            </section>
        </Layout>
    )
}
