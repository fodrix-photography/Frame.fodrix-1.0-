import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950" aria-labelledby="hero-heading">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_#ffffff1a,_transparent_30%),_radial-gradient(circle_at_80%_0%,_#ffffff26,_transparent_35%)]"
      />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div className="max-w-2xl">
          <h1 id="hero-heading" className="text-balance text-4xl font-semibold text-white sm:text-6xl">
            Turn your moments into modern wall art
          </h1>
          <p className="mt-5 text-pretty text-neutral-300">
            Upload a photo, choose a size and color, and we’ll print, frame, and deliver. Built to be lightweight and ready to hang.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#design"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-200"
            >
              Design your frame
            </Link>
            <Link
              href="#collections"
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white hover:border-white/40"
            >
              Explore collections
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-neutral-400">
            <div>Pan-India delivery</div>
            <div>Multiple sizes & colors</div>
            <div>Lightweight</div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 sm:block" aria-hidden>
        <div className="h-64 w-64 translate-x-16 rounded-xl bg-gradient-to-br from-white/10 to-white/0 ring-1 ring-white/10" />
      </div>
    </section>
  );
}


