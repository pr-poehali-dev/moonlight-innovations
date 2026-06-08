import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const BRANDS = ["RICK OWENS", "ERD", "UNDERCOVER", "CAROL CHRISTIAN POELL"]

function BrandRotator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % BRANDS.length)
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full overflow-hidden">
      <motion.span
        key={index}
        className="font-serif text-2xl md:text-3xl text-foreground text-center leading-tight"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {BRANDS[index]}
      </motion.span>
    </div>
  )
}

function PriceTag() {
  const prices = ["₽ 45 000", "₽ 120 000", "₽ 67 000", "₽ 89 000"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % prices.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-3">
      <motion.span
        key={index}
        className="text-3xl md:text-4xl font-serif text-foreground"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {prices[index]}
      </motion.span>
      <span className="text-xs text-muted-foreground uppercase tracking-widest">price</span>
    </div>
  )
}

function ConditionMeter() {
  const conditions = [
    { label: "Deadstock", value: 100 },
    { label: "Mint", value: 90 },
    { label: "Excellent", value: 75 },
  ]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % conditions.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <motion.span
        key={index}
        className="text-lg font-serif text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {conditions[index].label}
      </motion.span>
      <div className="w-full max-w-[120px] h-px bg-foreground/10 overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          animate={{ width: `${conditions[index].value}%` }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <span className="text-xs text-muted-foreground uppercase tracking-widest">condition</span>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-xs uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Selection
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-secondary p-8 min-h-[280px] flex flex-col border border-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <BrandRotator />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Archive Labels</h3>
              <p className="text-muted-foreground text-xs mt-1 font-light">Original archive pieces from the most cult houses only.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary p-8 min-h-[280px] flex flex-col border border-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            data-clickable
          >
            <div className="flex-1">
              <PriceTag />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Fair Pricing</h3>
              <p className="text-muted-foreground text-xs mt-1 font-light">Every listing includes a full description and price breakdown.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary p-8 min-h-[280px] flex flex-col border border-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            data-clickable
          >
            <div className="flex-1">
              <ConditionMeter />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Condition</h3>
              <p className="text-muted-foreground text-xs mt-1 font-light">Detailed grading for every single item in the archive.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}