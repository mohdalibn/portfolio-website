
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes"

// This components contents all the necessary code for my website's header
export default function Header(){

    const { theme, setTheme } = useTheme()

    // Feature to scroll to the appropriate section when a nav link is clicked
    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
          const navbarHeight = 64
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - navbarHeight
    
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }
      }

    
    // Navigation Links
    const NavLinks = () => (
        <>
          <button
            onClick={() => scrollToSection('home')}
            className="py-2 hover:text-blue-500 transition-colors">Home</button>
          <button
            onClick={() => scrollToSection('about')}
            className="py-2 hover:text-blue-500 transition-colors">About</button>
          <button
            onClick={() => scrollToSection('projects')}
            className="py-2 hover:text-blue-500 transition-colors">Projects</button>
          <button
            onClick={() => scrollToSection('contact')}
            className="py-2 hover:text-blue-500 transition-colors">Contact</button>
        </>
      )


      return(

            <header className="sticky top-0 bg-white dark:bg-gray-900 shadow-sm z-10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">mabn.</h1>
            <nav className="flex items-center space-x-4">
                <div className="hidden md:flex space-x-4">
                <NavLinks />
                </div>
                <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <nav className="flex flex-col space-y-4">
                    <NavLinks />
                    </nav>
                </SheetContent>
                </Sheet>
                <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                aria-label="Toggle dark mode">
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
            </nav>
            </div>
        </header>


      )

}