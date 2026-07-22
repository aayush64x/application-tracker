import AuthenticatedNavbar from "./AuthenticatedNavbar";

export default function Dashboard() {
  return (
    <>
      <AuthenticatedNavbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-100">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

              <p className="mt-1 text-gray-500">
                Track your applications and stay organized.
              </p>
            </div>

            <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
              + New Application
            </button>
          </div>
        </header>

        <main className="mx-auto max-w-7xl space-y-8 px-6 py-8">
          {/* Stats */}
          <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Applications",
                value: "0",
                description: "Total jobs applied",
              },
              {
                title: "Interviews",
                value: "0",
                description: "Upcoming interviews",
              },
              {
                title: "Offers",
                value: "0",
                description: "Received offers",
              },
              {
                title: "Rejected",
                value: "0",
                description: "Applications closed",
              },
            ].map((stat) => (
              <div
                key={stat.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <p className="text-sm text-gray-500">{stat.title}</p>

                <h2 className="mt-3 text-4xl font-bold text-gray-900">
                  {stat.value}
                </h2>

                <p className="mt-2 text-sm text-gray-500">{stat.description}</p>
              </div>
            ))}
          </section>

          {/* Main Content */}
          <section className="grid gap-8 xl:grid-cols-3">
            {/* Pipeline */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm xl:col-span-2">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Application Pipeline
                </h2>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
                  Overview
                </span>
              </div>

              <div className="space-y-6">
                {[
                  ["Applied", 0],
                  ["Interview", 0],
                  ["Technical", 0],
                  ["Final Round", 0],
                  ["Offer", 0],
                ].map(([status, value]) => (
                  <div key={status}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-medium text-gray-700">
                        {status}
                      </span>

                      <span className="text-gray-500">{value}</span>
                    </div>

                    <div className="h-3 rounded-full bg-gray-100">
                      <div className="h-3 w-1/4 rounded-full bg-blue-600"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tasks */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-semibold text-gray-900">
                Today's Tasks
              </h2>

              <div className="space-y-4">
                {[1, 2, 3].map((task) => (
                  <div
                    key={task}
                    className="rounded-xl border border-gray-100 bg-gray-50 p-4"
                  >
                    <p className="font-medium text-gray-900">
                      Follow up application
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Add notes and update status
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Applications + Interviews */}
          <section className="grid gap-8 xl:grid-cols-2">
            {/* Recent Applications */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Recent Applications
                </h2>

                <button className="text-sm font-medium text-blue-600 hover:underline">
                  View All
                </button>
              </div>

              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-gray-100 p-4"
                  >
                    <div>
                      <p className="font-medium text-gray-900">Company Name</p>

                      <p className="text-sm text-gray-500">Software Engineer</p>
                    </div>

                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                      Applied
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Interviews */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Upcoming Interviews
                </h2>

                <button className="text-sm font-medium text-blue-600 hover:underline">
                  Calendar
                </button>
              </div>

              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-gray-100 bg-gray-50 p-4"
                  >
                    <p className="font-medium text-gray-900">Company Name</p>

                    <p className="mt-1 text-sm text-gray-500">
                      Tomorrow • 2:00 PM
                    </p>

                    <span className="mt-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                      Technical Interview
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
