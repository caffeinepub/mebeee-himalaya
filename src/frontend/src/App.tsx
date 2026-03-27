import {
  Facebook,
  Instagram,
  Menu,
  Mountain,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SiPinterest } from "react-icons/si";

const products = [
  {
    id: 1,
    name: "Mountain Shawl",
    price: "$45 – $85",
    image: "/assets/generated/product-shawl.dim_400x400.jpg",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Yak Wool Blanket",
    price: "$120 – $180",
    image: "/assets/generated/product-blanket.dim_400x400.jpg",
    tag: "New Arrival",
  },
  {
    id: 3,
    name: "Embroidered Tote",
    price: "$35 – $55",
    image: "/assets/generated/product-bag.dim_400x400.jpg",
    tag: null,
  },
  {
    id: 4,
    name: "Knitted Wool Hat",
    price: "$25 – $40",
    image: "/assets/generated/product-hat.dim_400x400.jpg",
    tag: null,
  },
];

const testimonials = [
  {
    id: 1,
    quote:
      "The Yak Wool Blanket I received was absolutely stunning. The craftsmanship is unlike anything I've ever seen — warm, soft, and so beautifully made. It feels like a piece of the Himalayas right in my living room.",
    name: "Priya S.",
    initials: "PS",
    location: "Mumbai, India",
  },
  {
    id: 2,
    quote:
      "Mebeee Himalaya brings the soul of the mountains to your home. Every stitch tells a story of the artisans and their traditions. I ordered the Mountain Shawl and it arrived perfectly packaged — a true treasure.",
    name: "Marcus T.",
    initials: "MT",
    location: "London, UK",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#our-story" },
  { label: "Our Collections", href: "#collections" },
  { label: "Sustainability", href: "#craft" },
  { label: "Journal", href: "#testimonials" },
  { label: "Contact Us", href: "#footer" },
];

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#our-story" },
  { label: "Our Collections", href: "#collections" },
  { label: "Sustainability", href: "#craft" },
  { label: "Journal", href: "#testimonials" },
  { label: "Contact Us", href: "#footer" },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HEADER ===== */}
      <header
        data-ocid="header.panel"
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-header" : ""
        }`}
        style={{ height: "80px" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 h-full flex items-center justify-between">
          {/* Brand */}
          <a
            href="#home"
            data-ocid="header.link"
            className="flex items-center gap-2.5 flex-shrink-0"
          >
            <Mountain
              className="w-7 h-7 text-himalaya-slate"
              strokeWidth={1.5}
            />
            <span
              className="font-serif text-himalaya-slate text-xl font-semibold tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Mebeee Himalaya
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="header.link"
                className="text-himalaya-body text-sm font-medium hover:text-himalaya-slate transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Search"
              data-ocid="header.button"
              className="hidden sm:block text-himalaya-body hover:text-himalaya-slate transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Cart"
              data-ocid="header.button"
              className="text-himalaya-body hover:text-himalaya-slate transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Open menu"
              data-ocid="header.toggle"
              className="lg:hidden text-himalaya-body hover:text-himalaya-slate"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            data-ocid="nav.panel"
            className="fixed inset-0 z-50 bg-white flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-20 border-b border-himalaya-border">
              <span
                className="font-serif text-himalaya-slate text-xl font-semibold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Mebeee Himalaya
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                data-ocid="nav.close_button"
              >
                <X className="w-6 h-6 text-himalaya-body" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="nav.link"
                  className="py-3 text-lg text-himalaya-body font-medium border-b border-himalaya-border hover:text-himalaya-slate transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== HERO ===== */}
      <section
        id="home"
        ref={heroRef}
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{ height: "500px", marginTop: "80px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-himalaya.dim_1400x600.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/35" />
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-2xl"
        >
          <p className="text-white/80 text-xs font-semibold tracking-[0.22em] uppercase mb-4">
            Ascend with Mebeee
          </p>
          <h1
            className="text-white font-semibold leading-tight mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 5vw, 54px)",
            }}
          >
            Embrace the Spirit of the Peaks.
          </h1>
          <p className="text-white/85 text-base leading-relaxed mb-8">
            Handcrafted by Himalayan artisans. Timeless pieces that carry the
            soul of the mountains.
          </p>
          <a href="#collections" data-ocid="hero.primary_button">
            <button
              type="button"
              className="bg-white text-himalaya-slate border border-white/60 px-8 py-3 rounded text-sm font-semibold tracking-wide hover:bg-himalaya-offwhite transition-colors"
            >
              Explore Collections
            </button>
          </a>
        </motion.div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section
        id="our-story"
        className="py-20 lg:py-28"
        style={{ backgroundColor: "#F6F6F4" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-label text-himalaya-muted mb-4">
                Our Story
              </p>
              <h2
                className="font-semibold text-himalaya-slate mb-6 leading-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(32px, 4vw, 44px)",
                }}
              >
                Born from the Mountains.
              </h2>
              <p className="text-himalaya-body text-base leading-[1.75] mb-4">
                Mebeee Himalaya was born from a simple belief: that the hands of
                skilled artisans in the high mountain villages of Nepal and
                Tibet deserve to be heard. Each piece we carry is the result of
                generations of tradition — patterns passed down through
                families, techniques preserved with care and pride.
              </p>
              <p className="text-himalaya-body text-base leading-[1.75]">
                We work directly with cooperatives of weavers, knitters, and
                embroiderers, ensuring fair wages and preserving the cultural
                heritage of the Himalayas. When you bring home a piece from
                Mebeee, you carry a story older than memory.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/assets/generated/our-story.dim_600x500.jpg"
                alt="Himalayan artisan weaving"
                className="rounded-xl shadow-card w-full object-cover"
                style={{ maxHeight: "480px" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== COLLECTIONS ===== */}
      <section id="collections" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-14">
            <p className="section-label text-himalaya-muted mb-3">
              Himalayan Collections
            </p>
            <h2
              className="font-semibold text-himalaya-slate"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px, 3.5vw, 40px)",
              }}
            >
              Crafted for Those Who Wander
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`collections.item.${i + 1}`}
                className="bg-white border border-himalaya-border rounded-xl shadow-card overflow-hidden group"
              >
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "1" }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-himalaya-slate text-white text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded">
                      {product.tag}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-himalaya-slate text-[15px] mb-1">
                    {product.name}
                  </h3>
                  <p className="text-himalaya-muted text-sm mb-4">
                    {product.price}
                  </p>
                  <button
                    type="button"
                    data-ocid={`collections.button.${i + 1}`}
                    className="w-full bg-himalaya-slate text-white text-sm font-medium py-2.5 rounded hover:opacity-90 transition-opacity"
                  >
                    Shop Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR CRAFT ===== */}
      <section
        id="craft"
        className="py-20 lg:py-28 bg-white border-t border-himalaya-border"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/assets/generated/our-craft.dim_700x500.jpg"
                alt="Himalayan craft"
                className="rounded-xl shadow-card w-full object-cover"
                style={{ maxHeight: "460px" }}
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-label text-himalaya-muted mb-4">
                Our Craft
              </p>
              <h2
                className="font-semibold text-himalaya-slate mb-3 leading-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(26px, 3.5vw, 38px)",
                }}
              >
                Crafting Tradition, Preserving Nature
              </h2>
              <p className="text-himalaya-body text-base leading-[1.75] mb-4">
                Every thread in our collection is sourced responsibly. We use
                natural dyes derived from plants, minerals, and roots — the same
                pigments our artisan partners have used for centuries. Yak wool,
                organic cotton, and hand-spun silk are our primary materials.
              </p>
              <p className="text-himalaya-body text-base leading-[1.75] mb-6">
                Our zero-waste philosophy means off-cuts become accessories, and
                every packaging material is either recycled or biodegradable.
                When you purchase from Mebeee, you invest in a cycle of care —
                for people, for craft, and for the planet.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  "Natural Dyes",
                  "Ethical Sourcing",
                  "Zero Waste",
                  "Artisan Fair Pay",
                ].map((label) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-himalaya-slate" />
                    <span className="text-sm font-medium text-himalaya-body">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section
        id="testimonials"
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{ backgroundColor: "#F6F6F4" }}
      >
        {/* Mountain watermark */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <polygon
            points="0,400 200,100 400,280 600,60 800,240 1000,80 1200,260 1440,40 1440,400"
            fill="#26373C"
          />
        </svg>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-14">
            <p className="section-label text-himalaya-muted mb-3">
              Testimonials
            </p>
            <h2
              className="font-semibold text-himalaya-slate"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px, 3.5vw, 40px)",
              }}
            >
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                data-ocid={`testimonials.item.${i + 1}`}
                className="bg-white rounded-xl p-8 shadow-card border border-himalaya-border"
              >
                <svg
                  className="text-himalaya-muted opacity-30 w-8 h-8 mb-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-himalaya-body italic text-base leading-[1.8] mb-6">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-himalaya-slate flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-himalaya-slate text-sm">
                      {t.name}
                    </p>
                    <p className="text-himalaya-muted text-xs">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer
        id="footer"
        className="text-white"
        style={{ backgroundColor: "#26373C" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-16 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Mountain className="w-6 h-6 text-white/70" strokeWidth={1.5} />
                <span
                  className="font-semibold text-lg text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Mebeee Himalaya
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Premium handcrafted products from the high mountains of Nepal
                and Tibet. Tradition woven into every thread.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  data-ocid="footer.link"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  data-ocid="footer.link"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  data-ocid="footer.link"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <SiPinterest className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      data-ocid="footer.link"
                      className="text-white/60 text-sm hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
                Contact
              </h3>
              <ul className="space-y-3">
                <li className="text-white/60 text-sm">
                  hello@mebeeehimalaya.com
                </li>
                <li className="text-white/60 text-sm">+977 1 234 5678</li>
                <li className="text-white/60 text-sm leading-relaxed">
                  Thamel, Kathmandu
                  <br />
                  Nepal, 44600
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
                Newsletter
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Stay connected with our latest collections and stories from the
                mountains.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEmail("");
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-ocid="footer.input"
                  className="flex-1 bg-white/10 text-white placeholder:text-white/40 border border-white/20 rounded px-3 py-2 text-sm focus:outline-none focus:border-white/50"
                />
                <button
                  type="submit"
                  data-ocid="footer.submit_button"
                  className="bg-white text-himalaya-slate text-sm font-semibold px-4 py-2 rounded hover:bg-himalaya-offwhite transition-colors flex-shrink-0"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} Mebeee Himalaya. All rights reserved.
            </p>
            <p className="text-white/40 text-xs">
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors underline underline-offset-2"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
