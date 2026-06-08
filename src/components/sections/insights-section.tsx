import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Icon from "@/components/ui/icon"

const listings = [
  {
    brand: "Rick Owens",
    name: "Stooges Biker Jacket",
    details: "FW2011 'Plinth' · IT 50 · Deadstock",
    price: "₽ 320 000",
    image: "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/04384826-e399-4c98-9601-226fdf555cc0.jpg",
  },
  {
    brand: "Undercover",
    name: "But Beautiful Trench Coat",
    details: "SS2003 'But Beautiful' · JP 3 · Excellent",
    price: "₽ 175 000",
    image: "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/b873e71f-392b-4981-bd47-06d983bb5f62.jpg",
  },
  {
    brand: "Carol Christian Poell",
    name: "Horsehide Derby Shoes",
    details: "FW2008 · EU 43 · Excellent",
    price: "₽ 185 000",
    image: "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/fade1f1e-8e68-443d-a573-7115047771aa.jpg",
  },
  {
    brand: "ERD (Enfants Riches Déprimés)",
    name: "Hand-Painted Leather Jacket",
    details: "SS2021 · OS · Mint",
    price: "₽ 144 000",
    image: "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/69c06070-f5ee-431b-812a-6631db476ef5.jpg",
  },
  {
    brand: "Rick Owens",
    name: "Exploder Cargo Pants",
    details: "SS2020 'Tecuatl' · IT 48 · Mint",
    price: "₽ 89 000",
    image: "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/8f8738ca-078c-4630-8b2b-b6d8836b6a67.jpg",
  },
  {
    brand: "Comme des Garçons",
    name: "Wool Gathered Skirt",
    details: "FW2005 · OS · Good",
    price: "₽ 62 000",
    image: "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/cae4b22a-4363-49b8-bbec-f8688509b8f7.jpg",
  },
  {
    brand: "Undercover",
    name: "Eye Motif Hoodie",
    details: "FW2013 'Gimmick' · JP 3 · Excellent",
    price: "₽ 95 000",
    image: "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/e3bc99c9-b812-4283-b70c-5e2d03bddc84.jpg",
  },
  {
    brand: "Nasomatto",
    name: "Absinth Extrait de Parfum",
    details: "30ml · Deadstock · Discontinued",
    price: "₽ 18 000",
    image: "https://cdn.poehali.dev/projects/09d57637-90ae-4164-8231-fccd978f7ac0/files/6ab98c44-d170-4a1c-bae9-9727d95b844d.jpg",
  },
]

export function InsightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section className="bg-background px-6 py-24" onMouseMove={handleMouseMove}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-xs uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Listings
        </motion.p>

        <div className="divide-y divide-border">
          {listings.map((listing, i) => (
            <motion.a
              key={i}
              href="#"
              className="group flex items-center justify-between py-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ paddingLeft: 16, paddingRight: 16 }}
              data-clickable
            >
              <div className="flex-1">
                <span className="text-[10px] text-primary uppercase tracking-wider font-sans">{listing.brand}</span>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-0.5 group-hover:text-primary transition-colors">
                  {listing.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5 font-light">{listing.details}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-serif text-lg text-foreground">{listing.price}</span>
                <Icon name="ArrowRight" size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </motion.a>
          ))}
        </div>

        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="fixed pointer-events-none z-50 w-[200px] md:w-[280px] overflow-hidden shadow-2xl hidden md:block border border-border"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x + 20,
                y: mousePosition.y - 120,
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15 }}
            >
              <img
                src={listings[hoveredIndex].image}
                alt={listings[hoveredIndex].name}
                className="w-full h-auto grayscale"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}