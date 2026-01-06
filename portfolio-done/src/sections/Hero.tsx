import { motion } from 'framer-motion'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/button'
import { FileDown, ArrowRight } from 'lucide-react'
import { ThemeToggle } from '../components/theme-toggle'

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Gradient background similar to mistral.ai */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 gradient-radial" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 rounded-full bg-primary/10 blur-3xl"
      />

      {/* Theme toggle in top right */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50">
        <ThemeToggle />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          {/* Hero content */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-2 leading-tight">
              Frontend dev
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-2 leading-tight">
              <span className="gradient-text">with AI.</span>
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight">
              In Your Hands.
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-2 text-base sm:text-lg md:text-xl text-muted-foreground font-medium"
          >
            Gaurav Jaiswal
          </motion.p>

          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 sm:mb-12 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Building clean, scalable, and user-focused interfaces for modern products 
            with React and React Native.
          </motion.p>

          {/* CTA buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
          >
            {/* Talk to My Projects - Black button */}
            <Button 
              size="lg"
              onClick={scrollToProjects}
              className="group bg-black hover:bg-gray-900 text-white border-0 rounded-md px-6 py-2.5 h-auto font-medium"
            >
              <span className="flex items-center">
                Talk to My Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
            
            {/* Get Resume - White outlined button */}
            <Button 
              variant="outline"
              size="lg"
              onClick={() => window.open('/Gaurav_jaiswal_Res01-1-2.pdf', '_blank')}
              className="group bg-white dark:bg-background border border-gray-300 dark:border-border rounded-md px-6 py-2.5 h-auto font-medium text-black dark:text-foreground hover:bg-gray-50 dark:hover:bg-accent"
            >
              <FileDown className="mr-2 h-4 w-4" />
              Get Resume
            </Button>
            
            {/* Start Building - Text link */}
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center text-black dark:text-foreground font-medium hover:underline bg-transparent border-0 p-0 h-auto"
            >
              Start Building
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      </Container>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full p-1">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-muted-foreground/50 rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  )
}
