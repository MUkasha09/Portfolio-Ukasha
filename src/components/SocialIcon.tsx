import { Github, Linkedin, Mail } from 'lucide-react'

const SocialIcon = ({ icon, className = 'w-5 h-5' }: { icon: string; className?: string }) => {
    switch (icon) {
        case 'github':
            return <Github className={className} />
        case 'linkedin':
            return <Linkedin className={className} />
        case 'mail':
            return <Mail className={className} />
        default:
            return null
    }
}

export default SocialIcon
