import { useEffect, useState } from 'react'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from './ui/button'
import { socialLinks } from '@/lib/data'

const Hero = () => {
    const [displayText, setDisplayText] = useState('')
    const fullText = "Machine Learning Engineer"

    useEffect(() => {
        let index = 0
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.slice(0, index))
                index++
            } else {
                clearInterval(timer)
            }
        }, 50)

        return () => clearInterval(timer)
    }, [])

    const scrollToProjects = () => {
        const element = document.querySelector('#projects')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'github':
                return <Github className="w-5 h-5" />
            case 'linkedin':
                return <Linkedin className="w-5 h-5" />
            case 'mail':
                return <Mail className="w-5 h-5" />
            default:
                return null
        }
    }

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
        >
            {/* Floating elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center space-y-8 animate-fade-in-up">
                    {/* Greeting */}
                    <div className="space-y-2">
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Hi, I'm
                        </p>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
                            <span className="text-gradient">Muhammad Ukasha</span>
                        </h1>
                    </div>

                    {/* Typing animation */}
                    <div className="h-12 md:h-16">
                        <h2 className="text-2xl md:text-4xl font-semibold text-foreground/90">
                            {displayText}
                            <span className="animate-pulse">|</span>
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        I build intelligent systems that learn from data and solve real-world problems.
                        Passionate about AI, deep learning, and creating impactful ML solutions.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button
                            size="lg"
                            onClick={scrollToProjects}
                            className="text-lg px-8"
                        >
                            View My Work
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => {
                                const element = document.querySelector('#contact')
                                if (element) element.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="text-lg px-8"
                        >
                            Contact Me
                        </Button>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-4 pt-8">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full glass hover:glass-strong transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
                                aria-label={link.name}
                            >
                                {getIcon(link.icon)}
                            </a>
                        ))}
                    </div>

                    {/* Scroll indicator */}
                    <div className="pt-12 animate-bounce">
                        <button
                            onClick={scrollToProjects}
                            className="mx-auto flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Scroll down"
                        >
                            <span className="text-sm">Scroll Down</span>
                            <ArrowDown className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
