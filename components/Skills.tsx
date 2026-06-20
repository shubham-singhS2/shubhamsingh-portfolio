import { Cloud, Boxes, GitBranch, Activity, Code2, Wrench } from "lucide-react";

const skillGroups = [
  {
    category: "Cloud & IaC",
    icon: Cloud,
    skills: [
      { name: "AWS", slug: "aws" },
      { name: "Terraform", slug: "terraform" },
      { name: "Ansible", slug: "ansible" },
    ],
  },
  {
    category: "Containers & Orchestration",
    icon: Boxes,
    skills: [
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "Docker", slug: "docker" },
    ],
  },
  {
    category: "CI/CD",
    icon: GitBranch,
    skills: [
      { name: "Jenkins", slug: "jenkins" },
      { name: "GitLab CI/CD", slug: "gitlab" },
    ],
  },
  {
    category: "Messaging & Monitoring",
    icon: Activity,
    skills: [
      { name: "RabbitMQ", slug: "rabbitmq" },
      { name: "Prometheus", slug: "prometheus" },
      { name: "Grafana", slug: "grafana" },
    ],
  },
  {
    category: "Languages & OS",
    icon: Code2,
    skills: [
      { name: "Python", slug: "py" },
      { name: "Bash", slug: "bash" },
      { name: "Linux", slug: "linux" },
    ],
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: [
      { name: "ServiceNow", slug: null },
    ],
  },
];

export default function Skills() {
  return (
    // <div className="w-full bg-[#0b1222]">
      <section
        id="skills"
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;
            return (
              <div
                key={group.category}
                className="border border-slate-800 rounded-xl p-6 bg-slate-900/40"
              >
                <div className="flex items-center gap-3 mb-5">
                  <GroupIcon className="text-blue-400" size={22} />
                  <h3 className="font-semibold text-lg">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-2 bg-slate-800 rounded-lg text-sm text-slate-300"
                    >
                      {skill.slug ? (
                        <img
                          src={`https://skillicons.dev/icons?i=${skill.slug}`}
                          alt={skill.name}
                          width={18}
                          height={18}
                        />
                      ) : (
                        <Wrench size={16} className="text-blue-400" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    //</div>
  );
}
