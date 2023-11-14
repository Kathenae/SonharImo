import { translate as tr } from "@/utils";
import Checkbox from "./Checkbox";

interface TableListProps {
    columns: string[],
    items: Record<string, any>[],
    detailRoute: string,
    checkedItems?: Record<string, any>[]
    onCheck?: (item: Record<string, any>, checked: boolean) => void
}

function getObjectAttribute(object: any, attributeName: string) {
    const attributes = attributeName.split('.')
    let value = object;
    for (let attribute of attributes) {
        value = value[attribute];
    }
    return value
}

export default function TableList({ columns, items, detailRoute, checkedItems, onCheck }: TableListProps) {
    return (
        <div className="bg-white rounded-md shadow overflow-x-auto">
            <table className="w-full whitespace-nowrap">
                <thead>
                    <tr className="text-left font-bold">
                        {onCheck &&
                            <th className="pb-4 pt-6 px-6">
                                <i className="icon-[mdi--check]" />
                            </th>
                        }
                        {columns.map((columnName, index) => (
                            <th key={index} className="pb-4 pt-6 px-6" colSpan={columnName.indexOf(columnName) >= columns.length - 1 ? 2 : 1}>{tr(columnName)}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-100 focus-within:bg-gray-100">
                            {onCheck &&
                                <td className="border-t px-6 py-4">
                                    <Checkbox checked={checkedItems? checkedItems.includes(item) : undefined} onChange={(event) => onCheck(item, event.currentTarget.checked)} />
                                </td>
                            }
                            {columns.map((column, index) => (
                                <td key={index} className="border-t">
                                    <a className="flex items-center px-6 py-4 focus:text-orange-500" href={route(detailRoute, item.id)}>{tr(getObjectAttribute(item, column))}</a>
                                </td>
                            ))}
                            <td className="w-px border-t">
                                <a className="flex items-center px-6 py-4" href={route(detailRoute, item.id)}>
                                    <i className="icon-[mdi--chevron-right] text-2xl" />
                                </a>
                            </td>
                        </tr>
                    ))}
                    {items.length <= 0 &&
                        <tr className="hover:bg-gray-100 focus-within:bg-gray-100">
                            <td className="px-6 py-4 text-center text-gray-400 text-lg font-bold border-t" colSpan={columns.length}>
                                <a href="">Sem Dados</a>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}
