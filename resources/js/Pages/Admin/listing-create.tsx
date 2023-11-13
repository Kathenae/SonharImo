import { PageProps, Partner } from "@/types";
import Layout from "./Layout";
import { Link } from "@inertiajs/react";
import DynamicForm from "@/Components/DynamicForm";
import { ListingInputs } from "@/form-inputs";

export default function ListingsCreate({ auth, flash }: PageProps) {

    return (
        <Layout user={auth.user} flashMessages={flash} title="Novo Imóvel">
            <h1 className="mb-8 text-3xl font-bold"><Link className="text-orange-500 hover:underline" href={route('admin.listings.index')}>
                Imóveis </Link> / <span>Novo Imóvel</span>
            </h1>
            <DynamicForm
                method="post"
                multistep
                submitUrl={route('admin.listings.create')}
                inputs={ListingInputs()}
            />
        </Layout>
    )
}
