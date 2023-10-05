type HouseCardProps = {
    imageSrc?: string,
    forRent?: boolean,
    bedrooms: number,
    bathrooms: number,
    garages: number,
    squareFootage: number,
}

export default function HouseCard({ imageSrc, forRent, bedrooms, bathrooms, garages, squareFootage }: HouseCardProps) {
    return (
        <>
            <div className="rounded-lg shadow-xl bg-white relative">
                <div className={`px-4 rounded-ss-lg rounded-ee-lg shadow-xl font-bold text-white absolute text-2xl ${forRent ? 'bg-gray-800' : 'bg-orange-500'}`}>
                    {forRent ? 'ALUGUER' : 'VENDA'}
                </div>
                <div className="px-6 mt-6">
                    <div className="overflow-hidden h-[214px]">
                        <img src={imageSrc ?? "/assets/house-default.jpg"} className="w-full" />
                    </div>
                </div>
                <div className="flex space-x-4 mx-4 py-4">
                    <div className="flex items-center space-x-2">
                        <img src="/assets/bedroom.png" width="38"/>
                        <span className="text-xl font-semibold">{bedrooms}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src="/assets/bathroom.png" width="38"/>
                        <span className="text-xl font-semibold">{bathrooms}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src="/assets/garage.png" width="38"/>
                        <span className="text-xl font-semibold">{garages}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src="/assets/squarefoot.png" width="38"/>
                        <span className="text-xl font-semibold">
                            {squareFootage}
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
