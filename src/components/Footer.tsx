import { ArrowUp } from 'lucide-react'

const Footer = () => (
    <footer className="border-t border-border">
        <div className="container-x py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} Muhammad Ukasha</p>
            <a href="#home" className="label inline-flex items-center gap-2 hover:text-white transition-colors">
                Back to top <ArrowUp className="w-3.5 h-3.5" />
            </a>
        </div>
    </footer>
)

export default Footer
