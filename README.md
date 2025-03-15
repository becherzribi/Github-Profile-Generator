# GitHub Profile Portfolio Generator

---

## 🌟 Features

- **Interactive Terminal Animation** - Engage visitors with a dynamic terminal display
- **Professional Sections** - Showcase your skills, projects, experience, and education
- **GitHub Integration** - Display your GitHub stats and repository cards
- **Responsive Design** - Looks great on all devices
- **Customizable Themes** - Personalize colors to match your style
- **Resume Download** - Let visitors download your resume directly
- **Repository Links** - Link directly to your GitHub projects

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer)
- [Git](https://git-scm.com/)
- A GitHub account

---

### Installation

1. **Clone this repository**

```bash
git clone https://github.com/YOUR_USERNAME/github-profile-generator.git
cd github-profile-generator
Install dependencies
bash
Copier
Modifier
npm install
Start the development server
bash
Copier
Modifier
npm run dev
Open your browser and navigate to http://localhost:3000
📝 Customization
Step 1: Update Your Personal Information
Edit the files in the data directory to customize your portfolio:

Basic Profile (data/profile.js)
javascript
Copier
Modifier
export const profile = {
  name: "Your Name",
  role: "Your Professional Title",
  education: {
    degree: "Your Degree",
    institution: "Your Institution",
    major: "Your Major",
    minor: "Your Minor",
  },
  skills: ["Skill 1", "Skill 2", "Skill 3"],
  contact: {
    email: "your.email@example.com",
    phone: "Your Phone Number",
    linkedin: "https://www.linkedin.com/in/your-linkedin-profile",
  },
  interests: ["Interest 1", "Interest 2", "Interest 3"],
}
Skills (data/skills.js)
javascript
Copier
Modifier
export const skillCategories = [
  {
    name: "Category Name",
    skills: [
      { name: "Skill Name", level: 90 }, // Level is a percentage (0-100)
      // Add more skills...
    ],
  },
  // Add more categories...
]
Projects (data/projects.js)
javascript
Copier
Modifier
export const projects = [
  {
    title: "Project Title",
    description: "Project description...",
    status: "Ongoing", // or "Completed"
    tags: ["Tag1", "Tag2", "Tag3"],
    link: "#", // Demo link
    github: "https://github.com/YOUR_USERNAME/project-repo" // GitHub repository link
  },
  // Add more projects...
]
Experience (data/experience.js)
javascript
Copier
Modifier
export const experiences = [
  {
    title: "Job Title",
    company: "Company Name",
    period: "Start - End Date",
    location: "Location",
    description: [
      "Responsibility or achievement 1",
      "Responsibility or achievement 2",
    ],
  },
  // Add more experiences...
]
Education (data/education.js)
javascript
Copier
Modifier
export const education = {
  degree: "Your Degree",
  institution: "Your Institution",
  period: "Study Period",
  major: "Your Major",
  minor: "Your Minor",
  courses: ["Course 1", "Course 2", "Course 3"],
}

export const certifications = [
  "Certification 1",
  "Certification 2",
  "Certification 3",
]
Contact Information (data/contact.js)
javascript
Copier
Modifier
export const contact = {
  email: "your.email@example.com",
  phone: "Your Phone Number",
  location: "Your Location",
  linkedin: "https://www.linkedin.com/in/your-linkedin-profile",
}

export const languages = [
  { name: "Language 1", level: "Proficiency Level", proficiency: 90, flag: "🏳️" },
  // Add more languages...
]
Step 2: Add Your Resume
Save your resume as a PDF file.
Place it in the public folder with the name Your_Name_Resume.pdf.
Update the resume link in components/contact.tsx if needed.
Step 3: Update GitHub Username
Replace YOUR_USERNAME with your actual GitHub username in:

components/github-stats.tsx
Any GitHub repository links in data/projects.js
Step 4: Customize Colors (Optional)
Edit the color theme in tailwind.config.js:

javascript
Copier
Modifier
theme: {
  extend: {
    colors: {
      theme: {
        primary: "#3B82F6", // Change to your preferred primary color
        secondary: "#10B981", // Change to your preferred secondary color
        accent: "#8B5CF6", // Change to your preferred accent color
        // ... other colors
      },
    },
  },
}
📤 Creating Your GitHub Profile README
Generate Your README
Run the export script:
bash
Copier
Modifier
npm run export
The generated README will be in the output directory.
Set Up Your GitHub Profile Repository
Create a new repository on GitHub with the exact same name as your GitHub username.

For example, if your username is "johndoe", create a repository named "johndoe".

Initialize the repository with a README.

Copy the contents from the generated README in the output directory.

Paste the content into your GitHub repository's README.md file.

Commit and push the changes.

Your profile README will now be visible on your GitHub profile page!

🚀 Deployment
Option 1: Deploy to GitHub Pages
Update next.config.js:
javascript
Copier
Modifier
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/github-profile-generator',
  assetPrefix: '/github-profile-generator',
};

module.exports = nextConfig;
Create .github/workflows/deploy.yml:
yaml
Copier
Modifier
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build project
        run: npm run build
        
      - name: Add .nojekyll file
        run: touch out/.nojekyll
        
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: out
Push to GitHub and enable GitHub Pages in repository settings.
Option 2: Deploy to Vercel
Push your code to GitHub.
Go to Vercel and sign up/login.
Click "New Project" and import your GitHub repository.
Configure project settings if needed and click "Deploy".
Your portfolio will be live at the provided Vercel URL.
🔧 Troubleshooting
Common Issues
Issue: Images not loading after deployment
Solution: Make sure you're using the correct path for images. For Next.js with static export, use:

javascriptreact
Copier
Modifier
<img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/your-image.jpg`} />
Issue: Resume download not working
Solution: Ensure your resume PDF is in the correct location (public folder) and the path in the download link is correct.

Issue: GitHub stats not showing
Solution: Double-check that you've replaced YOUR_USERNAME with your actual GitHub username in all relevant files.

❓ FAQ
How do I update my portfolio after making changes?
After making changes to your data files:

Run the development server to preview changes:
bash
Copier
Modifier
npm run dev
When satisfied, build the project:
bash
Copier
Modifier
npm run build
If you've deployed to GitHub Pages or Vercel, push your changes to GitHub to trigger automatic deployment.
Can I use this for a personal website instead of a GitHub profile?
Yes! This project works great as a personal portfolio website. Deploy it to Vercel or GitHub Pages as described in the Deployment section.

How do I add more sections to my portfolio?
Create a new component in the components directory.
Add your custom section content.
Import and add the component to app/page.tsx.
How do I change the layout or design?
The project uses Tailwind CSS for styling. You can modify the components in the components directory to change the layout and design.

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

✨ Enjoy building your portfolio! ✨

arduino
Copier
Modifier

This `README.md` guide will help you set up and customize your GitHub Profile Portfolio Generator. It includes setup instructions, customization details, and troubleshooting tips to get people started quickly!











