import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function format_currency(value: number, currency: string){
    const formatter = new Intl.NumberFormat('pt', {
        style: 'currency',
        currency: currency,
    });

    let result = formatter.format(value)

    if (currency.toLocaleLowerCase() == 'mzn'){
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
