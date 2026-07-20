import { useState } from "react";
import { loginUser } from "../Api/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try{
      const token = await loginUser(email, password);
      login(token, rememberMe);
      navigate("/dashboard");
      console.log(localStorage.getItem("token"));
    }
    catch (err){
      setError("Invalid Email or password");
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Login</h1>

            <p className="text-slate-500 mt-2">Sign in to your account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between mb-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-700"
                >
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm text-slate-500 hover:text-slate-900"
                >
                  Forgot Password?
                </button>
              </div>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />

                <span className="text-sm text-slate-600">Remember me</span>
              </label>
            </div>

            {/* Login Button */}
            <button
              className="w-full rounded-xl bg-slate-900 py-3 font-semibold text-white transition hover:bg-slate-800 active:scale-[0.99]"
              type="submit"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="h-px flex-1 bg-slate-300"></div>

            <span className="mx-4 text-sm text-slate-500">OR</span>

            <div className="h-px flex-1 bg-slate-300"></div>
          </div>

          {/* Create Account */}
          <p className="text-center text-sm text-slate-600">
            Don't have an account?{" "}
            <button
              type="button"
              className="font-semibold text-slate-900 hover:underline"
            >
              Create Account
            </button>
          </p>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-slate-400">
          JobTracker
        </p>
      </div>
    </div>
  );
}
