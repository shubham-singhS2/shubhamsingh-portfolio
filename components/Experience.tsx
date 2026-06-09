const jobs = [
  {
    company: "ALLY WIRED SOFT SOLUTIONS",
    role: "DevSecOps Engineer",
    period: "Dec 2025 - Present",
    highlights: [
      "Built distributed automation platform.",
      "Implemented RabbitMQ task processing.",
      "Automated infrastructure with Ansible.",
      "Migrated workloads to Kubernetes.",
    ],
  },

  {
    company: "HCLTech",
    role: "DevOps Engineer",
    period: "Sep 2022 - Nov 2025",
    highlights: [
      "Built CI/CD pipelines using Jenkins.",
      "Managed AWS infrastructure.",
      "Provisioned cloud resources using Terraform.",
      "Monitored Kubernetes using Prometheus and Grafana.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 py-12"
    >
      <h2 className="text-4xl font-bold mb-12">
        Experience
      </h2>

      <div className="space-y-10">
        {jobs.map((job) => (
          <div
            key={job.company}
            className="border border-slate-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold">
              {job.role}
            </h3>

            <p className="text-blue-400 mt-2">
              {job.company}
            </p>

            <p className="text-slate-500 mt-1">
              {job.period}
            </p>

            <ul className="mt-6 space-y-3 text-slate-300">
              {job.highlights.map((item) => (
                <li key={item}>
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}