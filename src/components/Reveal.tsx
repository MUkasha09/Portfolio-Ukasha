import { ReactNode } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

interface RevealProps {
    children: ReactNode
    className?: string
    delay?: number
}

/** Fades content up once, the first time it scrolls into view. */
const Reveal = ({ children, className, delay = 0 }: RevealProps) => {
    const { ref, isVisible } = useScrollAnimation()
    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={cn(
                'transition-all duration-700 ease-out',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                className
            )}
        >
            {children}
        </div>
    )
}

export default Reveal
