
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Education(){

    return (
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
    );

}