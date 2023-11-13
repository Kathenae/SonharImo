import { HouseListing, PageProps, Partner } from "@/types";
import Layout from "./Layout";
import { Link, router } from "@inertiajs/react";
import DynamicForm, { FormInput } from "@/Components/DynamicForm";
import { ListingInputs } from "@/form-inputs";

export default function ListingEEdit({ auth, flash, listing }: PageProps<{ listing: HouseListing }>) {

    const handleInputChange = (input: FormInput, value: any) => {
        if (input.name == 'images' && value instanceof Array) {
            const removedImages = listing.images.filter(img => !value.find(v => v == img))
            removedImages.forEach(img => {
                router.delete(route('listing.delete-image', img.id),
                    {
                        only: ['listing', 'flash'], preserveScroll: true, preserveState: false,
                    });
            })
        }
    }

    return (
        <Layout user={auth.user} flashMessages={flash} title="Novo Imóvel">
            <h1 className="mb-8 text-3xl font-bold"><Link className="text-orange-500 hover:underline" href={route('admin.listings.index')}>
                Imóveis </Link> / <span>Alterar Imóvel</span>
            </h1>
            <DynamicForm
                method="post"
                submitUrl={route('admin.listings.update', listing.id)}
                inputs={[...ListingInputs(listing),
                    {
                        name: 'Approvação e Destaque',
                        inputs: [
                            { name: 'is_approved', value: listing.is_approved, type: 'checkbox' },
                            { name: 'is_featured', value: listing.is_featured, type: 'checkbox' },
                        ]
                    }
                ]}
                onChange={handleInputChange}
            />
        </Layout>
    )
}
