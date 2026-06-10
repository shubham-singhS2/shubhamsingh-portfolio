export default function Achievements() {
  const stats = [
    {
      value: "70%",
      title: "Deployment Time Reduction",
      description:
        "Reduced deployment time through CI/CD automation and process optimization.",
    },
    {
      value: "99.9%",
      title: "Platform Uptime",
      description:
        "Maintained highly available Kubernetes workloads with monitoring and alerting.",
    },
    {
      value: "50%",
      title: "Faster Incident Resolution",
      description:
        "Resolved critical P1/P2 incidents significantly faster than SLA targets.",
    },
    {
      value: "2x",
      title: "Xtramiles Award",
      description:
        "Recognized at HCLTech for delivery excellence and technical contributions.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pt-0 pb-12">
      <div className="mb-12">
        <p className="text-blue-400 font-medium">
          ACHIEVEMENTS
        </p>

        <h2 className="text-4xl font-bold mt-3">
          Impact Delivered
        </h2>

        <p className="text-slate-400 mt-4 max-w-2xl">
          Quantifiable outcomes from cloud, automation,
          DevOps and platform engineering initiatives.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="border border-slate-800 rounded-xl p-6 bg-slate-900/50"
          >
            <h3 className="text-5xl font-bold text-blue-400">
              {stat.value}
            </h3>

            <h4 className="mt-4 font-semibold text-lg">
              {stat.title}
            </h4>

            <p className="mt-3 text-slate-400 text-sm">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}