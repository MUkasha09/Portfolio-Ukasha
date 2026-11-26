import { useState, FormEvent, ChangeEvent } from 'react'
import { ArrowUpRight, Send } from 'lucide-react'
import { socialLinks } from '@/lib/data'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

const EMAIL = '1718ukashae2@gmail.com'

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm({ ...form, [e.target.name]: e.target.value })

    // No backend: open the visitor's mail app with the message pre-filled,
    // instead of pretending a message was sent.
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const body = `${form.message}\n\n— ${form.name} (${form.email})`
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
    }

    const channels = [
        { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
        { label: 'Phone', value: '+92 306 0255284', href: 'tel:+923060255284' },
        ...socialLinks
            .filter((l) => l.icon !== 'mail')
            .map((l) => ({ label: l.name, value: l.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''), href: l.url })),
    ]

    return (
        <section id="contact" className="section-padding border-t border-border">
            <div className="container-x">
                <SectionHeader
                    index="03"
                    label="Contact"
                    title="Let's build something."
                    intro="Hiring, a project, or a question about one of these systems — email is fastest."
                />

                <div className="grid lg:grid-cols-12 gap-14">
                    <Reveal className="lg:col-span-5">
                        <ul className="border-t border-border">
                            {channels.map((c) => (
                                <li key={c.label}>
                                    <a
                                        href={c.href}
                                        target={c.href.startsWith('http') ? '_blank' : undefined}
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between gap-4 py-5 border-b border-border hover:pl-3 transition-all"
                                    >
                                        <span>
                                            <span className="label block mb-1">{c.label}</span>
                                            <span className="text-base md:text-lg break-all">{c.value}</span>
                                        </span>
                                        <ArrowUpRight className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-white group-hover:rotate-45 transition-all" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <p className="label mt-6">Multan, Pakistan · PKT (UTC+5)</p>
                    </Reveal>

                    <Reveal className="lg:col-span-7" delay={100}>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <label className="block">
                                    <span className="label">Name</span>
                                    <Input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required className="text-base" />
                                </label>
                                <label className="block">
                                    <span className="label">Email</span>
                                    <Input name="email" type="email" placeholder="you@company.com" value={form.email} onChange={handleChange} required className="text-base" />
                                </label>
                            </div>
                            <label className="block">
                                <span className="label">Subject</span>
                                <Input name="subject" placeholder="What's this about?" value={form.subject} onChange={handleChange} required className="text-base" />
                            </label>
                            <label className="block">
                                <span className="label">Message</span>
                                <Textarea name="message" placeholder="Tell me about it…" value={form.message} onChange={handleChange} required rows={5} className="text-base resize-none" />
                            </label>
                            <div className="flex flex-wrap items-center gap-5">
                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-2 bg-white text-black border border-white px-8 h-12 font-medium hover:bg-black hover:text-white transition-colors"
                                >
                                    <Send className="w-4 h-4" /> Send message
                                </button>
                                <span className="text-sm text-muted-foreground">Opens your email app with this message filled in.</span>
                            </div>
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default Contact
