import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Layout from '@/Layouts/Layout';
import HouseCard from '@/Components/HouseCard';

export default function HomePage({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <Layout user={auth.user}>
            <Head title="Home" />

            <section className='hidden lg:block h-[100vh] relative' style={{backgroundImage: 'url("/assets/couple.jpg")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPositionX: 300}}>
                <div className='absolute left-0 top-0 w-full h-full bg-gradient-to-r from-30% from-orange-500 z-[0]' />
                <div className='absolute left-0 top-0 w-full h-full px-4 lg:px-24 py-24 text-white z-[1]'>
                    <h1 className='text-9xl font-extrabold'>Conte <br />Conosco</h1>
                    <p className='text-3xl w-[700px]'>Acreditamos que todos merecem o lar do sonhos. Com uma ampla variedade de imóveis residenciais excepcionais e soluções acessíveis, estamos aqui para transformar o seu sonho em realidade. Descubra como podemos ajudá-lo a encontrar a casa perfeita para você e sua família.</p>
                </div>
            </section>

            <section className='px-4 lg:px-24 mt-20 lg:mt-28'>
                <h1 className='text-6xl font-extrabold text-gray-800'>Comece Agora!</h1>
                <div className='grid lg:grid-cols-3 gap-32 mt-12'>
                    <div className='rounded-lg shadow-xl bg-white px-8 py-8 text-center relative'>
                        <div className='bg-orange-500 rounded-lg flex items-center justify-center w-full h-[218px]'>
                            <img src="/assets/buy-house-icon.png" width='128' height='128'/>
                        </div>
                        <h3 className='text-orange-500 font-bold text-2xl mt-4 mb-4'>ALUGUER DE IMOVÉIS</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit aliquid totam harum accusantium exercitationem, dignissimos voluptates eum.</p>
                        <div className='absolute w-full flex items-center justify-center left-0 -bottom-8'>
                            <a className='px-4 py-2 rounded-lg bg-gray-800 font-bold text-white text-2xl w-48' href="">ALUGAR</a>
                        </div>
                    </div>
                    <div className='rounded-lg shadow-xl bg-white px-8 py-8 text-center relative'>
                        <div className='bg-orange-500 rounded-lg flex items-center justify-center w-full h-[218px]'>
                            <img src="/assets/buy-house-icon.png" width='128' height='128'/>
                        </div>
                        <h3 className='text-orange-500 font-bold text-2xl mt-4 mb-4'>VENDA DE IMOVÉIS</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit aliquid totam harum accusantium exercitationem, dignissimos voluptates eum.</p>
                        <div className='absolute w-full flex items-center justify-center left-0 -bottom-8'>
                            <a className='px-4 py-2 rounded-lg bg-gray-800 font-bold text-white text-2xl w-48' href="">COMPRAR</a>
                        </div>
                    </div>
                    <div className='rounded-lg shadow-xl bg-white px-8 py-8 text-center relative'>
                        <div className='bg-orange-500 rounded-lg flex items-center justify-center w-full h-[218px]'>
                            <img src="/assets/buy-house-icon.png" width='128' height='128'/>
                        </div>
                        <h3 className='text-orange-500 font-bold text-2xl mt-4 mb-4'>ANUNCIE SEU IMOVÉL</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit aliquid totam harum accusantium exercitationem, dignissimos voluptates eum.</p>
                        <div className='absolute w-full flex items-center justify-center left-0 -bottom-8'>
                            <a className='px-4 py-2 rounded-lg bg-gray-800 font-bold text-white text-2xl w-48' href="">ANUNCIAR</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='px-4 lg:px-24 mt-28'>
                <h1 className='text-6xl font-extrabold text-gray-800'>Em Destaque</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12'>
                    <HouseCard bedrooms={2} bathrooms={2} garages={1} squareFootage={320} />
                    <HouseCard bedrooms={4} bathrooms={2} garages={1} squareFootage={240} forRent />
                    <HouseCard bedrooms={4} bathrooms={1} garages={0} squareFootage={420} forRent />
                    <HouseCard bedrooms={4} bathrooms={2} garages={1} squareFootage={412} />
                    <HouseCard bedrooms={2} bathrooms={1} garages={1} squareFootage={412} forRent/>
                    <HouseCard bedrooms={1} bathrooms={1} garages={0} squareFootage={120} />
                </div>
            </section>
        </Layout>
    );
}
