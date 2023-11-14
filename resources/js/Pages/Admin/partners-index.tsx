import PrimaryButton from "@/Components/PrimaryButton";
import Layout from "./Layout";
import { PageProps, Partner } from "@/types";
import { router } from "@inertiajs/react";
import DangerButton from "@/Components/DangerButton";
import TextInput from "@/Components/TextInput";
import Dropdown from "@/Components/Dropdown";
import ChoiceSelect from "@/Components/ChoiceSelect";
import { RoleChoices, YesNoChoice } from "@/choices";
import InputLabel from "@/Components/InputLabel";
import TableList from "@/Components/TableList";
import { useState } from "react";
import { yesNo } from "@/utils";

export default function PartnersIndex({ auth, flash, partners }: PageProps<{ partners: Partner[] }>) {
    const [searchText, setSearchText] = useState('')
    const [filters, setFilters] = useState({ featured: '' })

    const filterPartners = () => {
        let filteredPartners = partners;

        if(filters.featured != '')
        {
            filteredPartners = filteredPartners.filter(item => item.featured == yesNo(filters.featured))
            console.log(filteredPartners)
        }

        return filteredPartners;
    }

    return (
        <Layout user={auth.user} flashMessages={flash} title="Gerir Utilizadores">
            <h1 className="mb-8 text-3xl font-bold">Parceiros</h1>

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
                                <InputLabel>Destacado</InputLabel>
                                <ChoiceSelect
                                    className="w-full"
                                    defaultAny
                                    value={filters.featured}
                                    onChange={(e) => setFilters({...filters, featured: e.currentTarget.value})}
                                    choices={YesNoChoice}
                                />
                            </div>
                            <div>
                                <DangerButton
                                    className="w-full flex items-center space-x-2"
                                    onClick={() => setFilters({ featured: '' })}
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
                    onClick={() => router.get(route('admin.partners.create'))}
                    className="bg-orange-500 hover:!bg-orange-600 active:!bg-orange-600"
                >
                    Novo<span className="hidden md:inline">&nbsp;Parceiro</span>
                </PrimaryButton>
            </div>

            <TableList
                columns={['id', 'name', 'description', 'featured']}
                detailRoute="admin.partners.edit"
                searchText={searchText}
                items={filterPartners()}
            />
        </Layout>
    )
}
