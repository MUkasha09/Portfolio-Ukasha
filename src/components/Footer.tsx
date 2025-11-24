import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'
import { socialLinks } from '@/lib/data'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'github':
                return <Github className="w-5 h-5" />
            case 'linkedin':
                return <Linkedin className="w-5 h-5" />
            case 'twitter':
                return <Twitter className="w-5 h-5" />
            case 'mail':
                return <Mail className="w-5 h-5" />
            default:
                return null
        }
    }

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <footer className="glass-strong border-t border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gradient">Portfolio</h3>
                        <p className="text-muted-foreground">
                            Building intelligent systems with machine learning and AI.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'Projects', 'About', 'Contact'].map((link) => (
                                <li key={link}>
                                    <button
                                        onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                                        className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                                    >
                                        {link}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Connect</h4>
                        <div className="flex gap-4">
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
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border/50">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-muted-foreground text-sm">
                            © {currentYear} Muhammad Ukasha. All rights reserved.
                        </p>
                        <p className="text-muted-foreground text-sm flex items-center gap-1">
                            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using
                            React & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
