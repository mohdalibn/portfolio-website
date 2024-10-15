
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About(){

    return (

        <section id="about" className="mb-16 pt-16 -mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-center">
              I'm a third-year Computer Science student at Memorial University of Newfoundland, passionate about full-stack development and AI/ML applications. With a strong foundation in various programming languages and frameworks, I've developed numerous projects ranging from web applications to computer vision systems.
            </p>
            <p className="text-center">
              My experience as a Full-Stack Software Engineer at NutraForge Technologies has honed my skills in developing user-friendly interfaces and implementing robust backend services. I'm adept at using modern technologies like Next.js, React, and FastAPI to create efficient and scalable solutions.
            </p>
            <p className="text-center">
              When I'm not coding, you can find me collaborating on open-source projects, exploring new technologies, or applying my problem-solving skills to real-world challenges. I'm always excited about learning and pushing the boundaries of what's possible in software development.
            </p>
          </div>

          <Tabs defaultValue="skills" className="mt-12">
            <TabsList className="w-full p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
              {["skills", "education", "experience"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="flex-1 py-2 px-4 rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 transition-all">
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="skills">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
                  <div className="space-y-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-lg font-medium mb-3 border-b border-gray-400 dark:border-gray-700 pb-2">Languages</h4>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {["Python", "Java", "HTML", "CSS", "JavaScript", "C/C++", "SQLite", "MongoDB"].map((skill) => (
                          <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-lg font-medium mb-3 border-b border-gray-400 dark:border-gray-700 pb-2">Libraries & Frameworks</h4>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {["React", "Next.js", "Express", "Node.js", "Fast API", "OpenCV", "Mediapipe", "Tkinter", "PyGame", "Pandas", "Scikit-learn", "Streamlit"].map((skill) => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-lg font-medium mb-3 border-b border-gray-400 dark:border-gray-700 pb-2">Developer Tools</h4>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {["VS Code", "PyCharm", "Jupyter", "Git", "Linux", "Unit Testing", "Docker", "Postman", "Figma"].map((skill) => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-lg font-medium mb-3 border-b border-gray-400 dark:border-gray-700 pb-2">DevOps</h4>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {["Git", "Github", "Github Actions", "Github Projects", "Jira", "BitBucket", "Docker", "AWS"].map((skill) => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-lg font-medium mb-3 border-b border-gray-400 dark:border-gray-700 pb-2">Areas of Interest</h4>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {["Full-Stack Web Development", "AI/ML Applications", "Computer Vision", "Data Analysis", "UI/UX Design"].map((skill) => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="education">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-lg border-b border-gray-400 dark:border-gray-700 pb-2">Bachelor of Science in Computer Science (Smart Systems)</h4>
                      <p className="text-base text-gray-600 dark:text-gray-400 pt-2">Memorial University of Newfoundland</p>
                      <p className="text-base">May 2022 - Present</p>
                      <p className="text-base mt-2">Year 3 (Junior Year)</p>
                      <p className="text-base">GPA: 3.6</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {["Object-Oriented Programming", "Data Structure & Algorithms", "Machine Learning", "Visual Computing", "Web Development", "Ethics", "Computer Networking", "Operating Systems", "Computer Architeture", "Sofware Engineering", "Game Programming", "RDMS", "Nature-Inspired Computing", "Algorithms Techniques for AI"].map((skill) => (
                          <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="experience">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
                  <div className="space-y-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-lg border-b border-gray-400 dark:border-gray-700 pb-2">Full-Stack Software Engineer</h4>
                      <p className="text-base text-gray-600 dark:text-gray-400 pt-2">NutraForge Technologies</p>
                      <p className="text-base">June 2024 - Present</p>
                      {/* <p className="text-base text-gray-600 dark:text-gray-400 pt-2">Developed user-friendly interfaces for an AI-driven nutrition tracking platform using Next.js, React, and Material UI</p>
                      <p className="text-base text-gray-600 dark:text-gray-400 pt-2">Utilized Firebase for real-time synchronization and authentication</p>
                      <p className="text-base text-gray-600 dark:text-gray-400 pt-2">Containerized applications with Docker and deployed via GitHub and AWS</p> */}
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Developed user-friendly interfaces for an AI-driven nutrition tracking platform using Next.js, React, and Material UI</li>
                        <li>Implemented backend services with Python and FastAPI for data handling and MongoDB integration</li>
                        <li>Utilized Firebase for real-time synchronization and authentication</li>
                        <li>Containerized applications with Docker and deployed via GitHub and AWS</li>
                      </ul>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-lg border-b border-gray-400 dark:border-gray-700 pb-2">Retail Sales Associate</h4>
                      <p className="text-base text-gray-600 dark:text-gray-400 pt-2">Lawtons Drugs</p>
                      <p className="text-base">May 2022 - Present</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Enhanced customer experience and streamlined transactions</li>
                        <li>Trained new staff and resolved customer complaints</li>
                        <li>Utilized problem-solving skills to efficiently manage sales processes and loyalty programs</li>
                      </ul>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-lg border-b border-gray-400 dark:border-gray-700 pb-2">Sales Representative</h4>
                      <p className="text-base text-gray-600 dark:text-gray-400 pt-2">Telus/Koodo Mobile</p>
                      <p className="text-base">Nov 2022 - Mar 2023</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Achieved sales targets and negotiated contracts to enhance customer satisfaction</li>
                        <li>Collaborated with colleagues to identify new opportunities for upselling and optimize processes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

    )

}