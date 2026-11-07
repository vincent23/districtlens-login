"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");

  const labelClass =
    "mb-2 block text-sm font-semibold text-[#123D73]";

  const inputClass =
    "w-full rounded-lg border border-slate-300 bg-white py-3 pl-4 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#342992] focus:ring-2 focus:ring-[#342992]/20";

  const btnPrimary =
    "w-full rounded-lg py-3 text-sm font-bold tracking-wider text-white disabled:cursor-not-allowed disabled:opacity-60";

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    // Connect your registration/authentication logic here.
    console.log({
      fullName,
      email,
      password,
    });
  };

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-white text-slate-800">

      <main className="flex min-h-screen items-center justify-center p-4">

    <div className="relative grid h-fit min-h-[600px] w-full max-w-2xl grid-cols-1 bg-white">          
          {/* SIGN UP SECTION */}
          <section className="relative flex items-center justify-center overflow-y-auto px-6 py-8 sm:px-12 lg:px-16">

            {/* Decorative Corner */}
            <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 bg-[#241C70]/10 [clip-path:polygon(0_0,100%_0,100%_100%)] sm:h-40 sm:w-40" />

            <div className="relative z-10 w-full max-w-md">

              {/* Back Button */}
              <button
                type="button"
                onClick={() => router.push("/login")}
                className="mb-5 flex items-center gap-2 text-sm font-semibold text-[#123D73] transition hover:text-[#087E87]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path
                    d="M19 12H5M12 19l-7-7 7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                Back to Login
              </button>


              {/* Header */}
              <div className="mb-6 text-center">

                {/* Mobile Logo */}
                <div className="flex w-full items-center justify-center min-[764px]:hidden">
                  <div className="relative mb-3 h-20 w-20">
                    <Image
                      src="/images/districtlens-logo6.png"
                      alt="Tanza Water District Logo"
                      fill
                      priority
                      sizes="80px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <h2 className="font-serif text-4xl italic text-[#123D73] sm:text-5xl">
                  Create Account
                </h2>

                <p className="mt-3 text-sm font-medium text-slate-600">
                  Register to get started with DISTRICTLENS
                </p>

              </div>


              {/* SIGN UP FORM */}
              <form onSubmit={handleSignup} className="space-y-4">

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    autoComplete="name"
                    className={inputClass}
                    placeholder="Enter your full name"
                  />
                </div>


                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    className={inputClass}
                    placeholder="Enter your email address"
                  />
                </div>


                {/* Password */}
                <div>
                  <label htmlFor="password" className={labelClass}>
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={8}
                      autoComplete="new-password"
                      className={`${inputClass} pr-16`}
                      placeholder="Create a password"
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


                {/* Confirm Password */}
                <div>
                  <label htmlFor="confirmPassword" className={labelClass}>
                    Confirm Password
                  </label>

                  <div className="relative">
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      autoComplete="new-password"
                      className={`${inputClass} pr-16`}
                      placeholder="Confirm your password"
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


                {/* Error Message */}
                {error && (
                  <p
                    role="alert"
                    className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
                  >
                    {error}
                  </p>
                )}


                {/* Create Account Button */}
                <button
                  type="submit"
                  className={`${btnPrimary} bg-linear-to-br from-[#241C70] via-[#342992] to-[#5366C8] shadow-md transition-all hover:brightness-110`}
                >
                  CREATE ACCOUNT
                </button>

              </form>


              {/* Login Redirect */}
              <p className="mt-5 border-t border-slate-200 p-3 text-center text-sm text-slate-500">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => router.push("/login")}
                  className="font-semibold text-[#123D73] hover:underline"
                >
                  Log In
                </button>
              </p>
                
            </div>
            {/* Bottom Decorative Shape */}
              <div className="absolute bottom-0 left-0 h-28 w-28 bg-[#123D73]/10 [clip-path:polygon(0_0,0_100%,100%_100%)] sm:h-40 sm:w-40" />
          </section>

        </div>
      </main>
    </div>
  );
}