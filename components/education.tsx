import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Education() {
  const certifications = [
    "Data Analyst with Python — DataCamp",
    "Machine Learning Fundamentals — DataCamp",
    "Power BI Fundamentals — DataCamp",
    "AI Fundamentals — DataCamp",
  ]

  const courses = [
    "Data Mining",
    "Data Analytics",
    "Advanced Econometrics",
    "Time Series Analysis",
    "Business Optimization",
    "Calculus",
    "Linear Algebra",
    "Operation Research",
    "Game Theory",
    "Business Intelligence",
    "Project Management",
    "Supply Chain Management",
    "Network Analysis",
  ]

  return (
    <section id="education">
      <Card className="bg-theme-surface border-theme-surfaceLight shadow-lg">
        <CardHeader className="border-b border-theme-surfaceLight bg-gradient-to-r from-theme-surface to-theme-surfaceLight">
          <CardTitle className="text-2xl text-theme-primary flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-graduation-cap mr-2"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
            </svg>
            Education & Certifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="bg-theme-surfaceLight p-5 rounded-lg border border-theme-muted/20">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Bachelor of Science in Business Administration</h3>
                <p className="text-theme-muted">Tunis Business School</p>
              </div>
              <Badge className="mt-2 sm:mt-0 bg-theme-primary/20 text-theme-primary border-theme-primary self-start">
                Since 2021
              </Badge>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-theme-secondary mb-1">
                  Major in Business Analytics, Minor in Information Technology
                </h4>
                <div className="w-20 h-1 bg-theme-secondary rounded-full"></div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-white mb-2">Key Courses:</h4>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-theme-surface text-theme-light border border-theme-muted/30 hover:border-theme-primary transition-colors"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-theme-surfaceLight p-5 rounded-lg border border-theme-muted/20">
            <h3 className="text-lg font-semibold text-white mb-4">Certifications & Professional Development</h3>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-300 bg-theme-surface p-3 rounded-md border border-theme-muted/10 hover:border-theme-secondary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check text-theme-secondary mr-3"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

