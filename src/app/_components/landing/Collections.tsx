type Collection = {
  name: string;
  priceFrom: string;
  badge?: string;
};

const collections: Collection[] = [
  { name: "Orbit", priceFrom: "₹1499", badge: "New" },
  { name: "Cascade", priceFrom: "₹1799" },
  { name: "Quill", priceFrom: "₹1299", badge: "20% OFF" },
  { name: "Axis", priceFrom: "₹1999" },
  { name: "Nova", priceFrom: "₹1599" },
  { name: "Helio", priceFrom: "₹1899" },
];

export function Collections() {
  return (
    <section id="collections" className="bg-neutral-50" aria-labelledby="collections-heading">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-4">
          <h2 id="collections-heading" className="text-balance text-2xl font-semibold sm:text-3xl">
            Curated collections for every wall
          </h2>
          <a
            href="#design"
            className="hidden rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-white sm:inline-block"
          >
            Design your frame
          </a>
        </div>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {collections.map((c) => (
            <li key={c.name} className="group overflow-hidden rounded-lg border border-black/5 bg-white">
              <div className="aspect-[4/3] bg-[linear-gradient(135deg,_#f3f4f6,_#e5e7eb)]" aria-hidden />
              <div className="flex items-center justify-between p-4">
                <div>
                  <div className="font-medium">{c.name}</div>
                  <div className="text-sm text-neutral-600">From {c.priceFrom}</div>
                </div>
                {c.badge ? (
                  <span className="rounded-full bg-neutral-900 px-2 py-1 text-xs text-white">{c.badge}</span>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


