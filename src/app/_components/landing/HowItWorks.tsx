const steps = [
  { num: 1, title: "Upload", desc: "Pick your favorite photo from your phone or computer." },
  { num: 2, title: "Customize", desc: "Choose size, frame color, and finish. Preview instantly." },
  { num: 3, title: "We frame it", desc: "We print, frame, and quality-check every order." },
  { num: 4, title: "Deliver", desc: "Safely packed and shipped. Ready to hang out of the box." },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-white" aria-labelledby="how-heading">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 id="how-heading" className="text-balance text-2xl font-semibold sm:text-3xl">
          Simple from start to wall
        </h2>
        <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((s) => (
            <li key={s.num} className="rounded-lg border border-black/5 p-5">
              <div className="text-xs font-semibold text-neutral-500">Step {s.num}</div>
              <div className="mt-1 font-medium">{s.title}</div>
              <p className="mt-1 text-sm text-neutral-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


