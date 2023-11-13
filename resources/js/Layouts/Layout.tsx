import { useState, PropsWithChildren, ReactNode, useEffect } from 'react';
import NavLink from '@/Components/NavLink';
import { Flash, PageProps, SiteContacts, User } from '@/types';
import ApplicationLogo from '@/Components/ApplicationLogo';

import logoWhitePng from '../../../public/assets/logo-white.png'
import phoneIconPng from '../../../public/assets/phone-call-white.png'
import whatsappIconPng from '../../../public/assets/whatsapp_white.png'
import instagramIconPng from '../../../public/assets/instagram_white.png'
import facebookIconPng from '../../../public/assets/facebook_white.png'
import PrimaryButton from '@/Components/PrimaryButton';
import { cn } from '@/utils';
import { Link } from '@inertiajs/react';
import FlashMessages from '@/Components/FlashMessages';

export default function Layout({ auth, flash, site_contacts, children }: PropsWithChildren<PageProps>) {
    const [navSticky, setNavSticky] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        function handleSticky() {
            if (window.scrollY >= 80 || !route().current('site.home')) {
                setNavSticky(true)
            }
            else {
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
        <div className="min-h-screen bg-gray-50 relative">
            <nav className={`flex items-center w-full px-4 lg:px-24 z-50 transition-transform top-0 h-20 ${navSticky ? 'bg-white border-b border-dark-50 fixed' : 'fixed bg-white lg:absolute lg:bg-transparent border-b border-dark-50 lg:border-none'}`}>
                <div>
                    <ApplicationLogo black={navSticky} />
                </div>
                <div className='ml-auto hidden md:flex space-x-2 py-2'>
                    <NavLink
                        className={!navSticky ? ' lg:text-white lg:!font-extrabold ' : ''}
                        routeName='site.home'
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={!navSticky ? ' lg:text-white lg:!font-extrabold ' : ''}
                        routeName='listing.index'
                    >
                        Procurar Imóveis
                    </NavLink>
                    {auth.user && auth.user.role == 'guest' &&
                        <NavLink
                            className={!navSticky ? ' lg:text-white lg:!font-extrabold ' : ''}
                            routeName='listing.manage'
                        >
                            Gerir Imóveis
                        </NavLink>
                    }
                    {auth.user && auth.user.role == 'admin' &&
                        <NavLink
                            className={!navSticky ? ' lg:text-white lg:!font-extrabold ' : ''}
                            routeName='admin.dashboard'
                            routeMatch='admin.*'
                        >
                            Administração
                        </NavLink>
                    }
                    <NavLink
                        className={!navSticky ? ' lg:text-white lg:!font-extrabold ' : ''}
                        routeName='listing.create'
                    >
                        Anuncie
                    </NavLink>
                    <NavLink
                        className={!navSticky ? ' lg:text-white lg:!font-extrabold ' : ''}
                        routeName='site.about'
                    >
                        Sobre-nos
                    </NavLink>
                    <NavLink
                        className={!navSticky ? ' lg:text-white lg:!font-extrabold ' : ''}
                        routeName='site.contact'
                    >
                        Contactos
                    </NavLink>

                    {!auth.user &&
                        <NavLink
                            className={!navSticky ? ' lg:text-white lg:!font-extrabold ' : ''}
                            routeName='login'
                        >
                            Entrar
                        </NavLink>
                    }
                    {auth.user &&
                        <NavLink
                            className={!navSticky ? ' lg:text-white lg:!font-extrabold ' : ''}
                            method='post'
                            routeName='logout'
                        >
                            Sair
                        </NavLink>
                    }
                </div>

                <div className='ml-auto md:hidden'>
                    <PrimaryButton className='!bg-white' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <span className='icon-[lucide--menu] text-black text-2xl' />
                    </PrimaryButton>
                </div>

                {/* Mobile Menu */}
                <div className={cn(
                    'md:hidden absolute w-full flex flex-col bg-white rounded-b-xl left-0 px-4 h-0 overflow-hidden transition-all top-20 text-lg shadow-lg',
                    mobileMenuOpen && 'h-58'
                )}>
                    <NavLink mobile routeName='site.home'>
                        Home
                    </NavLink>
                    <NavLink mobile routeName='listing.index'>
                        Procurar Imóveis
                    </NavLink>
                    {auth.user && auth.user.role == 'guest' &&
                        <NavLink mobile routeName='listing.manage' >
                            Meus Imóveis
                        </NavLink>
                    }
                    {auth.user && auth.user.role == 'admin' &&
                        <NavLink mobile routeName='admin.dashboard' routeMatch='admin.*' >
                            Administração
                        </NavLink>
                    }
                    <NavLink mobile routeName='listing.create'>
                        Anuncie
                    </NavLink>
                    <NavLink mobile routeName='site.about'>
                        Sobre-nos
                    </NavLink>
                    <NavLink mobile routeName='site.contact'>
                        Contactos
                    </NavLink>
                    {!auth.user ?
                        <NavLink mobile routeName='login'>
                            Entrar
                        </NavLink>
                        :
                        <NavLink mobile routeName='logout'>
                            Sair
                        </NavLink>
                    }
                </div>
            </nav>

            <main>{children}</main>

            <footer className='bg-gray-900 mt-24 text-white'>
                <div className='px-4 lg:px-24 py-8'>
                    <div className="grid gap-4 lg:grid-cols-4">
                        <div className='flex flex-col space-y-2'>
                            <img src={logoWhitePng} width="128" />
                            <span className='mt-4'>Copyrights 2023</span>
                            <div className='space-x-2'>
                                <Link className='underline' href={route('site.terms')}><small>Termos de uso</small></Link>
                                <Link className='underline' href={route('site.privacy')}><small>Politicas de Privacidade</small></Link>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <a href={route('listing.index')}>Propriedades</a>
                            <a href={route('listing.create')}>Anuncie</a>
                            <a href={route('site.about')}>Sobre-nos</a>
                            <a href={route('site.contact')}>Contactos</a>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <div className='flex items-center space-x-2'>
                                <img width="18" src={phoneIconPng} />
                                <a href={`tel:${site_contacts?.phone_number}`}>Telefone</a>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <img width="18" src={whatsappIconPng} />
                                <a href={site_contacts?.whatsapp_link}>Whatsapp</a>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <img width="18" src={instagramIconPng} />
                                <a href={site_contacts?.instagram_link}>Instagram</a>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <img width="18" src={facebookIconPng} />
                                <a href={site_contacts?.facebook_link}>Facebook</a>
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
            <FlashMessages messages={flash}/>
        </div>
    );
}
