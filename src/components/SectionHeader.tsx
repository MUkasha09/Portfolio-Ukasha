import Reveal from './Reveal'

interface SectionHeaderProps {
    index: string
    label: string
    title: string
    intro?: string
}

const SectionHeader = ({ index, label, title, intro }: SectionHeaderProps) => (
    <Reveal className="mb-14 md:mb-20">
        <div className="flex items-center gap-4 mb-6">
            <span className="label text-white">{index}</span>
            <span className="h-px w-12 bg-white/40" />
            <span className="label">{label}</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">{title}</h2>
        {intro && <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{intro}</p>}
    </Reveal>
)

export default SectionHeader
