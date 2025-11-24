import { useState } from 'react'
import { projects, categories } from '@/lib/data'
import ProjectCard from './ProjectCard'
import { Button } from './ui/button'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const { ref, isVisible } = useScrollAnimation()

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === selectedCategory)

    return (
        <section id="projects" className="section-padding bg-background/50">
            <div className="max-w-7xl mx-auto">
                <div
                    ref={ref}
                    className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A collection of my recent work showcasing various technologies and design approaches
                    </p>
                </div>

                {/* Category Filter */}
                <div
                    className={`flex flex-wrap items-center justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? 'default' : 'outline'}
                            onClick={() => setSelectedCategory(category)}
                            className="transition-all duration-300"
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground text-lg">
                            No projects found in this category.
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Projects
