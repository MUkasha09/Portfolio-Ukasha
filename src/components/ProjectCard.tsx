import { Project } from '@/lib/data'
import { Badge } from './ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink, Github } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog'

interface ProjectCardProps {
    project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Card className="overflow-hidden group">
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <CardHeader>
                <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    {project.featured && (
                        <Badge variant="secondary" className="ml-2">
                            Featured
                        </Badge>
                    )}
                </div>
                <CardDescription className="line-clamp-2">
                    {project.description}
                </CardDescription>
            </CardHeader>

            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="gap-2">
                {project.github && (
                    <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                        </a>
                    </Button>
                )}
                {project.demo && (
                    <Button variant="outline" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                        </a>
                    </Button>
                )}
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="sm" className="ml-auto">
                            View Details
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                            <DialogDescription>{project.category}</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                            <p className="text-foreground/90">{project.description}</p>
                            <div>
                                <h4 className="font-semibold mb-2">Technologies Used:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag}>{tag}</Badge>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-2 pt-4">
                                {project.github && (
                                    <Button variant="outline" asChild>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="w-4 h-4 mr-2" />
                                            View Code
                                        </a>
                                    </Button>
                                )}
                                {project.demo && (
                                    <Button asChild>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Live Demo
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </CardFooter>
        </Card>
    )
}

export default ProjectCard
