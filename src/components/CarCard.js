// import React, { useState } from 'react';
// import { Calendar, Gauge, Fuel } from 'lucide-react';

// // Large Car Card Component
// export default function CarCard({ vehicle }) {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     const formatDate = (timestamp) => {
//         const date = new Date(timestamp * 1000);
//         return date.toLocaleDateString('bs-BA', { year: 'numeric', month: 'long', day: 'numeric' });
//     };

//     return (
//         <a href={`/vehicles/${vehicle.id}`} className="block group">
//             {/* Desktop Layout */}
//             <div className="hidden md:block bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
//                 {/* Image Section */}
//                 <div className="relative aspect-video bg-gray-100 overflow-hidden">
//                     <img
//                         src={vehicle.image.replace('/sm/', '/lg/')}
//                         alt={vehicle.title}
//                         className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
//                     />

//                     {/* Top Badges */}
//                     <div className="absolute top-3 left-3 flex flex-wrap gap-2">
//                         {vehicle.sponsored > 0 && (
//                             <span className="bg-yellow-400 text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
//                                 ⭐ SPONZORISANO
//                             </span>
//                         )}
//                         <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
//                             {vehicle.state === 'used' ? 'Polovno' : 'Novo'}
//                         </span>
//                     </div>

//                     {/* Availability Badge */}
//                     <div className="absolute top-3 right-3">
//                         {vehicle.available ? (
//                             <span className="bg-emerald-500 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
//                                 Dostupno
//                             </span>
//                         ) : (
//                             <span className="bg-orange-500 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
//                                 U dolasku
//                             </span>
//                         )}
//                     </div>

//                     {/* Price Badge */}
//                     <div className="absolute bottom-5 left-3">
//                         <span className="bg-gray-900/50 backdrop-blur-sm text-white text-lg md:text-2xl font-bold px-4 py-2 rounded-lg shadow-lg">
//                             {vehicle.display_price}
//                         </span>
//                     </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-6">
//                     <h2 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">
//                         {vehicle.title}
//                     </h2>

//                     <div className="grid grid-cols-3 gap-3">
//                         {vehicle.special_labels?.map((label, index) => {
//                             const Icon = label.label === 'Gorivo' ? Fuel :
//                                 label.label === 'Kilometraža' ? Gauge : Calendar;

//                             return (
//                                 <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-red-300 transition-colors">
//                                     <div className="flex items-center gap-2 mb-1">
//                                         <Icon className="w-4 h-4 text-red-600" />
//                                         <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">
//                                             {label.label}
//                                         </p>
//                                     </div>
//                                     <p className="text-lg font-bold text-gray-900">
//                                         <span className='capitalize'>{label.value}</span> {label.unit}
//                                     </p>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Layout */}
//             <div className="md:hidden bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
//                 <div className="flex gap-3 p-3">
//                     {/* Image Section - Left Side */}
//                     <div className="relative w-32 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
//                         <img
//                             src={vehicle.image.replace('/sm/', '/lg/')}
//                             alt={vehicle.title}
//                             className="object-cover w-full h-full"
//                         />
//                         {vehicle.sponsored > 0 && (
//                             <span className="absolute top-1 left-1 bg-yellow-400 text-gray-900 text-xs font-semibold px-1.5 py-0.5 rounded shadow">
//                                 ⭐
//                             </span>
//                         )}
//                     </div>

//                     {/* Content Section - Right Side */}
//                     <div className="flex-1 flex flex-col justify-between min-w-0">
//                         {/* Title and Badges */}
//                         <div>
//                             <h3 className="text-sm font-bold text-gray-900 mb-1.5 line-clamp-2 leading-tight">
//                                 {vehicle.title}
//                             </h3>

//                             {/* <div className="flex flex-wrap gap-1 mb-2">
//                                 <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-0.5 rounded">
//                                     {vehicle.state === 'used' ? 'Polovno' : 'Novo'}
//                                 </span>
//                                 {vehicle.available ? (
//                                     <span className="bg-emerald-500 text-white text-xs font-medium px-2 py-0.5 rounded">
//                                         Dostupno
//                                     </span>
//                                 ) : (
//                                     <span className="bg-orange-500 text-white text-xs font-medium px-2 py-0.5 rounded">
//                                         Rezervisano
//                                     </span>
//                                 )}
//                             </div> */}

