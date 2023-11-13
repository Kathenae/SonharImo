import { DynamicFormInputs } from "./Components/DynamicForm"
import { DealTypeChoices, NegotiationTypeCoices, PropertyTypeChoices, ProvinceChoices } from "./choices"
import { HouseListing, Partner } from "./types"

export const ListingInputs = (listing?: HouseListing) : DynamicFormInputs => {

    return [
        {
            name: 'Dados Gerais',
            inputs: [
                { name: 'property_type', choices: PropertyTypeChoices, value: listing?.property_type ?? 'apartment' },
                { name: 'plot_square_footage', type: 'number', value: listing?.plot_square_footage ?? ''},
                { name: 'total_bedrooms', type: 'number', value: listing?.total_bedrooms ?? '', showIf: { targetInput: 'property_type', inValues: ['apartment', 'house', 'condo'] } },
                { name: 'total_showers', type: 'number', value: listing?.total_showers ?? '', showIf: { targetInput: 'property_type', inValues: ['apartment', 'house', 'condo'] } },
                { name: 'total_parking_spaces', type: 'number', value: listing?.total_parking_spaces ?? '', showIf: { targetInput: 'property_type', inValues: ['apartment', 'house', 'condo', 'comercial'] }},
            ]
        },
        {
            name: 'Endereço',
            inputs: [
                { name: 'province', choices: ProvinceChoices, value: listing?.province ?? 'tete' },
                { name: 'city', type: 'text', value: listing?.city ?? '' },
                { name: 'address', type: 'text', value: listing?.address ?? '' },
            ]
        },
        {
            name: 'Negociação',
            inputs: [
                { name: 'negotiation_type', choices: NegotiationTypeCoices, value: listing?.negotiation_type ?? 'external' },
                { name: 'deal_type', choices: DealTypeChoices, value: listing?.deal_type ?? 'sale' },
                { name: 'price', type: 'number', value: listing?.price ?? '' },
                { name: 'include_convenience', type: "checkbox", value: listing?.include_convenience ?? false },
            ]
        },
        {
            name: 'Informaçòes do Proprietário',
            inputs: [
                { name: 'owner_name', type: 'text', value: listing?.owner_name ?? '' },
                { name: 'owner_address', type: 'text', value: listing?.owner_address ?? '' },
                { name: 'owner_personal_id_number', type: 'text', value: listing?.owner_personal_id_number ?? '' },
                { name: 'owner_phone_number', type: 'text', value: listing?.owner_phone_number ?? '' },
                { name: 'owner_email_address', type: 'text', value: listing?.owner_email_address ?? '' },
            ]
        },
        {
            name: 'Imagens da Propriedade',
            inputs: [
                { name: 'images', value: listing?.images ?? [], type: 'imageselect', hideLabel: true },
            ]
        },
        {
            name: 'Publicação',
            inputs: [
                { name: 'publish_at', value: listing?.publish_at ?? '', type: 'datetime-local' },
                { name: 'is_published', value: listing?.is_published ?? true, type: 'checkbox' },
            ]
        }
    ]
}

export const PartnerInputs = (partner?: Partner): DynamicFormInputs => {
    return [
        { name: 'name', value: partner?.name ?? '', type: 'text' },
        { name: 'description', value: partner?.description ?? '', type: 'text' },
        { name: 'logoUrl', value: partner?.logoUrl ?? '', type: 'text' },
        { name: 'websiteUrl', value: partner?.websiteUrl ?? '', type: 'text' },
        { name: 'featured', value: partner?.featured ?? true, type: 'checkbox' },
    ]
}
