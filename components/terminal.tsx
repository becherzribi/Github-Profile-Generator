"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { profile } from "@/data/profile"

export function Terminal() {
  const [text, setText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Generate terminal text from profile data
  const generateTerminalText = () => {
    return `> BecherZribi.profile
{
  "name": "${profile.name}",
  "role": "${profile.role}"
}

> BecherZribi.education
{
  "degree": "${profile.education.degree}",
  "institution": "${profile.education.institution}",
  "major": "${profile.education.major}",
  "minor": "${profile.education.minor}"
}

> BecherZribi.skills
[
${profile.skills.map((skill) => `  "${skill}"`).join(",\n")}
]

> BecherZribi.contact
{
  "email": "${profile.contact.email}",
  "phone": "${profile.contact.phone}",
  "linkedin": "${profile.contact.linkedin}"
}

> BecherZribi.interests
[
${profile.interests.map((interest) => `  "${interest}"`).join(",\n")}
]`
  }

  const fullText = generateTerminalText()

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.substring(0, currentIndex + 1))
        currentIndex++

        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
      } else {
        clearInterval(typingInterval)
      }
    }, 30)

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [fullText])

  return (
    <Card className="bg-black border border-theme-surfaceLight shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-theme-surface to-black px-4 py-2 border-b border-theme-surfaceLight">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="ml-4 text-sm text-theme-secondary font-mono">BecherZribi@github:~</div>
        </div>
      </div>
      <CardContent className="p-0">
        <div
          ref={terminalRef}
          className="font-mono text-sm bg-black p-4 h-64 overflow-auto whitespace-pre"
          style={{
            color: "#10B981", // Using theme-secondary for better visibility
            textShadow: "0 0 5px rgba(16, 185, 129, 0.3)",
          }}
        >
          {text}
          {cursorVisible && <span className="text-theme-secondary animate-pulse-subtle">▋</span>}
        </div>
      </CardContent>
    </Card>
  )
}

