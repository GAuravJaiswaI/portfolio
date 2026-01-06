import { motion } from 'framer-motion'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { GraduationCap, Trophy, BookOpen, Award } from 'lucide-react'

const education = {
  degree: 'Bachelor of Technology in Computer Science',
  institute: 'XYZ University',
  duration: '2018 - 2022',
  grade: '8.5/10 CGPA',
  highlights: [
    {
      icon: BookOpen,
      title: 'Relevant Coursework',
      description: 'Data Structures, Algorithms, Web Development, Mobile Computing',
    },
    {
      icon: Trophy,
      title: 'Achievements',
      description: 'Tech Club President, Hackathon Winner (2021)',
    },
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Consistent top performer with 8.5/10 CGPA',
    },
  ],
}

export function Education() {
  return (
    <Section id="education" className="bg-muted/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            Academic Foundation
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Building a strong foundation in computer science and engineering.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden glass border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 gradient-radial opacity-30" />
              <CardHeader className="relative text-center pb-4">
                <div className="inline-flex p-3 sm:p-4 bg-primary/10 rounded-full mb-3 sm:mb-4">
                  <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 px-4">
                  {education.degree}
                </CardTitle>
                <CardDescription className="text-base sm:text-lg px-4">
                  <span className="font-semibold text-foreground">{education.institute}</span>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-2">
                    <span className="text-sm sm:text-base">{education.duration}</span>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
                      {education.grade}
                    </Badge>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="relative pt-6 sm:pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {education.highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="inline-flex p-2 sm:p-3 bg-secondary/50 rounded-lg mb-2 sm:mb-3">
                        <highlight.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-1 text-sm sm:text-base">{highlight.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
