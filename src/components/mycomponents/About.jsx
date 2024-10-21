
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
          <p className="text-center dark:font-thin">
          Ever since I first laid eyes on my dad’s bulky, TV-like computer in 2006, I’ve been fascinated by technology. That early encounter, fueled by curiosity, led me to my first adventure with Windows XP, where I explored everything from downloading games to experimenting with photo and video editing. What began as childlike curiosity grew into a full-blown passion for all things tech. In 2019, fresh out of high school, I dove into programming for the first time—and I was hooked. It was then that I realized software engineering was my calling. Since then, I've immersed myself in the world of coding, constantly expanding my knowledge and skills.
            </p>
            <p className="text-center dark:font-thin">
              Currently, I’m a third-year Computer Science major at Memorial University of Newfoundland, specializing in smart systems and passionate about full-stack development. With a GPA of 3.6, I’ve built a solid foundation in core CS principles and have become proficient in languages like Python, Java, JavaScript, and C++. I’ve applied these skills in numerous projects both personal and academic sharpening my expertise and expanding my knowledge in various subfields of computer science.
            </p>
            <p className="text-center dark:font-thin">
               At NutraForge Technologies, I’ve honed my full-stack development skills by working on an AI-driven nutrition tracking platform. Whether it's crafting user-friendly interfaces with Next.js and React or implementing backend services with FastAPI, I thrive on building scalable and efficient solutions. My hands-on exposure to Docker, AWS, and Firebase has also strengthened my understanding of modern deployment processes.
            </p>
            <p className="text-center dark:font-thin">
              Recently, I've started exploring the space of mobile app development using React Native and Expo. I started by leveraging my React skills and developing a tasks tracker app with a modern UI. It’s exciting to see how I can bring my full-stack skills from the web into the mobile space. In addition, I'm also setting aside time for expanding my Cloud Computing skills in AWS and I plan to take the AWS Certified Cloud Practioner Exam within the next few months (wish me luck!). Concurrently, I’m also leveling up my DevOps game using GitHub Actions for automating CI/CD pipelines. Automating processes is a game-changer, and I find immense satisfaction in streamlining workflows for better efficiency.
            </p>
            <p className="text-center dark:font-thin">
              When I'm not coding, you can find me tuning into MMA or Cricket, Moreover, I love reading & exploring emerging technologies, or applying my problem-solving skills to real-world challenges. I’m passionate about pushing the boundaries of software development and excited to see where the next steps in my journey will take me.
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