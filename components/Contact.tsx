export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-12"
    >
      <div className="border border-slate-800 rounded-3xl p-10 bg-slate-900/20">

        <p className="text-blue-400 font-medium">
          CONTACT
        </p>

        <h2 className="text-3xl font-bold mt-3">
          Open to New Opportunities
        </h2>

        <p className="mt-5 text-slate-400 max-w-2xl leading-relaxed">
          I'm currently open to{" "}
          <span className="text-slate-200">DevOps Engineer</span>,{" "}
          <span className="text-slate-200">Platform Engineer</span>,{" "}
          <span className="text-slate-200">Cloud Engineer</span> and{" "}
          <span className="text-slate-200">DevSecOps</span> opportunities
          where I can contribute to cloud infrastructure, automation and
          platform reliability initiatives.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="mailto:shubham.devops@outlook.com"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Email Me
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

        <p className="mt-8 text-sm text-slate-500">
          Based in New Delhi, India • Available for remote, hybrid and
          onsite opportunities.
        </p>

      </div>
    </section>
  );
}
