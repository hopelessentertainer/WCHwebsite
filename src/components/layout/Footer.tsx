import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-luxury-black text-luxury-white mt-20 border-t-2 border-luxury-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-serif font-normal mb-4 tracking-[0.15em] uppercase">Wesley Charles Holleman</h2>
            <p className="text-luxury-white text-xs font-sans font-light tracking-wider uppercase">
              Fine Art Gallery
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-sm mb-6 uppercase tracking-[0.2em] font-normal">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/gallery" className="text-luxury-white hover:opacity-70 text-xs font-sans font-light tracking-wider uppercase transition-opacity">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-luxury-white hover:opacity-70 text-xs font-sans font-light tracking-wider uppercase transition-opacity">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-luxury-white hover:opacity-70 text-xs font-sans font-light tracking-wider uppercase transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-luxury-white hover:opacity-70 text-xs font-sans font-light tracking-wider uppercase transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-sm mb-6 uppercase tracking-[0.2em] font-normal">Contact</h3>
            <p className="text-luxury-white text-xs font-sans font-light tracking-wider">
              Alabama, United States
            </p>
            <p className="text-luxury-white text-xs font-sans font-light tracking-wider mt-3">
              For inquiries, please visit our contact page.
            </p>
          </div>
        </div>

        <div className="art-deco-divider mt-12 mb-8"></div>
        <div className="text-center">
          <p className="text-luxury-white text-xs font-sans font-light tracking-wider uppercase opacity-70">
            © {new Date().getFullYear()} Wesley Charles Holleman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

