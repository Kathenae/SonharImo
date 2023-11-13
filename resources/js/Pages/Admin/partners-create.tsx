import { PageProps, Partner } from "@/types";
import Layout from "./Layout";
import { Link } from "@inertiajs/react";
import DynamicForm from "@/Components/DynamicForm";
import { PartnerInputs } from "@/form-inputs";

export default function PartnersCreate({ auth, flash }: PageProps) {
    return (
        <Layout user={auth.user} flashMessages={flash} title="Novo Parceiro">
            <h1 className="mb-8 text-3xl font-bold"><Link className="text-orange-500 hover:underline" href={route('admin.partners.index')}>
                Parceiros </Link> / <span>Novo Parceiro</span>
            </h1>
            <DynamicForm
                method="post"
                submitUrl={route('admin.partners.create')}
                inputs={PartnerInputs()}
            />
        </Layout>
    )
}
