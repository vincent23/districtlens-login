"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignupPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showPrivacyInfo, setShowPrivacyInfo] = useState(false);
  

  const labelClass =
    "mb-2 block text-sm font-semibold text-[#123D73]";

  const inputClass =
    "w-full rounded-lg border border-slate-300 bg-white py-3 pl-4 pr-4 text-sm text-slate-700 outline-none transition focus:border-[#342992] focus:ring-2 focus:ring-[#342992]/20";

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
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

    setLoading(true);

    try {
      // Connect your Supabase registration logic here.

      console.log({
        fullName,
        username,
        email,
        password,
      });

    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  function handleGoogleLogin(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    setError("Google sign-in is not configured yet.");
  } 

  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

return (
  <div className="min-h-dvh w-full bg-white text-slate-800">

    {/* MAIN SIGN UP PAGE */}
    <main className="flex min-h-dvh w-full items-start justify-center bg-white p-0 min-[640px]:items-center min-[640px]:bg-[#F3F6FB] min-[640px]:p-4 lg:p-6">

      {/* MAIN WHITE CONTAINER */}
      <div className="grid min-h-dvh w-full max-w-6xl grid-cols-1 overflow-visible bg-white min-[640px]:min-h-0 min-[640px]:border min-[640px]:border-slate-200 min-[640px]:shadow-md min-[768px]:h-[min(760px,calc(100dvh-48px))] min-[768px]:min-h-[650px] min-[768px]:grid-cols-[1.2fr_0.8fr] min-[768px]:overflow-hidden">

        {/* ===================================================== */}
        {/* LEFT SIDE - SIGN UP SECTION */}
        {/* ===================================================== */}

        <div className="flex min-h-dvh flex-col min-[640px]:min-h-0 min-[768px]:h-full">

          {/* SIGN UP FORM SECTION */}
          <section className="relative flex w-full flex-1 flex-col items-center overflow-visible px-5 pb-8 pt-20 sm:px-8 sm:pt-20 lg:px-10 min-[768px]:min-h-0 min-[768px]:overflow-y-auto min-[768px]:overscroll-contain">

            {/* DECORATIVE CORNER */}
            <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[#00A6D6]/10" />

            {/* BACK BUTTON */}
            <button
              type="button"
              onClick={() => router.push("/")}
              className="absolute left-4 top-4 z-20 flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-[#123D73] transition hover:bg-[#123D73]/10 sm:left-6 sm:top-5 lg:left-8"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back
            </button>

            {/* FORM CONTENT */}
            <div className="relative z-10 my-auto w-full max-w-xl">

              {/* LOGO - MOBILE */}
              <div className="mb-8 mt-2 flex flex-col items-center min-[770px]:hidden">

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
              <div className="mb-5 text-center sm:text-left">
                <h1 className="text-2xl font-bold tracking-tight text-[#123D73] sm:text-3xl">
                  Create an Account
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  Sign up to access the DistrictLens portal.
                </p>
              </div>

              {/* GOOGLE SIGN UP */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                {/* GOOGLE ICON */}
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.76 7.18l7.73 6C44.42 37.97 46.98 31.83 46.98 24.55Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19Z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.14 1.44-4.89 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z"
                  />
                </svg>

                Sign up with Google
              </button>

              {/* DIVIDER */}
              <div className="my-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="text-xs font-medium text-slate-400">
                  OR
                </span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* SIGN UP FORM */}
              <form onSubmit={handleSignup} className="space-y-3">

                {/* FULL NAME */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-1 block text-sm font-semibold text-slate-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#00A6D6] focus:ring-2 focus:ring-[#00A6D6]/20"
                  />
                </div>

                {/* EMAIL ADDRESS */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-semibold text-slate-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    autoComplete="email"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#00A6D6] focus:ring-2 focus:ring-[#00A6D6]/20"
                  />
                </div>

                {/* PASSWORD AND CONFIRM PASSWORD */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                  {/* PASSWORD */}
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-1 block text-sm font-semibold text-slate-700"
                    >
                      Password
                    </label>

                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create a password"
                        autoComplete="new-password"
                        required
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 pr-11 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#00A6D6] focus:ring-2 focus:ring-[#00A6D6]/20"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex cursor-pointer items-center px-3 text-slate-400 transition hover:text-[#123D73]"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? (
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.8"
                              d="M3 3l18 18M10.58 10.59a2 2 0 002.83 2.83M9.88 5.09A10.94 10.94 0 0112 4.87c5 0 9.27 3.11 11 7.13a11.8 11.8 0 01-3.04 4.13M6.61 6.61A11.8 11.8 0 001 12c.74 1.93 2.15 3.55 3.87 4.69"
                            />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.8"
                              d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"
                            />
                            <circle cx="12" cy="12" r="3" strokeWidth="1.8" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* CONFIRM PASSWORD */}
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="mb-1 block text-sm font-semibold text-slate-700"
                    >
                      Confirm Password
                    </label>

                    <div className="relative">
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        autoComplete="new-password"
                        required
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 pr-11 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#00A6D6] focus:ring-2 focus:ring-[#00A6D6]/20"
                      />

                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 flex cursor-pointer items-center px-3 text-slate-400 transition hover:text-[#123D73]"
                        aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                      >
                        {showConfirmPassword ? (
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.8"
                              d="M3 3l18 18M10.58 10.59a2 2 0 002.83 2.83M9.88 5.09A10.94 10.94 0 0112 4.87c5 0 9.27 3.11 11 7.13a11.8 11.8 0 01-3.04 4.13M6.61 6.61A11.8 11.8 0 001 12c.74 1.93 2.15 3.55 3.87 4.69"
                            />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.8"
                              d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"
                            />
                            <circle cx="12" cy="12" r="3" strokeWidth="1.8" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                </div>

                {/* AGREE TO TERMS */}
                <div className="flex items-start gap-2 pt-1">
                  <input
                    id="agreeTerms"
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    required
                    className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-slate-300 accent-[#123D73] focus:ring-[#00A6D6]"
                  />

                  <label
                    htmlFor="agreeTerms"
                    className="text-xs leading-relaxed text-slate-600 sm:text-sm"
                  >
                    I have read and agree to the{" "}
                    <button
                      type="button"
                      onClick={() => setShowTerms(true)}
                      className="cursor-pointer font-semibold text-[#123D73] underline underline-offset-2 hover:text-[#00A6D6]"
                    >
                      Terms and Conditions
                    </button>{" "}
                    and{" "}
                    <button
                      type="button"
                      onClick={() => setShowPrivacyInfo(true)}
                      className="cursor-pointer font-semibold text-[#123D73] underline underline-offset-2 hover:text-[#00A6D6]"
                    >
                      Privacy Policy
                    </button>.
                  </label>
                </div>

                {/* ERROR MESSAGE */}
                {error && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
                    {error}
                  </div>
                )}

                {/* SIGN UP BUTTON */}
                <button
                  type="submit"
                  disabled={loading || !agreeTerms}
                  className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-[#123D73] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0d2f5a] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Creating Account..." : "Sign Up"}
                </button>

              </form>

              {/* LOGIN REDIRECT */}
              <div className="mt-4 text-center text-sm text-slate-500">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => router.push("/")}
                  className="cursor-pointer font-semibold text-[#123D73] transition hover:text-[#00A6D6]"
                >
                  Log In
                </button>
              </div>

            </div>
          </section>

          {/* FOOTER */}
          <footer className="flex min-h-[70px] shrink-0 items-center justify-center">
            <p className="text-center text-xs text-slate-500">
              © {year} SerbisyON. All rights reserved.
            </p>
          </footer>

        </div>

        {/* ===================================================== */}
        {/* RIGHT SIDE - BRANDING SECTION */}
        {/* ===================================================== */}

        <section className="relative hidden h-full min-h-0 flex-col items-center justify-center overflow-hidden border-l border-[#123D73]/20 bg-white px-8 py-10 text-center min-[768px]:flex">

          {/* TOP DECORATIVE CORNER */}
          <div className="absolute right-0 top-0 h-40 w-40 bg-[#123D73]/10 [clip-path:polygon(0_0,100%_0,100%_100%)]" />

          {/* LOGO */}
          <div className="relative mx-auto mb-5 h-36 w-36 sm:h-40 sm:w-40 lg:h-48 lg:w-48">
            <Image
              src="/images/districtlens-logo7.png"
              alt="DistrictLens Logo"
              fill
              priority
              sizes="(max-width: 1024px) 160px, 192px"
              className="object-contain"
            />
          </div>

          {/* BRAND NAME */}
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            <span className="text-[#123D73]">District</span>
            <span className="text-[#00A6D6]">Lens</span>
          </h1>

          {/* BRAND TAGLINE */}
          <p className="mt-6 text-base font-semibold tracking-wide text-[#123D73] lg:text-lg">
            Monitor
            <span className="mx-3 text-[#00A6D6]">╼</span>
            Report
            <span className="mx-3 text-[#00A6D6]">╼</span>
            Locate
          </p>

          {/* DESCRIPTION */}
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500 lg:text-base">
            Operations Dashboard and Incident Monitoring System
          </p>

          {/* BOTTOM DECORATIVE CORNER */}
          <div className="absolute bottom-0 right-0 h-40 w-40 bg-[#123D73]/10 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />

        </section>

      </div>
    </main>

      {/*TERMS AND CONDITIONS MODAL */}
      {showTerms && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-sm sm:p-5"
          onClick={() => setShowTerms(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="terms-modal-title"
            className="flex max-h-[90dvh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* HEADER */}
            <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-7">

              <div>
                <h2
                  id="terms-modal-title"
                  className="text-lg font-bold text-[#123D73] sm:text-xl"
                >
                  Terms and Conditions
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  DistrictLens – Operations Dashboard and Incident Monitoring System
                </p>
              </div>

              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={() => setShowTerms(false)}
                aria-label="Close terms and conditions"
                className="ml-3 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

            </div>

            {/* SCROLLABLE CONTENT */}
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-7">

              {/* INTRODUCTION */}
              <div className="mb-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#00A6D6]">
                  Effective Date: {new Date().getFullYear()}
                </p>

                <h3 className="mb-2 text-base font-bold text-[#123D73]">
                  Welcome to DistrictLens
                </h3>

                <p className="text-sm leading-7 text-slate-600">
                  DistrictLens is an Operations Dashboard and Incident Monitoring
                  System developed for Tanza Water District. It provides information
                  regarding water service conditions, reported incidents, affected
                  areas, incident statuses, estimated restoration times, and other
                  relevant service updates.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  By accessing or using DistrictLens, you acknowledge that you have
                  read, understood, and agreed to comply with these Terms and
                  Conditions.
                </p>
              </div>

              {/* SECTION 1 */}
              <section className="mb-5">
                <h3 className="mb-2 text-base font-bold text-[#123D73]">
                  1. Purpose of the Platform
                </h3>

                <p className="text-sm leading-7 text-slate-600">
                  DistrictLens is designed to support incident monitoring,
                  operational coordination, and public information dissemination.
                  Its purpose is to help users stay informed about water service
                  conditions and reported incidents within the service area.
                </p>
              </section>

              {/* SECTION 2 */}
              <section className="mb-5">
                <h3 className="mb-2 text-base font-bold text-[#123D73]">
                  2. User Responsibilities
                </h3>

                <p className="mb-2 text-sm leading-7 text-slate-600">
                  All users are expected to:
                </p>

                <ul className="ml-5 list-disc space-y-2 text-sm leading-6 text-slate-600">
                  <li>Provide truthful and accurate information.</li>
                  <li>Use the platform responsibly and for its intended purposes.</li>
                  <li>Avoid submitting false, misleading, or malicious information.</li>
                  <li>Respect the privacy and rights of other individuals.</li>
                  <li>Avoid activities that may compromise system security or functionality.</li>
                </ul>
              </section>

              {/* SECTION 3 */}
              <section className="mb-5">
                <h3 className="mb-2 text-base font-bold text-[#123D73]">
                  3. Account Registration and Authorization
                </h3>

                <p className="text-sm leading-7 text-slate-600">
                  Certain features of DistrictLens require an authorized account.
                  Creating an account does not automatically grant access to
                  restricted system functions. Account access is subject to
                  verification and approval by designated Tanza Water District
                  personnel.
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Users are responsible for maintaining the confidentiality of
                  their login credentials. Sharing account credentials or allowing
                  unauthorized individuals to use an account is prohibited.
                </p>
              </section>

              {/* SECTION 4 */}
              <section className="mb-5">
                <h3 className="mb-2 text-base font-bold text-[#123D73]">
                  4. Unauthorized Access and Misuse
                </h3>

                <p className="mb-2 text-sm leading-7 text-slate-600">
                  Users must not:
                </p>

                <ul className="ml-5 list-disc space-y-2 text-sm leading-6 text-slate-600">
                  <li>Attempt to access restricted system functions without authorization.</li>
                  <li>Access another individual's account without permission.</li>
                  <li>Modify or manipulate system information without proper authorization.</li>
                  <li>Attempt to bypass security measures or access controls.</li>
                  <li>Disrupt, damage, or interfere with DistrictLens operations.</li>
                  <li>Introduce malicious software or harmful content into the platform.</li>
                </ul>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Violations may result in restricted access, account suspension,
                  or other appropriate action in accordance with applicable
                  organizational policies and laws.
                </p>
              </section>

              {/* SECTION 5 */}
              <section className="mb-5">
                <h3 className="mb-2 text-base font-bold text-[#123D73]">
                  5. Accuracy of Information
                </h3>

                <p className="text-sm leading-7 text-slate-600">
                  Information displayed through DistrictLens is based on available
                  reports and information provided by authorized personnel.
                  Incident details, affected areas, and estimated restoration
                  times may change as situations develop.
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Users are encouraged to refer to official Tanza Water District
                  announcements for important service advisories and confirmation
                  of updates.
                </p>
              </section>

              {/* SECTION 6 */}
              <section className="mb-5">
                <h3 className="mb-2 text-base font-bold text-[#123D73]">
                  6. Public Information and Reports
                </h3>

                <p className="text-sm leading-7 text-slate-600">
                  Publicly available information is intended to help the community
                  stay informed about water service conditions and reported
                  incidents. Users must not misuse, misrepresent, or distribute
                  information in a manner intended to mislead or harm others.
                </p>
              </section>

              {/* SECTION 7 */}
              <section className="mb-5">
                <h3 className="mb-2 text-base font-bold text-[#123D73]">
                  7. System Availability and Maintenance
                </h3>

                <p className="text-sm leading-7 text-slate-600">
                  Reasonable efforts will be made to maintain the availability
                  and functionality of DistrictLens. However, temporary
                  interruptions may occur due to system maintenance, technical
                  issues, internet connectivity problems, security updates,
                  or circumstances beyond the organization's reasonable control.
                </p>
              </section>

              {/* SECTION 8 */}
              <section className="mb-5">
                <h3 className="mb-2 text-base font-bold text-[#123D73]">
                  8. Intellectual Property
                </h3>

                <p className="text-sm leading-7 text-slate-600">
                  The DistrictLens name, branding, interface, and original
                  platform materials are intended for authorized organizational
                  and public information purposes. Users must not reproduce,
                  modify, distribute, or commercially exploit protected materials
                  without proper authorization.
                </p>
              </section>

              {/* SECTION 9 */}
              <section className="mb-5">
                <h3 className="mb-2 text-base font-bold text-[#123D73]">
                  9. Changes to These Terms
                </h3>

                <p className="text-sm leading-7 text-slate-600">
                  Tanza Water District may revise or update these Terms and
                  Conditions when necessary. Updated terms will be made available
                  through DistrictLens.
                </p>
              </section>

              {/* SECTION 10 */}
              <section className="mb-5">
                <h3 className="mb-2 text-base font-bold text-[#123D73]">
                  10. Limitation of Responsibility
                </h3>

                <p className="text-sm leading-7 text-slate-600">
                  DistrictLens is provided as an information and incident
                  monitoring platform. Although reasonable efforts are made to
                  maintain reliable information and system functionality,
                  uninterrupted service and completely error-free information
                  cannot be guaranteed.
                </p>
              </section>

              {/* SECTION 11 */}
              <section className="mb-5">
                <h3 className="mb-2 text-base font-bold text-[#123D73]">
                  11. Contact Information
                </h3>

                <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                  <p className="text-sm font-bold text-[#123D73]">
                    Tanza Water District
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Tanza, Cavite, Philippines
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Official Facebook Page: https://www.facebook.com/tanzawaterdistrict
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Contact Number: (046) 484 1813
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Email: tanza_wd@yahoo.com
                  </p>

                </div>
              </section>

              {/* FINAL ACKNOWLEDGMENT */}
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-center text-xs leading-6 text-slate-600">
                  By using DistrictLens, you acknowledge that you have read
                  and understood these Terms and Conditions.
                </p>
              </div>

              <p className="mt-5 text-center text-xs text-slate-400">
                DistrictLens – Operations Dashboard and Incident Monitoring System
              </p>

            </div>

            {/* FOOTER */}
            <div className="flex shrink-0 justify-end border-t border-slate-200 bg-white px-5 py-4 sm:px-7">
              <button
                type="button"
                onClick={() => setShowTerms(false)}
                className="cursor-pointer rounded-lg bg-[#123D73] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0d2f5a]"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

{/* PRIVACY POLICY MODAL */}
          {showPrivacyInfo && (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-sm sm:p-5"
              onClick={() => setShowPrivacyInfo(false)}
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="privacy-modal-title"
                className="flex max-h-[90dvh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >

                {/* MODAL HEADER */}
                <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-7">
                  <div>
                    <h2
                      id="privacy-modal-title"
                      className="text-lg font-bold text-[#123D73] sm:text-xl"
                    >
                      Privacy & Account Information
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">
                      DistrictLens – Operations Dashboard and Incident Monitoring System
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowPrivacyInfo(false)}
                    aria-label="Close privacy information"
                    className="ml-3 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* SCROLLABLE CONTENT */}
                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-7">

                  {/* INTRODUCTION */}
                  <div className="mb-6">
                    <h3 className="mb-2 text-base font-bold text-[#123D73]">
                      About DistrictLens
                    </h3>

                    <p className="text-sm leading-7 text-slate-600">
                      DistrictLens is an Operations Dashboard and Incident Monitoring
                      System developed for Tanza Water District. It is designed to
                      support the monitoring, management, and dissemination of
                      information regarding water service conditions and reported
                      incidents.
                    </p>
                  </div>

                  {/* PRIVACY POLICY */}
                  <section className="mb-6">
                    <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-[#123D73]">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-[#123D73]">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="M9 12l2 2 4-4"
                          />
                        </svg>
                      </span>
                      Privacy Policy
                    </h3>

                    <div className="space-y-3 text-sm leading-7 text-slate-600">

                      <div>
                        <h4 className="font-semibold text-slate-800">
                          1. Information We Collect
                        </h4>
                        <p>
                          DistrictLens may collect personal information necessary for
                          account registration and system operation, including:
                        </p>

                        <ul className="ml-5 mt-2 list-disc space-y-1">
                          <li>Full Name</li>
                          <li>Username</li>
                          <li>Email Address</li>
                          <li>Authentication and account activity records</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-800">
                          2. Purpose of Data Collection
                        </h4>
                        <p>
                          Collected information is used to create and manage accounts,
                          verify user access, maintain system security, and support
                          authorized system operations.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-800">
                          3. Data Protection
                        </h4>
                        <p>
                          Reasonable organizational, physical, and technical safeguards
                          should be implemented to protect personal information against
                          unauthorized access, disclosure, alteration, or loss.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-800">
                          4. Data Retention
                        </h4>
                        <p>
                          Personal information will be retained only for as long as
                          necessary to fulfill its intended purposes and applicable
                          legal or organizational retention requirements.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-800">
                          5. Your Privacy Rights
                        </h4>
                        <p>
                          Under the Data Privacy Act of 2012 (Republic Act No. 10173),
                          individuals may exercise applicable rights concerning their
                          personal information, including the right to be informed,
                          access, correction, and objection, subject to applicable
                          legal conditions.
                        </p>
                      </div>

                    </div>
                  </section>

                  {/* PRIVACY NOTICE */}
                  <section className="mb-6 border-t border-slate-200 pt-5">
                    <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-[#123D73]">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-50 text-[#00A6D6]">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="M12 8v4m0 4h.01M4.93 19h14.14c1.2 0 1.95-1.3 1.35-2.34L13.35 4.34c-.6-1.04-2.1-1.04-2.7 0L3.58 16.66C2.98 17.7 3.73 19 4.93 19z"
                          />
                        </svg>
                      </span>
                      Privacy Notice
                    </h3>

                    <div className="space-y-3 text-sm leading-7 text-slate-600">

                      <p>
                        By registering for DistrictLens, you are informed that the
                        personal information you provide may be processed for account
                        management, identity verification, access control, and system
                        administration.
                      </p>

                      <div>
                        <h4 className="font-semibold text-slate-800">
                          How Your Information Is Used
                        </h4>
                        <ul className="ml-5 list-disc space-y-1">
                          <li>To establish and maintain your user account.</li>
                          <li>To verify your identity and authorization.</li>
                          <li>To manage access to system features.</li>
                          <li>To maintain account security and system integrity.</li>
                          <li>To comply with applicable legal obligations.</li>
                        </ul>
                      </div>

                      <p>
                        Your personal information should only be accessed by authorized
                        individuals who require it for legitimate system-related
                        responsibilities. It must not be publicly disclosed or used for
                        unrelated purposes without an appropriate legal basis.
                      </p>

                    </div>
                  </section>

                  {/* ACCOUNT AUTHORIZATION */}
                  <section className="mb-4 border-t border-slate-200 pt-5">
                    <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-[#123D73]">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="M9 12l2 2 4-4"
                          />
                        </svg>
                      </span>
                      Account Authorization
                    </h3>

                    <div className="space-y-3 text-sm leading-7 text-slate-600">

                      <p>
                        DistrictLens registration is intended for individuals who are
                        authorized to access the system for official or operational
                        purposes.
                      </p>

                      <div>
                        <h4 className="font-semibold text-slate-800">
                          Account Approval
                        </h4>
                        <p>
                          Creating an account does not automatically grant access to
                          restricted system functions. Account access is subject to
                          identity verification and authorization by the designated
                          system administrator or responsible personnel.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-800">
                          User Responsibilities
                        </h4>

                        <ul className="ml-5 list-disc space-y-1">
                          <li>Provide accurate registration information.</li>
                          <li>Keep login credentials confidential.</li>
                          <li>Do not share accounts with unauthorized individuals.</li>
                          <li>Use the system only for authorized purposes.</li>
                          <li>Report suspected unauthorized account access.</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-800">
                          Unauthorized Access
                        </h4>
                        <p>
                          Unauthorized access, misuse of accounts, or attempts to
                          interfere with system operations may result in account
                          suspension or other appropriate action in accordance with
                          applicable organizational policies.
                        </p>
                      </div>

                    </div>
                  </section>

                  {/* CONTACT INFORMATION */}
                  <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                    <h4 className="mb-1 text-sm font-bold text-[#123D73]">
                      Questions or Privacy Concerns?
                    </h4>

                    <p className="text-sm font-bold text-[#123D73]">
                      Tanza Water District
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Tanza, Cavite, Philippines
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Official Facebook Page: https://www.facebook.com/tanzawaterdistrict
                    </p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Contact Number: (046) 484 1813
                    </p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      Email: tanza_wd@yahoo.com
                    </p>
                  </div>

                  <p className="mt-5 text-center text-xs text-slate-400">
                    DistrictLens – Operations Dashboard and Incident Monitoring System
                  </p>

                </div>

                {/* MODAL FOOTER */}
                <div className="flex shrink-0 justify-end border-t border-slate-200 bg-white px-5 py-4 sm:px-7">
                  <button
                    type="button"
                    onClick={() => setShowPrivacyInfo(false)}
                    className="cursor-pointer rounded-lg bg-[#123D73] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0d2f5a]"
                  >
                    Close
                  </button>
                </div>

              </div>
            </div>
          )}

    </div>
  );
}