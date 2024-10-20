
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Experience from "./tabs/Experience"
import Education from "./tabs/Education"
import Skills from "./tabs/Skills"
import Certifications from "./tabs/Certifications"

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
            <TabsList className="w-full p-1 bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-wrap justify-center">
              {["skills", "education", "experience", "certifications"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="flex-1 py-2 px-4 rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 transition-all">
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="skills">
              <Skills/>
            </TabsContent>
            <TabsContent value="education">
              <Education/>
            </TabsContent>
            <TabsContent value="experience">
              <Experience/>
            </TabsContent>
            <TabsContent value="certifications">
              <Certifications/>
            </TabsContent>
          </Tabs>
        </section>

    )

}