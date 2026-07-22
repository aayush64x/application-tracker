import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import AuthenticatedNavbar from "./AuthenticatedNavbar";
export default function LandingPage() {
  const { token } = useAuth()
  return (
    <>
      {!token ? <Navbar /> : <AuthenticatedNavbar />} 
      <main className="bg-white text-gray-900">
        {/* Hero */}
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-slate-100" />

          <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col items-center justify-center gap-12 px-6 py-8 lg:flex-row lg:gap-20">
            {/* Left */}
            <div className="max-w-xl">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
                Organize Your Job Search
              </span>

              <h1 className="mt-5 text-5xl font-extrabold leading-tight tracking-tight lg:text-6xl">
                Track Every
                <span className="block text-blue-600">Job Application</span>
                In One Place.
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Keep track of applications, interviews, offers, resumes, and
                deadlines with a clean and intuitive dashboard. Never lose track
                of another opportunity again.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/register"
                  className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  className="rounded-xl border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100"
                >
                  Login
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-gray-900">100+</p>
                  <p className="text-sm text-gray-500">Applications</p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-gray-900">24/7</p>
                  <p className="text-sm text-gray-500">Accessible</p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-gray-900">AI</p>
                  <p className="text-sm text-gray-500">Job Parsing</p>
                </div>
              </div>
            </div>

            {/* Right Dashboard Preview */}
            <div className="w-full max-w-xl lg:flex-1">
              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Dashboard Preview</h2>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    Active
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-sm text-gray-500">Applications</p>
                    <h3 className="mt-2 text-3xl font-bold">84</h3>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-sm text-gray-500">Interviews</p>
                    <h3 className="mt-2 text-3xl font-bold">12</h3>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-sm text-gray-500">Offers</p>
                    <h3 className="mt-2 text-3xl font-bold">2</h3>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-sm text-gray-500">Response Rate</p>
                    <h3 className="mt-2 text-3xl font-bold text-green-600">
                      18%
                    </h3>
                  </div>
                </div>

                {/* Applications */}
                <div className="mt-8">
                  <h3 className="mb-4 font-semibold">Recent Applications</h3>

                  <div className="space-y-3">
                    {[
                      ["Google", "Interview"],
                      ["Stripe", "Applied"],
                      ["Visa", "Assessment"],
                      ["Amazon", "Rejected"],
                    ].map(([company, status]) => (
                      <div
                        key={company}
                        className="flex items-center justify-between rounded-xl border border-gray-100 p-3"
                      >
                        <div>
                          <p className="font-medium">{company}</p>
                          <p className="text-sm text-gray-500">
                            Software Engineer
                          </p>
                        </div>

                        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                          {status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming */}
                <div className="mt-8 rounded-2xl bg-blue-600 p-5 text-white">
                  <p className="text-sm opacity-80">Upcoming Interview</p>

                  <h3 className="mt-2 text-xl font-semibold">Stripe</h3>

                  <p className="mt-1 opacity-90">Tomorrow • 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
