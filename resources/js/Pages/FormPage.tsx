import DynamicForm from "@/Components/DynamicForm";
import Layout from "@/Layouts/Layout";
import { HouseListing, PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import ListingIndex from "./Admin/listing-index";
import { ListingInputs } from "@/form-inputs";

export default function FormPage(props: PageProps<{ listing?: HouseListing }>) {
    const { listing } = props;
    return (
        <Layout {...props}>
            <Head title={listing ? "Alterar" : "Anuncie"} />

            <div className="container mx-auto px-6 py-24 md:py-28 md:px-18 lg:px-48">
                <h1 className="text-gray-900 font-thin text-4xl mb-6 text-center">
                    {listing ? "Modificar Anuncio" : "Criar novo anuncio"}
                </h1>
                <DynamicForm
                    method="post"
                    multistep
                    submitUrl={listing ? route('listing.update', listing) : route('listing.store')}
                    inputs={ListingInputs()}
                />
            </div>
        </Layout>
    )
}
