import { useState, FormEvent } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

const Contact = () => {
    const { ref, isVisible } = useScrollAnimation()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })

            // Reset status after 3 seconds
            setTimeout(() => setSubmitStatus('idle'), 3000)
        }, 1500)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <section id="contact" className="section-padding bg-background/50">
            <div className="max-w-7xl mx-auto">
                <div
                    ref={ref}
                    className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? Feel free to reach out!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div
                        className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Mail className="w-5 h-5 text-primary" />
                                    Email
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    <a href="mailto:1718ukashae2@gmail.com" className="hover:text-primary transition-colors">
                                        1718ukashae2@gmail.com
                                    </a>
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Phone className="w-5 h-5 text-primary" />
                                    Phone
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    <a href="tel:+923060255284" className="hover:text-primary transition-colors">
                                        +92 306 0255284
                                    </a>
                                </CardDescription>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    Location
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>Pakistan</CardDescription>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div
                        className={`lg:col-span-2 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Send Me a Message</CardTitle>
                                <CardDescription>
                                    Fill out the form below and I'll get back to you as soon as possible
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium">
                                                Name *
                                            </label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="Your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">
                                                Email *
                                            </label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="your.email@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium">
                                            Subject *
                                        </label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            placeholder="What's this about?"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">
                                            Message *
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Your message..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                        />
                                    </div>

                                    {submitStatus === 'success' && (
                                        <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                                            Message sent successfully! I'll get back to you soon.
                                        </div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive">
                                            Something went wrong. Please try again.
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isSubmitting}
                                        className="w-full md:w-auto"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4 mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
