import { HouseImage } from "@/types";
import { router } from "@inertiajs/react";
import { useEffect, useState } from "react";

interface Image {
    url: string
}

interface ImageSelectorProps {
    images: (File | Image)[],
    onChange: (images: (File | Image)[]) => void,
}

export function DefaultFiles(): File[] {
    return []
}

export function DefaultImages(images?: HouseImage[]): HouseImage[] {
    if (images) {
        return [...images]
    }
    else {
        return []
    }
}

export default function ImageSelector({ images, onChange }: ImageSelectorProps) {


    // cleanup
    useEffect(() => {
        return () => {
            images.forEach((image) => {
                if (image instanceof File) {
                    URL.revokeObjectURL(URL.createObjectURL(image));
                }
            });
        };
    }, [images]);

    const onImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return
        }

        const newImages = []
        for (let index = 0; index < e.target.files.length; index++) {
            const image = e.target.files[index];
            if (!images.find(img => img instanceof File && img?.name == image.name && img.size == image.size)) {
                newImages.push(image)
            }
        }

        onChange([...images, ...newImages])
    }

    const onImageRemove = async (e: React.FormEvent<HTMLButtonElement>, image: File | Image) => {
        e.preventDefault();
        onChange([...images.filter(img => img != image)])
    }

    return (
        <div className="transition-all space-y-4">
            <label htmlFor="image_select" className="inline-block rounded-lg w-48 h-48 mr-4 relative bg-gray-200 hover:cursor-pointer">
                <input id="image_select" type="file" accept="image/" multiple className="hidden" onChange={onImageSelect} />
                <div className="relative w-full h-full flex items-center justify-center">
                    <i className="icon-[lucide--plus] m-0 p-0 absolute text-8xl text-gray-300" />
                </div>
            </label>
            {images.map((image) => (
                <div key={image instanceof File ? URL.createObjectURL(image) : image.url} className="relative inline-block rounded-lg h-48 w-48 mr-4">
                    <img src={image instanceof File ? URL.createObjectURL(image) : image.url} className="h-48 w-48 object-cover rounded-lg" />
                    <button type="button" onClick={(e) => onImageRemove(e, image)} className="absolute top-2 right-2 rounded-full bg-white hover:bg-gray-50 h-6 w-6 flex items-center justify-center">
                        <span className="icon-[mdi--close]"></span>
                    </button>
                </div>
            ))}
        </div>
    )
}
