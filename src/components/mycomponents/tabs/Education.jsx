
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPinned, Building2 } from "lucide-react";

export default function Education(){

    return (
        <Card>
        <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg border-b border-gray-400 dark:border-gray-700 pb-2">Bachelor of Science in Computer Science (Smart Systems)</h4>
                    <p className="text-base text-gray-600 dark:text-gray-400 pt-2 flex items-center gap-1"> <Building2 size={16} strokeWidth={1.5} />Memorial University of Newfoundland</p>
                    <p className="text-base flex items-center gap-1"> <Calendar size={16} strokeWidth={1.5} /> May 2022 - Present</p>
                    <p className="text-base flex items-center gap-1"> <MapPinned size={16} strokeWidth={1.5} />St. John's, NL</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>I'm currently a 3rd undergraduate at Memorial University pursuing a degree in Computer Science with a 3.6 GPA.</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                    {["Object-Oriented Programming", "Data Structure & Algorithms", "Machine Learning", "Visual Computing", "Web Development", "Ethics", "Computer Networking", "Operating Systems", "Computer Architeture", "Sofware Engineering", "Game Programming", "RDMS", "Nature-Inspired Computing", "Algorithms Techniques for AI"].map((skill) => (
                        <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                    </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-lg border-b border-gray-400 dark:border-gray-700 pb-2">HighSchool, School, Kindergarden</h4>
                    <p className="text-base text-gray-600 dark:text-gray-400 pt-2 flex items-center gap-1"> <Building2 size={16} strokeWidth={1.5} />M.E.S Indian School</p>
                    <p className="text-base flex items-center gap-1"> <Calendar size={16} strokeWidth={1.5} /> 2006 - 2019</p>
                    <p className="text-base flex items-center gap-1"> <MapPinned size={16} strokeWidth={1.5} />Doha, Qatar</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>I completed my formal education from M.E.S Indian School in Doha, Qatar.</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                    {["Mathematics", "Physics", "Chemistry", "Engineering Graphics", "English"].map((skill) => (
                        <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                    </div>
                </div>
            </div>
        </CardContent>
        </Card>
    );

}