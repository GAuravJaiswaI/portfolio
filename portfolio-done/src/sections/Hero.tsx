import { motion } from 'framer-motion'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/button'
import { FileDown, FolderOpen, ArrowRight } from 'lucide-react'
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
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
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
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
      />

      {/* Theme toggle in top right */}
      <div className="absolute top-8 right-8 z-50">
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
            className="mb-8"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2">
              <span className="gradient-text">Frontend AI.</span>
            </h1>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              In Your Hands.
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-2 text-lg md:text-xl text-muted-foreground font-medium"
          >
            Gaurav Jaiswal
          </motion.p>

          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            Building clean, scalable, and user-focused interfaces for modern products 
            with React and React Native.
          </motion.p>

          {/* CTA buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg"
              onClick={scrollToProjects}
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Talk to My Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => window.open('/Gaurav_jaiswal_Res01-1-2.pdf', '_blank')}
              className="group"
            >
              <FileDown className="mr-2 h-4 w-4" />
              Get Resume
            </Button>
            
            <Button 
              variant="ghost"
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group"
            >
              Start Building
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
