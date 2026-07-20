export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/40 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Dashboard
            </h1>

            <p className="mt-1 text-slate-400">
              Track your applications and interviews
            </p>
          </div>

          <button className="rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-200">
            + New Application
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-8 px-8 py-8">
        {/* Stats */}
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {["Applications", "Interviews", "Offers", "Rejected"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6 shadow-lg"
            >
              <p className="text-sm text-slate-400">{item}</p>

              <h2 className="mt-3 text-4xl font-bold text-white">0</h2>

              <p className="mt-2 text-sm text-slate-500">
                Additional info
              </p>
            </div>
          ))}
        </section>

        {/* Middle Grid */}
        <section className="grid gap-6 xl:grid-cols-3">
          {/* Pipeline */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6 xl:col-span-2">
            <h2 className="mb-6 text-xl font-semibold text-white">
              Application Pipeline
            </h2>

            <div className="space-y-5">
              {[
                "Applied",
                "Interview",
                "Technical",
                "Final",
                "Offer",
              ].map((status) => (
                <div key={status}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-slate-300">{status}</span>
                    <span className="text-slate-500">0</span>
                  </div>

                  <div className="h-3 rounded-full bg-slate-700">
                    <div className="h-3 w-1/3 rounded-full bg-white"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Tasks */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6">
            <h2 className="mb-5 text-xl font-semibold text-white">
              Today's Tasks
            </h2>

            <div className="space-y-4">
              {[1, 2, 3, 4].map((task) => (
                <div
                  key={task}
                  className="rounded-xl border border-slate-700 bg-slate-900/60 p-4"
                >
                  <p className="font-medium text-white">
                    Task {task}
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Description...
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Grid */}
        <section className="grid gap-6 xl:grid-cols-2">
          {/* Recent Applications */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">
                Recent Applications
              </h2>

              <button className="text-sm text-slate-400 hover:text-white">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {[1, 2, 3, 4].map((application) => (
                <div
                  key={application}
                  className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-900/60 p-4"
                >
                  <div>
                    <p className="font-medium text-white">
                      Company Name
                    </p>

                    <p className="text-sm text-slate-400">
                      Software Engineer
                    </p>
                  </div>

                  <span className="rounded-full bg-slate-700 px-3 py-1 text-xs text-white">
                    Applied
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Interviews */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">
                Upcoming Interviews
              </h2>

              <button className="text-sm text-slate-400 hover:text-white">
                View Calendar
              </button>
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map((interview) => (
                <div
                  key={interview}
                  className="rounded-xl border border-slate-700 bg-slate-900/60 p-4"
                >
                  <p className="font-medium text-white">
                    Company
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Date & Time
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    Interview Type
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}