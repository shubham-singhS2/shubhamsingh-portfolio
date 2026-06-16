export const mdxComponents = {
  h1: (props: any) => (
    <h1
      className="text-5xl font-bold text-white mb-8 mt-8"
      {...props}
    />
  ),

  h2: (props: any) => (
    <h2
      className="text-3xl font-bold text-white mt-12 mb-6"
      {...props}
    />
  ),

  h3: (props: any) => (
    <h3
      className="text-2xl font-semibold text-white mt-8 mb-4"
      {...props}
    />
  ),

  p: (props: any) => (
    <p
      className="text-slate-300 leading-8 mb-6"
      {...props}
    />
  ),

  ul: (props: any) => (
    <ul
      className="list-disc pl-6 space-y-2 mb-6 text-slate-300"
      {...props}
    />
  ),

  ol: (props: any) => (
    <ol
      className="list-decimal pl-6 space-y-2 mb-6 text-slate-300"
      {...props}
    />
  ),

  code: (props: any) => (
    <code
      className="bg-slate-800 px-1 py-0.5 rounded text-blue-300"
      {...props}
    />
  ),

  pre: (props: any) => (
    <pre
      className="bg-slate-900 border border-slate-800 rounded-xl p-6 overflow-x-auto mb-6"
      {...props}
    />
  ),

table: (props: any) => (
  <table
    className="w-full border-collapse border border-slate-700 mb-6"
    {...props}
  />
),

thead: (props: any) => (
  <thead
    className="bg-slate-800"
    {...props}
  />
),

tbody: (props: any) => (
  <tbody {...props} />
),

tr: (props: any) => (
  <tr
    className="border border-slate-700"
    {...props}
  />
),

th: (props: any) => (
  <th
    className="border border-slate-700 px-4 py-2 text-left"
    {...props}
  />
),

td: (props: any) => (
  <td
    className="border border-slate-700 px-4 py-2"
    {...props}
  />
),
};
