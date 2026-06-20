const projects = [
  {
    title: "Distributed Automation Platform",
    stack: ["Python", "Docker", "RabbitMQ", "Ansible", "Linux"],
    challenge:
      "Manual execution and orchestration of workloads across environments was slow, repetitive and difficult to scale.",
    solution:
      "Designed and built a distributed execution platform capable of running isolated workloads with automated orchestration, reporting and queue-based task distribution.",
    impact:
      "Enabled scalable workload execution, improved automation reusability and increased operational efficiency.",
  },

  {
    title: "Kubernetes Migration Initiative",
    stack: ["Kubernetes", "Docker", "Prometheus", "Grafana", "Linux"],
    challenge:
      "Existing containerized services relied on Docker Compose and lacked orchestration capabilities required for growth.",
    solution:
      "Migrated applications to Kubernetes and implemented monitoring, health checks and deployment standardization.",
    impact:
      "Improved scalability, deployment consistency and service reliability.",
  },

  {
    title: "RabbitMQ Task Processing System",
    stack: ["RabbitMQ", "Python", "Docker", "Linux"],
    challenge:
      "Synchronous processing created execution bottlenecks and limited workload scaling.",
    solution:
      "Implemented queue-based asynchronous processing with worker orchestration and fault-tolerant message handling.",
    impact:
      "Enabled horizontal scaling and improved processing reliability.",
  },

  {
    title: "AWS Infrastructure Automation",
    stack: ["AWS", "Terraform", "Ansible", "EC2", "IAM", "VPC"],
    challenge:
      "Manual infrastructure provisioning resulted in inconsistent environments and deployment delays.",
    solution:
      "Implemented Infrastructure as Code using Terraform and Ansible to provision and configure AWS resources automatically.",
    impact:
      "Reduced provisioning effort and improved environment consistency across teams.",
  },
];

export default function Projects() {
  return (
    // <div className="w-full bg-[#0b1222]">
      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <div className="mb-12">
          <p className="text-blue-400 font-medium">
            PROJECTS
          </p>

          <h2 className="text-3xl font-bold mt-2">
            Featured Work
          </h2>

          <p className="text-slate-400 mt-4 max-w-3xl">
            Cloud, automation and platform engineering projects
            focused on scalability, reliability and operational
            excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition bg-slate-900/20"
            >
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-800 px-3 py-1 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-5">

                <div>
                  <p className="text-xs uppercase tracking-wider text-blue-400">
                    Challenge
                  </p>

                  <p className="mt-2 text-slate-300">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-blue-400">
                    Solution
                  </p>

                  <p className="mt-2 text-slate-300">
                    {project.solution}
                  </p>
                </div>

                <div className="border-t border-slate-800 pt-5">
                  <p className="text-xs uppercase tracking-wider text-blue-400">
                    Impact
                  </p>

                  <p className="mt-2 font-medium text-white">
                    {project.impact}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
   // </div>
  );
}
