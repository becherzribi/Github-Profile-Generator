import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function GithubStats() {
  return (
    <section id="github-stats">
      <Card className="bg-theme-surface border-theme-surfaceLight shadow-lg">
        <CardHeader className="border-b border-theme-surfaceLight bg-gradient-to-r from-theme-surface to-theme-surfaceLight">
          <CardTitle className="text-2xl text-theme-secondary flex items-center">
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
            GitHub Stats
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-theme-surfaceLight p-4 rounded-lg border border-theme-muted/20 hover:border-theme-primary transition-all duration-300 hover:shadow-glow">
              <img
                src="https://github-readme-stats.vercel.app/api?username=becherzribi&show_icons=true&theme=dark&bg_color=1F2937&text_color=F9FAFB&icon_color=3B82F6&title_color=3B82F6&border_color=374151&hide_border=false"
                alt="GitHub Stats"
                className="w-full rounded-lg"
              />
              
            </div>
            <div className="bg-theme-surfaceLight p-4 rounded-lg border border-theme-muted/20 hover:border-theme-accent transition-all duration-300 hover:shadow-glow-purple">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=becherzribi&theme=dark&background=1F2937&border=374151&ring=8B5CF6&fire=8B5CF6&currStreakLabel=8B5CF6"
                alt="GitHub Streak Stats"
                className="w-full rounded-lg"
              />
              
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

