"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, FormEvent, useState } from "react"

export default function Contact() {
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

  return (
    <section id="contact" className="container mx-auto px-4 py-16 md:py-24" ref={ref}>
      <motion.div
        className="max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 className="text-3xl md:text-4xl font-serif mb-6 text-center" variants={itemVariants}>
          Contacto
        </motion.h2>
        <motion.p className="text-center text-lg text-neutral-700 mb-8" variants={itemVariants}>
          ¿Interesado en trabajar conmigo? Enviame un correo y me pondré en contacto contigo lo antes posible.
        </motion.p>

        <motion.div className="flex">
          <motion.a
            href="mailto:melabermudezz18@gmail.com"
            className="mx-auto px-6 py-3 border border-black rounded-full hover:bg-neutral-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Contactar
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

