import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import FlashMessages from "@/Components/FlashMessages";
import NavLink from "@/Components/NavLink";
import BaseLayout from "@/Layouts/Layout";
import { Flash, User } from "@/types";
import { cn } from "@/utils";
import { Head, Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Layout({ user, children, flashMessages, title }: PropsWithChildren<{ user: User, flashMessages: Flash, title: string }>) {
    return (
        <div className="relative">
            <Head title={title} />
            <div>
                <div className="md:flex md:flex-col">
                    <div className="md:flex md:flex-col md:h-screen">
                        <div className="md:flex md:flex-shrink-0">
                            <div className="flex items-center justify-between px-6 py-4 bg-orange-500 md:flex-shrink-0 md:justify-center md:w-64 w-full">
                                <Link className="mt-1" href="/">
                                    <ApplicationLogo size={92} />
                                </Link>
                            </div>
                            <div className="md:text-md flex items-center justify-between p-4 w-full text-sm bg-white border-b md:px-12 md:py-0">
                                <div>Administração</div>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <div className="flex items-center space-x-2 cursor-pointer">
                                            <span>{user.name}</span>
                                            <i className="icon-[mdi--chevron-down] text-xl" />
                                        </div>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link method="post" href={route('logout')}>Sair</Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="md:flex md:flex-grow md:overflow-hidden">
                            <div className="hidden flex-shrink-0 p-12 w-64 bg-gray-800 overflow-y-auto md:block">
                                <div className="mb-4 text-xl">
                                    <Link className="group flex items-center py-3" href={route('admin.dashboard')}>
                                        <i className={cn("icon-[mdi--car-speed-limiter] mr-2", route().current('admin.dashboard') ? 'text-white' : 'text-gray-500 group-hover:text-white')} />
                                        <div className={cn(route().current('admin.dashboard') ? 'text-white' : 'text-gray-500 group-hover:text-white')}>Dashboard</div>
                                    </Link>
                                    <Link className="group flex items-center py-3" href={route('admin.listings.index')}>
                                        <i className={cn("icon-[mdi--home-city] mr-2", route().current('admin.listings.index') ? 'text-white' : 'text-gray-500 group-hover:text-white')} />
                                        <div className={cn(route().current('admin.listings.index') ? 'text-white' : 'text-gray-500 group-hover:text-white')}>Imoveis</div>
                                    </Link>
                                    <Link className="group flex items-center py-3" href={route('admin.partners.index')}>
                                        <i className={cn("icon-[mdi--handshake] mr-2", route().current('admin.partners.index') ? 'text-white' : 'text-gray-500 group-hover:text-white')} />
                                        <div className={cn(route().current('admin.partners.index') ? 'text-white' : 'text-gray-500 group-hover:text-white')}>Parceiros</div>
                                    </Link>
                                    <Link className="group flex items-center py-3" href={route('admin.users.index')}>
                                        <i className={cn("icon-[mdi--account-circle] mr-2", route().current('admin.users.index') ? 'text-white' : 'text-gray-500 group-hover:text-white')} />
                                        <div className={cn(route().current('admin.users.index') ? 'text-white' : 'text-gray-500 group-hover:text-white')}>Utilizadores</div>
                                    </Link>
                                    <Link className="group flex items-center py-3" href={route('admin.sitecontacts.index')}>
                                        <i className={cn("icon-[mdi--contacts] mr-2", route().current('admin.sitecontacts.index') ? 'text-white' : 'text-gray-500 group-hover:text-white')} />
                                        <div className={cn(route().current('admin.sitecontacts.index') ? 'text-white' : 'text-gray-500 group-hover:text-white')}>Contactos</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="px-4 py-8 md:flex-1 md:p-12 md:overflow-y-auto bg-gray-100">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FlashMessages messages={flashMessages}/>
        </div>
    )
}
