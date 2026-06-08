import { motion } from "framer-motion"

const marqueeItems = [
  "RICK OWENS",
  "·",
  "ERD",
  "·",
  "UNDERCOVER",
  "·",
  "CAROL CHRISTIAN POELL",
  "·",
  "ARCHIVE",
  "·",
  "OPIUM",
  "·",
  "DARK COUTURE",
  "·",
  "AVANT-GARDE",
  "·",
]

const IMG1 = "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/04384826-e399-4c98-9601-226fdf555cc0.jpg"
const IMG2 = "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/b873e71f-392b-4981-bd47-06d983bb5f62.jpg"
const IMG3 = "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/2e0005f5-49f4-460f-aec4-c483e5010c1d.jpg"

const carouselItems = [
  { brand: "Rick Owens", item: "Intarsia Knit Sweater", price: "₽ 67 000", season: "FW2019", image: IMG1 },
  { brand: "ERD", item: "Reconstructed Denim", price: "₽ 54 000", season: "SS2022", image: IMG2 },
  { brand: "Undercover", item: "Printed Long Sleeve", price: "₽ 38 000", season: "FW2007", image: IMG3 },
  { brand: "CCP", item: "Drip Rubber Boots", price: "₽ 210 000", season: "FW2004", image: IMG1 },
  { brand: "Rick Owens", item: "Ramones Low", price: "₽ 89 000", season: "SS2016", image: IMG2 },
  { brand: "Undercover", item: "Anarchy Shirt", price: "₽ 45 000", season: "SS2001", image: IMG3 },
]

export function CarouselSection() {
  const items = [...carouselItems, ...carouselItems]
  const marquee = [...marqueeItems, ...marqueeItems]

  return (
    <section className="bg-secondary py-24 overflow-hidden border-t border-b border-border">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Dead seasons.<br />
          <em className="italic font-light text-muted-foreground">Living pieces.</em>
        </motion.h2>
      </div>

      {/* Marquee text */}
      <div className="relative mb-10 overflow-hidden border-y border-border py-3">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {marquee.map((item, i) => (
            <span key={i} className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-sans flex-shrink-0">
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Cards carousel */}
      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[260px] bg-background border border-border overflow-hidden"
              data-clickable
            >
              <div className="h-[320px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.item}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="p-4 space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-primary font-sans">{item.brand}</p>
                <p className="font-serif text-base text-foreground">{item.item}</p>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.season}</span>
                  <span className="font-serif text-sm text-foreground">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}