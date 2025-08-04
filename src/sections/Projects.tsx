import { ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel";

const projects = [
    {
        title: "Zoo Animal Multiclass Classification",
        description: "A machine learning model for predicting zoo animal classes based on whether the animal possesses certain traits.",
        info: ["Python", "Pandas", "Scikit-learn"],
        url: "https://github.com/fletxcher/",
        image: "/placeholder.svg?height=200&width=400",
    },
    {
        title: "Sudoku Solver",
        description: "A Sudoku solver application that utilizes a backtracking algorithm to efficiently solve unique and complex puzzle boards.",
        info: ["Python", "DSA"],
        url: "https://github.com/fletxcher/sud0ku_s0lver/",
        image: "/placeholder.svg?height=200&width=400",
    },
    {
        title: "Arachnoid",
        description: "A six-legged hexapod robot designed for terrain navigation, utilizing inverse kinematics, and servo control.",
        info: ["Python", "ROS2", "Linux", "Embedded Systems"],
        url: "https://github.com/fletxcher/",
        image: "/placeholder.svg?height=200&width=400",
    },
    // {
    //     title: "Project 4",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu nunc et enim iaculis tincidunt at sed lectus. ",
    //     info: ["N/A", "N/A"],
    //     url: "https://github.com/username/",
    //     image: "/placeholder.svg?height=200&width=400",
    // },
    // {
    //     title: "Project 5",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu nunc et enim iaculis tincidunt at sed lectus. ",
    //     info: ["N/A", "N/A"],
    //     url: "https://github.com/username/",
    //     image: "/placeholder.svg?height=200&width=400",
    // },
]

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-16 w-full">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

                <div className="relative px-12 md:px-16">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-6xl mx-auto"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {projects.map((project, i) => (
                                <CarouselItem key={i} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                    <Card className="h-full hover:shadow-lg transition-all">
                                        {/* <div className="aspect-video w-full overflow-hidden">
                                            <img
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div> */}
                                        <CardHeader>
                                            <CardTitle>{project.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex flex-col h-full">
                                            <p className="text-muted-foreground mb-4">{project.description}</p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.info.map((info, index) => (
                                                    <Badge key={index} variant="secondary">
                                                        {info}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <div className="mt-auto">
                                                <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                                                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                                                        View Project <ExternalLink className="h-4 w-4" />
                                                    </a>
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="-left-12 md:-left-16 h-12 w-12" />
                        <CarouselNext className="-right-12 md:-right-16 h-12 w-12" />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default Projects
