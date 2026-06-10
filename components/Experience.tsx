const jobs = [
  {
    company: "ALLY WIRED SOFT SOLUTIONS",
    role: "DevSecOps Engineer",
    period: "Dec 2025 – Present",
    highlights: [
      "Built a distributed automation platform for scalable workload execution.",
      "Implemented RabbitMQ-based asynchronous task processing architecture.",
      "Automated infrastructure provisioning and configuration using Ansible.",
      "Migrated containerized workloads to Kubernetes environments.",
    ],
  },

  {
    company: "HCLTech",
    role: "DevOps Engineer",
    period: "Sep 2022 – Nov 2025",
    highlights: [
      "Designed and maintained CI/CD pipelines using Jenkins.",
      "Managed AWS cloud infrastructure and deployment workflows.",
      "Provisioned infrastructure using Terraform and Infrastructure as Code practices.",
      "Implemented monitoring and observability using Prometheus and Grafana.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 py-12"
    >
      <div className="mb-8">
        <p className="text-blue-400 font-medium">
          EXPERIENCE
        </p>

        <h2 className="text-3xl font-bold mt-2">
          Professional Journey
        </h2>
      </div>

      <div className="space-y-8">
        {jobs.map((job) => (
          <div
            key={job.company}
            className="border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition bg-slate-900/20"
          >
            <div className="border-l-4 border-blue-500 pl-5">

              <h3 className="text-2xl font-semibold">
                {job.role}
              </h3>

              <p className="text-blue-400 mt-2 font-medium">
                {job.company}
              </p>

              <p className="text-slate-500 mt-1">
                {job.period}
              </p>

            </div>

            <ul className="mt-6 space-y-3 text-slate-300">
              {job.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="text-blue-400 mt-1">
                    ✓
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}