import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-blue-600"
        >
          JobTracker
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-gray-600 transition hover:text-blue-600"
          >
            Home
          </Link>

          <a
            href="#features"
            className="text-gray-600 transition hover:text-blue-600"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-gray-600 transition hover:text-blue-600"
          >
            How It Works
          </a>

          <a
            href="#contact"
            className="text-gray-600 transition hover:text-blue-600"
          >
            Contact
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-lg px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}