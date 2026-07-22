import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function AuthenticatedNavbar() {
  const { logOut, user } = useAuth();

  const initials = user
    ? `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`
    : "";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/dashboard"
          className="text-2xl font-bold tracking-tight text-blue-600"
        >
          JobTracker
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/dashboard"
            className="font-medium text-gray-600 transition hover:text-blue-600"
          >
            Dashboard
          </Link>

          <Link
            to="/applications"
            className="font-medium text-gray-600 transition hover:text-blue-600"
          >
            Applications
          </Link>

          <Link
            to="/analytics"
            className="font-medium text-gray-600 transition hover:text-blue-600"
          >
            Analytics
          </Link>

          <Link
            to="/profile"
            className="font-medium text-gray-600 transition hover:text-blue-600"
          >
            Profile
          </Link>
        </nav>

        {/* Right Section */}
        {user && (
          <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-4 py-2 shadow-sm transition-shadow hover:shadow-md">
            {/* Avatar */}
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              {initials}
            </div>

            {/* User Info */}
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-gray-900">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>

            {/* Divider */}
            <div className="hidden h-8 w-px bg-gray-200 sm:block" />

            {/* Logout */}
            <button
              onClick={logOut}
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition hover:bg-red-50 hover:text-red-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}