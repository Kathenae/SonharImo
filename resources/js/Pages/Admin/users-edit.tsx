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

export default function UsersEdit({ auth, flash, user }: PageProps<{ user: User }>) {
    return (
        <Layout user={auth.user} flashMessages={flash} title="Alterar Utilizador">
            <h1 className="mb-8 text-3xl font-bold"><Link className="text-orange-500 hover:underline" href={route('admin.users.index')}>Utilizadores </Link> / <span>{user.name}</span></h1>
            <DynamicForm
                method="post"
                submitUrl={route('admin.users.update', user.id)}
                inputs={[
                    {
                        name: 'Informações Pessoais',
                        inputs: [
                            { name: 'name', value: user.name, type: 'text' },
                            { name: 'address', value: user.address, type: 'text' },
                            { name: 'phone_number', value: user.phone_number, type: 'text' },
                        ]
                    },
                    {
                        name: 'Credenciais',
                        inputs: [
                            { name: 'email', value: user.email, type: 'email' },
                            { name: 'password', value: '', type: 'password' },
                            { name: 'role', value: user.role, choices: RoleChoices },
                        ]
                    },
                ]}
            />
        </Layout>
    )
}
