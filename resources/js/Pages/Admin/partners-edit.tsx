import { PageProps, Partner } from "@/types";
import Layout from "./Layout";
import { Link } from "@inertiajs/react";
import DynamicForm from "@/Components/DynamicForm";
import { PartnerInputs } from "@/form-inputs";

export default function PartnersEdit({ auth, flash, partner }: PageProps<{ partner: Partner }>) {
    return (
        <Layout user={auth.user} flashMessages={flash} title="Alterar Utilizador">
            <h1 className="mb-8 text-3xl font-bold"><Link className="text-orange-500 hover:underline" href={route('admin.partners.index')}>
                Parceiros </Link> / <span>{partner.name}</span>
            </h1>
            <DynamicForm
                method="post"
                submitUrl={route('admin.partners.update', partner.id)}
                inputs={PartnerInputs(partner)}
            />
        </Layout>
    )
}
