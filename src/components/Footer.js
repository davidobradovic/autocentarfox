import Link from "next/link";
import { MapIcon } from "lucide-react";

export default function FooterArena() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="arena-container py-16">
        <div className="mb-12 rounded-3xl border border-gray-200 bg-[url('https://res.cloudinary.com/dxo3z5off/image/upload/w_1000/q_auto/f_auto/v1759824792/DSC04098_ehlxcn.jpg')] bg-cover bg-center p-10 text-white">
          <div className="max-w-2xl rounded-2xl bg-black/55 p-8 backdrop-blur">
            <p className="arena-eyebrow text-red-300">Trebate pomoć pri odabiru vozila?</p>
            <h3 className="mt-2 text-3xl font-semibold leading-tight">Naš tim je spreman da vam pomogne oko modela, finansiranja i ponude.</h3>
            <p className="mt-4 text-sm text-gray-100">Kontaktirajte nas i dogovorite posjetu salonu Arena Motors.</p>
            <Link href="/contact" className="arena-btn-primary mt-6">
              Kontaktirajte nas
            </Link>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-semibold">Arena Motors</h3>
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
              <Link href="/financing" className="block hover:text-red-700">Finansiranje</Link>
              <Link href="/old-for-new" className="block hover:text-red-700">Staro za novo</Link>
              <Link href="/guarantee" className="block hover:text-red-700">Garancija</Link>
              <Link href="/finished-vehicles" className="block hover:text-red-700">Prodata vozila</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Kontakt</h4>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>Ive Andrića 6, Istočno Sarajevo</p>
              <p>+387 66 444 644</p>
              <p>info@arenamotors.ba</p>
              <p>Pon-Sub: 09:00 - 17:00</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 md:flex-row">
          <p>© 2026 Arena Motors. Sva prava zadržana.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-red-700">Politika privatnosti</Link>
            <Link href="/terms" className="hover:text-red-700">Uslovi korištenja</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}