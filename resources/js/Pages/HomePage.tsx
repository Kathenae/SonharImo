import { Link, Head } from '@inertiajs/react';
import { HouseListing, PageProps } from '@/types';
import Layout from '@/Layouts/Layout';
import HouseCard from '@/Components/HouseCard';
import { cn } from '@/utils';
import { useBreakpoint } from '@/hooks/useMediaQuery';

// assets
import coupleMobileJpg from '@assets/Couple-mobile.jpg';
import coupleTabletJpg from '@assets/Couple-tablet.jpg';
import coupleDesktopJpg from '@assets/Couple.jpg';
import buyHouseIconPng from '@assets/buy-house-icon.png';
import partnerLogo1Jpeg from '@assets/partner_1.jpeg';
import partnerLogo2Png from '@assets/partner_2.png';
import partnerLogo3Png from '@assets/partner_3.png';

export default function HomePage({ auth, popularListings, flash }: PageProps<{ popularListings: HouseListing[] }>) {

    const { isAboveMd } = useBreakpoint('md')
    const { isAboveLg } = useBreakpoint('lg')

    return (
        <Layout user={auth.user} flashMessages={flash}>
            <Head title="Home" />

            <section
                className={cn('lg:block relative mt-20 lg:mt-0 h-[100vh] lg:aspect-video w-full bg-cover bg-no-repeat offset')}
                style={{ backgroundImage: `url(${isAboveMd ? coupleTabletJpg : isAboveLg ? coupleDesktopJpg : coupleMobileJpg})` }}
            >
                <div className='absolute left-0 top-0 w-full h-full bg-gradient-to-t from-30% lg:bg-gradient-to-r lg:from-5% from-orange-500 z-[0]' />
                <div className='absolute left-0 top-0 w-full h-full px-4 lg:px-24 py-24 text-white z-[1] flex flex-col'>
                    <h1 className='text-6xl lg:text-9xl font-extrabold mt-auto'>Conte <br />Conosco</h1>
                    <p className='text-xl mt-12 lg:mt-2 lg:text-3xl lg:w-[700px]'>Acreditamos que todos merecem o lar do sonhos. Com uma ampla variedade de imóveis residenciais excepcionais e soluções acessíveis, estamos aqui para transformar o seu sonho em realidade. Descubra como podemos ajudá-lo a encontrar a casa perfeita para você e sua família.</p>
                </div>
            </section>

            <section className='px-4 lg:px-24 mt-20 lg:mt-28'>
                <h1 className='text-4xl md:text-6xl font-extrabold text-gray-800 text-center'>Nossos Serviços!</h1>
                <div className='grid lg:grid-cols-3 gap-32 lg:gap-32 mt-12'>
                    <article className='rounded-lg shadow-xl bg-white px-8 py-8 text-center relative'>
                        <div className='bg-orange-500 rounded-lg flex items-center justify-center w-full h-[218px]'>
                            <img src={buyHouseIconPng} width='128' height='128'/>
                        </div>
                        <h3 className='text-orange-500 font-bold text-2xl mt-4 mb-4'>ALUGUER DE IMOVÉIS</h3>
                        <p>Aluguel de imóveis em diversas localidades. Oferecemos uma variedade de opções de imóveis para atender às suas necessidades seja um estudante</p>
                        <div className='absolute w-full flex items-center justify-center left-0 -bottom-8'>
                            <a className='px-4 py-2 rounded-lg bg-gray-800 font-bold text-white text-2xl w-48' href={route('listing.index', {deal_type: 'rent'})}>ALUGAR</a>
                        </div>
                    </article>
                    <article className='rounded-lg shadow-xl bg-white px-8 py-8 text-center relative'>
                        <div className='bg-orange-500 rounded-lg flex items-center justify-center w-full h-[218px]'>
                            <img src={buyHouseIconPng} width='128' height='128'/>
                        </div>
                        <h3 className='text-orange-500 font-bold text-2xl mt-4 mb-4'>VENDA DE IMOVÉIS</h3>
                        <p>Temos uma seleção exclusiva de imóveis à venda. desde apartamento ou terreno, temos a propriedade perfeita para você. compre agora!</p>
                        <div className='absolute w-full flex items-center justify-center left-0 -bottom-8'>
                            <a className='px-4 py-2 rounded-lg bg-gray-800 font-bold text-white text-2xl w-48' href={route('listing.index', {deal_type: 'sale'})}>COMPRAR</a>
                        </div>
                    </article>
                    <article className='rounded-lg shadow-xl bg-white px-8 py-8 text-center relative'>
                        <div className='bg-orange-500 rounded-lg flex items-center justify-center w-full h-[218px]'>
                            <img src={buyHouseIconPng} width='128' height='128'/>
                        </div>
                        <h3 className='text-orange-500 font-bold text-2xl mt-4 mb-4'>ANUNCIE SEU IMOVÉL</h3>
                        <p>Anuncie seu imóvel conosco e alcance potenciais interessados. Nossa plataforma é fácil de usar e oferece visibilidade. Não perca tempo, anuncie agora!</p>
                        <div className='absolute w-full flex items-center justify-center left-0 -bottom-8'>
                            <a className='px-4 py-2 rounded-lg bg-gray-800 font-bold text-white text-2xl w-48' href={route('listing.create')}>ANUNCIAR</a>
                        </div>
                    </article>
                </div>
            </section>

            {popularListings.length > 0 &&
                <section className='px-4 lg:px-24 mt-28'>
                    <h1 className='text-4xl md:text-6xl text-center font-extrabold text-gray-800'>Em Destaque</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12'>
                        {popularListings.slice(0, 6).map((listing) => (
                            <HouseCard key={listing.id} listing={listing} />
                        ))}
                    </div>
                </section>
            }

            <section className='px-4 lg:px-24 mt-28'>
                <h1 className='text-4xl md:text-6xl text-center font-extrabold text-gray-800'>Nossos Parceiros!</h1>
                <div className='flex items-center flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-16 mt-12 w-full'>
                    <div className='w-[50vw] h-[50vw] lg:w-[20vw] lg:h-[20vw] flex items-center justify-center shadow-2xl shadow-red-800 rounded-full bg-[#c50010] overflow-clip'>
                        <img className='w-[40vw] lg:w-[18vw]' src={partnerLogo1Jpeg}/>
                    </div>
                    <div className='w-[50vw] h-[50vw] lg:w-[20vw] lg:h-[20vw] flex items-center justify-center shadow-2xl shadow-gray-800 rounded-full bg-gray-800'>
                        <img className='w-[40vw] lg:w-[18vw]' src={partnerLogo2Png}/>
                    </div>
                    <div className='w-[50vw] h-[50vw] lg:w-[20vw] lg:h-[20vw] flex items-center justify-center shadow-2xl shadow-gray-800 rounded-full bg-gray-800'>
                        <img className='w-[40vw] lg:w-[18vw]' src={partnerLogo3Png}/>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
