export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-12"
    >
      <h2 className="text-4xl font-bold mb-8">
        About Me
      </h2>

      <div className="max-w-4xl text-slate-300 text-lg leading-8">
        <p>
          I'm a DevOps / DevSecOps Engineer with 3.5+
          years of experience designing cloud
          infrastructure, CI/CD pipelines, Kubernetes
          platforms and automation solutions.
        </p>

        <p className="mt-6">
          My expertise spans AWS, Terraform, Ansible,
          Docker, Kubernetes, Jenkins, GitLab CI/CD,
          RabbitMQ, Prometheus and Grafana.
        </p>

        <p className="mt-6">
          I enjoy solving infrastructure challenges,
          automating repetitive processes and building
          scalable distributed systems that improve
          reliability and deployment speed.
        </p>
      </div>
    </section>
  );
}