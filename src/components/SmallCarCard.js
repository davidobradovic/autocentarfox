import React, { useState } from 'react';
import { Bookmark, Calendar, Gauge, Fuel, MapPin } from 'lucide-react';

export default function SmallCarCard({ vehicle, key }) {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
            <div className="bg-white rounded-lg shadow-md relative hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Image Section with Overlay */}
                <div className="aspect-video bg-gray-200 relative overflow-hidden group">
                    <img
                        src={vehicle.image.replace('/sm/', '/lg/')}
                        alt={vehicle.title}
                        className="object-cover w-full h-full transition-transform duration-300"
                    />


                    {/* Overlay Content */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-transparent to-black/60 flex flex-col justify-between">
                        {/* Top Section */}
                        <div className="flex justify-between items-start gap-1 ml-2 mt-2">
                            <div className="flex-1 min-w-0">
                                {vehicle.sponsored > 0 && (
                                    <span className="inline-block mt-0.5 bg-yellow-500 text-black text-xs font-bold px-1 py-0.5 rounded">
                                        ★
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="p-2">
                    {
                        vehicle.status !== "finished" && (
                            <div className="flex flex-wrap gap-0.5 absolute top-2 right-2">
                                <span className="text-xs text-black bg-white px-1.5 py-0.5 rounded h-[20px] backdrop-blur-sm">
                                    {vehicle.state === 'used' ? 'Polovno' : 'Novo'}
                                </span>
                                {
                                    vehicle.available ? (
                                        <span className="text-xs text-white bg-green-600/80 px-1.5 py-0.5 h-[20px] rounded backdrop-blur-sm">
                                            Dostupno
                                        </span>
                                    ) : (
                                        <span className="text-xs text-white bg-orange-600/80 px-1.5 py-0.5 h-[20px] rounded backdrop-blur-sm">
                                            Nije dostupno
                                        </span>
                                    )

                                }
                            </div>
                        )
                    }
                    {/* Special Labels */}
                    <h2 className="text-[16px] mb-1 font-bold text-black drop-shadow-lg line-clamp-2 leading-tight">
                        {vehicle.title}
                    </h2>
                    
                    <div className="grid grid-cols-3 gap-1 mb-2">
                        {vehicle.special_labels?.map((label, index) => (
                            <div key={index} className="bg-gray-50 rounded p-1 text-center border border-gray-200">
                                {/* <div className="flex justify-center mb-0.5">
                                    {label.label === 'Gorivo' && <Fuel className="w-2.5 h-2.5 text-blue-600" />}
                                    {label.label === 'Kilometraža' && <Gauge className="w-2.5 h-2.5 text-blue-600" />}
                                    {label.label === 'Godište' && <Calendar className="w-2.5 h-2.5 text-blue-600" />}
                                </div> */}
                                <p className="text-xs font-bold text-gray-900 truncate">
                                    {label.value}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className=''>
                        <span className="text-xl font-extrabold text-black inline-block">
                            {vehicle.display_price}
                        </span>
                    </div>

                    {/* Action Button */}
                    {/* <div className='flex items-center gap-2'>
                        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-1.5 rounded transition-colors text-xs">
                            Spasi Oglas
                        </button>
                        <button className="w-full bg-gray-100 hover:bg-gray-200 text-black font-semibold py-1.5 rounded transition-colors text-xs">
                            Podjeli Oglas
                        </button>
                    </div> */}
                </div>
            </div>
        </a>
    );
}