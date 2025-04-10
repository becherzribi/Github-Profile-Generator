import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/data/projects"

export function GithubRepos() {
  // Filter projects that have GitHub links
  const githubProjects = projects.filter((project) => project.github)

  return (
    <section id="github-repos">
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
              className="lucide lucide-github mr-2"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            GitHub Repositories
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {githubProjects.map((project) => (
              <a key={project.title} href={project.github} target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-theme-surfaceLight p-4 rounded-lg border border-theme-muted/20 hover:border-theme-primary transition-all duration-300 hover:shadow-glow h-full">
                  <div className="flex items-center mb-3">
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
                      className="lucide lucide-git-fork text-theme-primary mr-2"
                    >
                      <circle cx="12" cy="18" r="3" />
                      <circle cx="6" cy="6" r="3" />
                      <circle cx="18" cy="6" r="3" />
                      <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
                      <path d="M12 12v3" />
                    </svg>
                    <h3 className="text-white font-medium">{project.title}</h3>
                  </div>
                  <p className="text-sm text-gray-300 mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs bg-theme-surface text-theme-light px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs bg-theme-surface text-theme-light px-2 py-1 rounded-full">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

