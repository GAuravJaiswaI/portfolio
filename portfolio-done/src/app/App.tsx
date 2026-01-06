import { lazy, Suspense } from 'react'
import { Hero } from '../sections/Hero'
import { Navbar } from '../components/navbar'

// Lazy load sections for better performance
const About = lazy(() => import('../sections/About').then(module => ({ default: module.About })))
const Skills = lazy(() => import('../sections/Skills').then(module => ({ default: module.Skills })))
const Projects = lazy(() => import('../sections/Projects').then(module => ({ default: module.Projects })))
const Experience = lazy(() => import('../sections/Experience').then(module => ({ default: module.Experience })))
const Education = lazy(() => import('../sections/Education').then(module => ({ default: module.Education })))
const Contact = lazy(() => import('../sections/Contact').then(module => ({ default: module.Contact })))

// Loading component
function SectionLoader() {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export function App() {
  return (
    <>
      {/* Floating Navbar */}
      <Navbar />
      
      <main className="min-h-screen">
        {/* Hero loads immediately */}
        <Hero />
        
        {/* Other sections load on demand */}
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Education />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
    </>
  )
}
