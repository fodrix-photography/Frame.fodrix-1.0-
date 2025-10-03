export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-neutral-50" id="faq">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <div className="mb-2 font-semibold">Fodrix Frames</div>
            <p className="text-sm text-neutral-600">
              Custom photo frames delivered to your door. Lightweight. Multiple sizes and colors.
            </p>
          </div>
          <div>
            <div className="mb-2 font-semibold">Company</div>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <div className="mb-2 font-semibold">Help</div>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>Shipping & Delivery</li>
              <li>Returns</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-black/5 pt-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} Fodrix Frames. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


