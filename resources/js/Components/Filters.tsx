import { cn, getQueryParams } from "@/utils"
import { router } from "@inertiajs/react"
import { useState } from "react"
import SelectInput from "./SelectInput"
import TextInput from "./TextInput"
import PrimaryButton from "./PrimaryButton"
import ChoiceSelect from "./ChoiceSelect"
import { DealTypeChoices, NumberOfBedroomsChoices, PriceRangeChoices, PropertyTypeChoices, ProvinceChoices } from "@/choices"

interface FiltersProps {
    routeName: string,
    hidden?: boolean,
}

type FilterField = "address" | "province" | "deal_type" | 'price' | 'property_type'

export default function Filters({ routeName, hidden }: FiltersProps) {
    const [isHidden, setIsVisible] = useState(hidden)
    const [query, setQuery] = useState(getQueryParams())

    const onChange = (field: FilterField, value: string) => {
        router.get(route(routeName), { ...query, [field]: value }, { only: ['listings'] })
    }

    const toggleVisible = () => {
        setIsVisible(!isHidden)
    }

    return (
        <div className="rounded-xl shadow-lg bg-white px-4 py-4 flex flex-col justify-center">
            <PrimaryButton onClick={toggleVisible} className="font-bold w-fit">
                {isHidden? "Mostrar Filtros" : "Ocultar Filtros"}
            </PrimaryButton>
            <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 transition-all duration-300 overflow-clip", isHidden ? 'h-0' : 'mt-4')}>
                <div className="flex flex-col">
                    <label htmlFor="">Provincia</label>
                    <ChoiceSelect
                        value={query.province ?? ''}
                        choices={ProvinceChoices}
                        defaultAny
                        onChange={(e) => onChange('province', e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="">Tipo</label>
                    <ChoiceSelect
                        value={query.property_type ?? ''}
                        choices={PropertyTypeChoices}
                        defaultAny
                        onChange={(e) => onChange('property_type', e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="">Endereço/Bairro</label>
                    <TextInput type="text" placeholder="Escreva e pressione 'Enter' " className="shadow-md" value={query.address ?? ''} onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            onChange('address', query.address)
                        }
                    }} onChange={(e) => setQuery({ ...query, address: e.target.value })} />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="">Venda/Aluguer</label>
                    <ChoiceSelect
                        value={query.deal_type ?? ''}
                        choices={DealTypeChoices}
                        defaultAny
                        onChange={(e) => onChange('deal_type', e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="">Preços</label>
                    <ChoiceSelect
                        value={query.price ?? ''}
                        defaultAny
                        choices={PriceRangeChoices} onChange={(e) => onChange('price', e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}
