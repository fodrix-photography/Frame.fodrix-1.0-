import Link from "next/link";

export function CTA() {
  return (
    <section id="design" className="relative overflow-hidden bg-neutral-900" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-8 sm:grid-cols-2">
          <div>
            <h2 id="cta-heading" className="text-3xl font-semibold text-white">
              Ready to design your frame?
            </h2>
            <p className="mt-2 text-neutral-300">
              Start with a photo, choose a size and color, and we’ll handle the rest.
            </p>
            <div className="mt-6">
              <Link href="#" className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900">
                Start designing
              </Link>
            </div>
          </div>
          <div aria-hidden className="aspect-[4/3] rounded-xl bg-gradient-to-br from-white/10 to-white/0 ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
}


