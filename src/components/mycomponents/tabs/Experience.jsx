
import { Card, CardContent } from "@/components/ui/card"

export default function Experience(){

    return (
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
            <h3 className="text-xl font-semibold mt-4 mb-4">Volunteering Experience</h3>
            <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-lg border-b border-gray-400 dark:border-gray-700 pb-2">Food Preparation & Delivery for Quarantine Patients</h4>
                <p className="text-base text-gray-600 dark:text-gray-400 pt-2">Community Service</p>
                <p className="text-base">Oct 2021 - Oct 2021</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Initiated and led a community group to prepare and deliver home-cooked meals to individuals in COVID-19 quarantine centers,
                providing essential support during a critical time.</li>
                <li>Managed logistics and deliveries, personally carrying supplies weighing around 15-20 kgs via public transport to ensure timely
                and cost-effective distribution of meals, demonstrating adaptability and responsibility.</li>
                </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-lg border-b border-gray-400 dark:border-gray-700 pb-2">Engineering Graphics Team Associate</h4>
                <p className="text-base text-gray-600 dark:text-gray-400 pt-2">M.E.S Indian School</p>
                <p className="text-base">Nov 2018 - Nov 2018</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Led the Engineering Graphics Department in constructing and presenting the torch-shaped tesseract building project, fostering
                team collaboration for successful execution.</li>
                <li>Organized the project staging area, coordinating material transportation between 3 school buildings and equipment setup for an impactful exhibition display.</li>
                </ul>
            </div>
            </div>
        </CardContent>
        </Card>
    );

}