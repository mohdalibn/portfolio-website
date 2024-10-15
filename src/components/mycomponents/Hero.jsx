
import { Button } from "@/components/ui/button";
import Image from "next/image"


export default function Hero(){

    return (

        <section id="home" className="mb-16">
          <div className="max-w-4xl mx-auto pt-16">
            <div className="flex flex-col-reverse md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0">
              <div className="text-center md:text-left md:w-1/2">
                <h2 className="text-4xl font-bold mb-4">Hi, I'm Mohd Ali</h2>
                <p className="text-xl mb-8">
                  A passionate full-stack developer and Computer Science student creating innovative digital solutions.
                </p>
                <Button>Get Resume</Button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/pp2.jpg"
                  alt="Mohd Ali Bin Naser"
                  width={300}
                  height={300}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </section>

    )

}