//                             {/* Special Labels */}
//                             <div className="flex flex-wrap gap-2">
//                                 {vehicle.special_labels?.map((label, index) => (
//                                     <div key={index} className="flex items-center gap-1 p-1 bg-gray-50 rounded border border-gray-200 text-xs">
//                                         {/* <span className="text-gray-600">{label.label}:</span> */}
//                                         <span className="font-semibold text-gray-900"><span className='capitalize'>{label.value}</span> {label.unit}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Price */}
//                         <div className="mt-1">
//                             <span className="text-2xl font-bold text-gray-900">
//                                 {vehicle.display_price}
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </a>
//     );
// }

// import React, { useState } from 'react';
// import { Calendar, Gauge, Fuel } from 'lucide-react';

// export default function CarCard({ vehicle }) {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     const formatDate = (timestamp) => {
//         const date = new Date(timestamp * 1000);
//         return date.toLocaleDateString('bs-BA', { year: 'numeric', month: 'long', day: 'numeric' });
//     };

//     return (
//         <a href={`/vehicles/${vehicle.id}`} className="block group">
//             {/* Desktop Layout */}
//             <div className="hidden md:block bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">

//                 {/* Image Section */}
//                 <div className="relative aspect-video bg-gray-100 overflow-hidden">
//                     <img
//                         src={vehicle.image.replace('/sm/', '/lg/')}
//                         alt={vehicle.title}
//                         className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
//                     />

//                     {/* ========== PREMIUM BADGES ========== */}
//                     {vehicle.premium_badges?.length > 0 && (
//                         <div className="absolute top-3 right-3 flex flex-col gap-2">
//                             {vehicle.premium_badges.map((badge, i) => (
//                                 <span
//                                     key={i}
//                                     className="text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border"
//                                     style={{
//                                         color: badge.text_color,
//                                         backgroundColor: badge.background_color,
//                                         borderColor: badge.border_color
//                                     }}
//                                 >
//                                     {badge.name}
//                                 </span>
//                             ))}
//                         </div>
//                     )}

//                     {/* Top Left Badges */}
//                     <div className="absolute top-3 left-3 flex flex-wrap gap-2">
//                         {vehicle.sponsored > 0 && (
//                             <span className="bg-yellow-400 text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
//                                 ⭐ SPONZORISANO
//                             </span>
//                         )}
//                         <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
//                             {vehicle.state === 'used' ? 'Polovno' : 'Novo'}
//                         </span>
//                     </div>

//                     {/* Availability */}
//                     <div className="absolute bottom-5 left-3">
//                         <span className="bg-gray-900/50 backdrop-blur-sm text-white text-lg md:text-2xl font-bold px-4 py-2 rounded-lg shadow-lg">
//                             {vehicle.display_price}
//                         </span>
//                     </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                     <h2 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">{vehicle.title}</h2>

//                     <div className="grid grid-cols-3 gap-3">
//                         {vehicle.special_labels?.map((label, index) => {
//                             const Icon = label.label === 'Gorivo' ? Fuel :
//                                 label.label === 'Kilometraža' ? Gauge : Calendar;

//                             return (
//                                 <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-red-300 transition-colors">
//                                     <div className="flex items-center gap-2 mb-1">
//                                         <Icon className="w-4 h-4 text-red-600" />
//                                         <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">
//                                             {label.label}
//                                         </p>
//                                     </div>
//                                     <p className="text-lg font-bold text-gray-900">
//                                         <span className='capitalize'>{label.value}</span> {label.unit}
//                                     </p>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Layout */}
//             <div className="md:hidden bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
//                 <div className="flex gap-3 p-3">

//                     {/* Image */}
//                     <div className="relative w-32 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
//                         <img
//                             src={vehicle.image.replace('/sm/', '/lg/')}
//                             alt={vehicle.title}
//                             className="object-cover w-full h-full"
//                         />

//                         {/* Premium Badges Mobile */}
//                         {vehicle.premium_badges?.length > 0 && (
//                             <div className="absolute bottom-1 left-1 flex flex-col gap-1">
//                                 {vehicle.premium_badges.map((badge, i) => (
//                                     <span
//                                         key={i}
//                                         className="text-[9px] font-semibold px-1.5 py-0.5 rounded border shadow"
//                                         style={{
//                                             color: badge.text_color,
//                                             backgroundColor: badge.background_color,
//                                             borderColor: badge.border_color
//                                         }}
//                                     >
//                                         {badge.name}
//                                     </span>
//                                 ))}
//                             </div>
//                         )}
//                     </div>

