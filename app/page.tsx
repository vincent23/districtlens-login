"use client";


import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


// UI-only class tokens (same look as the admin pages).
const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 transition-colors focus:border-[#123D73] focus:outline-none focus:ring-2 focus:ring-[#123D73]/20";
const labelClass = "mb-2 block text-sm font-semibold text-slate-800";
const btnPrimary =
  "w-full rounded-xl bg-[#123D73] px-4 py-3.5 text-base font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#0D2F59] disabled:cursor-not-allowed disabled:opacity-50";


export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    alert("This is a UI preview. Login functionality is disabled.");
  }

  function handleGoogleLogin() {
    alert("Google login is not yet connected.");
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
              src="/images/twd-logo1.png"
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
      <main className="relative flex min-h-0 flex-1 w-full items-stretch justify-center bg-white">

      {/* WHITE SPLIT PANEL */}
      <div className="relative grid h-full w-full grid-cols-1 bg-white md:grid-cols-2">

            {/* BRANDING SECTION */}
            <section className="relative flex flex-col bg-[#F3F6FB] items-center justify-center px-6 py-10 text-center max-[770px]:hidden sm:px-12 md:border-r md:border-[#123D73]/60 lg:px-16">

              {/* Decorative Corner */}
              <div className="absolute right-0 top-0 h-28 w-28 bg-[#123D73]/10 [clip-path:polygon(0_0,100%_0,100%_100%)] sm:h-40 sm:w-40" />

              {/* Logo */}
              <div className="relative mx-auto mb-5 h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48">
                <Image
                  src="/images/districtlens-logo7.png"
                  alt="DistrictLens Logo"
                  fill
                  priority
                  sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
                  className="object-contain"
                />
              </div>

              {/* Brand Name */}
              <h1 className="text-left text-3xl font-extrabold tracking-tight sm:text-4xl">
                <span className="text-[#123D73]">District</span>
                <span className="text-[#00A6D6]">Lens</span>
              </h1>

              {/* Description */}
              {/* BRAND TAGLINE */}
              <p className="mt-6 text-base font-semibold tracking-wide text-[#123D73] lg:text-lg">

                Monitor
                <span className="mx-3 text-[#00A6D6]">╼</span>

                Report
                <span className="mx-3 text-[#00A6D6]">╼</span>

                Locate

              </p>

              <p className="mt-2 max-w-[320px] text-left text-sm leading-5 text-slate-500 sm:max-w-none sm:text-base">
                Operations Dashboard and Incident Monitoring System
              </p>

              {/* Bottom Decorative Shape */}
              <div className="absolute bottom-0 left-0 h-28 w-28 bg-[#123D73]/10 [clip-path:polygon(0_0,0_100%,100%_100%)] sm:h-40 sm:w-40" />

            </section>


            {/* LOGIN SECTION */}
            <section className="relative flex min-h-0 items-start justify-center overflow-y-auto px-5 py-8 sm:items-center sm:px-16 sm:py-16 lg:px-20">
              {/* Decorative Corner */}
              <div className="absolute right-0 top-0 h-28 w-28 bg-[#241C70]/10 [clip-path:polygon(0_0,100%_0,100%_100%)] sm:h-40 sm:w-40" />

              <div className="relative z-10 my-auto w-full max-w-xl shrink-0">

                {/* Welcome Header */}
                <div className="mb-10 text-center">

                {/* Logo - Small Screen */}
                  <div className="mb-9 flex flex-col items-center min-[770px]:hidden">
          
                    {/* LOGO AND TITLE */}
                    <div className="flex items-center justify-center gap-4">
          
                      {/* LOGO */}
                      <div className="relative h-20 w-20 shrink-0">
                        <Image
                          src="/images/districtlens-logo7.png"
                          alt="DistrictLens Logo"
                          fill
                          priority
                          sizes="80px"
                          className="object-contain"
                        />
                      </div>
          
                      {/* DIVIDER */}
                      <div className="h-14 w-px bg-slate-200" />
          
                      {/* BRAND NAME */}
                      <div className="flex flex-col">
                        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                          <span className="text-[#123D73]">District</span>
                          <span className="text-[#00A6D6]">Lens</span>
                        </h1>
          
                        <p className="mt-1 text-[10px] font-bold tracking-[0.2em] text-slate-400">
                          AUTHORIZED PERSONNEL
                        </p>
                      </div>
          
                    </div>
          
                    {/* DESCRIPTION */}
                    <p className="mt-5 max-w-sm text-center text-sm leading-6 text-slate-500">
                      Operations Dashboard and Incident Monitoring System
                    </p>
          
                  </div>

                  {/* Lock Icon */}
                  <div className="mx-auto mt-5 hidden h-12 w-12 items-center justify-center rounded-full bg-[#123D73] text-white shadow-md sm:flex">

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
                </div>
                  
                  <p className="font-sans text-2xl italic text-[#123D73] lg:text-4xl">
                    Log In to your account
                  </p>

                  <p className="text-sm font-medium text-slate-700 py-3">
                   Welcome back, please enter your details.
                  </p>

                {/* Google Login Button */}
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:border-[#123D73]"
                >
                  {/* Google Logo */}
                  <svg viewBox="0 0 48 48" className="h-5 w-5">
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    />
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.75 7.18l7.98 6.19c4.65-4.3 6.81-10.62 6.81-17.84z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19z"
                    />
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.91-5.81l-7.98-6.19c-2.15 1.45-4.89 2.3-7.93 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    />
                  </svg>

                  Continue with Google
                </button>

                {/* Divider */}
                <div className="relative flex items-center py-4">
                  <div className="flex-grow border-t border-slate-200" />
                  <span className="mx-4 text-xs font-medium uppercase text-slate-400">
                    OR
                  </span>
                  <div className="flex-grow border-t border-slate-200" />
                </div>


                {/* LOGIN FORM */}
                <form onSubmit={handleLogin} className="space-y-5">

                  {/* Email Address or Username */}
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address or Username
                    </label>

                    <div className="relative">

                      {/* User Icon */}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#123D73]/60"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="8" r="4" />
                        <path
                          d="M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6"
                          strokeLinecap="round"
                        />
                      </svg>

                      <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="username"
                        className={`${inputClass} pl-11`}
                        placeholder="Enter your email or username"
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
                        className="absolute inset-y-0 cursor-pointer right-0 flex items-center px-4 text-slate-500 transition hover:text-[#123D73]"
                      >
                        {showPassword ? (
                          // Eye with slash - Hide password
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <path d="M3 3l18 18" />
                            <path d="M10.6 10.6a2 2 0 002.8 2.8" />
                            <path d="M9.9 5.2A10.8 10.8 0 0112 5c5 0 9 4 10 7-0.4 1.2-1.3 2.5-2.5 3.5" />
                            <path d="M6.2 6.2C3.8 7.5 2.4 9.5 2 12c1 3 5 7 10 7 1.2 0 2.3-.2 3.3-.6" />
                          </svg>
                        ) : (
                          // Eye - Show password
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        )}
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
                  
                  {/* remember me and forgot password */}
                  <div className="flex items-center justify-between">
                    <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        className="h-4 w-4 cursor-pointer rounded border-slate-300 accent-[#342992]"
                      />
                      <span>Remember me</span>
                    </label>

                    <button
                      type="button"
                      onClick={() => router.push("/forgot-password")}
                      className="cursor-pointer text-sm font-medium text-[#123D73] transition-colors hover:text-[#087E87] hover:underline"
                  >
                      Forgot password?
                    </button>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`${btnPrimary} cursor-pointer bg-[#123D73] shadow-md transition-all hover:brightness-110`}
                  >
                    {loading ? "Logging in..." : "LOGIN"}
                  </button>

                </form>

                <p className="mt-5 border-t border-slate-200 p-3 text-center text-sm text-slate-500">
                  Don't have an account yet?{" "}
                  <button
                    type="button"
                    onClick={() => router.push("/signup")}
                    className="cursor-pointer font-semibold text-[#123D73] hover:underline"
                  >
                    Sign Up
                  </button>
                </p>

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

