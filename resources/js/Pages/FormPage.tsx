import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function FormPage({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <Layout user={auth.user}>
            <Head title="Anuncie" />


            <div className="pt-24 px-4 lg:px-24">
                <h1 className="text-gray-900 text-4xl">Anuncie seu imóvel conosco</h1>

                <div className="mt-12">
                    <h3 className="text-orange-500 text-2xl mb-4">Dados do Proprietario</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="mt-2">
                            <InputLabel htmlFor="">Nome</InputLabel>
                            <TextInput className='rounded-md w-full' />
                        </div>

                        <div className="mt-2">
                            <InputLabel htmlFor="">Apelido</InputLabel>
                            <TextInput className='rounded-md w-full' />
                        </div>

                        <div className="mt-2">
                            <InputLabel htmlFor="">Telefone</InputLabel>
                            <TextInput className='rounded-md w-full' />
                        </div>

                        <div className="mt-2">
                            <InputLabel htmlFor="">N* de B.I</InputLabel>
                            <TextInput className='rounded-md w-full' />
                        </div>

                        <div className="mt-2">
                            <InputLabel htmlFor="">Email</InputLabel>
                            <TextInput className='rounded-md w-full' />
                        </div>

                        <div className="mt-2">
                            <InputLabel htmlFor="">Endereço</InputLabel>
                            <TextInput className='rounded-md w-full' />
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-orange-500 text-2xl mb-4">Dados do Imovél</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                        <div className="mt-2">
                            <InputLabel htmlFor="">Preço</InputLabel>
                            <TextInput className='rounded-md w-full' />
                        </div>
                        <div className="mt-2">
                            <InputLabel htmlFor="">Para Venda</InputLabel>
                            <TextInput className='rounded-md w-full' />
                        </div>

                        <div className="mt-2">
                            <InputLabel htmlFor="">Tipo</InputLabel>
                            <TextInput className='rounded-md w-full' />
                        </div>

                        <div className="mt-2">
                            <InputLabel htmlFor="">N* de Quartos</InputLabel>
                            <TextInput className='rounded-md w-full' />
                        </div>

                        <div className="mt-2">
                            <InputLabel htmlFor="">N* de WC's</InputLabel>
                            <TextInput className='rounded-md w-full' />
                        </div>

                        <div className="mt-2">
                            <InputLabel htmlFor="">N* de vagas de estacionamento</InputLabel>
                            <TextInput className='rounded-md w-full' />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        <div className="mt-2">
                            <InputLabel htmlFor="">Provincia</InputLabel>
                            <TextInput className='rounded-md w-full' />
                        </div>

                        <div className="mt-2">
                            <InputLabel htmlFor="">Bairro</InputLabel>
                            <TextInput className='rounded-md w-full' />
                        </div>
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="">Descrição Livre</InputLabel>
                        <textarea className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded-md shadow-sm w-full" rows={10}></textarea>
                    </div>
                </div>

                <div className="mt-4">
                    <h3 className="text-orange-500 text-2xl mb-4">Imagens</h3>
                    <div className="">
                        <button className="w-full h-[320px] border-2 border-orange-500 bg-white p-0 flex items-center justify-center cursor-pointer hover:bg-gray-100">
                            <span className="text-6xl font-bold text-orange-500 my-0">+</span>
                        </button>
                    </div>
                </div>

                <button className='px-4 py-2 bg-orange-500 rounded-md font-bold text-white mt-4'>Submeter</button>
            </div>
        </Layout>
    )
}
