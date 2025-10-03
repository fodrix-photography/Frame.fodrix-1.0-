const values = [
  { title: "Doorstep delivery", desc: "Pan-India shipping with careful packaging." },
  { title: "Multiple sizes & colors", desc: "Find your perfect fit and tone." },
  { title: "Thin & light", desc: "Easy to mount, safe for all walls." },
  { title: "Satisfaction first", desc: "We print, frame, and check before dispatch." },
];

export function ValueProps() {
  return (
    <section className="bg-white" aria-labelledby="values-heading">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 id="values-heading" className="text-balance text-2xl font-semibold sm:text-3xl">
          Everything you need for a beautiful wall
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {values.map((v) => (
            <li key={v.title} className="rounded-lg border border-black/5 p-5">
              <div className="text-sm font-medium">{v.title}</div>
              <p className="mt-1 text-sm text-neutral-600">{v.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


