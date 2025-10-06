import React, { useState } from 'react';
import { Bookmark, Calendar, Gauge, Fuel, MapPin } from 'lucide-react';

export default function SmallCarCard({ vehicle }) {
    return (
        <a href={`/vehicles/${vehicle.id}`} className="block group">
            <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Image Section */}
                <div className="relative aspect-video bg-gray-100 overflow-hidden">
                    <img
                        src={vehicle.image.replace('/sm/', '/lg/')}
                        alt={vehicle.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top Badges */}
                    {vehicle.status !== "finished" && (
                        <div className="absolute top-2 left-2 right-2 flex justify-between items-start gap-1">
                            <div className="flex gap-1">
                                {vehicle.sponsored > 0 && (
                                    <span className="bg-yellow-400 text-gray-900 text-xs font-semibold px-1.5 py-0.5 rounded shadow-md">
                                        ⭐
                                    </span>
                                )}
                                <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-medium px-1.5 py-0.5 rounded shadow-md">
                                    {vehicle.state === 'used' ? 'Polovno' : 'Novo'}
                                </span>
                            </div>

                            {vehicle.available ? (
                                <span className="bg-emerald-500 text-white text-xs font-medium px-1.5 py-0.5 rounded shadow-md">
                                    Dostupno
                                </span>
                            ) : (
                                <span className="bg-orange-500 text-white text-xs font-medium px-1.5 py-0.5 rounded shadow-md">
                                    U dolasku
                                </span>
                            )}
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className="p-2.5">
                    {/* Title */}
                    <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">
                        {vehicle.title}
                    </h3>

                    {/* Special Labels Grid */}
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                        {vehicle.special_labels?.map((label, index) => (
                            <div key={index} className="bg-gray-50 rounded p-1.5 border border-gray-200 text-center">
                                <p className="text-[8px] md:text-xs font-bold text-gray-900 truncate">
                                    <span className='capitalize'>{label.value}</span> {label.unit}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Price */}
                    <div className="pt-2 border-t border-gray-100">
                        <span className="text-base font-bold text-gray-900">
                            {vehicle.display_price}
                        </span>
                    </div>
                </div>
            </div>
        </a>
    );
}
