
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";

export default function Projects(){

    return (
        
        <section id="projects" className="mb-16 pt-16 -mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Stock Trading Simulator", 
              description: "A full-stack web competitive stock trading simulation game with interactive UI and RESTful API backend.",
              tech: "JavaScript, HTML, CSS, MongoDB, Express, Node, jQuery, Supertest",
              image: "/ChromDinoAIMainImg.png",
              repo: "#"
            },
            { 
              title: "Ultimate Tic Tac Toe Multiplayer", 
              description: "Multiplayer game with nested 3x3 grids, user authentication, matchmaking, and leaderboards.",
              tech: "Python, Bottle, HTML, CSS, Shelve, Unittest",
              image: "",
              repo: "#"
            },
            { 
              title: "Online Book Database", 
              description: "Full-stack online bookstore application with CRUD operations for book entries.",
              tech: "JavaScript, HTML, CSS, MongoDB(Atlas), Express, React, Node, Tailwind",
              image: "",
              repo: "https://github.com/mohdalibn/online-book-database"
            },
            { 
              title: "Gesture Volume Controller", 
              description: "Desktop app for controlling system volume using hand gestures detected via webcam.",
              tech: "Python, OpenCV, Mediapipe, NumPy, EEL, HTML, CSS, JavaScript, Figma",
              image: "",
              repo: "https://github.com/mohdalibn/gesture-volume-controller"
            },
            { 
              title: "Real-time Ball Tracking Game", 
              description: "Unity game integrating real-time ball tracking via webcam to control in-game physics.",
              tech: "Python, OpenCV, Mediapipe, EEL, HTML, CSS, JavaScript, Figma",
              image: "",
              repo: "https://github.com/mohdalibn/real-time-ball-tracking-game"
            },
            { 
              title: "Face Detector App", 
              description: "Desktop application for detecting faces in images and live video feeds.",
              tech: "Python, OpenCV, Mediapipe, EEL, HTML, CSS, JavaScript, Figma",
              image: "",
              repo:  "https://github.com/mohdalibn/face-detector-app"
            }
          ].map((project, index) => (
            <Card key={index} className="flex flex-col ">
              <Image
                // src={`/placeholder.svg?height=200&width=300&text=Project+${index + 1}`}
                src={project.image}
                alt={project.title}
                width={280}
                height={200}
                className="w-full h-48 object-cover" />
              <CardContent className="p-4 flex-grow">
                <h3 className="font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-2">{project.description}</p>
                <p className="text-xs text-gray-500">{project.tech}</p>
              </CardContent>
              <CardFooter className="p-4">
                <Button asChild className="w-half">
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

    )

}