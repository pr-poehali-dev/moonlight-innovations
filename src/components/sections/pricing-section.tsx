import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const categories = [
  {
    name: "Одежда",
    price: "от ₽ 30 000",
    description: "Верхняя одежда, трикотаж, брюки, рубашки",
    features: [
      "Rick Owens · ERD · Undercover · CCP",
      "Размеры IT, JP, EU, OS",
      "Состояние: Deadstock до Excellent",
      "Полное описание и фото",
    ],
  },
  {
    name: "Обувь & Аксессуары",
    price: "от ₽ 15 000",
    description: "Кожаная обувь, сумки, украшения",
    features: [
      "Архивная обувь CCP и Rick Owens",
      "Кожаные изделия ручной работы",
      "Серебряные украшения ERD",
      "Кошельки, ремни, перчатки",
    ],
    popular: true,
  },
  {
    name: "Парфюм",
    price: "от ₽ 8 000",
    description: "Нишевый и архивный парфюм",
    features: [
      "Comme des Garçons Series",
      "Nasomatto · Orto Parisi",
      "Alessandro Gualtieri",
      "Редкие снятые ароматы",
    ],
  },
]

export function PricingSection() {
  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Категории</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm font-light">Одежда, обувь, аксессуары и парфюм в едином опиум-архиве.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              className={`relative bg-background p-8 border ${cat.popular ? "border-primary" : "border-border"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-clickable
            >
              {cat.popular && (
                <span className="absolute -top-px left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest font-sans px-4 py-1">
                  В наличии
                </span>
              )}

              <div className="pb-6 border-b border-border">
                <h3 className="font-serif text-xl text-foreground">{cat.name}</h3>
                <div className="mt-3">
                  <span className="font-serif text-3xl text-foreground">{cat.price}</span>
                </div>
                <p className="text-muted-foreground text-xs mt-2 font-light">{cat.description}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {cat.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-foreground">
                    <Icon name="Minus" size={12} className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-xs font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full mt-8 py-3 px-6 text-xs uppercase tracking-widest font-sans transition-colors ${
                  cat.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/80"
                    : "bg-transparent text-foreground border border-border hover:border-foreground"
                }`}
              >
                Смотреть
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
