import { ArrowDown } from 'lucide-react'
import { skills, experiences, resumeUrl } from '@/lib/data'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

const About = () => {
    const skillCategories = Array.from(new Set(skills.map((s) => s.category)))

    return (
        <section id="about" className="section-padding border-t border-border">
            <div className="container-x">
                <SectionHeader index="02" label="About" title="Engineer for applied AI" />

                {/* Bio */}
                <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-24 md:mb-32">
                    <Reveal className="md:col-span-4">
                        <div className="relative max-w-xs">
                            <img
                                src="/profile.png"
                                alt="Portrait of Muhammad Ukasha"
                                width={702}
                                height={761}
                                loading="lazy"
                                className="w-full aspect-[702/761] object-cover grayscale contrast-125 border border-border"
                            />
                            <span className="absolute -bottom-3 -right-3 w-full h-full border border-white/30 -z-10" aria-hidden />
                        </div>
                    </Reveal>

                    <Reveal className="md:col-span-8 space-y-6 text-lg leading-relaxed text-white/75" delay={100}>
                        <p className="text-2xl md:text-3xl font-light leading-snug text-white">
                            I build AI that does a job: answers customers, routes email, reads documents and catches fraud.
                        </p>
                        <p>
                            I'm an AI engineer based in Multan, Pakistan. Most of my work sits where language models meet
                            business operations — customer-support chatbots, email triage agents, retrieval-augmented
                            assistants, document extraction and n8n workflows that remove manual steps.
                        </p>
                        <p>
                            On the vision side I build CNN and YOLO pipelines, including a system at MEPCO that flags
                            tampered meter-reading images.
                        </p>
                        {resumeUrl && (
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-black border border-white px-6 h-12 font-medium text-base hover:bg-black hover:text-white transition-colors"
                            >
                                Download resume <ArrowDown className="w-4 h-4" />
                            </a>
                        )}
                    </Reveal>
                </div>

                {/* Experience */}
                <Reveal>
                    <h3 className="label text-white mb-6">Experience</h3>
                </Reveal>
                <div className="border-t border-border mb-24 md:mb-32">
                    {experiences.map((exp, i) => (
                        <Reveal key={exp.company} delay={i * 80}>
                            <div className="grid md:grid-cols-12 gap-2 md:gap-8 py-8 border-b border-border">
                                <p className="md:col-span-3 font-mono text-sm text-muted-foreground pt-1">{exp.period}</p>
                                <div className="md:col-span-9">
                                    <h4 className="text-xl md:text-2xl font-bold tracking-tight">{exp.title}</h4>
                                    <p className="text-white/60 mb-3">{exp.company}</p>
                                    <p className="text-muted-foreground leading-relaxed max-w-2xl">{exp.description}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Skills */}
                <Reveal>
                    <h3 className="label text-white mb-6">Toolkit</h3>
                </Reveal>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-border">
                    {skillCategories.map((category, i) => (
                        <Reveal key={category} delay={(i % 3) * 80} className="border-r border-b border-border p-6">
                            <p className="font-mono text-xs text-muted-foreground mb-4">
                                {String(i + 1).padStart(2, '0')} — {category}
                            </p>
                            <ul className="flex flex-wrap gap-2">
                                {skills
                                    .filter((s) => s.category === category)
                                    .map((s) => (
                                        <li key={s.name} className="text-sm border border-border px-3 py-1.5 hover:bg-white hover:text-black hover:border-white transition-colors">
                                            {s.name}
                                        </li>
                                    ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About