//                     {/* Right side */}
//                     <div className="flex-1 flex flex-col justify-between min-w-0">

//                         <h3 className="text-sm font-bold text-gray-900 mb-1.5 line-clamp-2 leading-tight">
//                             {vehicle.title}
//                         </h3>

//                         <div className="flex flex-wrap gap-2">
//                             {vehicle.special_labels?.map((label, index) => (
//                                 <div key={index} className="flex items-center gap-1 p-1 bg-gray-50 rounded border border-gray-200 text-xs">
//                                     <span className="font-semibold text-gray-900">
//                                         <span className='capitalize'>{label.value}</span> {label.unit}
//                                     </span>
//                                 </div>
//                             ))}
//                         </div>

//                         <div className="mt-1">
//                             <span className="text-2xl font-bold text-gray-900">
//                                 {vehicle.display_price}
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </a>
//     );
// }
import React, { useState } from 'react';
import { Calendar, Gauge, Fuel } from 'lucide-react';

export default function CarCard({ vehicle }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleDateString('bs-BA', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <a href={`/vehicles/${vehicle.id}`} className="block group">
            {/* Desktop Layout */}
            <div className="hidden md:block bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">

                {/* Image Section */}
                <div className="relative aspect-video bg-gray-100 overflow-hidden">
                    <img
                        src={vehicle.image.replace('/sm/', '/lg/')}
                        alt={vehicle.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* ========== PREMIUM BADGES ========== */}
                    {vehicle.premium_badges?.length > 0 && (
                        <div className="absolute top-3 right-3 flex flex-col gap-2">
                            {vehicle.premium_badges.map((badge, i) => (
                                <span
                                    key={i}
                                    className="text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border"
                                    style={{
                                        color: badge.text_color,
                                        backgroundColor: badge.background_color,
                                        borderColor: badge.border_color
                                    }}
                                >
                                    {badge.name}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Top Left Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        {vehicle.sponsored > 0 && (
                            <span className="bg-yellow-400 text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                                ⭐ SPONZORISANO
                            </span>
                        )}
                        <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                            {vehicle.state === 'used' ? 'Polovno' : 'Novo'}
                        </span>
                    </div>

                    {/* Availability */}
                    <div className="absolute bottom-5 left-3">
                        <span className="bg-gray-900/50 backdrop-blur-sm text-white text-lg md:text-2xl font-bold px-4 py-2 rounded-lg shadow-lg">
                            {vehicle.display_price}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">{vehicle.title}</h2>

                    <div className="grid grid-cols-3 gap-3">
                        {vehicle.special_labels?.map((label, index) => {
                            const Icon = label.label === 'Gorivo' ? Fuel :
                                label.label === 'Kilometraža' ? Gauge : Calendar;

                            return (
                                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-red-300 transition-colors">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Icon className="w-4 h-4 text-red-600" />
                                        <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                                            {label.label}
                                        </p>
                                    </div>
                                    <p className="text-lg font-bold text-gray-900">
                                        <span className='capitalize'>{label.value}</span> {label.unit}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="flex gap-3 p-3">

                    {/* Image */}
                    <div className="relative w-32 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                            src={vehicle.image.replace('/sm/', '/lg/')}
                            alt={vehicle.title}
                            className="object-cover w-full h-full"
                        />

                        {/* Premium Badges Mobile */}
                        {vehicle.premium_badges?.length > 0 && (
                            <div className="absolute bottom-1 left-1 flex flex-col gap-1">
                                {vehicle.premium_badges.map((badge, i) => (
                                    <span
                                        key={i}
                                        className="text-[9px] font-semibold px-1.5 py-0.5 rounded border shadow"
                                        style={{
                                            color: badge.text_color,
                                            backgroundColor: badge.background_color,
                                            borderColor: badge.border_color
                                        }}
                                    >
                                        {badge.name}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right side */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">

                        <h3 className="text-sm font-bold text-gray-900 mb-1.5 line-clamp-2 leading-tight">
                            {vehicle.title}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {vehicle.special_labels?.map((label, index) => (
                                <div key={index} className="flex items-center gap-1 p-1 bg-gray-50 rounded border border-gray-200 text-xs">
                                    <span className="font-semibold text-gray-900">
                                        <span className='capitalize'>{label.value}</span> {label.unit}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-1">
                            <span className="text-2xl font-bold text-gray-900">
                                {vehicle.display_price}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}
