import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label="Fodrix Frames home">
          <span className="inline-block h-7 w-7 rounded-sm bg-black" />
          <span className="font-semibold">Fodrix Frames</span>
        </Link>
        <nav aria-label="Primary" className="hidden gap-6 sm:flex">
          <Link href="#collections" className="text-sm text-neutral-700 hover:text-black">
            Collections
          </Link>
          <Link href="#how" className="text-sm text-neutral-700 hover:text-black">
            How it works
          </Link>
          <Link href="#reviews" className="text-sm text-neutral-700 hover:text-black">
            Reviews
          </Link>
          <Link href="#faq" className="text-sm text-neutral-700 hover:text-black">
            FAQs
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#design"
            className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
          >
            Design your frame
          </Link>
        </div>
      </div>
    </header>
  );
}


