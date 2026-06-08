import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const IMG = {
  a: "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/04384826-e399-4c98-9601-226fdf555cc0.jpg",
  b: "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/b873e71f-392b-4981-bd47-06d983bb5f62.jpg",
  c: "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/2e0005f5-49f4-460f-aec4-c483e5010c1d.jpg",
  d: "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/69c06070-f5ee-431b-812a-6631db476ef5.jpg",
  e: "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/cae4b22a-4363-49b8-bbec-f8688509b8f7.jpg",
  f: "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/fade1f1e-8e68-443d-a573-7115047771aa.jpg",
  g: "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/e3bc99c9-b812-4283-b70c-5e2d03bddc84.jpg",
  h: "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/6ab98c44-d170-4a1c-bae9-9727d95b844d.jpg",
  i: "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/8f8738ca-078c-4630-8b2b-b6d8836b6a67.jpg",
}

const products = [
  {
    image: IMG.a,
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
    image: IMG.b,
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
    image: IMG.c,
    brand: "Carol Christian Poell",
    name: "Longitudinal Seam Trousers",
    season: "FW2006",
    size: "IT 48",
    condition: "Deadstock",
    price: "₽ 112 000",
    description: "Knit trousers with signature longitudinal seams. Synthetic thread, anatomical fit.",
    category: "Trousers",
  },
  {
    image: IMG.d,
    brand: "Rick Owens",
    name: "Intarsia Wool Sweater",
    season: "FW2019 'Larry'",
    size: "IT 46",
    condition: "Mint",
    price: "₽ 67 000",
    description: "Heavy intarsia knit in signature Rick Owens palette. Oversized boxy silhouette, ribbed hem.",
    category: "Knitwear",
  },
  {
    image: IMG.e,
    brand: "Comme des Garçons",
    name: "Lumps & Bumps Dress",
    season: "SS1997 'Body Meets Dress'",
    size: "OS",
    condition: "Excellent",
    price: "₽ 390 000",
    description: "Groundbreaking piece from Kawakubo's most iconic collection. Padded forms challenge body perception.",
    category: "Dress",
  },
  {
    image: IMG.f,
    brand: "Carol Christian Poell",
    name: "Drip Sole Derby",
    season: "FW2004",
    size: "EU 42",
    condition: "Excellent",
    price: "₽ 210 000",
    description: "Hand-dipped rubber sole drip finish. Calfskin upper, signature CCP construction.",
    category: "Footwear",
  },
  {
    image: IMG.g,
    brand: "Undercover",
    name: "Anarchy Deconstructed Shirt",
    season: "SS2001 'Scab'",
    size: "JP 2",
    condition: "Good",
    price: "₽ 54 000",
    description: "Early Undercover with hand-cut distressing and raw edge detailing. Cotton poplin base.",
    category: "Shirt",
  },
  {
    image: IMG.h,
    brand: "Comme des Garçons",
    name: "Blackpepper Eau de Parfum",
    season: "Series 6 'Synthetic'",
    size: "50ml",
    condition: "Deadstock",
    price: "₽ 22 000",
    description: "Discontinued synthetic series fragrance. Sharp industrial pepper, metallic dry-down.",
    category: "Fragrance",
  },
  {
    image: IMG.i,
    brand: "ERD",
    name: "Wide Leg Draped Trousers",
    season: "SS2022",
    size: "OS",
    condition: "Mint",
    price: "₽ 48 000",
    description: "Fluid wide-leg silhouette in viscose blend. ERD's signature raw edge hem and tonal stitching.",
    category: "Trousers",
  },
]

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60])
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [40, -40])

  const yValues = [y1, y2, y3, y1, y2, y3, y1, y2, y3]

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product, i) => (
            <motion.div
              key={i}
              className="group cursor-pointer"
              style={{ y: yValues[i] }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: (i % 3) * 0.1,
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
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary font-sans">{product.brand}</p>
                    <h3 className="font-serif text-lg text-foreground mt-0.5">{product.name}</h3>
                  </div>
                  <span className="font-serif text-lg text-foreground whitespace-nowrap">{product.price}</span>
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
