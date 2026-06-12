import Clarity from "../components/Clarity";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shubhamsingh.xyz"),

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

  openGraph: {
    title: "Shubham Singh | DevOps Engineer",

    description:
      "DevOps Engineer specializing in AWS, Kubernetes, Terraform, CI/CD and Infrastructure Automation.",

    url: "https://shubhamsingh.xyz",

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Clarity />
        {children}
      </body>
    </html>
  );
}