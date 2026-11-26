import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { socialLinks } from '@/lib/data'
import SocialIcon from './SocialIcon'

const facts = [
    { label: 'Now', value: 'Computer Engineer @ MEPCO' },
    { label: 'Focus', value: 'LLM agents · RAG · Computer vision' },
    { label: 'Based', value: 'Multan, Pakistan' },
]

const Hero = () => (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 pb-12">
        <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />

        <div className="container-x relative">
            <p className="label mb-8 animate-fade-in">
                <span className="inline-block w-2 h-2 bg-white mr-3 align-middle" />
                Selected work · 2025 — 2026
            </p>

            <h1 className="font-black tracking-tighter leading-[0.9] text-[clamp(3.25rem,12vw,9.5rem)] animate-fade-in-up">
                Muhammad
                <br />
                <span className="text-white/35">Ukasha</span>
            </h1>

            <div className="mt-10 grid md:grid-cols-12 gap-8 items-end animate-fade-in-up" style={{ animationDelay: '150ms', animationFillMode: 'both' }}>
                <p className="md:col-span-7 text-xl md:text-2xl font-light leading-snug text-white/80">
                    <span className="text-white font-medium">AI Engineer.</span> I build LLM agents, RAG assistants,
                    workflow automation and computer-vision models for real operations — not demos.
                </p>

                <div className="md:col-span-5 flex flex-wrap gap-3 md:justify-end">
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 bg-white text-black border border-white px-6 h-12 font-medium hover:bg-black hover:text-white transition-colors"
                    >
                        See the work <ArrowDownRight className="w-4 h-4" />
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 border border-white/30 px-6 h-12 font-medium hover:border-white hover:bg-white hover:text-black transition-colors"
                    >
                        Contact <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>

            <div className="mt-20 grid sm:grid-cols-3 border-t border-border">
                {facts.map((f) => (
                    <div key={f.label} className="py-5 sm:pr-6 border-b sm:border-b-0 border-border">
                        <p className="label mb-2">{f.label}</p>
                        <p className="text-sm md:text-base">{f.value}</p>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex items-center gap-2">
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        className="p-3 border border-border hover:bg-white hover:text-black hover:border-white transition-colors"
                    >
                        <SocialIcon icon={link.icon} className="w-4 h-4" />
                    </a>
                ))}
            </div>
        </div>
    </section>
)

export default Hero
