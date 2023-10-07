import HouseCard from "@/Components/HouseCard";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Layout from "@/Layouts/Layout";
import { HouseListing, PageProps } from "@/types";
import { getQueryParams } from "@/utils";
import { Head, router, useForm } from "@inertiajs/react";
import { useRef, useState } from "react";

export default function ListPage({ auth, listings }: PageProps<{ listings: HouseListing[] }>){

    const [query, setQuery] = useState(getQueryParams())
    const onChange = (field: "address" | "province" | "deal_type" | "total_bedrooms" | 'price', value: string) => {
        router.get(route('listing.index'), { ...query, [field]: value }, { only: ['listings'] })
    }

    return (
        <Layout user={auth.user}>
            <Head title="Home" />

            <div className="px-4 lg:px-24 pt-24">
                <h1 className='text-6xl font-extrabold text-gray-800'>Imóveis</h1>
            </div>

            <div className="px-4 lg:px-24 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 rounded-xl shadow-lg bg-white px-4 py-4">
                    <div className="flex flex-col">
                        <label htmlFor="">Provincia</label>
                        <SelectInput className="shadow-md" value={query.province ?? ''} onChange={(e) => onChange('province', e.target.value)} >
                            <option value=''>Qualquer</option>
                            <option value="maputo">Maputo</option>
                            <option value="tete">Tete</option>
                            <option value="inhambane">Inhambane</option>
                            <option value="quelimane">Quelimane</option>
                            <option value="cabo delgado">Cabo Delgado</option>
                            <option value="gaza">Gaza</option>
                            <option value="nampula">Nampula</option>
                            <option value="sofala">Sofala</option>
                            <option value="zambezia">Zambezia</option>
                        </SelectInput>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Endereço/Bairro</label>
                        <TextInput type="text" placeholder="Escreva e pressione 'Enter' " className="shadow-md" value={query.address ?? ''} onKeyDown={(e) => {
                            if(e.key === 'Enter'){
                                onChange('address', query.address)
                            }
                        }} onChange={(e) => setQuery({...query, address: e.target.value})} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Venda/Aluguel</label>
                        <SelectInput className="shadow-md" value={query.deal_type ?? ''} onChange={(e) => onChange('deal_type', e.target.value)} >
                            <option value=''>Qualquer</option>
                            <option value="sale">Venda</option>
                            <option value="rent">Aluguel</option>
                        </SelectInput>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Quartos</label>
                        <SelectInput className="shadow-md" value={query.total_bedrooms ?? ''} onChange={(e) => onChange('total_bedrooms', e.target.value)}>
                            <option value=''>Qualquer</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </SelectInput>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Preços</label>
                        <SelectInput className="shadow-md" value={query.price ?? ''} onChange={(e) => onChange('price', e.target.value)}>
                            <option value=''>Qualquer</option>
                            <option value="1000,10000">1,000 MT a 10,000</option>
                            <option value="10000,25000">10,000 MT a 25,000</option>
                            <option value="25000,100000">25,000 MT a 100,000</option>
                            <option value="100000,500000">100,000 MT a 500,000</option>
                            <option value="500000,1000000">500,000 MT a 1,000,000</option>
                            <option value="1000000,10000000">1,000,000 MT a 10,000,000</option>

                        </SelectInput>
                    </div>
                </div>
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
