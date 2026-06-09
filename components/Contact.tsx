export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-12"
    >
      <div className="border border-slate-800 rounded-3xl p-10 bg-slate-900/50">

        <p className="text-blue-400 font-medium">
          CONTACT
        </p>

        <h2 className="text-4xl font-bold mt-3">
          Let's Build Something Great
        </h2>

        <p className="mt-6 text-slate-400 max-w-2xl">
          I'm open to DevOps, Platform Engineering,
          Cloud Infrastructure and DevSecOps opportunities.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="mailto:shubham.devops@outlook.com"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium"
          >
            Email Me
          </a>

          <a
            href="https://github.com/shubham-singhS2"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-700 px-6 py-3 rounded-lg"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shubham-singhs2/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-700 px-6 py-3 rounded-lg"
          >
            LinkedIn
          </a>

        </div>
      </div>
    </section>
  );
}