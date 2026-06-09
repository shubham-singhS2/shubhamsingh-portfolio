const projects = [
  {
    title: "Distributed Automation Platform",
    stack: [
      "Python",
      "Docker",
      "Ansible",
      "RabbitMQ",
      "Linux",
    ],
    description:
      "Designed and built a distributed execution platform capable of running isolated workloads across multiple environments with automated orchestration and reporting.",
    impact:
      "Enabled scalable workload execution with reusable automation and fault-tolerant task processing.",
  },

  {
    title: "Kubernetes Migration Initiative",
    stack: [
      "Kubernetes",
      "Docker",
      "Linux",
      "Prometheus",
      "Grafana",
    ],
    description:
      "Migrated containerized services from Docker Compose to Kubernetes, improving orchestration, scalability and resilience.",
    impact:
      "Improved deployment consistency, service availability and operational efficiency.",
  },

  {
    title: "RabbitMQ Task Processing System",
    stack: [
      "RabbitMQ",
      "Python",
      "Linux",
      "Docker",
    ],
    description:
      "Built a distributed asynchronous task processing architecture using queue-based workload distribution and worker orchestration.",
    impact:
      "Improved execution reliability and enabled horizontal scaling of workloads.",
  },

  {
    title: "AWS Infrastructure Automation",
    stack: [
      "AWS",
      "Terraform",
      "Ansible",
      "EC2",
      "IAM",
      "VPC",
    ],
    description:
      "Automated provisioning and configuration of cloud infrastructure using Infrastructure as Code principles.",
    impact:
      "Reduced environment setup time and improved deployment consistency across environments.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-12"
    >
      <div className="mb-12">
        <p className="text-blue-400 font-medium">
          PROJECTS
        </p>

        <h2 className="text-4xl font-bold mt-3">
          Featured Work
        </h2>

        <p className="text-slate-400 mt-4 max-w-3xl">
          Production-grade DevOps and platform engineering
          initiatives focused on automation, scalability,
          observability and reliability.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-slate-800 rounded-2xl p-8 bg-slate-900/50 hover:border-blue-500 transition"
          >
            <h3 className="text-2xl font-semibold">
              {project.title}
            </h3>

            <p className="mt-4 text-slate-400">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-800 px-3 py-1 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 border-t border-slate-800 pt-6">
              <p className="text-sm text-slate-400">
                Impact
              </p>

              <p className="mt-2 font-medium">
                {project.impact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}