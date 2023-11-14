import PrimaryButton from "@/Components/PrimaryButton";
import Layout from "./Layout";
import { HouseListing, PageProps } from "@/types";
import { router } from "@inertiajs/react";
import DangerButton from "@/Components/DangerButton";
import TextInput from "@/Components/TextInput";
import Dropdown from "@/Components/Dropdown";
import ChoiceSelect from "@/Components/ChoiceSelect";
import { RoleChoices, YesNoChoice } from "@/choices";
import InputLabel from "@/Components/InputLabel";
import TableList from "@/Components/TableList";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import CheckedButton from "@/Components/CheckedButton";
import { yesNo } from "@/utils";

function ListingIndex({ auth, flash, listings }: PageProps<{ listings: HouseListing[] }>) {
    const [checkedItems, setCheckedItems] = useState<HouseListing[]>([])
    const [filters, setFilters] = useState({ approved: 'yes', featured: '', published: '' })
    const [shouldFeature, setShouldFeature] = useState(true)
    const [shouldApprove, setShouldApprove] = useState(true)
    const [shouldPublish, setShouldPublish] = useState(true)

    const handleFeature = () => {
        router.post(route('admin.listings.feature'), {
            feature: shouldFeature,
            listings: checkedItems.map((listing) => listing.id)
        }, { only: ['listings', 'checkedItems'] })
    }

    const handleApprove = () => {
        router.post(route('admin.listings.approve'), {
            approve: shouldApprove,
            listings: checkedItems.map((listing) => listing.id)
        }, { only: ['listings'] })
    }

    const handlePublish = () => {
        router.post(route('admin.listings.publish'), {
            publish: shouldPublish,
            listings: checkedItems.map((listing) => listing.id)
        }, { only: ['listings'] })
    }

    const handleDelete = () => {
        router.delete(route('admin.listings.destroy'), {
            data: { listings: checkedItems.map((listing) => listing.id) },
            only: ['listings']
        })
    }

    const filterListings = () => {
        let filteredListings = listings;

        if(filters.approved != '')
        {
            filteredListings = filteredListings.filter(item => item.is_approved == yesNo(filters.approved))
        }

        if(filters.featured != '')
        {
            filteredListings = filteredListings.filter(item => item.is_featured == yesNo(filters.featured))
        }

        if(filters.published != '')
        {
            filteredListings = filteredListings.filter(item => item.is_published == yesNo(filters.published))
        }

        return filteredListings
    }

    return (
        <Layout user={auth.user} flashMessages={flash} title="Gerir Imóveis">
            <h1 className="mb-8 text-3xl font-bold">Imóveis</h1>

            <div className="flex items-center justify-between mb-6 space-x-12">

                {/* Filters */}
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
                                <InputLabel>Aprovado</InputLabel>
                                <ChoiceSelect
                                    className="w-full"
                                    defaultAny
                                    value={filters.approved}
                                    onChange={(e) => setFilters({...filters, approved: e.currentTarget.value})}
                                    choices={YesNoChoice}
                                />
                            </div>
                            <div className="space-y-2">
                                <InputLabel>Publicado</InputLabel>
                                <ChoiceSelect
                                    className="w-full"
                                    defaultAny
                                    value={filters.published}
                                    onChange={(e) => setFilters({...filters, published: e.currentTarget.value})}
                                    choices={YesNoChoice}
                                />
                            </div>
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
                                    onClick={() => setFilters({ approved: '', featured: '', published: '' })}
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
                    />
                </div>

                <PrimaryButton
                    onClick={() => router.get(route('admin.listings.create'))}
                    className="bg-orange-500 hover:!bg-orange-600 active:!bg-orange-600"
                >
                    Novo<span className="hidden md:inline">&nbsp;Imóvel</span>
                </PrimaryButton>
            </div>

            <TableList
                checkedItems={checkedItems}
                onCheck={(item, checked) => {
                    console.log(checkedItems)
                    if(checked){
                        setCheckedItems(current =>  [...current, item as HouseListing])
                    }
                    else{
                        setCheckedItems(current => current.filter(listing => listing != item))
                    }
                }}
                columns={['user.email', 'owner_name', 'publish_at', 'is_featured', 'is_published', 'is_approved']}
                detailRoute="admin.listings.edit"
                items={filterListings()}
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
                    <CheckedButton onClick={handleFeature} onCheck={setShouldFeature} checked={shouldFeature}>
                        Destacar
                    </CheckedButton>
                    <CheckedButton onClick={handleApprove} onCheck={setShouldApprove} checked={shouldApprove}>
                        Aprovar
                    </CheckedButton>
                    <CheckedButton onClick={handlePublish} onCheck={setShouldPublish} checked={shouldPublish}>
                        Publicar
                    </CheckedButton>
                    <DangerButton onClick={handleDelete}>
                        Eliminar
                    </DangerButton>
                </div>
            </Transition>
        </Layout>
    )
}

export default ListingIndex
