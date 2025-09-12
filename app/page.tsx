"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { ExternalLink, Github, Linkedin, Mail, BarChart3, Code, Users, Cloud } from "lucide-react"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes";

export default function Portfolio() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentSection, setCurrentSection] = useState("home")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (savedTheme) {
      setTheme(savedTheme)
    }

    // Listen for theme changes
    const handleThemeChange = () => {
      const currentTheme = document.documentElement.classList.contains("light") ? "light" : "dark"
      setTheme(currentTheme)
    }

    // Set up mutation observer to watch for class changes
    const observer = new MutationObserver(handleThemeChange)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Detect which section is currently in view
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`min-h-screen transition-colors duration-300 overflow-x-hidden ${theme === "light" ? "bg-gray-50 text-gray-900" : "bg-slate-900 text-white"
        }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-300 ${isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-slate-900/95 backdrop-blur-md"
          }`}
        style={{
          boxShadow: isScrolled
            ? "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
            : "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        }}
      >
        <div></div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex space-x-8 text-sm">
            <a
              href="#home"
              className="text-white hover:text-cyan-400 transition-colors"
            >
              HOME
            </a>
            <a
              href="#about"
              className="text-white hover:text-cyan-400 transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#skills"
              className="text-white hover:text-cyan-400 transition-colors"
            >
              SKILLS
            </a>
            <a
              href="#projects"
              className="text-white hover:text-cyan-400 transition-colors"
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              className="text-white hover:text-cyan-400 transition-colors"
            >
              CONTACT
            </a>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/data_sci_background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content with relative positioning to appear above overlay */}
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white">NISHKA SHAH</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-100">
            Technology. Strategy. Transformation.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://docs.google.com/document/d/1rzunDbBNwWpbzjskWwUVmcyfGvO70gOPHC6sv7QOv00/edit?usp=sharing"
            >
              <Button
                variant="outline"
                className="bg-transparent font-semibold border-white text-white hover:bg-white hover:text-slate-900"
              >
                Resume
              </Button>
            </a>
            
            <a href="https://www.linkedin.com/in/nishkashah05" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="bg-transparent font-semibold border-white text-white hover:bg-white hover:text-slate-900"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-24 pb-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-12 text-center ${theme === "light" ? "text-blue-600" : "text-cyan-400"
              }`}
          >
            About Me
          </h2>

          {/* Grid for image + text */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image column */}
            <div className="flex justify-center">
              <div
                className={`w-64 h-64 rounded-full p-1 ${theme === "light"
                    ? "bg-gradient-to-br from-blue-500 to-purple-600"
                    : "bg-gradient-to-br from-cyan-400 to-blue-500"
                  }`}
              >
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/nishka.jpeg"
                    alt="Nishka Shah"
                    className="w-full h-full object-cover scale-[3] object-[40%_40%]"
                  />
                </div>
              </div>
            </div>

            {/* Text column */}
            <div
              className={`space-y-4 leading-relaxed ${theme === "light" ? "text-gray-700" : "text-gray-300"
                }`}
            >
              <p>
                I’m studying Management Engineering at the University of Waterloo,
                where I get to mix business thinking with technical problem-solving. I
                like untangling messy problems and turning them into clear systems.
                Whether it’s rethinking a process, building something smarter with
                tech, or finding patterns others miss, I’m drawn to work that makes
                things run better. My career path is shaped by curiosity, efficiency,
                and the drive to create lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      < section id="skills" className={`py-20 px-6 md:px-12 ${theme === "light" ? "bg-gray-100" : "bg-slate-800"}`
      }>
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-12 text-center ${theme === "light" ? "text-blue-600" : "text-cyan-400"
              }`}
          >
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6 justify-items-center max-w-4xl mx-auto">


            <Card
              className={`transition-colors ${theme === "light"
                ? "bg-white border-gray-200 hover:border-blue-500"
                : "bg-slate-700 border-slate-600 hover:border-cyan-400"
                }`}
            >
              <CardContent className="p-6 text-center">
                <Code className={`w-12 h-12 mx-auto mb-4 ${theme === "light" ? "text-blue-600" : "text-cyan-400"}`} />
                <h3 className={`text-lg font-semibold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                  Programming
                </h3>
                <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                  JavaScript, Java, Python, SQL, R, VBA, HTML/CSS, Power BI, Tableau
                </p>
              </CardContent>
            </Card>

            <Card
              className={`transition-colors ${theme === "light"
                ? "bg-white border-gray-200 hover:border-blue-500"
                : "bg-slate-700 border-slate-600 hover:border-cyan-400"
                }`}
            >
              <CardContent className="p-6 text-center">
                <Users className={`w-12 h-12 mx-auto mb-4 ${theme === "light" ? "text-blue-600" : "text-cyan-400"}`} />
                <h3 className={`text-lg font-semibold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                  Consulting
                </h3>
                <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                  Process Optimization, Operations Research Modeling, Market Research & Competitive Analysis
                </p>
              </CardContent>
            </Card>

            <Card
              className={`transition-colors ${theme === "light"
                ? "bg-white border-gray-200 hover:border-blue-500"
                : "bg-slate-700 border-slate-600 hover:border-cyan-400"
                }`}
            >
              <CardContent className="p-6 text-center">
                <Cloud className={`w-12 h-12 mx-auto mb-4 ${theme === "light" ? "text-blue-600" : "text-cyan-400"}`} />
                <h3 className={`text-lg font-semibold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                  Tools & Tech
                </h3>
                <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                  SharePoint, Azure DevOps, Power Apps, MS Office Suite
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section >

      {/* Projects Section */}
      < section id="projects" className="py-20 px-6 md:px-12" >
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-12 text-center ${theme === "light" ? "text-blue-600" : "text-cyan-400"
              }`}
          >
            Projects
          </h2>

          {/* First row of projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <Card
              className={`transition-colors group ${theme === "light"
                ? "bg-white border-gray-200 hover:border-blue-500"
                : "bg-slate-800 border-slate-600 hover:border-cyan-400"
                }`}
            >
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-indigo-500 to-purple-600 rounded-t-lg flex items-center justify-center">
                  <img
                    src="/TTC.png"
                    alt="TTC Case Study"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-lg font-semibold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                    TTC Case Study
                  </h3>
                  <p className={`text-sm mb-4 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                    Comprehensive analysis of Toronto Transit Commission's SharePoint migration project with data-driven recommendations for an automated approach.
                  </p>
                  <div className="flex gap-2">
                    <a href="https://drive.google.com/file/d/1JgMfXoI8Vp_rOkGPuwuuKKSiOpJ-WYyN/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        variant="outline"
                        className={`bg-transparent ${theme === "light"
                          ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                          : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                          }`}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Report
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`transition-colors group ${theme === "light"
                ? "bg-white border-gray-200 hover:border-blue-500"
                : "bg-slate-800 border-slate-600 hover:border-cyan-400"
                }`}
            >
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-emerald-500 to-teal-600 rounded-t-lg flex items-center justify-center">
                  <img
                    src="/DAC.png"
                    alt="Consulting Case: DAC Implementation Strategy"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-lg font-semibold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                    Consulting Case: DAC Implementation Strategy
                  </h3>
                  <p className={`text-sm mb-4 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                    🏆 2025 Waterloo Engineering Competition (Consulting) Winner 🏆 Report features strategic implementation of Direct Air Capture units across metro Vancouver.
                  </p>
                  <div className="flex gap-2">
                    <a href="https://docs.google.com/presentation/d/1r-HQ3F6drKP0RVE49cwZSK1i6ke9Hgvj/edit?usp=drive_link&ouid=107353109806567638700&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        variant="outline"
                        className={`bg-transparent ${theme === "light"
                          ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                          : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                          }`}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Pptx
                      </Button>
                    </a>
                    <a href="https://docs.google.com/document/d/1AwFbFMvWxTRqn8nD-W52Zk_OVikt4uKW0t8OtVjtf6Y/edit?usp=drive_link" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        variant="outline"
                        className={`bg-transparent ${theme === "light"
                          ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                          : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                          }`}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Report
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`transition-colors group ${theme === "light"
                ? "bg-white border-gray-200 hover:border-blue-500"
                : "bg-slate-800 border-slate-600 hover:border-cyan-400"
                }`}
            >
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 rounded-t-lg flex items-center justify-center">
                  <img
                    src="/moviereview.png"
                    alt="Movie Review Site"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-lg font-semibold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                    Movie Review Site
                  </h3>
                  <p className={`text-sm mb-4 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                    Full-stack movie review site with Node.js, React.js, and SQL. Featuring movie search and review functionality, and a voting game.
                  </p>
                  <div className="flex gap-2">
                    <a href="https://github.com/nishka-shah/Movie-Review-Site" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        variant="outline"
                        className={`bg-transparent ${theme === "light"
                          ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                          : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                          }`}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Project
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Second row of projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className={`transition-colors group ${theme === "light"
                ? "bg-white border-gray-200 hover:border-blue-500"
                : "bg-slate-800 border-slate-600 hover:border-cyan-400"
                }`}
            >
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg flex items-center justify-center">
                  <img
                    src="/PowerBI Dashboard SS.png"
                    alt="Power BI Dashboard"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-lg font-semibold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                    Power BI Dashboard
                  </h3>
                  <p className={`text-sm mb-4 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                    Used mock Excel dataset to create a dynamic Power BI dashboard. Includes use of SWITCH measures, conditional formatting, and dynamic titles.
                  </p>
                  <div className="flex gap-2">
                    <a href="https://github.com/nishka-shah/Performance-Report" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        variant="outline"
                        className={`bg-transparent ${theme === "light"
                          ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                          : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                          }`}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Project
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`transition-colors group ${theme === "light"
                ? "bg-white border-gray-200 hover:border-blue-500"
                : "bg-slate-800 border-slate-600 hover:border-cyan-400"
                }`}
            >
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 rounded-t-lg flex items-center justify-center">
                  <img
                    src="/finadvicetool.png"
                    alt="Financial Advice Tool"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-lg font-semibold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                    Financial Advice Tool
                  </h3>
                  <p className={`text-sm mb-4 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                    Financial advice tool built with VBA and ChatGPT API integration to provide personalized budgeting recommendations.
                  </p>
                  <div className="flex gap-2">
                    <a href="https://github.com/nishka-shah/Financial-Advice-Tool" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        variant="outline"
                        className={`bg-transparent ${theme === "light"
                          ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                          : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                          }`}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Project
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`transition-colors group ${theme === "light"
                ? "bg-white border-gray-200 hover:border-blue-500"
                : "bg-slate-800 border-slate-600 hover:border-cyan-400"
                }`}
            >
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 rounded-t-lg flex items-center justify-center">
                  <img
                    src="/timemgmt.png"
                    alt="Time Management Tool"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-lg font-semibold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                    Time Management Tool
                  </h3>
                  <p className={`text-sm mb-4 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                    VBA-based productivity application for tracking tasks and optimizing time allocation across projects.
                  </p>
                  <div className="flex gap-2">
                    <a href="https://github.com/nishka-shah/Time-Management-Tool" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        variant="outline"
                        className={`bg-transparent ${theme === "light"
                          ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                          : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                          }`}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Project
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section >

      {/* Contact Section */}
      < section id="contact" className={`py-20 px-6 md:px-12 ${theme === "light" ? "bg-gray-100" : "bg-slate-800"}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-8 ${theme === "light" ? "text-blue-600" : "text-cyan-400"}`}
          >
            Get In Touch
          </h2>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
            I'm currently seeking new opportunities and would love to hear from you. Whether you have a question or just
            want to say hi, feel free to reach out!
          </p>
          <a href="mailto:nishka05.shah@gmail.com">
            <Button
              className={`font-semibold px-8 py-3 ${theme === "light"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-cyan-400 hover:bg-cyan-500 text-slate-900"
                }`}
            >
              <Mail className="w-4 h-4 mr-2" />
              Say Hello
            </Button>
          </a>
        </div>
      </section >

      {/* Footer */}
      < footer className="py-12 px-6 md:px-12 text-center text-gray-500" >
        <p>&copy; {new Date().getFullYear()} Nishka Shah. All rights reserved.</p>
      </footer >
    </div >
  )
}