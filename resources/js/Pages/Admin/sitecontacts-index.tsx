import { PageProps, User } from "@/types";
import Layout from "./Layout";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import { Link, router, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import DangerButton from "@/Components/DangerButton";
import ChoiceSelect from "@/Components/ChoiceSelect";
import { RoleChoices } from "@/choices";
import DynamicForm, { FormInput } from "@/Components/DynamicForm";

export default function UsersEdit({ auth, flash, site_contacts }: PageProps) {
    return (
        <Layout user={auth.user} flashMessages={flash} title="Alterar Utilizador">
            <h1 className="mb-8 text-3xl font-bold">Contactos</h1>
            <DynamicForm
                method="post"
                submitUrl={route('admin.sitecontacts.update')}
                inputs={[
                    { name: 'phone_number', type: 'text', value: site_contacts?.phone_number ?? '' },
                    { name: 'whatsapp_link', type: 'text', value: site_contacts?.whatsapp_link ?? '' },
                    { name: 'instagram_link', type: 'text', value: site_contacts?.instagram_link ?? '' },
                    { name: 'facebook_link', type: 'text', value: site_contacts?.facebook_link ?? '' },
                ]}
            />
        </Layout>
    )
}
