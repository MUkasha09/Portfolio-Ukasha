import { skills, experiences } from '@/lib/data'
import { Badge } from './ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Download } from 'lucide-react'
import { Button } from './ui/button'

const About = () => {
    const { ref, isVisible } = useScrollAnimation()

    const skillCategories = Array.from(new Set(skills.map((skill) => skill.category)))

    return (
        <section id="about" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <div
                    ref={ref}
                    className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Passionate ML engineer with expertise in AI and data science
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Profile Section */}
                    <div
                        className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`}
                    >
                        <div className="relative w-64 h-64 mx-auto lg:mx-0">
                            <div className="absolute inset-0 gradient-animated rounded-full opacity-50 blur-2xl"></div>
                            <img
                                src="/profile.png"
                                alt="Muhammad Ukasha"
                                className="relative w-full h-full object-cover rounded-full border-4 border-primary/50"
                            />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold">Hi, I'm Muhammad Ukasha</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                I'm a passionate Machine Learning Engineer with expertise in building
                                intelligent systems that leverage AI and data science. I specialize in
                                developing scalable ML models, deep learning solutions, and data-driven
                                applications that solve complex real-world problems.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                When I'm not training models, you can find me exploring cutting-edge ML research,
                                contributing to AI projects, or sharing insights about machine learning and
                                artificial intelligence with the community.
                            </p>
                            <Button className="mt-4">
                                <Download className="w-4 h-4 mr-2" />
                                Download Resume
                            </Button>
                        </div>
                    </div>

                    {/* Experience Timeline */}
                    <div
                        className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`}
                    >
                        <h3 className="text-2xl font-bold mb-6">Experience</h3>
                        <div className="space-y-4">
                            {experiences.map((exp, index) => (
                                <Card key={index} className="relative overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-primary"></div>
                                    <CardHeader>
                                        <CardTitle className="text-lg">{exp.title}</CardTitle>
                                        <CardDescription>
                                            {exp.company} • {exp.period}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{exp.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div
                    className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h3 className="text-2xl font-bold mb-8 text-center">Skills & Technologies</h3>
                    <div className="space-y-8">
                        {skillCategories.map((category) => (
                            <div key={category}>
                                <h4 className="text-lg font-semibold mb-4 text-gradient-secondary">
                                    {category}
                                </h4>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {skills
                                        .filter((skill) => skill.category === category)
                                        .map((skill) => (
                                            <Card key={skill.name} className="relative overflow-hidden">
                                                <CardContent className="p-4">
                                                    <div className="space-y-2">
                                                        <div className="flex items-center justify-between">
                                                            <span className="font-medium">{skill.name}</span>
                                                            <Badge variant="secondary">{skill.level}%</Badge>
                                                        </div>
                                                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                                                            <div
                                                                className="h-full gradient-primary transition-all duration-1000 ease-out"
                                                                style={{
                                                                    width: isVisible ? `${skill.level}%` : '0%',
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
