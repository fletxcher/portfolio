import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { Badge } from "./badge"
import React from "react"

interface TimelineItem {
  title: string
  organization: string
  period: string
  description: string
  tags: string[]
}

const Timeline: React.FC = () => {
  const experiences: TimelineItem[] = [
    {
      title: "B.S. Computer Engineering",
      organization: "University of Central Florida",
      period: "Fall 2023 - Present",
      description:
        "Pursuing a Bachelor's degree in Computer Engineering with a focus on embedded systems and software development.",
      tags: ["Embedded Systems", "Software Development"],
    },
    {
      title: "R&D Intern",
      organization: "Siemens Energy",
      period: "Summer 2024 - Present",
      description:
        "Developed and maintained web applications using React. Collaborated with a team of engineers to implement new features and fix bugs.",
      tags: ["Python", "Flask", "React", "TypeScript", "Docker", "Linux"],
    },
    // {
    //   title: "Experience",
    //   organization: "Organization",
    //   period: "Date - Present",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et lacus sodales, egestas arcu vel, fermentum dui. Ut porta velit ut lectus egestas tempus tristique vitae lorem.",
    //   tags: ["N/A", "N/A", "N/A"]
    // },
    // {
    //   title: "Experience",
    //   organization: "Organization",
    //   period: "Date - Present",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et lacus sodales, egestas arcu vel, fermentum dui. Ut porta velit ut lectus egestas tempus tristique vitae lorem.",
    //   tags: ["N/A", "N/A", "N/A"]
    // },
  ]

  return (
  <section id="experience" className="py-16 w-full bg-muted/30">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>

      <div className="max-w-5xl mx-auto relative"> 
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

        <div className="space-y-16"> 
          {experiences.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>

              <div className={`ml-12 md:ml-0 md:w-3/5 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                <Card className="shadow-md">
                  <CardHeader className="pb-4"> 
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription className="text-base mt-1">{item.organization}</CardDescription> 
                      </div>
                      <Badge variant="outline" className="text-sm">{item.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="mb-6 text-base leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-sm px-3 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)
}

export default Timeline