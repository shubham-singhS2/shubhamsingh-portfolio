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
          I'm a DevOps Engineer with 3.5+ years of experience
          designing, automating and operating cloud-native
          infrastructure across AWS environments. My focus is
          on building scalable platforms, reliable deployment
          pipelines and efficient infrastructure automation
          solutions.
        </p>

        <p className="mt-6">
          Throughout my career, I've worked extensively with
          AWS, Kubernetes, Terraform, Ansible, Docker,
          Jenkins and observability tools to improve system
          reliability, deployment velocity and operational
          efficiency.
        </p>

        <p className="mt-6">
          I enjoy solving complex infrastructure challenges,
          implementing Infrastructure as Code practices and
          building automation that reduces manual effort while
          enabling teams to deliver software faster and more
          reliably.
        </p>

      </div>
    </section>
  );
}