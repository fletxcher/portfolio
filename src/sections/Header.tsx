import React from "react"

const Header: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/50 w-full">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Fletcher Giddens</h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">Computer Engineering @ UCF</h2>
                <h3 className="max-w-2xl mx-auto font-bold text-muted-foreground mb-8">
                    Computer engineering student with a focus on embedded systems, machine learning, and software
                    development. Interested in creating innovative solutions to real-world problems.
                </h3>
                {/* <div className="flex justify-center gap-4">
                    <Button asChild>
                        <a href="#projects">View Projects</a>
                    </Button>
                    <Button variant="outline" asChild>
                        <a href="#contact">Contact Me</a>
                    </Button>
                </div> */}
            </div>
        </section>
    )
}


export default Header