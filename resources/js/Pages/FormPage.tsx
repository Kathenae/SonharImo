import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Layout from "@/Layouts/Layout";
import { PageProps } from "@/types";
import { Head, router, useForm } from "@inertiajs/react";
import { useRef } from "react";

function DefaultFiles(): File[] {
    return []
}

export default function FormPage({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {

    const { data, setData, post, processing, progress, errors } = useForm({
        'images': DefaultFiles(),
        'province': '',
        'city': '',
        'address': '',
        'property_type': 'tipo_1',
        'deal_type': 'sale',
        'price': '',
        'description': '',
        'total_bedrooms': '',
        'total_showers': '',
        'total_garages': '',
        'owner_first_name': '',
        'owner_last_name': '',
        'owner_phone_number': '',
        'owner_secondary_phone_number': '',
        'owner_personal_id_number': '',
        'owner_address': '',
        'owner_email_address': '',
    })

    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        post(route('listing.store'))
    }

    const onImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return
        }

        const newImages = []
        for (let index = 0; index < e.target.files.length; index++) {
            const image = e.target.files[index];
            if (!data.images.find(img => img?.name == image.name && img.size == image.size)) {
                newImages.push(image)
            }
        }
        setData('images', [...data.images, ...newImages])
    }

    const onImageRemove = (e: React.FormEvent<HTMLButtonElement>, image: File | null) => {
        e.preventDefault();
        setData('images', [...data.images.filter(img => img != image)])
    }

    return (
        <Layout user={auth.user}>
            <Head title="Anuncie" />


            <form onSubmit={submit} className="pt-24 px-4 lg:px-24" method="post" encType="multipart/form-data">
                <h1 className="text-gray-900 font-thin text-4xl mb-6 text-center">Anuncie seu imóvel conosco</h1>

                <div className="w-full flex justify-center">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 w-full">
                        <div className="w-full px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                            <h3 className="text-orange-500 text-2xl mb-4 font-bold">Dados do Imovél</h3>

                            <div className="grid grid-cols-1 gap-4">

                                <div className="mt-2">
                                    <InputLabel htmlFor="listing_price">Preço</InputLabel>
                                    <TextInput name="listing_price" type="number" className='rounded-md w-full' value={data.price} onChange={(e) => setData('price', e.target.value)} />
                                    <InputError message={errors.price} className="mt-2" />
                                </div>
                                <div className="mt-2">
                                    <InputLabel htmlFor="deal_type">Venda/Alugue</InputLabel>
                                    <SelectInput name="deal_type" className='rounded-md w-full' value={data.deal_type} onChange={(e) => setData('deal_type', e.target.value)}>
                                        <option value={'sale'}>Venda</option>
                                        <option value={'rent'}>Alugue</option>
                                    </SelectInput>
                                    <InputError message={errors.deal_type} className="mt-2" />
                                </div>

                                <div className="mt-2">
                                    <InputLabel htmlFor="property_type">Tipo</InputLabel>
                                    <SelectInput className='rounded-md w-full' value={data.property_type} onChange={(e) => setData('property_type', e.target.value)}>
                                        <option value={'tipo_1'}>Tipo 1</option>
                                        <option value={'tipo_2'}>Tipo 2</option>
                                        <option value={'tipo_3'}>Tipo 3</option>
                                        <option value={'tipo_4'}>Tipo 4</option>
                                        <InputError message={errors.property_type} className="mt-2" />
                                    </SelectInput>
                                </div>

                                <div className="mt-2">
                                    <InputLabel htmlFor="total_rooms">N* de Quartos</InputLabel>
                                    <TextInput name="listing_total_rooms" type="number" className='rounded-md w-full' value={data.total_bedrooms} onChange={(e) => setData('total_bedrooms', e.target.value)} />
                                    <InputError message={errors.total_bedrooms} className="mt-2" />
                                </div>

                                <div className="mt-2">
                                    <InputLabel htmlFor="total_showers">N* de WC's</InputLabel>
                                    <TextInput name="listing_total_showers" type="number" className='rounded-md w-full' value={data.total_showers} onChange={(e) => setData('total_showers', e.target.value)} />
                                    <InputError message={errors.total_showers} className="mt-2" />
                                </div>

                                <div className="mt-2">
                                    <InputLabel htmlFor="total_garages">N* de vagas de estacionamento</InputLabel>
                                    <TextInput name="listing_total_garages" className='rounded-md w-full' value={data.total_garages} onChange={(e) => setData('total_garages', e.target.value)} />
                                    <InputError message={errors.total_garages} className="mt-2" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                <div className="mt-2">
                                    <InputLabel htmlFor="province">Provincia</InputLabel>
                                    <TextInput name="listing_province" type="text" className='rounded-md w-full' value={data.province} onChange={(e) => setData('province', e.target.value)} />
                                    <InputError message={errors.province} className="mt-2" />
                                </div>

                                <div className="mt-2">
                                    <InputLabel htmlFor="city">Cidade</InputLabel>
                                    <TextInput name="listing_city" className='rounded-md w-full' value={data.city} onChange={(e) => setData('city', e.target.value)} />
                                    <InputError message={errors.city} className="mt-2" />
                                </div>

                                <div className="mt-2">
                                    <InputLabel htmlFor="address">Bairro/Endereço</InputLabel>
                                    <TextInput name="listing_address" className='rounded-md w-full' value={data.address} onChange={(e) => setData('address', e.target.value)} />
                                    <InputError message={errors.address} className="mt-2" />
                                </div>
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="description">Descrição Livre</InputLabel>
                                <textarea
                                    className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded-md shadow-sm w-full"
                                    rows={5}
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                ></textarea>
                                <InputError message={errors.description} className="mt-2" />
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div className="w-full px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                                <h3 className="text-orange-500 text-2xl mb-4 font-bold">Dados do Proprietario</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="mt-2">
                                        <InputLabel htmlFor="owner_first_name">Nome</InputLabel>
                                        <TextInput name="owner_first_name" className='rounded-md w-full' value={data.owner_first_name} onChange={(e) => setData('owner_first_name', e.target.value)} />
                                        <InputError message={errors.owner_first_name} className="mt-2" />
                                    </div>

                                    <div className="mt-2">
                                        <InputLabel htmlFor="owner_last_name">Apelido</InputLabel>
                                        <TextInput name="owner_last_name" className='rounded-md w-full' value={data.owner_last_name} onChange={(e) => setData('owner_last_name', e.target.value)} />
                                        <InputError message={errors.owner_last_name} className="mt-2" />
                                    </div>

                                    <div className="mt-2">
                                        <InputLabel htmlFor="owner_phone_number">Telefone</InputLabel>
                                        <TextInput name="owner_phone_number" className='rounded-md w-full' value={data.owner_phone_number} onChange={(e) => setData('owner_phone_number', e.target.value)} />
                                        <InputError message={errors.owner_phone_number} className="mt-2" />
                                    </div>

                                    <div className="mt-2">
                                        <InputLabel htmlFor="owner_personal_id_number">N* de B.I</InputLabel>
                                        <TextInput name="owner_personal_id_number" className='rounded-md w-full' value={data.owner_personal_id_number} onChange={(e) => setData('owner_personal_id_number', e.target.value)} />
                                        <InputError message={errors.owner_personal_id_number} className="mt-2" />
                                    </div>

                                    <div className="mt-2">
                                        <InputLabel htmlFor="owner_email_address">Email</InputLabel>
                                        <TextInput name="owner_email_address" className='rounded-md w-full' value={data.owner_email_address} onChange={(e) => setData('owner_email_address', e.target.value)} />
                                        <InputError message={errors.owner_email_address} className="mt-2" />
                                    </div>

                                    <div className="mt-2">
                                        <InputLabel htmlFor="owner_address">Endereço</InputLabel>
                                        <TextInput name="owner_address" className='rounded-md w-full' value={data.owner_address} onChange={(e) => setData('owner_address', e.target.value)} />
                                        <InputError message={errors.owner_address} className="mt-2" />
                                    </div>
                                </div>
                            </div>


                            <div className="w-full px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                                <h3 className="text-orange-500 text-2xl mb-4 font-bold">Imagens da propriedade</h3>

                                <div className="grid grid-cols-3 gap-4 transition-all">
                                    <label
                                        htmlFor="image_select"
                                        className="flex items-center justify-center h-48 w-48 border-2 bg-gray-50 border-gray-100 hover:bg-gray-100 transition-colors hover:cursor-pointer rounded-lg"
                                    >
                                        <span className="icon-[lucide--plus] text-8xl text-gray-400"></span>
                                        <input id="image_select" type="file" accept="image/" multiple className="hidden" onChange={onImageSelect} />
                                    </label>
                                    {data.images.filter(img => img != null).map((image) => (
                                        <div key={image.name} className="relative rounded-lg">
                                            <img src={image ? URL.createObjectURL(image) : ''} className="h-48 w-48 object-cover rounded-lg" />
                                            <button type="button" onClick={(e) => onImageRemove(e, image)} className="absolute top-2 right-2 rounded-full bg-white hover:bg-gray-50 h-6 w-6 flex items-center justify-center">
                                                <span className="icon-[mdi--close]"></span>
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <InputError message={errors.images} className="mt-2"/>

                                {/* Show errors for each image */}
                                {data.images.map((image, index) => (
                                    <div key={index}>
                                        {/* @ts-ignore */}
                                        {errors[`images.${index}`] &&
                                            // @ts-ignore
                                            <InputError key={image.name} message={"Imagem " + (index + 1) + ": " + errors[`images.${index}`]} className="mt-2" />
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" md:px-12 py-6 bg-white shadow-lg rounded-lg mt-12">
                    <button type="submit" disabled={processing} className='px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-md font-bold text-white text-2xl w-full'>Submeter</button>
                </div>
            </form>
        </Layout>
    )
}
