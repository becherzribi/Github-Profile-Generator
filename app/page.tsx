import { Terminal } from "@/components/terminal"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { GithubStats } from "@/components/github-stats"
import { profile } from "@/data/profile"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-theme-dark to-theme-surface text-theme-light p-6 md:p-10">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-theme-primary via-theme-secondary to-theme-accent">
            {profile.name}
          </h1>
          <p className="text-xl text-white">{profile.role}</p>
          <div className="flex justify-center space-x-4">
            <a
              href={`https://${profile.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-primary hover:text-blue-400 transition-colors hover:shadow-glow"
            >
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
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              className="text-theme-secondary hover:text-green-400 transition-colors hover:shadow-glow-green"
            >
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
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              href="/Becher_Zribi_Resume.pdf"
              download="Becher_Zribi_Resume.pdf"
              className="text-theme-accent hover:text-purple-400 transition-colors hover:shadow-glow-purple"
            >
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
                className="lucide lucide-file-text"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" x2="8" y1="13" y2="13" />
                <line x1="16" x2="8" y1="17" y2="17" />
                <line x1="10" x2="8" y1="9" y2="9" />
              </svg>
            </a>
          </div>
        </header>

        {/* Terminal Animation */}
        <Terminal />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Education Section */}
        <Education />

        {/* GitHub Stats */}
        <GithubStats />

        {/* Contact Section */}
        <Contact />
      </div>
    </main>
  )
}

