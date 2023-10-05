import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function AboutPage({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>){
    return (
        <Layout user={auth.user}>
            <Head title="Sobre-nos" />

            <div className="pt-24 px-4 lg:px-24 text-2xl">
                <div className="w-full lg:w-[700px] p-4">
                    <p><span className="font-bold text-3xl">Nós Somos</span> uma companhia do ramo imobiliário, mais especificamente no segmento de construção, venda e/ou aluguel de imóveis residenciais e comerciais</p>
                </div>
                <div className="bg-orange-500 rounded-2xl p-4 w-full lg:w-[700px] mt-4">
                    <h3 className="font-bold text-3xl text-white">Visão</h3>
                    <p className="pl-4">"Ser reconhecido como o facilitador de acesso os sonhos de ter um lar, trazendo esperança e possibilidades aos jovens e adultos"</p>
                </div>
                <div className="bg-gray-800 rounded-2xl p-4 w-full lg:w-[700px] mt-4">
                    <h3 className="font-bold text-3xl text-orange-500">Missão</h3>
                    <p className="pl-4 text-white">"Ajudar jovens e adultos a realizar o sonho da casa própria, proporcionando soluções accessíves e convfiáveis para construir projetos de vida sólidos"</p>
                </div>
                <div className="mt-12">
                    <a href="/" className="border-4 border-orange-500 text-orange-500 font-bold text-3xl lg:text-4xl py-2 px-4 rounded-xl block lg:inline-block">Encontrar Meu Lar</a>
                </div>
            </div>

            <img className="absolute right-0 top-24 hidden lg:block" width={700} src="/assets/about.png" />
        </Layout>
    )
}
