import PrimaryButton from "@/Components/PrimaryButton";
import { PageProps } from "@/types";
import { Head, router } from "@inertiajs/react";
import Layout from "./Layout";

export default function Dashboard({ auth, flash }: PageProps<{}>) {
    return (
        <Layout user={auth.user} flashMessages={flash} title="Dashboard">
            <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg px-4 py-4 bg-white shadow-lg">
                    <h4 className="text-4xl mb-4 font-medium border-b-2 pb-2 border-orange-500 text-orange-500">Imoveis</h4>
                    <p className="text-gray-500">Permite gerir imóveis, listar utilizadores, addicionar ou eliminar</p>
                    <div className="md:space-x-4 mt-6">
                        <PrimaryButton onClick={() => router.visit(route('admin.listings.index'))} className="mt-4 bg-orange-500 hover:!bg-orange-600 active:!bg-orange-600">Gerir Imóveis</PrimaryButton>
                    </div>
                </div>
                <div className="rounded-lg px-4 py-4 bg-white shadow-lg">
                    <h4 className="text-4xl mb-4 font-medium border-b-2 pb-2 border-orange-500 text-orange-500">Utilizadores</h4>
                    <p className="text-gray-500">Permite gerir utilizadores da plataforma, listar utilizadores, addicionar ou eliminar</p>
                    <div className="md:space-x-4 mt-6">
                        <PrimaryButton onClick={() => router.visit(route('admin.users.index'))} className="mt-4 bg-orange-500 hover:!bg-orange-600 active:!bg-orange-600">Gerir Utilizadores</PrimaryButton>
                    </div>
                </div>
                <div className="rounded-lg px-4 py-4 bg-white shadow-lg">
                    <h4 className="text-4xl mb-4 font-medium border-b-2 pb-2 border-orange-500 text-orange-500">Parceiros</h4>
                    <p className="text-gray-500">Permite gerir parceiros, listar utilizadores, addicionar ou eliminar</p>
                    <div className="md:space-x-4 mt-6">
                        <PrimaryButton onClick={() => router.visit(route('admin.partners.index'))} className="mt-4 bg-orange-500 hover:!bg-orange-600 active:!bg-orange-600">Gerir Parceiros</PrimaryButton>
                    </div>
                </div>
                <div className="rounded-lg px-4 py-4 bg-white shadow-lg">
                    <h4 className="text-4xl mb-4 font-medium border-b-2 pb-2 border-orange-500 text-orange-500">Contatos</h4>
                    <p className="text-gray-500">Alterar os contactos da pagina exibidos na pagina "contactos" e no rodape do website</p>
                    <div className="md:space-x-4 mt-6">
                        <PrimaryButton onClick={() => router.visit(route('admin.sitecontacts.index'))} className="mt-4 bg-orange-500 hover:!bg-orange-600 active:!bg-orange-600">Gerir Contactos</PrimaryButton>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
