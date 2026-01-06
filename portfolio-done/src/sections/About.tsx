import { motion } from 'framer-motion'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Card } from '../components/ui/card'
import { Code2, Palette, Zap, Users, Calendar, Clock, User, Linkedin, Github, Mail, MessageCircle, Facebook, Instagram, Twitter } from 'lucide-react'

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that teams love to work with"
    },
    {
      icon: Palette,
      title: "Design Focused",
      description: "Bridging the gap between design and development for pixel-perfect UIs"
    },
    {
      icon: Zap,
      title: "Performance First",
      description: "Optimizing for speed and efficiency in every line of code"
    },
    {
      icon: Users,
      title: "User Centric",
      description: "Building experiences that delight users and drive business value"
    }
  ]

  return (
    <Section id="about" className="bg-muted/50">
      <Container>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            Your frontend future belongs in capable hands.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            I'm a frontend engineer passionate about creating seamless user experiences 
            through clean, maintainable code.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-4 sm:p-6 h-full bg-background/50 backdrop-blur border-muted hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 mb-3 sm:mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-sm sm:text-base">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* About content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-6 sm:p-8 md:p-12 bg-background/50 backdrop-blur">
            {/* Date and Reading Time Header */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 pb-6 border-b border-border/50">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span className="text-sm sm:text-base">January 6, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span className="text-sm sm:text-base">5 min read</span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p>
                With expertise in React and React Native, I build applications that 
                not only look great but perform exceptionally well. My approach combines 
                modern development practices with a deep understanding of user needs.
              </p>
              
              <p>
                I focus on building scalable solutions that teams can easily maintain 
                and extend, while ensuring the end user gets a delightful experience. 
                From complex state management to smooth animations, I handle the technical 
                challenges so users can focus on what matters.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or solving algorithmic challenges to keep my 
                problem-solving skills sharp.
              </p>
            </div>

            {/* Author Footer */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Written by</span>
                  <span className="text-sm font-semibold text-foreground">Gaurav Jaiswal</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">Connect:</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full bg-[#5865F2] hover:bg-[#4752C4] flex items-center justify-center transition-colors"
                      aria-label="Discord"
                    >
                      <MessageCircle className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full bg-[#1877F2] hover:bg-[#166FE5] flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full bg-gradient-to-br from-[#F56040] via-[#E1306C] to-[#C13584] hover:opacity-90 flex items-center justify-center transition-opacity"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/gaurav-jaiswal-926168251/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full bg-[#0077B5] hover:bg-[#006399] flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full bg-black hover:bg-gray-900 dark:bg-gray-900 dark:hover:bg-gray-800 flex items-center justify-center transition-colors"
                      aria-label="X (Twitter)"
                    >
                      <Twitter className="h-4 w-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </Section>
  )
}
