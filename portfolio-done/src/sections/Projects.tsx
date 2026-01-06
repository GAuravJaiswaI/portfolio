import { motion } from 'framer-motion'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { ExternalLink, Github, ArrowRight, Sparkles } from 'lucide-react'

const projects = [
  {
    id: 1,
    featured: true,
    title: 'AI Image Enhancer',
    description: 'AI-powered image enhancement tool with upscaling, denoising, and restoration capabilities. Upload images and get professional-quality results instantly.',
    longDescription: 'Built with React 19 and Vite, featuring AI-powered image enhancement with real-time progress tracking. Includes interactive before/after comparison slider, secure image processing, and a modern responsive UI with 3D graphics using Three.js.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Three.js', 'Framer Motion', 'Axios'],
    github: 'https://github.com/GAuravJaiswaI/AI-Image-Enhancer',
    live: 'https://ai-image-enhancer-phi.vercel.app/',
    impact: 'AI-Powered Enhancement',
  },
  {
    id: 2,
    title: 'Task Management Platform',
    description: 'Productivity web app with drag-and-drop functionality, real-time collaboration, and advanced filtering.',
    techStack: ['React', 'Tailwind CSS', 'DnD Kit'],
    github: 'https://github.com/GAuravJaiswaI',
    live: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather data visualization with interactive charts and location-based forecasting.',
    techStack: ['React', 'Chart.js', 'OpenWeather API', 'Geolocation'],
    github: 'https://github.com/GAuravJaiswaI',
    live: '#',
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'Dashboard for tracking social media metrics with data visualization and export functionality.',
    techStack: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/GAuravJaiswaI',
    live: '#',
  },
]

export function Projects() {
  return (
    <Section id="projects" className="bg-muted/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I can do for you.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world applications built with modern technologies and best practices.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {/* Featured Project */}
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden glass border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="absolute inset-0 gradient-radial opacity-50" />
                <CardHeader className="relative pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Featured Project
                    </Badge>
                    {project.impact && (
                      <Badge variant="outline" className="border-green-600/20 text-green-600">
                        {project.impact}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-3xl md:text-4xl font-bold mb-3">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    {project.longDescription || project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-secondary/80 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="relative gap-4">
                  <Button variant="default" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  {project.live !== '#' && (
                    <Button variant="outline" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full glass hover:border-primary/20 transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-secondary/50 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-4">
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    {project.live !== '#' && (
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
