const reviews = [
  {
    name: "Vaishnavi",
    text:
      "Beautifully designed and lightweight frames. The print quality exceeded expectations.",
    rating: 5,
  },
  {
    name: "Anuj",
    text:
      "Effortless to upload and customize. Our wall has never looked better!",
    rating: 5,
  },
  {
    name: "Nupur",
    text: "Quick responses and smooth experience every time I ordered.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div aria-label={`${count} out of 5 stars`} className="text-yellow-600">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < count ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="bg-neutral-50" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 id="testimonials-heading" className="text-balance text-2xl font-semibold sm:text-3xl">
          What customers are saying
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.name} className="rounded-lg border border-black/5 bg-white p-5">
              <Stars count={r.rating} />
              <blockquote className="mt-2 text-sm text-neutral-700">{r.text}</blockquote>
              <div className="mt-3 text-sm font-medium">{r.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


