import React from "react"
import ThemeToggle from "../components/ui/theme-toogle"
import { Github, Linkedin, Mail, Youtube } from "lucide-react"
import { Button } from "../components/ui/button"


const NavBar: React.FC = () => {
    return (
        <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <h1 className="text-xl font-bold">Portfolio</h1>
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                        <a href="https://github.com/fletxcher" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="h-5 w-5" />
                    </a>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                        <a href="https://www.linkedin.com/in/fletchergiddens/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=fletxcher@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Email">
                            <Mail className="h-5 w-5" />
                        </a>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                        <a href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Youtube">
                            <Youtube className="h-5 w-5" />
                        </a>
                    </Button>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}


export default NavBar