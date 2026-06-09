export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <div>
          <h3 className="font-bold">
            Shubham Singh
          </h3>

          <p className="text-slate-400 text-sm mt-1">
            DevOps / DevSecOps Engineer
          </p>
        </div>

        <p className="text-slate-500 text-sm mt-4 md:mt-0">
          © 2026 Shubham Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}