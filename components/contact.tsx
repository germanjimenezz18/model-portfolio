"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

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
          ¿Interesado en trabajar conmigo? Completa el formulario y me pondré en contacto contigo a la brevedad.
        </motion.p>
        <motion.form className="space-y-6" variants={containerVariants}>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nombre
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="tu@email.com"
              />
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Asunto
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              id="subject"
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Asunto del mensaje"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Mensaje
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              id="message"
              rows={5}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Tu mensaje"
            ></motion.textarea>
          </motion.div>
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors"
            >
              Enviar Mensaje
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  )
}

