import { CheckCircle2 } from "lucide-react";

const jobs = [
  {
    company: "ALLY WIRED SOFT SOLUTIONS",
    role: "DevSecOps Engineer",
    period: "Dec 2025 – Present",
    current: true,
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
    current: false,
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

      <div className="relative">

        {/* Vertical timeline line */}
        <div className="absolute left-[11px] top-3 bottom-3 w-px bg-slate-800" />

        <div className="space-y-10">
          {jobs.map((job) => (
            <div
              key={job.company}
              className="relative pl-12"
            >
              {/* Timeline node */}
              <div
                className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  job.current
                    ? "border-blue-400 bg-blue-500/20"
                    : "border-slate-700 bg-slate-900"
                }`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    job.current ? "bg-blue-400" : "bg-slate-600"
                  }`}
                />
              </div>

              <div
                className={`border rounded-2xl p-8 transition bg-slate-900/20 ${
                  job.current
                    ? "border-blue-500/40 hover:border-blue-500/60"
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold">
                    {job.role}
                  </h3>

                  {job.current && (
                    <span className="text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full">
                      Current
                    </span>
                  )}
                </div>

                <p className="text-blue-400 mt-2 font-medium">
                  {job.company}
                </p>

                <p className="text-slate-500 mt-1">
                  {job.period}
                </p>

                <ul className="mt-6 space-y-3 text-slate-300">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        className="text-blue-400 mt-0.5 shrink-0"
                        size={18}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
