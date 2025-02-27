"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const portfolioItems = [
    { id: 1, category: "Editorial", title: "Vogue Italia", image: "/placeholder.svg?height=600&width=400" },
    { id: 2, category: "Campaña", title: "Primavera 2023", image: "/placeholder.svg?height=600&width=400" },
    { id: 3, category: "Pasarela", title: "Fashion Week", image: "/placeholder.svg?height=600&width=400" },
    { id: 4, category: "Comercial", title: "Marca de Lujo", image: "/placeholder.svg?height=600&width=400" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="portfolio" className="container mx-auto px-4 py-16 md:py-24" ref={ref}>
      <motion.h2
        className="text-3xl md:text-4xl font-serif mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Portfolio Destacado
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            className="group cursor-pointer"
            variants={itemVariants}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="overflow-hidden rounded-lg">
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
                <Image
                  src={item.image || "/placeholder.svg"}
                  width={400}
                  height={600}
                  alt={item.title}
                  className="w-full aspect-[2/3] object-cover"
                />
              </motion.div>
            </div>
            <div className="mt-4">
              <span className="text-sm text-neutral-500">{item.category}</span>
              <h3 className="text-xl font-medium">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

