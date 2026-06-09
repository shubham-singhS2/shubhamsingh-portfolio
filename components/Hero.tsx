export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-10 pb-20">

      {/* Role */}
      <p className="text-blue-400 text-lg font-medium">
        DevOps / DevSecOps Engineer
      </p>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mt-5 max-w-3xl leading-tight">
        Building scalable cloud infrastructure and automation platforms.
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-slate-300 text-lg leading-relaxed">
        AWS Certified DevOps Engineer with 3.5+ years of experience
        designing cloud infrastructure, Kubernetes platforms,
        CI/CD pipelines and infrastructure automation solutions.
      </p>

      {/* Highlights */}
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
        <span>3.5+ Years Experience</span>
        <span>AWS Certified</span>
        <span>DevOps & Cloud Engineer</span>
        <span>Gurugram, India</span>
      </div>

      {/* Skills */}
      <div className="mt-8 flex flex-wrap gap-3">
        {[
          "AWS",
          "Kubernetes",
          "Terraform",
          "Ansible",
          "Docker",
          "CI/CD",
        ].map((skill) => (
          <span
            key={skill}
            className="bg-slate-800/80 border border-slate-700 px-4 py-2 rounded-lg text-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-wrap gap-4">

        <a
          href="/resume.pdf"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition"
        >
          Download Resume
        </a>

        <a
          href="https://github.com/shubham-singhS2"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-slate-700 px-6 py-3 rounded-lg hover:bg-slate-800 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/shubham-singhs2/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-slate-700 px-6 py-3 rounded-lg hover:bg-slate-800 transition"
        >
          LinkedIn
        </a>

      </div>
    </section>
  );
}