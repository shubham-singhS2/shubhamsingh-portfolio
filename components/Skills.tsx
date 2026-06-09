const skills = [
  "AWS",
  "Kubernetes",
  "Docker",
  "Terraform",
  "Ansible",
  "Jenkins",
  "GitLab CI/CD",
  "RabbitMQ",
  "Prometheus",
  "Grafana",
  "Python",
  "Bash",
  "Linux",
  "ServiceNow",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-12"
    >
      <h2 className="text-4xl font-bold mb-10">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-slate-800 rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}