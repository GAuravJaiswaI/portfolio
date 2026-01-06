import { motion } from 'framer-motion'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Card } from '../components/ui/card'
import { Code2, Palette, Zap, Users } from 'lucide-react'

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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your frontend future belongs in capable hands.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a frontend engineer passionate about creating seamless user experiences 
            through clean, maintainable code.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-background/50 backdrop-blur border-muted hover:border-primary/20 transition-colors">
                <feature.icon className="h-10 w-10 mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
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
          <Card className="p-8 md:p-12 bg-background/50 backdrop-blur">
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
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
          </Card>
        </motion.div>
      </Container>
    </Section>
  )
}
