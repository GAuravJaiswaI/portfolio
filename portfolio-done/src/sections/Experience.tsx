import { motion } from 'framer-motion'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Briefcase, Calendar, TrendingUp } from 'lucide-react'

const experiences = [
  {
    id: 1,
    company: 'TechCorp Solutions',
    role: 'Frontend Developer',
    duration: '2023 - Present',
    type: 'Full-time',
    responsibilities: [
      'Led React Native migration project reducing app load time by 40%',
      'Implemented a component library used across 5+ products, improving development velocity',
      'Mentored 2 junior developers on React best practices and code review processes',
      'Collaborated with design team to implement responsive, accessible interfaces',
    ],
    skills: ['React', 'React Native', 'TypeScript', 'Leadership'],
  },
  {
    id: 2,
    company: 'StartupXYZ',
    role: 'Junior Frontend Developer',
    duration: '2022 - 2023',
    type: 'Full-time',
    responsibilities: [
      'Built responsive web interfaces using React and modern CSS frameworks',
      'Participated in agile development sprints and daily stand-ups',
      'Improved website performance metrics by 25% through code optimization',
      'Integrated third-party APIs and implemented real-time features using WebSockets',
    ],
    skills: ['React', 'JavaScript', 'CSS', 'REST APIs'],
  },
]

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Building the future of web.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building impactful products and leading frontend initiatives.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background" />

                {/* Content */}
                <div className={`${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'} pl-12 md:pl-0`}>
                  <Card className="glass hover:border-primary/20 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <CardTitle className="text-2xl font-bold mb-1">
                            {exp.role}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Briefcase className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <Badge variant="secondary">
                          {exp.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <TrendingUp className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                            <span className="text-sm">{resp}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-4 border-t">
                        {exp.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs bg-secondary/50"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Empty column for alternating layout */}
                <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
