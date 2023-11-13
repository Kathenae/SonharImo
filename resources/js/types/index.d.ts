interface User {
    id: number,
    name: string,
    role: "guest" | "moderator" | "admin",
    email: string,
    email_verified_at: string,
    phone_number?: string,
    address?: string,
}

interface Partner {
    id: number,
    name: string,
    description: string,
    featured: boolean,
    logoUrl?: string,
    websiteUrl?: string,
}

interface HouseImage {
    id: number,
    url: string,
    house_id: number,
}

interface HouseListing {
    id: number,
    user_id: number,
    images: HouseImage[],
    province: string,
    city: string,
    address: string,
    deal_type: 'rent' | 'sale',
    negotiation_type: 'internal' | 'external',
    property_type: 'apartamento' | 'condominio' | 'vivenda' | 'terreno' | 'comercial',
    price: number,
    description: string,
    plot_square_footage: number,
    total_bedrooms: number,
    total_showers: number,
    total_parking_spaces: number,
    owner_name?: string | null,
    owner_phone_number?: string | null,
    owner_secondary_phone_number?: string | null,
    owner_personal_id_number?: string | null,
    owner_address?: string | null,
    owner_email_address?: string | null,
    is_featured: boolean,
    is_published: boolean,
    is_approved: boolean,
    user?: User,
    publish_at: string,
    include_convenience: boolean,

    created_at: string,
    updated_at: string,
}

export type Flash = {
    success?: string,
    error?: string,
    warning?: string,
}

export type SiteContacts = {
    phone_number?: string,
    whatsapp_link?: string,
    instagram_link?: string,
    facebook_link?: string,
    twitter_link?: string,
    threads_link?: string,
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User,
    },
    site_contacts?: SiteContacts
    flash: Flash
}
