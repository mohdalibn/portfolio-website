
import { Button } from "@/components/ui/button";
import Image from "next/image"
import Link from "next/link";
import { motion } from 'framer-motion';

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -50 }, 
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } 
};

export default function Hero(){

    return (

        <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInFromLeft} 
        id="home" 
        className="mb-16">

          <div className="max-w-7xl mx-auto md:pt-16">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center md:space-x-12 space-y-8 md:space-y-0">
              <div className="text-center md:text-left md:w-1/2 mt-6 md:mt-0">
                <h2 className="text-2xl sm:text-3xl font-normal mb-4">Hi, I'm</h2>
                <h2 className="text-4xl sm:text-5xl font-semibold mb-4">Mohd Ali Bin Naser</h2>
                <h2 className="text-2xl sm:text-3xl font-normal mb-4">Software Developer</h2>
                <p className="text-l sm:text-xl mb-8 font-light dark:font-thin">
                  Thanks for stopping by! This portfolio is a glimpse into what drives my passion for coding and problem-solving. My hope is that as you explore, you’ll get a better sense of who I am and the fun behind each project. Take your time, and I hope you enjoy the journey as much as I did creating it!
                </p>
                <Link href="https://drive.google.com/file/d/1c82FNE_gwwapvJ94GMtcWbAaoeF8IHfr/view?usp=sharing">
                  <Button className="mr-4 border-2 dark:border-1 border-black dark:border-white bg-transparent text-black dark:text-white text-lg px-6 py-6 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800">Get Resume</Button>
                </Link>
                
                <Link href="mailto:mabinnaser@mun.ca">
                  <Button className="text-lg px-6 py-6 rounded-lg">Let's Talk</Button>
                </Link>

              </div>
              <div className="md:w-auto flex justify-center">
                <Image
                  src="./pp2.jpg"
                  alt="Mohd Ali Bin Naser"
                  width={350}
                  height={350}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.section>

    )

}