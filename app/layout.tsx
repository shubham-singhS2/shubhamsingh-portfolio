import Clarity from "../components/Clarity";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shubham-singh.in"),

  title: "Shubham Singh | DevOps Engineer",

  description:
    "DevOps Engineer with 3.5+ years of experience in AWS, Kubernetes, Terraform, Ansible, CI/CD, Infrastructure Automation and Platform Engineering.",

  keywords: [
    "Shubham Singh",
    "DevOps Engineer",
    "DevSecOps Engineer",
    "AWS",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "Docker",
    "Jenkins",
    "Cloud Engineer",
    "Platform Engineer",
    "CI/CD",
  ],

  authors: [
    {
      name: "Shubham Singh",
    },
  ],

  creator: "Shubham Singh",

  alternates: {
    canonical: "https://shubham-singh.in",
  },

  openGraph: {
    title: "Shubham Singh | DevOps Engineer",

    description:
      "DevOps Engineer specializing in AWS, Kubernetes, Terraform, CI/CD and Infrastructure Automation.",

    url: "https://shubham-singh.in",

    siteName: "Shubham Singh Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shubham Singh Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Shubham Singh | DevOps Engineer",

    description:
      "AWS • Kubernetes • Terraform • DevOps",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shubham Singh",
  jobTitle: "DevOps / DevSecOps Engineer",
  url: "https://shubham-singh.in",
  email: "mailto:contact@shubham-singh.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/shubham-singhS2",
    "https://www.linkedin.com/in/shubham-singhs2/",
  ],
  knowsAbout: [
    "AWS",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "Docker",
    "Jenkins",
    "CI/CD",
    "DevOps",
    "Infrastructure Automation",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "AWS Certified Solutions Architect - Associate (SAA-C03)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "AWS Certified SysOps Administrator - Associate (SOA-C02)",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <Clarity />
        {children}
      </body>
    </html>
  );
}
