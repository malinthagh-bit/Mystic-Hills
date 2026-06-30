"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;

        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-black text-white scroll-smooth overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">

          {/* LOGO */}
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-[4px] text-amber-400">
            MYSTIC HILLS
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
            <a href="#about" className="hover:text-amber-400">About</a>
            <a href="#rooms" className="hover:text-amber-400">Rooms</a>
            <a href="#gallery" className="hover:text-amber-400">Gallery</a>
            <a href="#location" className="hover:text-amber-400">Location</a>
            <a href="#contact" className="hover:text-amber-400">Contact</a>
          </div>

          {/* HAMBURGER BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-white"
          >
            {open ? "✕" : "☰"}
          </button>

        </div>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-5 flex flex-col gap-5 text-sm uppercase tracking-wider">

            <a onClick={() => setOpen(false)} href="#about">About</a>
            <a onClick={() => setOpen(false)} href="#rooms">Rooms</a>
            <a onClick={() => setOpen(false)} href="#gallery">Gallery</a>
            <a onClick={() => setOpen(false)} href="#location">Location</a>
            <a onClick={() => setOpen(false)} href="#contact">Contact</a>

          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        className="h-screen flex items-center justify-center bg-cover bg-center relative px-4"
        style={{
          backgroundImage:
            "url('https://a0.muscache.com/im/pictures/hosting/Hosting-1621548395702991343/original/fe91d358-8407-4812-b6b5-fdb05d643c7f.jpeg?im_w=960')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center max-w-3xl">
          <p className="text-amber-400 tracking-[6px] sm:tracking-[8px] uppercase text-xs sm:text-sm">
            Luxury Villa Retreat
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light mt-4">
            Mystic Hills
          </h1>

          <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg">
            Experience breathtaking mountain views, peace, and luxury stay in Heerassagala, Kandy.
          </p>

          <a
            href="#contact"
            className="inline-block mt-10 bg-amber-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-amber-400 transition"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <img
            src="https://a0.muscache.com/im/pictures/hosting/Hosting-1621548395702991343/original/315a803f-c7d5-46aa-96c1-c83ce4a51ca2.jpeg?im_w=1200"
            className="rounded-3xl w-full h-72 sm:h-96 object-cover"
          />

          <div>
            <p className="text-amber-400 uppercase tracking-[6px] text-sm">
              About Us
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mt-4">
              A peaceful escape in the hills
            </h2>

            <p className="mt-6 text-gray-300 leading-7 sm:leading-8 text-sm sm:text-base">
              Mystic Hills is a luxury villa located in Heerassagala, Kandy.
              Surrounded by nature and mountain views, perfect for relaxation and comfort.
            </p>
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms" className="bg-zinc-950 py-16 px-4 sm:px-6">

        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-light mb-12 sm:mb-16">
          Rooms & Stay
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
            <img
              src="https://a0.muscache.com/im/pictures/hosting/Hosting-1621548395702991343/original/e1888480-809d-4c06-a848-40e24f95dbc3.jpeg?im_w=720"
              className="h-64 sm:h-72 w-full object-cover"
            />
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold">Luxury Bedroom</h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Comfortable and elegant room with mountain views.
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
            <img
               src="/images/dji-0257.jpg"
              className="h-64 sm:h-72 w-full object-cover"
            />
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold">Family Suite</h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Spacious stay perfect for families and groups.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section id="gallery" className="py-16 px-4 sm:px-6 bg-black">
  <h2 className="text-center text-4xl font-light mb-12">Gallery</h2>

  <div
    ref={scrollRef}
    className="overflow-x-auto scrollbar-hide"
  >
    <div className="grid grid-rows-2 grid-flow-col gap-6 w-max">
      {[
        "/images/1.jpg",
        "/images/2.jpg",
        "/images/3.jpg",
        "/images/4.jpg",
        "/images/5.jpg",
        "/images/6.jpg",
        "/images/7.jpg",
        "/images/8.jpg",
        "/images/9.jpg",
        "/images/10.jpg",
        "/images/11.jpg",
        "/images/12.jpg",
        "/images/13.jpg",
        "/images/14.jpg",
        "/images/15.jpg",
        "/images/16.jpg",
        "/images/17.jpg",
        "/images/18.jpg",
        
      ].map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Gallery ${i + 1}`}
          className="w-[320px] h-56 object-cover rounded-3xl"
        />
      ))}
    </div>
  </div>
</section>
      {/* LOCATION */}
      <section id="location" className="bg-zinc-950 py-16 px-4 sm:px-6">

        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-light mb-10 sm:mb-12">
          Location
        </h2>

        <p className="text-center text-gray-400 mb-8 text-sm sm:text-base">
          Heerassagala, Kandy, Sri Lanka
        </p>

        <iframe
          className="w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-3xl"
          src="https://maps.google.com/maps?q=heerassagala%20kandy&t=&z=13&output=embed"
        />
      </section>

     {/* CONTACT */}
<section
  id="contact"
  className="py-16 sm:py-24 px-4 sm:px-6 text-center bg-black text-white"
>
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-10">
    Contact & Booking
  </h2>

  {/* Contact Card */}
  <div className="max-w-md mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg backdrop-blur-md space-y-4">

    {/* Phone */}
    <p className="text-gray-300 text-sm sm:text-base flex items-center justify-center gap-2">
      📞 <span className="hover:text-white transition">+44 7939 386959</span>
    </p>

    {/* Airbnb Link */}
    <a
      href="https://www.airbnb.com/rooms/1621548395702991343?check_in=2026-07-24&check_out=2026-07-25&guests=1&adults=1&s=67&unique_share_id=fa6ce7e2-96ff-41f1-84f0-64889488c313"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-gray-300 text-sm sm:text-base hover:text-white hover:underline transition"
    >
      🏠 View on Airbnb
    </a>

    {/* WhatsApp Button */}
    <a
      href="https://wa.me/94770390297"
      target="_blank"
      className="inline-flex items-center justify-center w-full mt-4 bg-green-500 hover:bg-green-600 transition text-black font-semibold px-6 py-3 rounded-full shadow-md"
    >
      💬 WhatsApp Booking
    </a>
  </div>
</section>

      {/* FOOTER */}
      <footer className="py-6 text-center border-t border-white/10 text-gray-500 text-sm">
        © 2026 Mystic Hills. All rights reserved.
      </footer>

    </main>
  );
}