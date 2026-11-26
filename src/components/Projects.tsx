import { useState } from 'react'
import { ArrowUpRight, Github } from 'lucide-react'
import { projects, categories } from '@/lib/data'
import { cn } from '@/lib/utils'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

const Projects = () => {
    const [selected, setSelected] = useState('All')

    // Featured first, original order otherwise.
    const ordered = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured))
    const visible = selected === 'All' ? ordered : ordered.filter((p) => p.category === selected)

    return (
        <section id="projects" className="section-padding border-t border-border">
            <div className="container-x">
                <SectionHeader
                    index="01"
                    label="Work"
                    title="Selected projects"
                    intro="Systems built for utilities, finance and business operations — conversational AI, automation and computer vision."
                />

                <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter projects by category">
                    {categories.map((category) => {
                        const count = category === 'All' ? projects.length : projects.filter((p) => p.category === category).length
                        const active = selected === category
                        return (
                            <button
                                key={category}
                                role="tab"
                                aria-selected={active}
                                onClick={() => setSelected(category)}
                                className={cn(
                                    'font-mono text-xs uppercase tracking-wider px-3 py-2 border transition-colors',
                                    active ? 'bg-white text-black border-white' : 'border-border text-white/70 hover:border-white hover:text-white'
                                )}
                            >
                                {category} <span className={active ? 'text-black/50' : 'text-muted-foreground'}>{count}</span>
                            </button>
                        )
                    })}
                </div>

                <div className="grid md:grid-cols-2 border-l border-t border-border">
                    {visible.map((project, i) => (
                        <Reveal key={project.id} delay={(i % 2) * 80} className="border-r border-b border-border">
                            <article className="group h-full p-6 md:p-8 flex flex-col transition-colors duration-300 hover:bg-white hover:text-black">
                                <div className="flex items-center justify-between mb-10">
                                    <span className="font-mono text-xs text-muted-foreground group-hover:text-black/60">
                                        {String(i + 1).padStart(2, '0')} / {project.category}
                                    </span>
                                    {project.featured && (
                                        <span className="font-mono text-[10px] uppercase tracking-widest border border-current px-2 py-0.5">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-2xl font-bold tracking-tight leading-tight mb-3">{project.title}</h3>
                                <p className="text-muted-foreground group-hover:text-black/70 leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="font-mono text-[11px] uppercase tracking-wider text-white/60 group-hover:text-black/60">
                                            #{tag.replace(/\s+/g, '')}
                                        </span>
                                    ))}
                                </div>

                                {(project.github || project.demo) && (
                                    <div className="flex gap-5 mt-6 pt-5 border-t border-border group-hover:border-black/20 text-sm font-medium">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline underline-offset-4">
                                                <Github className="w-4 h-4" /> Code
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline underline-offset-4">
                                                Live demo <ArrowUpRight className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                )}
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
