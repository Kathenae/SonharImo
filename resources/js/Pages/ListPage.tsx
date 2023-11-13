import Filters from "@/Components/Filters";
import HouseCard from "@/Components/HouseCard";
import Layout from "@/Layouts/Layout";
import { HouseListing, PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function ListPage(props: PageProps<{ listings: HouseListing[] }>){
    const { listings} = props

    return (
        <Layout {...props}>
            <Head title="Home" />

            <div className="px-4 lg:px-24 pt-24">
                <h1 className='text-6xl font-extrabold text-gray-800'>Imóveis</h1>
            </div>

            <div className="px-4 lg:px-24 mt-12">
                <Filters routeName="listing.index" />
            </div>

            <section className='px-4 lg:px-24 mt-12 min-h-[300px]'>
                {listings.length > 0 &&
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12'>
                        {listings.map((listing) => (
                            <HouseCard key={listing.id} listing={listing} />
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
