import React from "react"

const Footer: React.FC = () => {
    return (
        <footer className="border-t py-6 w-full">
            <div className="container mx-auto">
                <p className="text-sm text-muted-foreground text-center">
                    © {new Date().getFullYear()} Fletcher Giddens. All rights reserved.
                </p>
            </div>
        </footer>
    )
}


export default Footer