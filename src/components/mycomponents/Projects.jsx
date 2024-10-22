
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";
import { motion } from 'framer-motion';

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } 
};

export default function Projects(){

    return (
        
        <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInFromLeft}
        id="projects" 
        className="mb-16 pt-16 -mt-16">

        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "TaskTide Mobile App", 
              description: "A full-stack web competitive stock trading simulation game with interactive UI and RESTful API backend.",
              tech: "React Native, Expo, JavaScript, CSS",
              image: "./TaskTideApp.png",
              repo: "https://github.com/mohdalibn/todo-react-native-app"
            },
            { 
              title: "Portfolio Website", 
              description: "A full-stack web competitive stock trading simulation game with interactive UI and RESTful API backend.",
              tech: "JavaScript, HTML, CSS, MongoDB, Express, Node, jQuery, Supertest",
              image: "./PortfolioWebsite.png",
              repo: "https://github.com/mohdalibn/portfolio-website"
            },
            { 
              title: "Trading Aplha Inc. (Private)", 
              description: "A full-stack web competitive stock trading simulation game with interactive UI and RESTful API backend.",
              tech: "JavaScript, HTML, CSS, MongoDB, Express, Node, jQuery, Supertest",
              image: "./TradingAlpha.png",
              repo: ""
            },
            { 
              title: "Ultimate Tic Tac Toe Multiplayer (Private)", 
              description: "Multiplayer game with nested 3x3 grids, user authentication, matchmaking, and leaderboards.",
              tech: "Python, Bottle, HTML, CSS, Shelve, Unittest",
              image: "./UltimateTicTacToe.png",
              repo: ""
            },
            // { 
            //   title: "Online Book Database", 
            //   description: "Full-stack online bookstore application with CRUD operations for book entries.",
            //   tech: "JavaScript, HTML, CSS, MongoDB(Atlas), Express, React, Node, Tailwind",
            //   image: "",
            //   repo: "https://github.com/mohdalibn/online-book-database"
            // },
            { 
              title: "Gesture Volume Controller", 
              description: "Desktop app for controlling system volume using hand gestures detected via webcam.",
              tech: "Python, OpenCV, Mediapipe, NumPy, EEL, HTML, CSS, JavaScript, Figma",
              image: "./Gesture Volume Controller App.png",
              repo: "https://github.com/mohdalibn/gesture-volume-controller-app"
            },
            { 
              title: "Real-time Ball Tracking Game", 
              description: "Unity game integrating real-time ball tracking via webcam to control in-game physics.",
              tech: "Python, OpenCV, Mediapipe, EEL, HTML, CSS, JavaScript, Figma",
              image: "./BallTrackingGame.png",
              repo: "https://github.com/mohdalibn/real-time-ball-tracking-game"
            },
            { 
              title: "Face Detector App", 
              description: "Desktop application for detecting faces in images and live video feeds.",
              tech: "Python, OpenCV, Mediapipe, EEL, HTML, CSS, JavaScript, Figma",
              image: "./FaceDetectorApp.png",
              repo:  "https://github.com/mohdalibn/face-detector-app"
            },
            { 
              title: "Flappy Bird Replica AI", 
              description: "An app in which the user can train and test neural networks that are able to play the iconic game flappy bird",
              tech: "Python, PyGame, NEAT (Genetic Algorithm), Figma",
              image: "./FlappyBirdAI.png",
              repo: "https://github.com/mohdalibn/flappy-bird-game-ai"
            },
            { 
              title: "Chrome Dino Replica AI", 
              description: "An app in which the user can train and test neural networks that are able to play the google chrome dinosaur game",
              tech: "Python, PyGame, NEAT (Genetic Algorithm), Figma",
              image: "./ChromeDinoAI.png",
              repo: "https://github.com/mohdalibn/chrome-dinosaur-game-ai"
            }

          ].map((project, index) => (
            <Card key={index} className="flex flex-col rounded-xl">
              <Image
                src={project.image}
                alt={project.title}
                width={280}
                height={200}
                className="w-full object-cover rounded-xl" />
              <CardContent className="p-4 flex-grow">
                <h3 className="font-bold mb-2">{project.title}</h3>
                {/* <p className="text-sm mb-2">{project.description}</p>
                <p className="text-xs text-gray-500">{project.tech}</p> */}
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
      </motion.section>

    )

}