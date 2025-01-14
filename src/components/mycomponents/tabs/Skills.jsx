
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export default function Skills(){

    return (

        <Card>
        <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="text-lg font-medium mb-3 border-b border-gray-400 dark:border-gray-700 pb-2">Languages</h4>
                <div className="flex flex-wrap gap-2 pt-2">
                {["Python", "Java", "HTML", "CSS", "JavaScript/TypeScript", "C/C++"].map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                ))}
                </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="text-lg font-medium mb-3 border-b border-gray-400 dark:border-gray-700 pb-2">Libraries & Frameworks</h4>
                <div className="flex flex-wrap gap-2 pt-2">
                {["React", "Next.js", "Express", "Node.js", "Fast API", "OpenCV", "Mediapipe", "Tkinter", "PyGame", "Pandas", "Scikit-learn", "Streamlit"].map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                ))}
                </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="text-lg font-medium mb-3 border-b border-gray-400 dark:border-gray-700 pb-2">Developer Tools</h4>
                <div className="flex flex-wrap gap-2 pt-2">
                {["VS Code", "PyCharm", "Jupyter", "Git", "Linux", "Unit Testing", "Docker", "Postman", "Figma", "Agile Methodologies"].map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                ))}
                </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="text-lg font-medium mb-3 border-b border-gray-400 dark:border-gray-700 pb-2">DevOps</h4>
                <div className="flex flex-wrap gap-2 pt-2">
                {["Github", "Github Actions", "Github Projects", "Jira", "BitBucket", "Docker"].map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                ))}
                </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="text-lg font-medium mb-3 border-b border-gray-400 dark:border-gray-700 pb-2">Databases</h4>
                <div className="flex flex-wrap gap-2 pt-2">
                {["MongoDB", "SQLite", "PostgreSQL", "MySQL"].map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                ))}
                </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="text-lg font-medium mb-3 border-b border-gray-400 dark:border-gray-700 pb-2">Areas of Interest</h4>
                <div className="flex flex-wrap gap-2 pt-2">
                {["Full-Stack Web Development", "Computer Vision", "AI/ML Applications", "Mobile App Development", "Data Analysis", "UI/UX Design"].map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                ))}
                </div>
            </div>
            </div>
        </CardContent>
        </Card>

    )

}