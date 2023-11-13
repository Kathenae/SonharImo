import { PageProps } from "@/types";
import Layout from "./Layout";
import { FormEventHandler } from "react";
import { Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import ChoiceSelect from "@/Components/ChoiceSelect";
import { RoleChoices } from "@/choices";
import DynamicForm from "@/Components/DynamicForm";

export default function UsersCreate({ auth, flash }: PageProps<{ }>){
    return (
        <Layout user={auth.user} flashMessages={flash} title="Alterar Utilizador">
            <h1 className="mb-8 text-3xl font-bold"><Link className="text-orange-500 hover:underline" href={route('admin.users.index')}>Utilizadores </Link> / <span>Novo Utilizador</span></h1>
            <DynamicForm
                method="post"
                submitUrl={route('admin.users.create')}
                inputs={[
                    { name: 'email', value: '', type: 'email' },
                    { name: 'password', value: '', type: 'password' },
                    { name: 'password_confirmation', value: '', type: 'password' },
                    { name: 'role', value: '', choices: RoleChoices },
                    { name: 'name', value: '', type: 'text' },
                ]}
            />
        </Layout>
    )
}
