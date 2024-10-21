
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Calendar, Building2 } from "lucide-react";

export default function Certifications(){

    return (
        <Card>
            <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                <div className="space-y-4">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg border-b border-gray-400 dark:border-gray-700 pb-2">Data Structures and Algorithms in Python</h4>
                        <p className="text-base text-gray-600 dark:text-gray-400 pt-2 flex items-center gap-1"> <Building2 size={16} strokeWidth={1.5} /> Jovian</p>
                        <p className="text-base flex items-center gap-1"> <Calendar size={16} strokeWidth={1.5} /> Issued - Dec 2021</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <Button asChild>
                                <Link href="https://jovian.ai/certificate/MFQTMNBQGQ">
                                View Certificate 
                                <ExternalLinkIcon className="ml-1" />
                                </Link>
                            </Button>
                        </ul>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg border-b border-gray-400 dark:border-gray-700 pb-2">Python Automation and Testing</h4>
                        <p className="text-base text-gray-600 dark:text-gray-400 pt-2 flex items-center gap-1"> <Building2 size={16} strokeWidth={1.5} /> LinkedIn Learning</p>
                        <p className="text-base flex items-center gap-1"> <Calendar size={16} strokeWidth={1.5} /> Issued - Sep 2021</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <Button asChild>
                                <Link href="https://www.linkedin.com/learning/certificates/b17a575dcfa7c8e97cf4b853e0fb96dba549dae4df18ac430e82f0b37b246a03?trk=share_certificate">
                                View Certificate 
                                <ExternalLinkIcon className="ml-1" />
                                </Link>
                            </Button>
                        </ul>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg border-b border-gray-400 dark:border-gray-700 pb-2">SQL Essential Training</h4>
                        <p className="text-base text-gray-600 dark:text-gray-400 pt-2 flex items-center gap-1"> <Building2 size={16} strokeWidth={1.5} /> LinkedIn Learning</p>
                        <p className="text-base flex items-center gap-1"> <Calendar size={16} strokeWidth={1.5} /> Issued - Sep 2021</p>
                        {/* <p className="text-base">Credential ID AZvArVrvvV6xvSpO8qkeYbTafSj8</p> */}
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <Button asChild>
                            <Link href="https://www.linkedin.com">
                                View Certificate
                                <ExternalLinkIcon className="ml-1" />
                            </Link>
                            </Button>
                        </ul>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-4">
                        <h4 className="font-semibold text-lg border-b border-gray-400 dark:border-gray-700 pb-2">Penetration Testing Essential Training</h4>
                        <p className="text-base text-gray-600 dark:text-gray-400 pt-2 flex items-center gap-1"> <Building2 size={16} strokeWidth={1.5} /> LinkedIn Learning</p>
                        <p className="text-base flex items-center gap-1"> <Calendar size={16} strokeWidth={1.5} /> Issued - Sep 2021</p>
                        {/* <p className="text-base">Credential ID AZuIVm7eE-biBNyTj6aV_pMbeZpJ</p> */}
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <Button asChild>
                            <Link href="https://www.linkedin.com">
                                View Certificate
                                <ExternalLinkIcon className="ml-1" />
                            </Link>
                            </Button>
                        </ul>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-4">
                        <h4 className="font-semibold text-lg border-b border-gray-400 dark:border-gray-700 pb-2">100W Cybersecurity Practices for Industrial Control Systems</h4>
                        <p className="text-base text-gray-600 dark:text-gray-400 pt-2 flex items-center gap-1"> <Building2 size={16} strokeWidth={1.5} /> Cybersecurity and Infrastructure Security Agency</p>
                        <p className="text-base flex items-center gap-1"> <Calendar size={16} strokeWidth={1.5} /> Issued - Sep 2021</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <Button asChild>
                            <Link href="https://www.cisa.gov">
                                View Certificate
                                <ExternalLinkIcon className="ml-1" />
                            </Link>
                            </Button>
                        </ul>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-4">
                        <h4 className="font-semibold text-lg border-b border-gray-400 dark:border-gray-700 pb-2">210W-06 ICS Cybersecurity Threats</h4>
                        <p className="text-base text-gray-600 dark:text-gray-400 pt-2 flex items-center gap-1"> <Building2 size={16} strokeWidth={1.5} /> Cybersecurity and Infrastructure Security Agency</p>
                        <p className="text-base flex items-center gap-1"> <Calendar size={16} strokeWidth={1.5} /> Issued - Sep 2021</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <Button asChild>
                            <Link href="https://www.cisa.gov">
                                View Certificate
                                <ExternalLinkIcon className="ml-1" />
                            </Link>
                            </Button>
                        </ul>
                    </div>

                    {/* <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-4">
                        <h4 className="font-semibold text-lg border-b border-gray-400 dark:border-gray-700 pb-2">IT Help Desk for Beginners</h4>
                        <p className="text-base text-gray-600 dark:text-gray-400 pt-2">LinkedIn Learning</p>
                        <p className="text-base">Issued - Sep 2021</p>
                        <p className="text-base">Credential ID AUsWR1JkmZl_SfkcDN1VytvoX9SB</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <Button asChild>
                            <Link href="https://www.linkedin.com">
                                Show credential
                                <ExternalLinkIcon className="ml-1" />
                            </Link>
                            </Button>
                        </ul>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-4">
                        <h4 className="font-semibold text-lg border-b border-gray-400 dark:border-gray-700 pb-2">Interpersonal Communication</h4>
                        <p className="text-base text-gray-600 dark:text-gray-400 pt-2">LinkedIn Learning</p>
                        <p className="text-base">Issued - Sep 2021</p>
                        <p className="text-base">Credential ID AbFGzu9aQABnsPqGDkj9gDm20eGl</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <Button asChild>
                            <Link href="https://www.linkedin.com">
                                Show credential
                                <ExternalLinkIcon className="ml-1" />
                            </Link>
                            </Button>
                        </ul>
                    </div> */}

                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-4">
                        <h4 className="font-semibold text-lg border-b border-gray-400 dark:border-gray-700 pb-2">The Hour of Code</h4>
                        <p className="text-base text-gray-600 dark:text-gray-400 pt-2 flex items-center gap-1"> <Building2 size={16} strokeWidth={1.5} /> Code.org</p>
                        <p className="text-base flex items-center gap-1"> <Calendar size={16} strokeWidth={1.5} /> Issued - Jun 2019</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <Button asChild>
                            <Link href="https://www.code.org">
                                View Certificate
                                <ExternalLinkIcon className="ml-1" />
                            </Link>
                            </Button>
                        </ul>
                    </div>


                </div>
            </CardContent>
        </Card>
    );

}