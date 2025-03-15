import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      name: "Data Science & Programming",
      skills: [
        { name: "Python", level: 90 },
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 80 },
        { name: "Scikit-Learn", level: 75 },
        { name: "TensorFlow", level: 70 },
        { name: "PyTorch", level: 65 },
        { name: "SQL", level: 80 },
        { name: "MongoDB", level: 70 },
      ],
    },
    {
      name: "Data Analysis & Visualization",
      skills: [
        { name: "Excel", level: 90 },
        { name: "Power BI", level: 85 },
        { name: "Google Sheets", level: 80 },
        { name: "Data Cleaning", level: 85 },
        { name: "Statistical Analysis", level: 80 },
      ],
    },
    {
      name: "Machine Learning",
      skills: [
        { name: "Supervised Learning", level: 80 },
        { name: "Unsupervised Learning", level: 75 },
        { name: "Deep Learning", level: 70 },
        { name: "Model Evaluation", level: 80 },
      ],
    },
    {
      name: "Web Development & APIs",
      skills: [
        { name: "Flask", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Swagger", level: 65 },
        { name: "NodeJS", level: 60 },
        { name: "Java", level: 65 },
      ],
    },
  ]

  return (
    <section id="skills">
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
              className="lucide lucide-code-2 mr-2"
            >
              <path d="m18 16 4-4-4-4" />
              <path d="m6 8-4 4 4 4" />
              <path d="m14.5 4-5 16" />
            </svg>
            Technical Skills
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {skillCategories.map((category) => (
            <div key={category.name} className="space-y-3">
              <h3 className="text-lg font-medium text-white">{category.name}</h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-theme-muted">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-theme-surfaceLight rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${getSkillColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}

// Helper function to get color based on skill level
function getSkillColor(level: number) {
  if (level >= 85) {
    return "bg-gradient-to-r from-theme-primary to-theme-secondary"
  } else if (level >= 70) {
    return "bg-gradient-to-r from-theme-secondary to-theme-accent"
  } else {
    return "bg-gradient-to-r from-theme-accent to-theme-primary"
  }
}

