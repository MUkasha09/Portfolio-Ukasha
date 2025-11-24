import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ]

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-strong shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection('#home')
                        }}
                        className="text-2xl font-bold text-gradient cursor-pointer"
                    >
                        Portfolio
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection(link.href)
                                }}
                                className="text-foreground/80 hover:text-foreground transition-colors duration-300 relative group cursor-pointer"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                        <Button
                            onClick={() => scrollToSection('#contact')}
                            className="ml-4"
                        >
                            Get In Touch
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="glass-strong px-4 py-6 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection(link.href)
                            }}
                            className="block text-foreground/80 hover:text-foreground transition-colors duration-300 cursor-pointer"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button
                        onClick={() => scrollToSection('#contact')}
                        className="w-full"
                    >
                        Get In Touch
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
