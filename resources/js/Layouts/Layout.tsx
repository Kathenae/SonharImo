import { useState, PropsWithChildren, ReactNode, useEffect } from 'react';
import NavLink from '@/Components/NavLink';
import { FlashMessages, User } from '@/types';
import ApplicationLogo from '@/Components/ApplicationLogo';

import logoWhitePng from '../../../public/assets/logo-white.png'
import phoneIconPng from '../../../public/assets/phone-call-white.png'
import whatsappIconPng from '../../../public/assets/whatsapp_white.png'
import instagramIconPng from '../../../public/assets/instagram_white.png'
import facebookIconPng from '../../../public/assets/facebook_white.png'
import PrimaryButton from '@/Components/PrimaryButton';
import { cn } from '@/utils';

export default function Layout({ user, flashMessages, children }: PropsWithChildren<{ user: User, flashMessages: FlashMessages }>) {
    const [navSticky, setNavSticky] = useState(false)
    const [flash, setFlash] = useState(flashMessages)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        function handleSticky() {
            if (window.scrollY >= 80 || !route().current('home-page')) {
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
                <div className='ml-auto hidden md:flex space-x-4 py-2'>
                    <NavLink className={!navSticky ? ' lg:text-white lg:!font-extrabold ' : ''} href={route('home-page')} active={route().current('home-page')}>Home</NavLink>
                    <NavLink className={!navSticky ? ' lg:text-white lg:!font-extrabold ' : ''} href={route('listing.index')} active={route().current('listing.index')}>Propriedades</NavLink>
                    <NavLink className={!navSticky ? ' lg:text-white lg:!font-extrabold ' : ''} href={route('listing.manage')} active={route().current('listing.manage')}>Minhas Propriedades</NavLink>
                    <NavLink className={!navSticky ? ' lg:text-white lg:!font-extrabold ' : ''} href={route('listing.create')} active={route().current('listing.create')}>Anuncie</NavLink>
                    <NavLink className={!navSticky ? ' lg:text-white lg:!font-extrabold ' : ''} href={route('about-page')} active={route().current('about-page')}>Sobre-nos</NavLink>
                    <NavLink className={!navSticky ? ' lg:text-white lg:!font-extrabold ' : ''} href={route('contact-page')} active={route().current('contact-page')}>Contactos</NavLink>
                </div>
                <div className='ml-auto md:hidden'>
                    <PrimaryButton className='!bg-white' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <span className='icon-[lucide--menu] text-black text-2xl' />
                    </PrimaryButton>
                </div>

                {/* Mobile Menu */}
                <div className={cn(
                    'md:hidden absolute w-full flex flex-col bg-white rounded-b-xl left-0 px-4 h-0 overflow-hidden transition-all top-20 text-lg shadow-lg',
                    mobileMenuOpen && 'h-48'
                )}>
                    <NavLink
                        className='block py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100'
                        href={route('home-page')}
                        active={route().current('home-page')}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className='block py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100'
                        href={route('listing.index')}
                        active={route().current('listing.index')}
                    >
                        Propriedades
                    </NavLink>
                    <NavLink
                        className='block py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100'
                        href={route('listing.manage')}
                        active={route().current('listing.manage')}
                    >
                        Minhas Propriedades
                    </NavLink>
                    <NavLink
                        className='block py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100'
                        href={route('listing.create')}
                        active={route().current('listing.create')}
                    >
                        Anuncie
                    </NavLink>
                    <NavLink
                        className='block py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100'
                        href={route('about-page')}
                        active={route().current('about-page')}
                    >
                        Sobre-nos
                    </NavLink>
                    <NavLink
                        className='block py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100'
                        href={route('contact-page')}
                        active={route().current('contact-page')}
                    >
                        Contactos
                    </NavLink>
                </div>
            </nav>

            <main>{children}</main>

            <footer className='bg-gray-900 mt-24 text-white'>
                <div className='px-4 lg:px-24 py-8'>
                    <div className="grid gap-4 lg:grid-cols-4">
                        <div className='flex flex-col space-y-2'>
                            <img src={logoWhitePng} width="128" />
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
                                <img width="18" src={phoneIconPng} />
                                <a href="">Telefone</a>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <img width="18" src={whatsappIconPng} />
                                <a href="">Whatsapp</a>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <img width="18" src={instagramIconPng} />
                                <a href="">Instagram</a>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <img width="18" src={facebookIconPng} />
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

            <div className='fixed bottom-0 right-0 pointer-events-none p-4 space-y-2'>
                {flash.success &&
                    <div id='flash_success' className='relative bg-green-400 px-4 py-2 rounded-lg w-[250px] pointer-events-auto fade-out'>
                        <button className='absolute right-2 top-3' onClick={() => setFlash({...flash, success: undefined})}>
                            <i className='icon-[lucide--x]' />
                        </button>
                        <h2 className='font-bold'>Successo</h2>
                        <span className='text-green-800'>{flash.success}</span>
                    </div>
                }
                {flash.error &&
                    <div id='flash_error' className='relative bg-red-400 px-4 py-2 rounded-lg w-[250px] pointer-events-auto'>
                        <button className='absolute right-2 top-3' onClick={() => setFlash({...flash, error: undefined})}>
                            <i className='icon-[lucide--x]' />
                        </button>
                        <h2 className='font-bold'>Occoreu um erro!</h2>
                        <span className='text-red-800'>{flash.error}</span>
                    </div>
                }
                {flash.warning &&
                    <div id='flash_warning' className='relative bg-yellow-400 px-4 py-2 rounded-lg w-[250px] pointer-events-auto'>
                        <button className='absolute right-2 top-3' onClick={() => setFlash({...flash, warning: undefined})}>
                            <i className='icon-[lucide--x]' />
                        </button>
                        <h2 className='font-bold'>Aviso</h2>
                        <span className='text-yellow-800'>{flash.success}</span>
                    </div>
                }
            </div>
        </div>
    );
}
