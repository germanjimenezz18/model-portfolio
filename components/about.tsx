"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-24" ref={ref}>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="order-2 lg:order-1" variants={containerVariants}>
          <motion.h2 className="text-3xl md:text-4xl font-serif mb-6" variants={itemVariants}>
            Sobre Mí
          </motion.h2>
          <motion.p className="text-lg text-neutral-700 mb-4" variants={itemVariants}>
            Con más de 5 años de experiencia en la industria de la moda, he trabajado con marcas reconocidas y
            fotógrafos de renombre internacional.
          </motion.p>
          <motion.p className="text-lg text-neutral-700 mb-4" variants={itemVariants}>
            Mi versatilidad me permite adaptarme a diferentes estilos y conceptos, desde alta moda hasta campañas
            comerciales.
          </motion.p>
          <motion.div className="mt-8" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4">Experiencia</h3>
            <ul className="space-y-2">
              <motion.li className="flex justify-between" variants={itemVariants} whileHover={{ x: 5 }}>
                <span>Pasarela</span>
                <span className="text-neutral-500">12 eventos</span>
              </motion.li>
              <motion.li className="flex justify-between" variants={itemVariants} whileHover={{ x: 5 }}>
                <span>Editorial</span>
                <span className="text-neutral-500">24 publicaciones</span>
              </motion.li>
              <motion.li className="flex justify-between" variants={itemVariants} whileHover={{ x: 5 }}>
                <span>Campañas</span>
                <span className="text-neutral-500">18 marcas</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
        <motion.div className="order-1 lg:order-2" variants={imageVariants}>
          <div className="bg-rose-100 rounded-lg p-4">
            <Image
              src="/placeholder.svg?height=700&width=500"
              width={500}
              height={700}
              alt="Sobre mí"
              className="w-full rounded-lg"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

