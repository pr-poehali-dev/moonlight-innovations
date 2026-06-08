import { useState } from "react"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const footerLinks = [
  { label: "Каталог", href: "#" },
  { label: "Объявления", href: "#" },
  { label: "О нас", href: "#" },
  { label: "Контакты", href: "#" },
]

export function FooterSection() {
  const [email, setEmail] = useState("")

  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-red-950 via-red-900/20 to-transparent opacity-30 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div>
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
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-muted-foreground text-xs mb-4 uppercase tracking-widest font-sans">Новые поступления на почту</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary text-sm font-light transition-colors"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground p-3 hover:bg-primary/80 transition-colors"
                data-clickable
              >
                <Icon name="ArrowRight" size={16} />
              </button>
            </form>
            <p className="text-muted-foreground text-[10px] mt-3 font-light">Опиум-эстетика · Гот · Инди слиз · Авангард</p>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs font-light">2025 Void Archive. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-xs font-light transition-colors" data-clickable>
              Конфиденциальность
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-xs font-light transition-colors" data-clickable>
              Условия
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
