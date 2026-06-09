import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title:
    "Shubham Singh | DevOps Engineer",
  description:
    "DevOps / DevSecOps Engineer specializing in AWS, Kubernetes, Terraform, Ansible and CI/CD automation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}