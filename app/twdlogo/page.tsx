"use client";


import { useState, useEffect } from "react";
import Image from "next/image";


// UI-only class tokens (same look as the admin pages).
const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 transition-colors focus:border-[#123D73] focus:outline-none focus:ring-2 focus:ring-[#123D73]/20";
const labelClass = "mb-2 block text-sm font-semibold text-slate-800";
const btnPrimary =
  "w-full rounded-xl bg-[#123D73] px-4 py-3.5 text-base font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#0D2F59] disabled:cursor-not-allowed disabled:opacity-50";


export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  alert("This is a UI preview. Login functionality is disabled.");
}

const [year, setYear] = useState<number | null>(null);

useEffect(() => {
  setYear(new Date().getFullYear());
}, []);

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-white text-slate-800">
      {/* HEADER */}
        <header className="z-50 shrink-0 border-b border-t-4 border-slate-200 border-t-[#123D73] bg-white">
        <div className="mx-auto flex min-h-22 w-full max-w-[1700px] items-center px-4 py-3 sm:px-6 lg:px-8">

            <div className="flex min-w-0 items-center gap-3">
            <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
                <Image
                src="/images/twd-logo2.png"
                alt="Tanza Water District official logo"
                fill
                sizes="64px"
                className="rounded-full object-contain"
                priority
                />
            </div>

            <p className="truncate text-base font-bold tracking-tight text-[#123D73] sm:text-xl">
                Tanza Water District
            </p>
            </div>

        </div>
        </header>


      {/* SPLIT LAYOUT */}
<main className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-[#241C70] p-3 sm:p-6 lg:p-8">

  {/* DECORATIVE SHAPES */}
  <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 bg-[#5366C8]/25 [clip-path:polygon(0_0,100%_0,100%_100%)] sm:h-72 sm:w-72" />

  <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 bg-[#342992]/25 [clip-path:polygon(0_0,100%_100%,0_100%)] sm:h-72 sm:w-72" />

    {/* INNER WHITE PANEL */}
    <div className="relative grid h-full min-h-0 w-full grid-cols-1 bg-white md:grid-cols-2">

      {/* BRANDING SECTION */}
      <section className="relative flex flex-col items-center justify-center px-6 py-10 text-center max-[764px]:hidden sm:px-12 md:border-r md:border-[#123D73]/60 lg:px-16">

        {/* Decorative Corner */}
        <div className="absolute right-0 top-0 h-28 w-28 bg-[#123D73]/10 [clip-path:polygon(0_0,100%_0,100%_100%)] sm:h-40 sm:w-40" />

        {/* Logo */}
        <div className="relative mx-auto mb-5 h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48">
          <Image
            src="/images/districtlens-logo6.png"
            alt="Tanza Water District Logo"
            fill
            priority
            sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
            className="object-contain"
          />
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl font-bold tracking-wide text-[#123D73] sm:text-5xl lg:text-6xl">
          DISTRICTLENS
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-lg text-sm font-semibold leading-relaxed text-slate-600  sm:text-base">
          Monitor ╼ Report ╼ Locate  
        </p>

        {/* Organization */}
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#087E87]">
          TANZA WATER DISTRICT
        </p>

        {/* Bottom Decorative Shape */}
        <div className="absolute bottom-0 left-0 h-28 w-28 bg-[#123D73]/10 [clip-path:polygon(0_0,0_100%,100%_100%)] sm:h-40 sm:w-40" />

      </section>


      {/* LOGIN SECTION */}
      <section className="relative flex items-center justify-center px-6 py-12 sm:px-12 lg:px-16">

        {/* Decorative Corner */}
        <div className="absolute right-0 top-0 h-28 w-28 bg-[#241C70]/10 [clip-path:polygon(0_0,100%_0,100%_100%)] sm:h-40 sm:w-40" />

        <div className="relative z-10 w-full max-w-md">

          {/* Welcome Header */}
          <div className="mb-10 text-center">

            {/* Logo - Small Screen */}
            <div className="flex w-full items-center justify-center gap-3 min-[764px]:hidden">

              {/* Logo */}
              <div className="relative h-24 w-24 shrink-0 sm:h-32 sm:w-32">
                <Image
                  src="/images/districtlens-logo6.png"
                  alt="Tanza Water District Logo"
                  fill
                  priority
                  sizes="128px"
                  className="object-contain"
                />
              </div>
            </div>
            

            <h2 className="font-serif text-4xl italic text-[#123D73] sm:text-5xl">
              Welcome
            </h2>

            {/* Lock Icon */}
            <div className="mx-auto mt-8 hidden h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-[#241C70] via-[#342992] to-[#5366C8] text-white shadow-md sm:flex">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-6 w-6"
              >
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" strokeLinecap="round" />
                <circle cx="12" cy="16" r="1" fill="currentColor" />
              </svg>

            </div>

            <p className="mt-6 text-sm font-medium text-slate-700">
              Login to continue
            </p>

          </div>


          {/* LOGIN FORM */}
          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div>
              <label htmlFor="username" className={labelClass}>
                Email
              </label>

              <div className="relative">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#123D73]/60"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6" strokeLinecap="round" />
                </svg>

                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  autoComplete="username"
                  className={`${inputClass} pl-11`}
                  placeholder="Enter your email"
                />

              </div>
            </div>


            {/* Password */}
            <div>
              <label htmlFor="password" className={labelClass}>
                Password
              </label>

              <div className="relative">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#123D73]/60"
                  aria-hidden="true"
                >
                  <rect x="5" y="11" width="14" height="9" rx="2" />
                  <path d="M8 11V8a4 4 0 0 1 8 0v3" strokeLinecap="round" />
                </svg>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className={`${inputClass} pl-11 pr-16`}
                  placeholder="Enter your password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-0 px-4 text-xs font-semibold text-slate-500 hover:text-[#123D73]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>
            </div>


            {/* Error */}
            {error && (
              <p
                role="alert"
                className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}


            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className={`${btnPrimary} bg-linear-to-br from-[#241C70] via-[#342992] to-[#5366C8] shadow-md transition-all hover:brightness-110`}
            >
              {loading ? "Logging in..." : "LOGIN"}
            </button>

          </form>


          {/* Forgot Password */}
          <div className="mt-7 border-t border-slate-200 pt-5 text-center">

            <button
              type="button"
              className="text-sm font-medium text-[#123D73] transition-colors hover:text-[#087E87] hover:underline"
            >
              Forgot password?
            </button>

          </div>

        </div>

      </section>

    </div>

</main>

    
      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white px-6 py-5 text-center">
        <p className="text-xs text-slate-500">
          © {year} SerbisyON. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

