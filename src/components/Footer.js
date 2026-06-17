import Link from "next/link";
import { MapIcon } from "lucide-react";

export default function FooterArena() {
  return (
    <footer className=" border-t border-gray-200 bg-white">
      <div className="fox-container py-16">
        {/* <div className="mb-12 rounded-3xl border border-gray-200 bg-[url('http://d4n0y8dshd77z.cloudfront.net/avatars/3704444/OLX.ba8750185717208038184-01849232170b.jpg')] bg-cover bg-center p-10 text-white">
          <div className="max-w-2xl rounded-2xl bg-white/55 p-8 backdrop-blur">
            <p className="fox-eyebrow text-black">Trebate pomoć pri odabiru vozila?</p>
            <h3 className="mt-2 text-3xl font-semibold text-black leading-tight">Naš tim je spreman da vam pomogne oko modela, finansiranja i ponude.</h3>
            <p className="mt-4 text-sm text-black">Kontaktirajte nas i dogovorite posjetu salonu Auto Centar FOX.</p>
            <Link href="/contact" className="fox-btn-primary mt-6">
              Kontaktirajte nas
            </Link>
          </div>
        </div> */}

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-semibold">Auto Centar FOX</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Premium iskustvo kupovine i prodaje vozila u Istočnom Sarajevu.
            </p>
            <div className="mt-4 flex gap-3 text-sm">
              <a className="rounded-full border border-gray-200 px-3 py-1.5 hover:bg-gray-50" href="https://www.facebook.com/arenasarajevo/">
                Facebook
              </a>
              <a className="rounded-full border border-gray-200 px-3 py-1.5 hover:bg-gray-50" href="https://www.instagram.com/arena_motors_sarajevo/?hl=en">
                Instagram
              </a>
              <a className="rounded-full border border-gray-200 px-3 py-1.5 hover:bg-gray-50" href="https://maps.app.goo.gl/eRjKChaehvHniv6d8">
                <MapIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Navigacija</h4>
            <div className="mt-4 space-y-3 text-sm">
              <Link href="/" className="block hover:text-red-700">Početna</Link>
              <Link href="/all-vehicles" className="block hover:text-red-700">Vozila</Link>
              {/* <Link href="/journal" className="block hover:text-red-700">Journal</Link> */}
              <Link href="/about" className="block hover:text-red-700">O nama</Link>
              <Link href="/contact" className="block hover:text-red-700">Kontakt</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Usluge</h4>
            <div className="mt-4 space-y-3 text-sm">
              <Link href="/old-for-new" className="block hover:text-red-700">Staro za novo</Link>
              <Link href="/finished-vehicles" className="block hover:text-red-700">Prodata vozila</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Kontakt</h4>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>Bulozi bb, 71144 I. Sarajevo, BiH</p>
              <p>+387 66 333 400</p>
              <p>Pon-Sub: 09:00 - 17:00</p>
            </div>
          </div>
        </div>


        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 md:flex-row">
      <p className="text-sm text-gray-500 text-center md:text-left">
        © 2026 AC FOX Bulozi. Sva prava zadržana.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm">
        <span className="text-gray-600">
          Web stranicu dizajnirao i razvio{" "}
          <span className="font-semibold text-gray-900">
            David Obradović
          </span>
        </span>

        <a
          href="https://wa.me/38766415295"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-green-700 font-medium hover:bg-green-100 transition-all duration-200"
        >
          {/* WhatsApp Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.8 11.8 0 0 0 12.05 0C5.46 0 .11 5.35.11 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.28-1.64a11.84 11.84 0 0 0 5.77 1.47h.01c6.59 0 11.94-5.35 11.94-11.95a11.9 11.9 0 0 0-3.48-8.4ZM12.06 21.7a9.75 9.75 0 0 1-4.96-1.35l-.36-.21-3.73.98.99-3.64-.23-.37a9.73 9.73 0 1 1 8.29 4.59Zm5.34-7.27c-.29-.14-1.72-.85-1.99-.94-.27-.1-.46-.14-.65.14-.19.29-.75.94-.92 1.13-.17.19-.33.21-.62.07-.29-.14-1.2-.44-2.28-1.41-.84-.75-1.4-1.68-1.57-1.97-.16-.29-.02-.44.12-.58.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.09-.19.05-.36-.02-.5-.07-.14-.65-1.56-.89-2.14-.23-.55-.47-.47-.65-.48h-.55c-.19 0-.5.07-.77.36-.26.29-1 1-.99 2.43 0 1.43 1.03 2.81 1.17 3 .14.19 2.03 3.1 4.92 4.34.69.3 1.23.47 1.65.6.69.22 1.31.19 1.8.11.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.33Z" />
          </svg>

          <span>+387 66 415 295</span>
        </a>
      </div>
    </div>

      </div>
    </footer>
  );
}