import { motion } from "framer-motion"

const footerLinks = [
  { label: "Catalogue", href: "#" },
  { label: "Listings", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
]

export function FooterSection() {
  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-red-950 via-red-900/20 to-transparent opacity-30 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          className="text-6xl md:text-8xl font-serif text-foreground leading-none"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          VOID<br /><em className="italic font-light text-muted-foreground">ARCHIVE.</em>
        </motion.h2>

        <nav className="flex flex-wrap gap-6 mt-8">
          {footerLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-xs uppercase tracking-widest font-sans"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              data-clickable
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs font-light">2025 Void Archive. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-xs font-light transition-colors" data-clickable>
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-xs font-light transition-colors" data-clickable>
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
