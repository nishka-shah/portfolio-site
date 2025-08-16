"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { ExternalLink, Github, Linkedin, Mail, BarChart3, Code, Users, Cloud } from "lucide-react"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [isScrolled, setIsScrolled] = useState(false)

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
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "light" ? "bg-gray-50 text-gray-900" : "bg-slate-900 text-white"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-300 ${
          isScrolled
            ? theme === "light"
              ? "bg-white/90 backdrop-blur-md shadow-sm"
              : "bg-slate-900/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        style={{
          boxShadow: isScrolled
            ? theme === "light"
              ? "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
              : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
            : "none",
        }}
      >
        <div></div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex space-x-8 text-sm">
            <a
              href="#home"
              className={`transition-colors ${theme === "light" ? "hover:text-blue-600" : "hover:text-cyan-400"}`}
            >
              HOME
            </a>
            <a
              href="#about"
              className={`transition-colors ${theme === "light" ? "hover:text-blue-600" : "hover:text-cyan-400"}`}
            >
              ABOUT
            </a>
            <a
              href="#skills"
              className={`transition-colors ${theme === "light" ? "hover:text-blue-600" : "hover:text-cyan-400"}`}
            >
              SKILLS
            </a>
            <a
              href="#projects"
              className={`transition-colors ${theme === "light" ? "hover:text-blue-600" : "hover:text-cyan-400"}`}
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              className={`transition-colors ${theme === "light" ? "hover:text-blue-600" : "hover:text-cyan-400"}`}
            >
              CONTACT
            </a>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center pt-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">NISHKA SHAH</h1>
        <p className={`text-lg md:text-xl mb-8 max-w-2xl ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
          Management Engineering. Process Optimization. Technology.
        </p>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className={`bg-transparent font-semibold ${
              theme === "light"
                ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
            }`}
          >
            Resume
          </Button>
          <Button
            variant="outline"
            className={`bg-transparent font-semibold ${
              theme === "light"
                ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
            }`}
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-12 text-center ${
              theme === "light" ? "text-blue-600" : "text-cyan-400"
            }`}
          >
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div
                className={`w-64 h-64 rounded-full p-1 ${
                  theme === "light"
                    ? "bg-gradient-to-br from-blue-500 to-purple-600"
                    : "bg-gradient-to-br from-cyan-400 to-blue-500"
                }`}
              >
                <img
                  src="/young-woman-headshot.png"
                  alt="Nishka Shah"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className={`space-y-4 leading-relaxed ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
              <p>
                I'm studying Management Engineering at the University of Waterloo with a passion for leveraging
                technology to solve complex business problems. My studies and experiences have provided me with a strong
                foundation in data analytics, consulting, and software development.
              </p>
              <p>
                I thrive in dynamic environments where I can combine my analytical skills with my creativity to drive
                innovation and efficiency. I'm always eager to learn new things and take on challenging projects.
              </p>
              <p>
                When I'm not immersed in tech and business, you can find me exploring new coffee shops, hiking, cooking,
                writing comedy, or working on personal coding projects. I also love research and am volunteering as a UX
                Researcher at Habits for a Better World.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 md:px-12 ${theme === "light" ? "bg-gray-100" : "bg-slate-800"}`}>
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-12 text-center ${
              theme === "light" ? "text-blue-600" : "text-cyan-400"
            }`}
          >
            Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              className={`transition-colors ${
                theme === "light"
                  ? "bg-white border-gray-200 hover:border-blue-500"
                  : "bg-slate-700 border-slate-600 hover:border-cyan-400"
              }`}
            >
              <CardContent className="p-6 text-center">
                <BarChart3
                  className={`w-12 h-12 mx-auto mb-4 ${theme === "light" ? "text-blue-600" : "text-cyan-400"}`}
                />
                <h3 className={`text-lg font-semibold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                  Data Analytics
                </h3>
                <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                  Python, R, SQL, Power BI, Excel
                </p>
              </CardContent>
            </Card>

            <Card
              className={`transition-colors ${
                theme === "light"
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
                  JavaScript, VBA, HTML/CSS, OOP
                </p>
              </CardContent>
            </Card>

            <Card
              className={`transition-colors ${
                theme === "light"
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
                  Process Optimization, Stakeholder Management, Communication
                </p>
              </CardContent>
            </Card>

            <Card
              className={`transition-colors ${
                theme === "light"
                  ? "bg-white border-gray-200 hover:border-blue-500"
                  : "bg-slate-800 border-slate-600 hover:border-cyan-400"
              }`}
            >
              <CardContent className="p-6 text-center">
                <Cloud className={`w-12 h-12 mx-auto mb-4 ${theme === "light" ? "text-blue-600" : "text-cyan-400"}`} />
                <h3 className={`text-lg font-semibold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                  Tools & Tech
                </h3>
                <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                  SharePoint, Azure DevOps, Agile, Power Automate
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-12 text-center ${
              theme === "light" ? "text-blue-600" : "text-cyan-400"
            }`}
          >
            Portfolio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className={`transition-colors group ${
                theme === "light"
                  ? "bg-white border-gray-200 hover:border-blue-500"
                  : "bg-slate-800 border-slate-600 hover:border-cyan-400"
              }`}
            >
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg flex items-center justify-center">
                  <img
                    src="/power-bi-dashboard-dark.png"
                    alt="Power BI Dashboard"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-lg font-semibold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                    Power BI Dashboard
                  </h3>
                  <p className={`text-sm mb-4 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                    Interactive dashboard to visualize sales data and identify key trends using Power BI, DAX formulas,
                    and Excel.
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className={`bg-transparent ${
                        theme === "light"
                          ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                          : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                      }`}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View Project
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`transition-colors group ${
                theme === "light"
                  ? "bg-white border-gray-200 hover:border-blue-500"
                  : "bg-slate-800 border-slate-600 hover:border-cyan-400"
              }`}
            >
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 rounded-t-lg flex items-center justify-center">
                  <img
                    src="/financial-analysis-spreadsheet-vba.png"
                    alt="Financial Advice Tool"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-lg font-semibold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                    Financial Advice Tool
                  </h3>
                  <p className={`text-sm mb-4 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                    Automated financial planning tool built with VBA to provide personalized investment recommendations.
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className={`bg-transparent ${
                        theme === "light"
                          ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                          : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                      }`}
                    >
                      <Github className="w-3 h-3 mr-1" />
                      View Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`transition-colors group ${
                theme === "light"
                  ? "bg-white border-gray-200 hover:border-blue-500"
                  : "bg-slate-800 border-slate-600 hover:border-cyan-400"
              }`}
            >
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 rounded-t-lg flex items-center justify-center">
                  <img
                    src="/time-management-dashboard.png"
                    alt="Time Management Tool"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-lg font-semibold mb-2 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                    Time Management Tool
                  </h3>
                  <p className={`text-sm mb-4 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                    VBA-based productivity application for tracking tasks and optimizing time allocation across
                    projects.
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className={`bg-transparent ${
                        theme === "light"
                          ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                          : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                      }`}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 md:px-12 ${theme === "light" ? "bg-gray-100" : "bg-slate-800"}`}>
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
          <Button
            className={`font-semibold px-8 py-3 ${
              theme === "light"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-cyan-400 hover:bg-cyan-500 text-slate-900"
            }`}
          >
            <Mail className="w-4 h-4 mr-2" />
            Say Hello
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 md:px-12 border-t ${theme === "light" ? "border-gray-200" : "border-slate-700"}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
            Designed & Built by Nishka Shah
          </p>
        </div>
      </footer>
    </div>
  )
}
