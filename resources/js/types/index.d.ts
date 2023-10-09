export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

interface HouseImage {
    id: number,
    url: string,
    house_id: number,
}

interface HouseListing {
    id: number;
    images: HouseImage[],
    province: string;
    city: string;
    address: string;
    deal_type: 'rent' | 'sale';
    price: number;
    description: string;
    total_bedrooms: number;
    total_showers: number;
    total_garages: number;
    owner_first_name?: string | null;
    owner_last_name?: string | null;
    owner_phone_number?: string | null;
    owner_secondary_phone_number?: string | null;
    owner_personal_id_number?: string | null;
    owner_address?: string | null;
    owner_email_address?: string | null;
    user_id: number;
    created_at: string;
    updated_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
