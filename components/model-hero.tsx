"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function ModelHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const nameVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section className="container mx-auto px-4 py-12 md:py-24 relative">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="relative z-10">
          <div className="relative">
            <motion.h2 className="text-7xl md:text-8xl lg:text-9xl font-serif tracking-tighter" variants={itemVariants}>
              MODELO
            </motion.h2>
            <motion.h2
              className="text-7xl md:text-8xl lg:text-9xl font-serif tracking-tighter mt-4"
              variants={itemVariants}
            >
              PROFESIONAL
            </motion.h2>
            <motion.div className="absolute top-0 right-24 -translate-y-1/2 hidden md:block" variants={nameVariants}>
              <span className="font-script text-5xl md:text-6xl lg:text-7xl text-amber-600">Soy Ana</span>
            </motion.div>
          </div>
          <motion.p className="mt-8 text-lg text-neutral-700 max-w-md" variants={itemVariants}>
            Modelo profesional con experiencia en pasarela, fotografía editorial y campañas publicitarias.
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-4" variants={itemVariants}>
            <motion.a
              href="#portfolio"
              className="px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver Portfolio
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 border border-black rounded-full hover:bg-neutral-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contactar
            </motion.a>
          </motion.div>
        </div>
        <motion.div className="relative" variants={imageVariants}>
          <div className="bg-rose-200 aspect-[3/4] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              width={600}
              height={800}
              alt="Modelo profesional"
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

