import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { ThemeToggle } from './theme-toggle'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import React from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Always show on mobile/tablet, show after scroll on large desktop
      if (window.innerWidth < 1024) {
        setIsVisible(true)
      } else {
        setIsVisible(scrollY > 100)
      }
    }

    // Set initial state
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80 // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-full max-w-4xl px-2 sm:px-4"
        >
          <div className="glass rounded-full px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 shadow-lg border border-border/50">
            <div className="flex items-center justify-between gap-2 sm:gap-4">
              {/* Logo - Clickable on mobile/tablet to open menu */}
              <button
                onClick={(e) => {
                  if (window.innerWidth < 1024) {
                    e.preventDefault()
                    setIsMobileMenuOpen(!isMobileMenuOpen)
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
                className="font-bold text-base sm:text-lg md:text-xl hover:scale-110 transition-transform cursor-pointer flex-shrink-0"
              >
                GJ
              </button>

              {/* Desktop Navigation - Only show on large screens */}
              <div className="hidden lg:flex items-center gap-3 xl:gap-4 2xl:gap-6 flex-1 justify-center">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-sm xl:text-base font-medium text-muted-foreground hover:text-foreground transition-colors px-2 xl:px-3 py-1.5 rounded-md hover:bg-accent/50 whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Right Actions - Desktop only */}
              <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
                <ThemeToggle />
              </div>

              {/* Tablet/Mobile - Show theme toggle if menu is closed */}
              <div className="lg:hidden flex items-center gap-2">
                {!isMobileMenuOpen && <ThemeToggle />}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Menu Drawer - Opens as overlay */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                
                {/* Drawer */}
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="fixed top-0 left-0 h-full w-80 sm:w-96 max-w-[85vw] bg-background border-r border-border shadow-xl z-50 lg:hidden overflow-y-auto"
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-xl font-bold">Menu</h2>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label="Close menu"
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>

                    {/* Navigation Items */}
                    <nav className="flex flex-col gap-2">
                      {navItems.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-accent/50 active:bg-accent"
                        >
                          {item.label}
                        </a>
                      ))}
                    </nav>

                    {/* Theme Toggle */}
                    <div className="mt-8 pt-6 border-t border-border">
                      <div className="flex items-center justify-between px-4">
                        <span className="text-sm text-muted-foreground">Theme</span>
                        <ThemeToggle />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
