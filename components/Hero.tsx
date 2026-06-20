const techIcons = [
  { name: "AWS", slug: "aws" },
  { name: "Kubernetes", slug: "kubernetes" },
  { name: "Docker", slug: "docker" },
  { name: "Terraform", slug: "terraform" },
  { name: "Jenkins", slug: "jenkins" },
  { name: "Ansible", slug: "ansible" },
  { name: "Linux", slug: "linux" },
  { name: "Python", slug: "py" },
  { name: "Prometheus", slug: "prometheus" },
];

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-10 pb-20">
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">

        {/* Left column - existing content, unchanged */}
        <div>
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
            <span>New Delhi, India</span>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Last Updated: June 2026
          </p>

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
        </div>

        {/* Right column - icons floating over glow, no boxes/borders */}
        <div className="hidden lg:block relative">
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full scale-90" />

          <div className="relative grid grid-cols-3 gap-8">
            {techIcons.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center gap-3 hover:-translate-y-1 transition-transform"
              >
                <img
                  src={`https://skillicons.dev/icons?i=${tech.slug}`}
                  alt={tech.name}
                  width={48}
                  height={48}
                />
                <span className="text-xs text-slate-400 font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
