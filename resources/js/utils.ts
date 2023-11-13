import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function format_currency(value: number, currency: string) {
    const formatter = new Intl.NumberFormat('pt', {
        style: 'currency',
        currency: currency,
    });

    let result = formatter.format(value)

    if (currency.toLocaleLowerCase() == 'mzn') {
        result = result.replace('MZN', '').replace(' ', ',').replace('.', ',') + " MT"
    }

    return result
}

export function getQueryParams(): Record<string, string> {
    const searchParams = new URLSearchParams(window.location.search);
    const queryParams: Record<string, string> = {};

    for (const [key, value] of searchParams.entries()) {
        queryParams[key] = value;
    }

    return queryParams;
}

export function lerp(start: number, end: number, t: number) {
    return start * (1 - t) + end * t;
}

export async function downloadFiles(urls: string[]) {
    const filePromises = urls.map(async url => {
        const response = await fetch(url)
        const blob = await response.blob();
        return blob;
    });

    const files = await Promise.all(filePromises);
    return files ?? []
}

/**
 * This function translates English words into Portuguese.
 * It takes a string as an input and checks if it exists in the dictionary object.
 * If the input string exists as a key in the dictionary, it returns the corresponding value.
 * If the input string does not exist in the dictionary, it returns the input string as is.
 */
export function translate(text: string | boolean) {
    if(typeof text == 'boolean'){
        text = text? 'true' : 'false'
    }

    const dictionary = {
        // User Credentials/Authentication
        'email': 'Email',
        'role': 'Função',
        'password': 'Palavra-passe',
        'password_confirmation': 'Confirme a Palavra-passe',

        // Website Partner Information
        'websiteurl': 'Link do Website',
        'logourl': 'Link do Logotipo',
        'logo': 'Logotipo',

        // Website contacts
        'phone_number': 'Contacto Telefonico',
        'whatsapp_link': 'Link da conta do whatsapp',
        'instagram_link': 'Link da conta do Instagram',
        'facebook_link': 'Link da conta do Facebook',

        // Owner Information
        'owner_personal_id_number': 'Número de BI',
        'owner_name': 'Nome do proprietário',
        'owner_address': 'Endereço do proprietário',
        'owner_phone_number': 'Contacto Telefonico',
        'owner_email_address': 'Endereço de Email',
        'user.email' : 'Email do publicador',

        // Property Location
        'province': 'Provincia',
        'city': 'Cidade',
        'address': 'Endereço',

        // Property Details
        'property_type': 'Tipo de propriedade',
        'plot_square_footage' : 'Tamanho em metros quadrados',
        'total_bedrooms': 'Número de Quartos',
        'total_showers': 'Número de Banheiros',
        'total_parking_spaces': 'Número de vagas de estacionamento',
        'description': 'Descrição',

        // Publishing
        'publish_at' : 'Data de publicação',
        'is_published' : 'Publicado',

        // Approval and Featuring
        'is_approved' : 'Aprovado',
        'is_featured' : 'Destacado',
        'featured' : 'Destacado',

        // Negotiation
        'rent': 'Aluguer',
        'sale': 'Venda',
        'deal_type': 'Tipo de negocio',
        'price': 'Preço',
        'include_convenience': 'Facilidade',
        'negotiation_type': 'Responsabilidade de Negociação',
        'internal' : 'Própria(Sonhar)',
        'external': 'Corretor Externo',

        // Property Types
        'condo': 'Condominio',
        'apartment': 'Apartamento',
        'house': 'Vivenda',
        'plot': 'Terreno',
        'comercial': 'Comercial',

        // Navigation
        'next': 'Seguinte',
        'previous': 'Anterior',

        'true': 'Sim',
        'false': 'Não',
        'submit': 'Enviar'
    }

    if (text.toLocaleLowerCase() in dictionary) {
        return dictionary[text.toLocaleLowerCase() as keyof typeof dictionary]
    }
    else {
        return text
    }
}
