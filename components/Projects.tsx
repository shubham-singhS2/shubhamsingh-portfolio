import { Boxes, Workflow } from "lucide-react";

const projects = [
  {
    title: "Distributed Automation Platform",
    icon: Workflow,
    stack: ["Python", "Docker", "RabbitMQ", "Ansible", "Linux"],
    challenge:
      "Manual workload execution across environments was slow and difficult to scale.",
    solution:
      "Built a distributed execution platform with automated orchestration, queue-based task distribution, and reporting.",
    impact:
      "Enabled scalable workload execution and increased operational efficiency.",
  },
  {
    title: "Kubernetes Migration Initiative",
    icon: Boxes,
    stack: ["Kubernetes", "Docker", "Prometheus", "Grafana", "Linux"],
    challenge:
      "Docker Compose-based services lacked the orchestration needed for growth.",
    solution:
      "Migrated applications to Kubernetes with monitoring, health checks, and deployment standardization.",
    impact:
      "Improved scalability, deployment consistency, and service reliability.",
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
            Two platform engineering initiatives focused on scalability,
            automation, and operational reliability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition bg-slate-900/30"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="border border-slate-700 rounded-lg p-2.5 bg-slate-900/60">
                    <Icon className="text-blue-400" size={22} />
                  </div>

                  <h3 className="text-2xl font-semibold">
                    {project.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-800 px-3 py-1 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-4">

                  <div className="flex gap-3">
                    <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold shrink-0 w-20 pt-0.5">
                      Challenge
                    </span>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold shrink-0 w-20 pt-0.5">
                      Solution
                    </span>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  <div className="flex gap-3 border-t border-slate-800 pt-4">
                    <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold shrink-0 w-20 pt-0.5">
                      Impact
                    </span>
                    <p className="text-white font-medium text-sm leading-relaxed">
                      {project.impact}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>
    //</div>
  );
}
