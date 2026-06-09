export default function Certifications() {
  const certs = [
    {
      name: "AWS Solutions Architect Associate",
      code: "SAA-C03",
      description:
        "Validated expertise in AWS architecture, networking, security and cloud design.",
    },
    {
      name: "AWS SysOps Administrator Associate",
      code: "SOA-C02",
      description:
        "Validated expertise in AWS operations, monitoring, automation and administration.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <p className="text-blue-400 font-medium">
          CERTIFICATIONS
        </p>

        <h2 className="text-4xl font-bold mt-3">
          Professional Credentials
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {certs.map((cert) => (
          <div
            key={cert.code}
            className="border border-slate-800 rounded-2xl p-8 bg-slate-900/50"
          >
            <div className="text-blue-400 font-semibold">
              {cert.code}
            </div>

            <h3 className="text-2xl font-semibold mt-3">
              {cert.name}
            </h3>

            <p className="text-slate-400 mt-4">
              {cert.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}