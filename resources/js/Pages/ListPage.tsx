import HouseCard from "@/Components/HouseCard";
import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function ListPage({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>){
    return (
        <Layout user={auth.user}>
            <Head title="Home" />

            <div className="px-4 lg:px-24 pt-24">
                <h1 className='text-6xl font-extrabold text-gray-800'>Imoveis</h1>
            </div>

            <div className="px-4 lg:px-24 mt-12">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="">Provincia</label>
                        <select className="rounded-lg w-44 border-none shadow-md">
                            <option value="">Qualquer</option>
                            <option value="">Maputo</option>
                            <option value="">Beira</option>
                            <option value="">Tete</option>
                            <option value="">Inhambane</option>
                            <option value="">Quelimane</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Bairro</label>
                        <input type="text" placeholder="Bairro" className="rounded-lg w-44 border-none shadow-md" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Venda/Aluguel</label>
                        <select className="rounded-lg w-44 border-none shadow-md">
                            <option value="">Qualquer</option>
                            <option value="">Venda</option>
                            <option value="">Aluguel</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Quartos</label>
                        <select className="rounded-lg w-44 border-none shadow-md">
                            <option value="">Qualquer</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10+</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Preços</label>
                        <select className="rounded-lg w-44 border-none shadow-md">
                            <option value="">Qualquer</option>
                            <option value="">Menos de 1000MT</option>
                            <option value="">1,000MT a 5,000MT</option>
                            <option value="">5,000MT a 10,000MT</option>
                            <option value="">10,000MT a 15,000MT</option>
                            <option value="">15,000MT a 25,000MT</option>
                            <option value="">25,000MT a 50,000MT</option>
                            <option value="">50,000MT ou Mais</option>
                        </select>
                    </div>
                </div>
            </div>

            <section className='px-4 lg:px-24 mt-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12'>
                    <HouseCard bedrooms={2} bathrooms={2} garages={1} squareFootage={320} />
                    <HouseCard bedrooms={4} bathrooms={2} garages={1} squareFootage={240} forRent />
                    <HouseCard bedrooms={4} bathrooms={1} garages={0} squareFootage={420} forRent />
                    <HouseCard bedrooms={4} bathrooms={2} garages={1} squareFootage={412} />
                    <HouseCard bedrooms={2} bathrooms={1} garages={1} squareFootage={412} forRent />
                    <HouseCard bedrooms={1} bathrooms={1} garages={0} squareFootage={120} />
                    <HouseCard bedrooms={2} bathrooms={2} garages={1} squareFootage={320} />
                    <HouseCard bedrooms={4} bathrooms={2} garages={1} squareFootage={240} forRent />
                    <HouseCard bedrooms={4} bathrooms={1} garages={0} squareFootage={420} forRent />
                    <HouseCard bedrooms={4} bathrooms={2} garages={1} squareFootage={412} />
                    <HouseCard bedrooms={2} bathrooms={1} garages={1} squareFootage={412} forRent />
                    <HouseCard bedrooms={1} bathrooms={1} garages={0} squareFootage={120} />
                    <HouseCard bedrooms={2} bathrooms={2} garages={1} squareFootage={320} />
                    <HouseCard bedrooms={4} bathrooms={2} garages={1} squareFootage={240} forRent />
                    <HouseCard bedrooms={4} bathrooms={1} garages={0} squareFootage={420} forRent />
                    <HouseCard bedrooms={4} bathrooms={2} garages={1} squareFootage={412} />
                    <HouseCard bedrooms={2} bathrooms={1} garages={1} squareFootage={412} forRent />
                    <HouseCard bedrooms={1} bathrooms={1} garages={0} squareFootage={120} />
                </div>
            </section>
        </Layout>
    )
}
