"use client";


import { useEffect, useState } from "react";
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  // "Forgot password" request (notifies the administrator)
  const [forgotOpen, setForgotOpen] = useState(false);
  const [forgotName, setForgotName] = useState("");
  const [forgotBusy, setForgotBusy] = useState(false);
  const [forgotMessage, setForgotMessage] = useState("");
  const [forgotError, setForgotError] = useState("");


  async function handleForgot(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();


    setForgotError("");
    setForgotMessage("");
    setForgotBusy(true);


    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: forgotName }),
      });


      const result = await response.json();


      if (!response.ok) {
        setForgotError(result.error ?? "Unable to send your request.");
        return;
      }


      setForgotMessage(result.message);
    } catch {
      setForgotError("Something went wrong. Please try again.");
    } finally {
      setForgotBusy(false);
    }
  }

    function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    alert("This is a UI preview. Login functionality is disabled.");
  }

  const [year, setYear] = useState<number | null>(null);
  
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-800">
      {/* HEADER */}
      {/* <header className="border-b border-t-4 border-slate-200 border-t-[#123D73] bg-white">
        <div className="mx-auto flex min-h-22 max-w-[1600px] items-center px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
              <Image
                src="/images/twd-logo.png"
                alt="Tanza Water District official logo"
                fill
                sizes="64px"
                className="object-contain"
                priority
              />
            </div>


            <p className="truncate text-base font-bold tracking-tight text-[#123D73] sm:text-xl">
              Tanza Water District
            </p>
          </div>
        </div>
      </header> */}


      {/* SPLIT LAYOUT */}
      <main className="grid flex-1 md:grid-cols-2">
        {/* Brand side */}
        <section className="flex flex-col items-center justify-center bg-linear-to-br from-[#241C70] via-[#342992] to-[#5366C8] px-6 py-12 text-center max-[764px]:hidden">
          <div className="relative h-44 w-44 shrink-0 sm:h-56 sm:w-56 lg:h-72 lg:w-72">
            <Image
              src="/images/districtlens-logo6.png"
              alt="Tanza Water District official logo"
              fill
              sizes="288px"
              className="object-contain"
            />
          </div>


          <h2 className="mt-8 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
            DistrictLens
          </h2>


          <p className="mt-2 text-sm font-medium text-indigo-100 sm:text-base">
            Tanza Water District Portal
          </p>


          <p className="mt-3 flex items-center gap-4 text-sm text-indigo-200">
            <span>Monitor</span>
            <span>Report</span>
            <span>Locate</span>
          </p>
        </section>


        {/* Login side */}
        <section className="flex items-center justify-center max-[764px]:bg-linear-to-br from-[#241C70] via-[#342992] to-[#5366C8] px-6 py-12 sm:px-10">
          
          <div className="w-full max-w-md border border-slate-200 bg-white px-6 py-8 shadow-lg sm:px-10 sm:py-10 min-[765px]:border-none min-[765px]:shadow-none">

            {/* Logo and Text - Small Screen */}
            <div className="flex flex-col w-full items-center justify-center gap-3 min-[764px]:hidden">

                <h2 className="text-xl text-[#123D73] font-extrabold uppercase tracking-tight sm:text-3xl">
                    DistrictLens
                </h2>

                {/* Logo */}
                <div className="relative h-34 w-34 shrink-0 sm:h-42 sm:w-42">
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

            <h2 className="text-2xl font-bold text-[#123D73] sm:text-3xl">
             Login
            </h2>


            <p className="mt-1 text-sm text-slate-600">
              Enter your credentials to access the portal
            </p>


            <form onSubmit={handleLogin} className="mt-8 space-y-6">
              <div>
                <label htmlFor="username" className={labelClass}>
                  Username
                </label>


                <div className="relative">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400"
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
                    placeholder="Enter your full name"
                  />
                </div>
              </div>


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
                    className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400"
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
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute inset-y-0 right-0 px-4 text-xs font-semibold text-slate-500 hover:text-[#123D73]"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>


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
                      className="text-sm font-medium text-[#123D73] transition-colors hover:text-[#087E87] hover:underline"
                  >
                      Forgot password?
                    </button>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`${btnPrimary} bg-linear-to-br from-[#241C70] via-[#342992] to-[#5366C8] shadow-md transition-all hover:brightness-110`}
                  >
                    {loading ? "Logging in..." : "LOGIN"}
                  </button>

                </form>

                <p className="mt-5 border-t border-slate-200 p-3 text-center text-sm text-slate-500">
                  Don't have an account yet?{" "}
                  <button
                    type="button"
                    onClick={() => router.push("/signup")}
                    className="font-semibold text-[#123D73] hover:underline"
                  >
                    Sign Up
                  </button>
                </p>
                
          </div>
        </section>
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

