import { useState, PropsWithChildren, ReactNode, useEffect } from 'react';
import NavLink from '@/Components/NavLink';
import { User } from '@/types';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Layout({ user, children }: PropsWithChildren<{ user: User }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [navSticky, setNavSticky] = useState(false)

    useEffect(() => {
        function handleSticky(){
            if(window.scrollY >= 80 || !route().current('home-page')){
                setNavSticky(true)
            }
            else{
                setNavSticky(false)
            }
        }

        handleSticky()

        window.addEventListener('scroll', handleSticky)
        return () => {
            window.removeEventListener('scroll', handleSticky)
        }
    }, [])

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className={`flex items-center w-full px-4 lg:px-24 z-50 transition-transform top-0 h-20 ${navSticky ? 'bg-white border-b border-dark-50 fixed' : 'fixed bg-white lg:absolute lg:bg-transparent border-b border-dark-50 lg:border-none'}`}>
                <div>
                    <ApplicationLogo black={navSticky}/>
                </div>
                <div className='ml-auto hidden lg:flex space-x-4 py-2'>
                    <NavLink className={!navSticky ? ' text-white !font-extrabold ' : ''} href={route('home-page')} active={route().current('home-page')}>Home</NavLink>
                    <NavLink className={!navSticky ? ' text-white !font-extrabold ' : ''} href={route('listing.index')} active={route().current('listing.index')}>Propriedades</NavLink>
                    <NavLink className={!navSticky ? ' text-white !font-extrabold ' : ''} href={route('listing.create')} active={route().current('listing.create')}>Anuncie</NavLink>
                    <NavLink className={!navSticky ? ' text-white !font-extrabold ' : ''} href={route('about-page')} active={route().current('about-page')}>Sobre-nos</NavLink>
                    <NavLink className={!navSticky ? ' text-white !font-extrabold ' : ''} href={route('contact-page')} active={route().current('contact-page')}>Contactos</NavLink>
                </div>
                <div className='ml-auto lg:hidden'>
                    <button>Toggle</button>
                </div>
            </nav>

            <main>{children}</main>

            <footer className='bg-gray-900 mt-24 text-white'>
                <div className='px-4 lg:px-24 py-8'>
                    <div className="grid gap-4 lg:grid-cols-4">
                        <div className='flex flex-col space-y-2'>
                            <img src='/assets/logo-white.png' width="128" />
                            <span className='mt-4'>Copyrights 2023</span>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <a href="">Propriedades</a>
                            <a href="">Anuncie</a>
                            <a href="">Sobre-nos</a>
                            <a href="">Contactos</a>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <div className='flex items-center space-x-2'>
                                <img width="18" src='/assets/phone-call-white.png' />
                                <a href="">Telefone</a>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <img width="18" src='/assets/whatsapp_white.png' />
                                <a href="">Whatsapp</a>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <img width="18" src='/assets/instagram_white.png' />
                                <a href="">Instagram</a>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <img width="18" src='/assets/facebook_white.png' />
                                <a href="">Facebook</a>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="newsletter_email">Fica a par das novidades</label>
                            <div className='space-x-2 mt-2'>
                                <input className='rounded-md' placeholder='Seu email' />
                                <button className='px-4 py-2 bg-orange-500 rounded-md font-bold'>Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
