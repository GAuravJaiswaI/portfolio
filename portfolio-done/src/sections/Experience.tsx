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
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            Building the future of web.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Building impactful products and leading frontend initiatives.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-4 sm:gap-8 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-6 sm:top-8 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10 hidden sm:block" />

                {/* Content */}
                <div className={`${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'} pl-0 sm:pl-12 md:pl-0`}>
                  <Card className="glass hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="pb-3 sm:pb-4">
                      <div className="flex flex-col sm:flex-row items-start justify-between gap-2 mb-2">
                        <div className="w-full sm:w-auto">
                          <CardTitle className="text-xl sm:text-2xl font-bold mb-1">
                            {exp.role}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm sm:text-base">
                            <Briefcase className="w-4 h-4 flex-shrink-0" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span>{exp.duration}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 sm:space-y-3 mb-4">
                        {exp.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 text-primary flex-shrink-0" />
                            <span className="text-xs sm:text-sm leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t">
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
