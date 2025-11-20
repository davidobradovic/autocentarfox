import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900"
  ],
  style: ["normal", "italic"],
});

export const metadata = {
  title: 'Arena Motors – Mjesto za dobre automobile',
  description: 'Arena Motors nudi finansiranje, servis automobila i veliki izbor vozila za kupce luksuznih automobila u Sarajevu, BiH. Arena Motors je vrhunski prodavac automobila.',
  keywords: [
    'Arena Motors', 'Automobili', 'vozila', 'bih',
    'prodaja vozila', 'luksuzni automobili', 'sarajevo', 'auto plac', 'prodavac automobila'
  ],
  icons: {
    icon: 'https://i.ibb.co/L6LH4BZ/apploog.png',
    apple: 'https://arenamotors.ba/wp-content/uploads/2023/01/cropped-Screenshot-2023-01-04-at-22.23.29-192x192.png'
  },
};

export default function RootLayout({ children }) {


  const snowflakes = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,             // % od širine kartice
    animationDuration: 10 + Math.random() * 20,  // sekunde
    animationDelay: Math.random() * 10,    // sekunde
    size: 2 + Math.random() * 4,           // px
  }));

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Header />
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {snowflakes.map((flake) => (
            <div
              key={flake.id}
              className="absolute top-0 text-white opacity-70 animate-fall"
              style={{
                left: `${flake.left}%`,
                animationDuration: `${flake.animationDuration}s`,
                animationDelay: `${flake.animationDelay}s`,
                fontSize: `20px`,
              }}
            >
              ❄
            </div>
          ))}
        </div>
        {children}
      </body>
    </html>
  );
}
