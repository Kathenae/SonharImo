import { HouseListing } from "@/types"
import { format_currency } from "@/utils"
import { router } from "@inertiajs/react"

type HouseCardProps = {
    listing: HouseListing
}

export default function HouseCard({ listing }: HouseCardProps) {
    return (
        <>
            <div className="rounded-lg shadow-xl bg-white relative hover:cursor-pointer" onClick={() => router.visit(route('listing.show', {listing: listing.id}))}>
                <div className={`px-4 rounded-ss-lg rounded-ee-lg shadow-xl font-bold text-white absolute text-2xl ${listing.deal_type === 'rent' ? 'bg-gray-800' : 'bg-orange-500'}`}>
                    {listing.deal_type === 'rent' ? 'ALUGUER' : 'VENDA'}
                </div>
                <div className="px-6 mt-6">
                    <div className="overflow-hidden h-[214px]">
                        {listing.images.length <= 0 && (
                            <div className="w-full h-full bg-gray-200 rounded-md flex flex-col items-center justify-center">
                                <i className="icon-[mdi--image] text-8xl text-gray-100"/>
                                <span className="text-gray-400 text-2xl">
                                    Sem imagen
                                </span>
                            </div>
                        )}
                        {listing.images.length > 1 && (
                            <img src={listing?.images[0]?.url ?? "/assets/house-default.jpg"} className="w-full" />
                        )}
                    </div>
                </div>

                <div className="px-6 mt-4 text-2xl font-bold">
                    {/* <span className="text-orange-500 ">Preço: </span> */}
                    <span className="text-gray-800">{format_currency(listing.price, 'MZN')}</span>
                </div>

                <div className="flex space-x-4 mx-4 py-4">
                    <div className="flex items-center space-x-2">
                        <img src="/assets/bedroom.png" width="38"/>
                        <span className="text-xl font-semibold">{listing.total_bedrooms}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src="/assets/bathroom.png" width="38"/>
                        <span className="text-xl font-semibold">{listing.total_showers}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src="/assets/garage.png" width="38"/>
                        <span className="text-xl font-semibold">{listing.total_parking_spaces}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src="/assets/squarefoot.png" width="38"/>
                        <span className="text-xl space-x-1 font-semibold">
                            <span>{listing.plot_square_footage}</span>
                            <span className="relative text-base">
                                m
                                <span className="absolute top-0 text-xs">2</span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
