import { motion } from 'framer-motion'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card'

const skillCategories = [
  {
    title: 'Frontend',
    description: 'Modern web & mobile interfaces',
    skills: ['React', 'React Native', 'JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Styled Components'],
  },
  {
    title: 'Backend',
    description: 'Scalable server solutions',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs'],
  },
  {
    title: 'Tools & Others',
    description: 'Development ecosystem',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Chrome DevTools', 'Vercel'],
  },
]

export function Skills() {
  return (
    <Section id="skills">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get the job done faster, better.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web and mobile applications.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full glass hover:border-primary/20 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">
                    {category.title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1 + skillIndex * 0.05 
                        }}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full
                          border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
