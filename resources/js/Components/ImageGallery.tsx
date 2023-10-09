import { useState } from "react";
import { animate } from "framer-motion";
import { cn, lerp } from "@/utils";
import { HouseImage } from "@/types";

interface ImageGalleryProps {
    images: HouseImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handleNextImage = (direction: number) => {
        let newIndex = activeImageIndex + direction;
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= images.length) {
            newIndex =  images.length - 1;
        }
        selectImage(newIndex);
    };

    const selectImage = (index: number) => {
        setActiveImageIndex(index);
        const scrollContainer = document.getElementById("images_scroll_container");
        const scrollContainerSm = document.getElementById(
            "images_sm_scroll_container"
        );
        const activeImage = document.getElementById(`image_${index}`);
        const activeImageSm = document.getElementById(`image_sm_${index}`);

        if (
            scrollContainer &&
            activeImage &&
            scrollContainerSm &&
            activeImageSm
        ) {
            const fromScrollPosition = scrollContainer.scrollLeft;
            const toScrollPosition = activeImage.offsetLeft;

            const fromScrollPositionSm = scrollContainerSm.scrollLeft;
            const toScrollPositionSm =
                activeImageSm.offsetLeft -
                scrollContainerSm.offsetWidth * 0.5 +
                activeImageSm.offsetWidth * 0.5;
            animate(0, 1.0, {
                onUpdate: (delta) => {
                    scrollContainer.scrollLeft = lerp(
                        fromScrollPosition,
                        toScrollPosition,
                        delta
                    );
                    scrollContainerSm.scrollLeft = lerp(
                        fromScrollPositionSm,
                        toScrollPositionSm,
                        delta
                    );
                },
            });
        }
    };

    return (
        <div className="lg:col-span-2 rounded-lg relative">
            <div className="w-full flex relative rounded-lg">
                <div
                    id="images_scroll_container"
                    className="w-full h-full aspect-video flex space-x-4 overflow-hidden rounded-lg"
                >
                    {images.map((image, index) => (
                        <img
                            id={`image_${index}`}
                            key={image.id}
                            src={image.url}
                            className="rounded-lg w-full aspect-video object-cover"
                        />
                    ))}
                </div>
                <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full pointer-events-none px-4">
                    <button
                        className="text-white hover:text-gray-100 pointer-events-auto"
                        onClick={() => handleNextImage(-1)}
                    >
                        <span className="icon-[mdi--chevron-left-circle] scale-[2]" />
                    </button>
                    <button
                        className="text-white hover:text-gray-100 pointer-events-auto"
                        onClick={() => handleNextImage(1)}
                    >
                        <span className="icon-[mdi--chevron-right-circle] scale-[2]" />
                    </button>
                </div>
            </div>
            <div
                id="images_sm_scroll_container"
                className="hidden md:flex space-x-4 overflow-hidden mt-2 rounded-lg"
            >
                {images.map((image, index) => (
                    <img
                        id={`image_sm_${index}`}
                        key={image.id}
                        src={image.url}
                        onClick={() => selectImage(index)}
                        className={cn(
                            "object-cover w-32 h-32 rounded-lg hover:cursor-pointer",
                            activeImageIndex === index && "border-4 border-gray-600"
                        )}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
