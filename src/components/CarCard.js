import React, { useState } from 'react';
import { Bookmark, Calendar, Gauge, Fuel, MapPin } from 'lucide-react';

export default function CarCard({ vehicle, key }) {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleDateString('bs-BA', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
    };

    return (
        <a href={`/vehicles/${vehicle.id}`}>
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden relative">
                {/* Image Section with Overlay */}
                <div className="aspect-video bg-gray-200 overflow-hidden group relative">
                    <img
                        src={vehicle.image.replace('/sm/', '/lg/')}
                        alt={vehicle.title}
                        className="object-cover w-full h-full transition-transform duration-300"
                    />



                    {/* Overlay Content */}
                    <div className="p-4 sm:p-6 absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-transparent to-black/60 flex flex-col justify-between">
                        {/* Top Section */}
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-xl sm:text-2xl text-white font-bold drop-shadow-lg">
                                    {vehicle.title}
                                </h1>
                                {vehicle.sponsored > 0 && (
                                    <span className="inline-block mt-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                                        SPONSORED
                                    </span>
                                )}
                            </div>

                        </div>

                        <div className="flex flex-wrap gap-2 absolute bottom-2 right-2">
                            <span className="text-sm text-white bg-black/40 px-3 py-1 rounded-lg backdrop-blur-sm">
                                {vehicle.state === 'used' ? 'Polovno' : 'Novo'}
                            </span>
                            {vehicle.available ? (
                                <span className="text-sm text-white bg-green-600/80 px-3 py-1 rounded-lg backdrop-blur-sm">
                                    Dostupno
                                </span>
                            ) : (
                                <span className="text-sm text-white bg-orange-600/80 px-3 py-1 rounded-lg backdrop-blur-sm">
                                    Nije dostupno
                                </span>
                            )}
                        </div>

                        {/* Bottom Section */}
                        <div>
                            <div className="price-container absolute bottom-2 left-2">
                                <span className="text-3xl sm:text-4xl font-extrabold text-white bg-black/50 px-4 py-2 rounded-lg inline-block">
                                    {vehicle.display_price}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="p-6">
                    {/* Special Labels */}
                    <div className="grid grid-cols-1 gap-4">
                        {vehicle.special_labels?.map((label, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-4 text-center flex items-center justify-between gap-3 ">
                                <div className='flex items-center gap-2'>
                                    <div className="flex items-center gap-2">
                                        {label.label === 'Gorivo' && <Fuel className="w-5 h-5 text-red-600" />}
                                        {label.label === 'Kilometraža' && <Gauge className="w-5 h-5 text-red-600" />}
                                        {label.label === 'Godište' && <Calendar className="w-5 h-5 text-red-600" />}
                                    </div>
                                    <p className="text-xs text-gray-500">{label.label}</p>
                                </div>
                                <p className="text-lg font-bold text-gray-900 capitalize">
                                    {label.value} {label.unit}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Additional Info */}
                    
                    
                </div>
            </div>
        </a>
    );
}