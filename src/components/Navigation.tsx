import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { resumeUrl } from '@/lib/data'
import { cn } from '@/lib/utils'

const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
]

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 24)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav
            className={cn(
                'fixed top-0 inset-x-0 z-50 transition-colors duration-300',
                isScrolled || isOpen ? 'bg-black/90 backdrop-blur border-b border-border' : 'bg-transparent border-b border-transparent'
            )}
        >
            <div className="container-x flex items-center justify-between h-16">
                <a href="#home" className="font-bold tracking-tight text-lg" onClick={() => setIsOpen(false)}>
                    Muhammad Ukasha<span className="text-muted-foreground">.</span>
                </a>

                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link, i) => (
                        <a key={link.name} href={link.href} className="group text-sm text-white/70 hover:text-white transition-colors">
                            <span className="font-mono text-[11px] text-muted-foreground mr-1.5">0{i + 1}</span>
                            <span className="relative">
                                {link.name}
                                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                            </span>
                        </a>
                    ))}
                    {resumeUrl && (
                        <a
                            href={resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors"
                        >
                            Resume
                        </a>
                    )}
                </div>

                <button
                    className="md:hidden p-2 -mr-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            <div className={cn('md:hidden overflow-hidden transition-all duration-300', isOpen ? 'max-h-80' : 'max-h-0')}>
                <div className="container-x py-6 flex flex-col gap-5 border-t border-border">
                    {navLinks.map((link, i) => (
                        <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-2xl font-medium">
                            <span className="font-mono text-xs text-muted-foreground mr-3">0{i + 1}</span>
                            {link.name}
                        </a>
                    ))}
                    {resumeUrl && (
                        <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="text-2xl font-medium">
                            <span className="font-mono text-xs text-muted-foreground mr-3">↗</span>
                            Resume
                        </a>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navigation
