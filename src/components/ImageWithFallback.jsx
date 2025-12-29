import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

const ImageWithFallback = ({ src, alt, className, type }) => {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div className={`${className} bg-stone-100 flex flex-col items-center justify-center text-stone-400 border-2 border-dashed border-stone-300 overflow-hidden`}>
                <ImageIcon size={type === 'artist' ? 24 : 48} className="mb-2 opacity-50" />
                <span className="text-xs font-mono font-bold text-stone-500 px-2 text-center break-all">{src}</span>
                <span className="text-[10px] text-stone-400 mt-1">{alt}</span>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={`${className} object-cover`}
            onError={() => setError(true)}
        />
    );
};

export default ImageWithFallback;
