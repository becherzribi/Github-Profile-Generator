import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  const experiences = [
    
    {
      title: "Data Analyst Intern",
      company: "Ominet",
      period: "Jun - Aug 2024",
      location: "Tunis",
      description: [
        "Assisted in developing a rental pricing analysis tool using Python to identify trends and improve prediction accuracy.",
        "Conducted data research and worked with historical data sets to support the development of an analytical framework.",
      ],
    },
    {
      title: "Financial Analyst Intern",
      company: "GCT (Chemical Group Tunisian)",
      period: "Jul - Aug 2023",
      location: "Tunis",
      description: [
        "Prepared and analyzed financial reports for budgets exceeding 500K TND, providing actionable insights to management.",
        "Used Excel and Power BI to create 10+ visual dashboards, tracking key financial metrics and improving decision-making efficiency.",
      ],
    },
    
    {
      title: "Event Manager",
      company: "Job Fair TBS",
      period: "2021-2022",
      location: "Tunis",
      description: [
        "Coordinated logistics for a job fair attended by over 200 participants and 20+ companies.",
        "Applied problem-solving techniques to address challenges, ensuring a seamless event experience.",
        "Negotiated sponsorships and managed a budget of over 5,000 TND to maximize resources.",
        "Successfully managed multiple tasks, leading a team of 10 volunteers to execute the event efficiently.",
      ],
    },
    {
      title: "Entrepreneur",
      company: "ThriftHome and PolgaShop",
      period: "2020 - Present",
      location: "Tunis",
      description: [
        "Successfully manage two e-commerce businesses on Instagram: PolgaShop (vintage clothing with 3,500+ followers) and ThriftHome (trendy accessories with 250+ followers).",
        "Increased engagement rates by 35% through targeted social media campaigns and influencer partnerships.",
        "Manage inventory of 150+ products and implement pricing strategies to ensure steady revenue growth and customer satisfaction.",
      ],
    },
  ]

  return (
    <section id="experience">
      <Card className="bg-theme-surface border-theme-surfaceLight shadow-lg">
        <CardHeader className="border-b border-theme-surfaceLight bg-gradient-to-r from-theme-surface to-theme-surfaceLight">
          <CardTitle className="text-2xl text-theme-accent flex items-center">
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
              className="lucide lucide-briefcase mr-2"
            >
              <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            Professional Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="relative border-l-2 border-theme-accent/50 pl-6 ml-3 space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[27px] mt-1.5 h-5 w-5 rounded-full bg-theme-accent border-4 border-theme-surface"></div>
                <div className="mb-1 flex flex-col sm:flex-row sm:items-baseline">
                  <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                  <span className="sm:ml-2 text-sm font-medium text-theme-primary">@ {exp.company}</span>
                </div>
                <div className="text-sm text-theme-muted mb-2 flex flex-wrap items-center gap-2">
                  <span className="bg-theme-surfaceLight px-2 py-0.5 rounded-full">{exp.period}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="bg-theme-surfaceLight px-2 py-0.5 rounded-full">{exp.location}</span>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

