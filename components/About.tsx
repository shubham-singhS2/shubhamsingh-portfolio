import { Award, Clock, MapPin, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Clock,
    label: "3.5+ Years",
    sublabel: "Hands-on Experience",
  },
  {
    icon: Award,
    label: "AWS Certified",
    sublabel: "SAA-C03 & SOA-C02",
  },
  {
    icon: Sparkles,
    label: "Infra Automation",
    sublabel: "IaC, CI/CD, Kubernetes",
  },
  {
    icon: MapPin,
    label: "New Delhi, India",
    sublabel: "Open to Remote/Hybrid",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-12"
    >
      <h2 className="text-4xl font-bold mb-10">
        About Me
      </h2>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">

        {/* Left - narrative text */}
        <div className="text-slate-300 text-lg leading-8">

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

        {/* Right - highlight cards */}
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="border border-slate-800 rounded-xl p-5 bg-slate-900/40 hover:border-blue-500/40 transition"
              >
                <Icon className="text-blue-400" size={22} />

                <p className="mt-3 font-semibold text-white leading-tight">
                  {item.label}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {item.sublabel}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
