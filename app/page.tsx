import Link from "next/link"
import { ShoppingBag, Menu } from "lucide-react"
import ModelHero from "@/components/model-hero"
import Portfolio from "@/components/portfolio"
import About from "@/components/about"
import Contact from "@/components/contact"
import AnimatedCursor from "@/components/animated-cursor"

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <AnimatedCursor />
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <button className="lg:hidden">
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-2xl font-medium">Portfolio</h1>
        <nav className="hidden lg:flex space-x-8">
          <Link href="#portfolio" className="text-neutral-800 hover:text-neutral-600 transition-colors">
            Portfolio
          </Link>
          <Link href="#about" className="text-neutral-800 hover:text-neutral-600 transition-colors">
            Sobre mí
          </Link>
          <Link href="#contact" className="text-neutral-800 hover:text-neutral-600 transition-colors">
            Contacto
          </Link>
        </nav>
        
      </header>

      <ModelHero />
      <Portfolio />
      <About />
      <Contact />
    </main>
  )
}

