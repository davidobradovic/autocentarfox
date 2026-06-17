'use client';

import FooterArena from "@/components/Footer";
import { Facebook, Instagram } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div>
      <section className="border-b border-gray-200 bg-white">
        <div className="fox-container py-16 md:py-20">
          <p className="fox-eyebrow">Contact AutoHaus Style</p>
          <h1 className="fox-title">Kontakt Auto Centar FOX</h1>
          <p className="fox-subtitle">
            Tu smo da pomognemo oko testne vožnje, finansiranja i svih pitanja prije kupovine.
          </p>
        </div>
      </section>

      <section className="fox-section">
        <div className="fox-container grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="fox-card p-8">
            <h2 className="text-2xl font-semibold">Kontakt informacije</h2>
            <div className="mt-6 grid gap-4 text-sm text-gray-700 md:grid-cols-2">
              <div>
                <p className="text-gray-500">Adresa</p>
                <p className="mt-1 font-medium">Bulozi bb, 71144 I. Sarajevo, BiH</p>
              </div>
              <div>
                <p className="text-gray-500">Telefon</p>
                <p className="mt-1 font-medium">+387 65 326 333</p>
                <p className="font-medium">+387 66 333 400</p>
              </div>
              <div>
                <p className="text-gray-500">Radno vrijeme</p>
                <p className="mt-1 font-medium">Pon - Sub: 09:00 - 17:00</p>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a href="https://www.instagram.com/arena_motors_sarajevo/?hl=en" className="rounded-full border border-gray-200 p-3 hover:bg-gray-50">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/arenasarajevo/" className="rounded-full border border-gray-200 p-3 hover:bg-gray-50">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="fox-card p-8">
            <h2 className="text-2xl font-semibold">Send Us a Message</h2>
            <p className="mt-2 text-sm text-gray-600">Zanima vas konkretno vozilo? Pošaljite upit i javljamo se brzo.</p>
            {submitted ? (
              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-5 text-sm text-green-800">
                Poruka je uspješno zaprimljena. Kontaktiraćemo vas uskoro.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Vaše ime"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none"
                />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Telefon"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email adresa"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Poruka"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none"
                />
                <button type="submit" className="fox-btn-primary w-full">Submit</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="fox-section bg-white">
        <div className="fox-container">
          <div className="fox-card overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4207.465090529304!2d18.505891477055577!3d43.847297539854424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c72ab56f9705%3A0x5ef0cd715a970ec3!2sAuto%20centar%20FOX!5e1!3m2!1sen!2sba!4v1781679827061!5m2!1sen!2sba" 
style={{ width: "100%", height: 430, border: 0 }}
allowFullScreen
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
title="Auto Centar FOX map"
          referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </div>
      </section>

      <FooterArena />
    </div>
  );
}

