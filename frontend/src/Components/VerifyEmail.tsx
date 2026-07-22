import { Link } from "react-router-dom";

export default function VerifyEmail() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-100 px-6 py-12">
      <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
        {/* Logo */}
        <div className="text-center">
          <Link to="/" className="text-3xl font-bold text-blue-600">
            JobTracker
          </Link>

          <div className="mx-auto mt-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
            <svg
              className="h-10 w-10 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            Verify Your Email
          </h1>

          <p className="mt-3 text-gray-600">
            We've sent a verification code to
          </p>

          <p className="mt-1 font-semibold text-gray-900">
            john@example.com
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Enter the 6-digit code below to activate your account.
          </p>
        </div>

        {/* Error Banner */}
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          Invalid verification code.
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="code"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Verification Code
            </label>

            <input
              id="code"
              type="text"
              placeholder="123456"
              maxLength={6}
              className="w-full rounded-xl border border-gray-300 px-4 py-4 text-center text-2xl font-semibold tracking-[0.6em] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Verify Email
          </button>
        </form>

        {/* Divider */}
        <div className="my-8 flex items-center">
          <div className="h-px flex-1 bg-gray-200"></div>
          <span className="mx-4 text-sm text-gray-400">OR</span>
          <div className="h-px flex-1 bg-gray-200"></div>
        </div>

        {/* Resend */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Didn't receive the email?
          </p>

          <button
            className="mt-2 font-semibold text-blue-600 transition hover:text-blue-700 hover:underline"
          >
            Resend Verification Code
          </button>

          <p className="mt-3 text-xs text-gray-400">
            You can request a new code every 60 seconds.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-600">
            Wrong email address?{" "}
            <Link
              to="/register"
              className="font-semibold text-blue-600 hover:underline"
            >
              Go back to registration
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}