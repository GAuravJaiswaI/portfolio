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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Academic Foundation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
            <Card className="overflow-hidden glass border-primary/10 hover:border-primary/20 transition-all duration-300">
              <div className="absolute inset-0 gradient-radial opacity-30" />
              <CardHeader className="relative text-center pb-4">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold mb-2">
                  {education.degree}
                </CardTitle>
                <CardDescription className="text-lg">
                  <span className="font-semibold text-foreground">{education.institute}</span>
                  <div className="flex items-center justify-center gap-4 mt-2">
                    <span>{education.duration}</span>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {education.grade}
                    </Badge>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="relative pt-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {education.highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="inline-flex p-3 bg-secondary/50 rounded-lg mb-3">
                        <highlight.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-1">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">
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
