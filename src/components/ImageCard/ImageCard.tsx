import React from 'react';

type ImageCardProps = {
    image: {
        url: string;
        alt_description: string;
    };
    onImageClick: (url: string, alt_description: string) => void;
};

export default function ImageCard({ image, onImageClick }: ImageCardProps) {
    return (
        <div>
            <img
                onClick={() => onImageClick(image.url, image.alt_description || 'Image')}
                src={image.url} alt={image.alt_description || 'Image'} />
        </div>
    );
}