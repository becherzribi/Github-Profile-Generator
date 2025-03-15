import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export function Contact() {
  return (
    <section id="contact">
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
              className="lucide lucide-contact mr-2"
            >
              <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <circle cx="12" cy="10" r="2" />
              <line x1="8" x2="8" y1="2" y2="4" />
              <line x1="16" x2="16" y1="2" y2="4" />
            </svg>
            Get In Touch
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <a href="mailto:zribibecher.tn@gmail.com" className="flex items-center space-x-3 bg-theme-surfaceLight p-4 rounded-lg border border-theme-muted/20 hover:border-theme-primary transition-colors">
                <div className="bg-theme-primary/20 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail text-theme-primary"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-theme-muted">Email</p>
                  <p className="text-white font-medium">zribibecher.tn@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center space-x-3 bg-theme-surfaceLight p-4 rounded-lg border border-theme-muted/20 hover:border-theme-secondary transition-colors">
                <div className="bg-theme-secondary/20 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone text-theme-secondary"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-theme-muted">Phone</p>
                  <p className="text-white font-medium">+216 20 399 216</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-theme-surfaceLight p-4 rounded-lg border border-theme-muted/20 hover:border-theme-accent transition-colors">
                <div className="bg-theme-accent/20 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin text-theme-accent"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-theme-muted">Location</p>
                  <p className="text-white font-medium">Mourouj 3 - Ben Arous, Tunisia</p>
                </div>
              </div>
            
              <a href="https://www.linkedin.com/in/becher-zribi" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 bg-theme-surfaceLight p-4 rounded-lg border border-theme-muted/20 hover:border-theme-primary transition-colors">
                <div className="bg-theme-primary/20 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin text-theme-primary"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-theme-muted">LinkedIn</p>
                  <p className="text-white font-medium">www.linkedin.com/in/becher-zribi</p>
                </div>
              </a>
            </div>

            <div className="bg-theme-surfaceLight p-5 rounded-lg border border-theme-muted/20">
              <h3 className="text-lg font-medium text-white mb-4">Languages</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center">
                      
                      Arabic
                    </span>
                    <span className="text-theme-primary font-medium">Native</span>
                  </div>
                  <div className="h-2 bg-theme-surface rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-theme-primary to-theme-secondary rounded-full w-full"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center">
                      
                      English
                    </span>
                    <span className="text-theme-primary font-medium">Advanced</span>
                  </div>
                  <div className="h-2 bg-theme-surface rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-theme-primary to-theme-secondary rounded-full w-[85%]"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center">
                      
                      French
                    </span>
                    <span className="text-theme-secondary font-medium">Intermediate</span>
                  </div>
                  <div className="h-2 bg-theme-surface rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-theme-secondary to-theme-accent rounded-full w-[65%]"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center">
                      
                      German
                    </span>
                    <span className="text-theme-accent font-medium">Beginner</span>
                  </div>
                  <div className="h-2 bg-theme-surface rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-theme-accent to-theme-primary rounded-full w-[30%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <a
              href="/Becher_Zribi_Resume.pdf"
              download="Becher_Zribi_Resume.pdf"
              className="inline-flex items-center justify-center bg-gradient-to-r from-theme-primary via-theme-secondary to-theme-accent hover:opacity-90 text-white font-medium px-6 py-2 h-auto shadow-lg hover:shadow-glow transition-all duration-300 rounded-md"
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
                className="lucide lucide-download mr-2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Download Resume
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
