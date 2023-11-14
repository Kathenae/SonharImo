import PrimaryButton from "@/Components/PrimaryButton";
import Layout from "./Layout";
import { PageProps, User } from "@/types";
import { router } from "@inertiajs/react";
import DangerButton from "@/Components/DangerButton";
import { useDialog } from "@/Components/Dialogs/DialogHooks";
import TextInput from "@/Components/TextInput";
import Dropdown from "@/Components/Dropdown";
import ChoiceSelect from "@/Components/ChoiceSelect";
import { RoleChoices } from "@/choices";
import InputLabel from "@/Components/InputLabel";
import TableList from "@/Components/TableList";
import { useState } from "react";
import { Transition } from "@headlessui/react";

export default function UsersIndex({ auth, flash, users }: PageProps<{ users: User[] }>) {
    const [filters, setFilters] = useState({ role: '' })
    const [searchText, setSearchText] = useState('')
    const [checkedItems, setCheckedItems] = useState<User[]>([])

    const filterUsers = () => {

        let filteredUsers = users;

        if (filters.role != '') {
            filteredUsers = filteredUsers.filter(item => item.role == filters.role)
        }

        return filteredUsers;
    }

    const handleDelete = () => {
        router.delete(route('admin.users.destroy'), {
            data: { users: checkedItems.map((user) => user.id) },
            only: ['users']
        })
    }

    return (
        <Layout user={auth.user} flashMessages={flash} title="Gerir Utilizadores">
            <h1 className="mb-8 text-3xl font-bold">Utilizadores</h1>

            <div className="flex items-center justify-between mb-6 space-x-12">
                <div className="flex items-center space-x-2 w-full">
                    <Dropdown>
                        <Dropdown.Trigger>
                            <PrimaryButton>
                                Filtros
                                <i className="icon-[mdi--caret-down] text-2xl" />
                            </PrimaryButton>
                        </Dropdown.Trigger>
                        <Dropdown.Content backdrop keepOpen contentClasses="px-6 py-4 space-y-4 bg-white w-72" align="left">
                            <div className="space-y-2">
                                <InputLabel>Função</InputLabel>
                                <ChoiceSelect
                                    className="w-full"
                                    defaultAny
                                    value={filters.role}
                                    choices={RoleChoices}
                                    onChange={(e) => setFilters({...filters, role: e.currentTarget.value})}
                                />
                            </div>
                            <div>
                            <DangerButton
                                    className="w-full flex items-center space-x-2"
                                    onClick={() => setFilters({ role: '' })}
                                >
                                    <span>Limpar Filtros</span>
                                    <i className="icon-[mdi--autorenew] text-2xl" />
                                </DangerButton>
                            </div>
                        </Dropdown.Content>
                    </Dropdown>
                    <TextInput
                        className="w-full"
                        autoComplete="off"
                        type="text"
                        name="search"
                        placeholder="Procurar..."
                        spellCheck="false"
                        value={searchText}
                        onChange={(e) => setSearchText(e.currentTarget.value)}
                    />
                </div>
                <PrimaryButton
                    onClick={() => router.get(route('admin.users.create'))}
                    className="bg-orange-500 hover:!bg-orange-600 active:!bg-orange-600"
                >
                    Novo<span className="hidden md:inline">&nbsp;Utilizador</span>
                </PrimaryButton>
            </div>

            <TableList
                checkedItems={checkedItems}
                onCheck={(item, checked) => {
                    if (checked) {
                        setCheckedItems(current => [...current, item as User])
                    }
                    else {
                        setCheckedItems(current => current.filter(listing => listing != item))
                    }
                }}
                columns={['id', 'name', 'email', 'role']}
                detailRoute={'admin.users.edit'}
                searchText={searchText}
                items={filterUsers()}
            />

            <Transition
                show={checkedItems.length > 0}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="flex items-center fixed bottom-0 p-4 space-x-4">
                    <DangerButton onClick={handleDelete}>
                        Eliminar
                    </DangerButton>
                </div>
            </Transition>
        </Layout>
    )
}
