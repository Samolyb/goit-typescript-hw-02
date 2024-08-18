import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

type ImageGalleryProps = {
    items: Array<{
        id: string;
        url: string;
        alt_description: string;
    }>;
    onImageClick: (url: string, alt_description: string) => void;
};

export default function ImageGallery({ items, onImageClick }: ImageGalleryProps) {
    if (!items || items.length === 0) {
        return <p>No images found.</p>;
    }

    return (
        <ul className={css.imageGallery}>
            {items.map((image) => (
                <li key={image.id} className={css.imageItem}>
                    <ImageCard image={image} onImageClick={onImageClick} />
                </li>
            ))}
        </ul>
    );
}