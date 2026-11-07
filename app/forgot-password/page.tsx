"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      // CONNECT YOUR PASSWORD RESET FUNCTION HERE.
      // Example: Supabase resetPasswordForEmail(email)

    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-dvh w-full items-center justify-center bg-[#F3F6FB] px-4 py-8">

      {/* MAIN CARD */}
      <div className="w-full max-w-[542px] border border-slate-200 bg-white px-6 py-10 shadow-[0_20px_50px_rgba(15,42,92,0.10)] sm:px-10 sm:py-12">

        {/* BRANDING */}
        <div className="mb-9 flex flex-col items-center">

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

        {/* FORM HEADER */}
        <div className="mb-7">

          <h2 className="text-2xl font-bold tracking-tight text-[#123D73] sm:text-[27px]">
            Reset Your Password
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
            Enter your registered email address to receive a password reset link.
          </p>

        </div>

        {/* FORGOT PASSWORD FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* EMAIL INPUT */}
          <div>

            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Registered Email Address
            </label>

            <div className="relative">

              {/* EMAIL ICON */}
              <svg
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  strokeWidth="1.8"
                />
                <path
                  d="m3 7 9 6 9-6"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your registered email"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-slate-300 bg-white py-4 pl-12 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#00A6D6] focus:ring-2 focus:ring-[#00A6D6]/20"
              />

            </div>

          </div>

          {/* ERROR MESSAGE */}
          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* SUCCESS MESSAGE */}
          {message && (
            <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              {message}
            </div>
          )}

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-[#123D73] px-4 py-4 text-sm font-bold tracking-wide text-white shadow-md transition hover:bg-[#0D2F5A] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "SENDING..." : "SEND RESET LINK"}
          </button>

        </form>

        {/* INFORMATION */}
        <p className="mt-7 text-center text-sm leading-6 text-slate-400">
          Reset links are time-limited and may only be used once.
          Repeated requests may be temporarily limited.
        </p>

        {/* BACK TO LOGIN */}
        <div className="mt-6 text-center">

          <Link
            href="/"
            className="text-sm font-semibold text-[#123D73] transition hover:text-[#00A6D6] hover:underline"
          >
            Back to Login
          </Link>

        </div>

      </div>

    </main>
  );
}