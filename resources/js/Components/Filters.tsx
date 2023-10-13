import { getQueryParams } from "@/utils"
import { router } from "@inertiajs/react"
import { useState } from "react"
import SelectInput from "./SelectInput"
import TextInput from "./TextInput"

interface FiltersProps {
    routeName: string
}

export default function Filters({ routeName }: FiltersProps) {
    const [query, setQuery] = useState(getQueryParams())
    const onChange = (field: "address" | "province" | "deal_type" | "total_bedrooms" | 'price', value: string) => {
        router.get(route(routeName), { ...query, [field]: value }, { only: ['listings'] })
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 rounded-xl shadow-lg bg-white px-4 py-4">
            <div className="flex flex-col">
                <label htmlFor="">Provincia</label>
                <SelectInput className="shadow-md" value={query.province ?? ''} onChange={(e) => onChange('province', e.target.value)} >
                    <option value=''>Qualquer</option>
                    <option value="maputo">Maputo</option>
                    <option value="tete">Tete</option>
                    <option value="inhambane">Inhambane</option>
                    <option value="quelimane">Quelimane</option>
                    <option value="cabo delgado">Cabo Delgado</option>
                    <option value="gaza">Gaza</option>
                    <option value="nampula">Nampula</option>
                    <option value="sofala">Sofala</option>
                    <option value="zambezia">Zambezia</option>
                </SelectInput>
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
                <label htmlFor="">Venda/Aluguel</label>
                <SelectInput className="shadow-md" value={query.deal_type ?? ''} onChange={(e) => onChange('deal_type', e.target.value)} >
                    <option value=''>Qualquer</option>
                    <option value="sale">Venda</option>
                    <option value="rent">Aluguel</option>
                </SelectInput>
            </div>
            <div className="flex flex-col">
                <label htmlFor="">Quartos</label>
                <SelectInput className="shadow-md" value={query.total_bedrooms ?? ''} onChange={(e) => onChange('total_bedrooms', e.target.value)}>
                    <option value=''>Qualquer</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </SelectInput>
            </div>
            <div className="flex flex-col">
                <label htmlFor="">Preços</label>
                <SelectInput className="shadow-md" value={query.price ?? ''} onChange={(e) => onChange('price', e.target.value)}>
                    <option value=''>Qualquer</option>
                    <option value="1000,10000">1,000 MT a 10,000</option>
                    <option value="10000,25000">10,000 MT a 25,000</option>
                    <option value="25000,100000">25,000 MT a 100,000</option>
                    <option value="100000,500000">100,000 MT a 500,000</option>
                    <option value="500000,1000000">500,000 MT a 1,000,000</option>
                    <option value="1000000,10000000">1,000,000 MT a 10,000,000</option>

                </SelectInput>
            </div>
        </div>
    )
}
