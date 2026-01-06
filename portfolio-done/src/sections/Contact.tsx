import { motion } from 'framer-motion'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Mail, Linkedin, Github, Code2, ArrowRight, MessageCircle } from 'lucide-react'

const contactLinks = [
  {
    name: 'Email',
    value: 'gauravjaiswal0531@gmail.com',
    href: 'mailto:gauravjaiswal0531@gmail.com',
    icon: Mail,
    color: 'hover:text-red-600 hover:border-red-600/20',
  },
  {
    name: 'LinkedIn',
    value: 'Gaurav Jaiswal',
    href: 'https://www.linkedin.com/in/gaurav-jaiswal-926168251/',
    icon: Linkedin,
    color: 'hover:text-blue-600 hover:border-blue-600/20',
  },
  {
    name: 'GitHub',
    value: '@GAuravJaiswaI',
    href: 'https://github.com/GAuravJaiswaI',
    icon: Github,
    color: 'hover:text-purple-600 hover:border-purple-600/20',
  },
  {
    name: 'LeetCode',
    value: '@Gaurav0031',
    href: 'https://leetcode.com/u/Gaurav0031/',
    icon: Code2,
    color: 'hover:text-orange-600 hover:border-orange-600/20',
  },
]

export function Contact() {
  return (
    <Section id="contact" className="pb-32">
      <Container>
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The next chapter of your project
            <span className="block gradient-text">is yours.</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="group">
              <a href="mailto:gauravjaiswal0531@gmail.com">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start a conversation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/Gaurav_jaiswal_Res01-1-2.pdf" download>
                Talk to my resume
              </a>
            </Button>
          </div>
        </motion.div>
        
        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="block"
            >
              <Card className={`p-6 h-full glass hover:border-primary/20 transition-all duration-300 group ${link.color}`}>
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-secondary/50 rounded-lg mb-3 group-hover:scale-110 transition-transform">
                    <link.icon className="h-6 w-6 transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{link.name}</p>
                  <p className="font-medium text-foreground">
                    {link.value}
                  </p>
                </div>
              </Card>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 pt-8 border-t text-center"
        >
          <p className="text-sm text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Gaurav Jaiswal. All rights reserved.
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}
