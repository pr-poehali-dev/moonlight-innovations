import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const products = [
  {
    image: "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/04384826-e399-4c98-9601-226fdf555cc0.jpg",
    brand: "Rick Owens",
    name: "Bauhaus Pod Coat",
    season: "FW2014 'Sphinx'",
    size: "IT 50",
    condition: "Excellent",
    price: "₽ 145 000",
    description: "Iconic coat with a geometric silhouette. Heavy wool gabardine, asymmetric wrap closure.",
    category: "Outerwear",
  },
  {
    image: "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/b873e71f-392b-4981-bd47-06d983bb5f62.jpg",
    brand: "Undercover",
    name: "Chaos & Balance Jacket",
    season: "SS2003 'But Beautiful'",
    size: "JP 3",
    condition: "Mint",
    price: "₽ 98 000",
    description: "Rare jacket from Jun Takahashi's iconic collection. Deconstructed cut, embroidered lining.",
    category: "Jacket",
  },
  {
    image: "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/2e0005f5-49f4-460f-aec4-c483e5010c1d.jpg",
    brand: "Carol Christian Poell",
    name: "Longitudinal Seam Trousers",
    season: "FW2006",
    size: "IT 48",
    condition: "Deadstock",
    price: "₽ 112 000",
    description: "Knit trousers with signature longitudinal seams. Synthetic thread, anatomical fit.",
    category: "Trousers",
  },
]

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150])
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80])

  const yValues = [y1, y2, y3]

  return (
    <section ref={containerRef} className="bg-background px-6 py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-xs uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Catalogue
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              className="group cursor-pointer"
              style={{ y: yValues[i] }}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              data-clickable
            >
              <div className="relative h-[420px] overflow-hidden bg-secondary">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] uppercase tracking-widest bg-background/80 text-foreground px-2 py-1 font-sans">
                    {product.condition}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] uppercase tracking-widest bg-background/80 text-foreground px-2 py-1 font-sans">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="mt-4 space-y-1 border-t border-border pt-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary font-sans">{product.brand}</p>
                    <h3 className="font-serif text-lg text-foreground mt-0.5">{product.name}</h3>
                  </div>
                  <span className="font-serif text-lg text-foreground">{product.price}</span>
                </div>
                <p className="text-[11px] text-muted-foreground font-sans">{product.season} · {product.size}</p>
                <p className="text-xs text-muted-foreground font-light leading-relaxed pt-1">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}