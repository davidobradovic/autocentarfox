// import { Geist, Geist_Mono } from "next/font/google";
// import { Poppins } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"],
//   weight: [
//     "100", "200", "300", "400", "500", "600", "700", "800", "900"
//   ],
//   style: ["normal", "italic"],
// });

// export const metadata = {
//   title: 'Auto Centar FOX – Mjesto za dobre automobile',
//   description: 'Auto Centar FOX nudi finansiranje, servis automobila i veliki izbor vozila za kupce luksuznih automobila u Sarajevu, BiH. Auto Centar FOX je vrhunski prodavac automobila.',
//   keywords: [
//     'Auto Centar FOX', 'Automobili', 'vozila', 'bih',
//     'prodaja vozila', 'luksuzni automobili', 'sarajevo', 'auto salon', 'prodavac automobila'
//   ],
//   icons: {
//     icon: 'https://i.ibb.co/L6LH4BZ/apploog.png',
//     apple: 'https://arenamotors.ba/wp-content/uploads/2023/01/cropped-Screenshot-2023-01-04-at-22.23.29-192x192.png'
//   },
// };

// export default function RootLayout({ children }) {


//   const snowflakes = Array.from({ length: 100 }, (_, i) => ({
//     id: i,
//     left: Math.random() * 100,             // % od širine kartice
//     animationDuration: 10 + Math.random() * 20,  // sekunde
//     animationDelay: Math.random() * 10,    // sekunde
//     size: 2 + Math.random() * 4,           // px
//   }));

//   return (
//     <html lang="en">
//       <body
//         className={`${poppins.variable} antialiased`}
//       >
//         <Header />
//         <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
//           {snowflakes.map((flake) => (
//             <div
//               key={flake.id}
//               className="absolute top-0 text-white opacity-70 animate-fall"
//               style={{
//                 left: `${flake.left}%`,
//                 animationDuration: `${flake.animationDuration}s`,
//                 animationDelay: `${flake.animationDelay}s`,
//                 fontSize: `20px`,
//               }}
//             >
//               ❄
//             </div>
//           ))}
//         </div>
//         {children}
//       </body>
//     </html>
//   );
// }
import { Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const poppins = Sora({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800"
  ],
  style: ["normal"],
  display: "swap", // Optimizacija za performance
});

export const metadata = {
  metadataBase: new URL("https://arenamotors.ba"),
  // Glavni naslov - uključuje lokaciju i ključne riječi
  title: 'Auto Centar FOX Sarajevo | Prodaja Automobila i Polovnih Vozila BiH',

  // Meta description - 150-160 karaktera, prirodan tekst sa ključnim riječima
  description: 'Auto Centar FOX - vodeći auto salon u Sarajevu. Prodaja novih i polovnih automobila, luksuzna vozila, finansiranje, auto servis. Najbolji izbor automobila u Bosni i Hercegovini.',

  // Bosnijske ključne riječi - najvažnije za lokalno SEO
  keywords: [
    // Primarne ključne riječi
    'auto salon Sarajevo',
    'prodaja automobila Sarajevo',
    'polovni automobili Sarajevo',
    'Auto Centar FOX',
    'vozila Sarajevo',

    // Sekundarne ključne riječi
    'auto salon Sarajevo',
    'kupovina automobila BiH',
    'luksuzni automobili Sarajevo',
    'auto servis Sarajevo',
    'finansiranje automobila',

    // Long-tail ključne riječi
    'prodaja polovnih vozila Sarajevo',
    'auto salon Bosna i Hercegovina',
    'gdje kupiti auto u Sarajevu',
    'najbolji auto salon Sarajevo',
    'provjerena polovna vozila',

    // Brendovi i modeli (prilagodite vašem inventaru)
    'Mercedes Sarajevo',
    'BMW Sarajevo',
    'Audi Sarajevo',
    'VW Sarajevo',
  ],

  // Open Graph za društvene mreže
  openGraph: {
    type: 'website',
    locale: 'bs_BA',
    url: 'https://arenamotors.ba',
    siteName: 'Auto Centar FOX',
    title: 'Auto Centar FOX Sarajevo - Prodaja Automobila | Auto Salon',
    description: 'Vodeći auto salon u Sarajevu. Prodaja novih i polovnih automobila, luksuzna vozila, finansiranje i servis. Posjetite nas danas!',
    images: [
      {
        url: '/og_image.jpg',
        width: 1200,
        height: 630,
        alt: 'Auto Centar FOX - Auto Salon Sarajevo',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Centar FOX Sarajevo - Prodaja Automobila',
    description: 'Vodeći auto salon u Sarajevu. Najbolji izbor vozila u BiH.',
    images: ['/og_image.jpg'],
  },

  // Favicon i Apple ikone
  icons: {
    icon: [{ url: "/https://d4n0y8dshd77z.cloudfront.net/avatars/3704444/OLX.ba8750185717208038184-01849232170b.jpg?v=3", type: "image/png" }],
    shortcut: ["/https://d4n0y8dshd77z.cloudfront.net/avatars/3704444/OLX.ba8750185717208038184-01849232170b.jpg?v=3"],
    apple: [{ url: "/https://d4n0y8dshd77z.cloudfront.net/avatars/3704444/OLX.ba8750185717208038184-01849232170b.jpg?v=3", type: "image/png" }],
  },


  // Manifest za PWA (opcionalno)
  manifest: '/site.webmanifest',

  // Robots meta
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification tagovi (dodajte svoje kodove)
  // verification: {
  //   google: 'vaš-google-verification-kod',
  //   // yandex: 'vaš-yandex-kod',
  //   // bing: 'vaš-bing-kod',
  // },

  // Alternativni jezici (ako planirate više jezika)
  // alternates: {
  //   canonical: 'https://arenamotors.ba',
  //   languages: {
  //     'bs-BA': 'https://arenamotors.ba',
  //     // 'en-US': 'https://arenamotors.ba/en',
  //   },
  // },

  // Dodatni meta tagovi
  // other: {
  //   'theme-color': '#ffffff',
  //   'apple-mobile-web-app-capable': 'yes',
  //   'apple-mobile-web-app-status-bar-style': 'black-translucent',
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bs">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Auto Centar FOX",
              "description": "Prodaja polovnih automobila u Sarajevu",
              "url": "https://arenamotors.ba",
              "telephone": "+38766333400",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ive Andrića 6, I. Sarajevo",
                "addressLocality": "I.Sarajevo",
                "addressRegion": "I.Sarajevo",
                "postalCode": "71123",
                "addressCountry": "BA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "43.8279425",
                "longitude": "18.3620791"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "17:00"
                }
              ],
              "priceRange": "$$",
              "image": "/https://d4n0y8dshd77z.cloudfront.net/avatars/3704444/OLX.ba8750185717208038184-01849232170b.jpg",
              "sameAs": [
                "https://www.facebook.com/arenasarajevo/",
                "https://www.instagram.com/arena_motors_sarajevo/?hl=en"
              ]
            })
          }}
        />
      </head>
      <body className={`${poppins.variable} antialiased page-shell`}>
        <Header />
        {children}
      </body>
    </html>
  );
}