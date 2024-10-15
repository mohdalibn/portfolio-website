
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Codepen } from "lucide-react"

export default function Contact(){

    return (

        <section id="contact" className="text-center pt-16 -mt-16">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <p className="mb-8">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:mabinnaser@mun.ca" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://github.com/mohdalibn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://linkedin.com/in/mohdalibn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://codepen.io/mohdalibn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CodePen">
              <Codepen className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

    )
}
