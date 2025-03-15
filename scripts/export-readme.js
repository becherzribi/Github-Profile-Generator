const fs = require("fs")
const path = require("path")

// Import data
const { profile } = require("../data/profile")
const { projects } = require("../data/projects")
const { experiences } = require("../data/experience")
const { education, certifications } = require("../data/education")
const { contact, languages } = require("../data/contact")

// Generate README content
function generateReadme() {
  return `# Hi there, I'm ${profile.name} 👋

<div align="center">
  <img src="./terminal-animation.gif" alt="Terminal Animation" width="700px" />
</div>

## 🚀 About Me

${profile.role} with expertise in data science, machine learning, and business intelligence. Currently pursuing a ${education.degree} with a major in ${education.major} and a minor in ${education.minor} at ${education.institution}.

## 💻 Technical Skills

<div align="center">
  
  | Data Science & Programming | Data Analysis | Machine Learning | Web Development |
  |---------------------------|--------------|-----------------|-----------------|
  | Python                    | Excel        | Supervised Learning | Flask        |
  | Pandas                    | Power BI     | Unsupervised Learning | Docker      |
  | NumPy                     | Google Sheets | Deep Learning    | REST APIs      |
  | Scikit-Learn              | Data Cleaning | Model Evaluation | SQLAlchemy     |
  | TensorFlow                | Statistical Analysis |           | Java           |
  | PyTorch                   |              |                  |                 |
  | SQL                       |              |                  |                 |
  | MongoDB                   |              |                  |                 |
  
</div>

## 🔍 Projects

${projects
  .map(
    (project) => `
### ${project.title}
${project.description}
${project.tags.map((tag) => `\`${tag}\``).join(" ")}
${project.github ? `[View Repository](${project.github})` : ""}
`,
  )
  .join("\n")}

## 📂 GitHub Repositories

<div align="center">

[![Marketing Mix Model](https://github-readme-stats.vercel.app/api/pin/?username=YOUR_GITHUB_USERNAME&repo=marketing-mix-model&theme=tokyonight)](https://github.com/YOUR_GITHUB_USERNAME/marketing-mix-model)
[![Flask REST API](https://github-readme-stats.vercel.app/api/pin/?username=YOUR_GITHUB_USERNAME&repo=flask-rest-api&theme=tokyonight)](https://github.com/YOUR_GITHUB_USERNAME/flask-rest-api)

[![Facial Recognition](https://github-readme-stats.vercel.app/api/pin/?username=YOUR_GITHUB_USERNAME&repo=facial-recognition-attendance&theme=tokyonight)](https://github.com/YOUR_GITHUB_USERNAME/facial-recognition-attendance)
[![Churn Analysis](https://github-readme-stats.vercel.app/api/pin/?username=YOUR_GITHUB_USERNAME&repo=churn-analysis&theme=tokyonight)](https://github.com/YOUR_GITHUB_USERNAME/churn-analysis)

</div>

## 🏢 Experience

${experiences
  .map(
    (exp) => `
- **${exp.title}** @ ${exp.company} (${exp.period})
  ${exp.description.map((item) => `  - ${item}`).join("\n")}
`,
  )
  .join("\n")}

## 🎓 Education

- **${education.degree}**
  - ${education.institution} (${education.period})
  - Major in ${education.major}, Minor in ${education.minor}

## 📜 Certifications

${certifications.map((cert) => `- ${cert}`).join("\n")}

## 📈 GitHub Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=YOUR_GITHUB_USERNAME&show_icons=true&theme=tokyonight&hide_border=true" alt="GitHub Stats" />
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=YOUR_GITHUB_USERNAME&theme=tokyonight&hide_border=true" alt="GitHub Streak" />
</div>

## 🌐 Languages

${languages.map((lang) => `- ${lang.flag} ${lang.name} (${lang.level})`).join("\n")}

## 📫 Contact Me

<div align="center">
  
  [![Email](https://img.shields.io/badge/Email-${encodeURIComponent(contact.email)}-blue?style=for-the-badge&logo=gmail)](mailto:${contact.email})
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-becher--zribi-blue?style=for-the-badge&logo=linkedin)](https://${contact.linkedin})
  [![Phone](https://img.shields.io/badge/Phone-${encodeURIComponent(contact.phone)}-green?style=for-the-badge&logo=whatsapp)](tel:${contact.phone.replace(/\s+/g, "")})
  [![Resume](https://img.shields.io/badge/Resume-Download%20PDF-red?style=for-the-badge&logo=adobe-acrobat-reader)](https://github.com/YOUR_GITHUB_USERNAME/YOUR_GITHUB_USERNAME/raw/main/Becher_Zribi_Resume.pdf)
  
</div>

---

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=YOUR_GITHUB_USERNAME&style=flat-square&color=blue" alt="Profile views"/>
</div>`
}

// Ensure output directory exists
const outputDir = path.join(__dirname, "../output")
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir)
}

// Write README to file
const readmeContent = generateReadme()
fs.writeFileSync(path.join(outputDir, "README.md"), readmeContent)

console.log("README.md has been generated in the output directory!")
console.log('Remember to replace "YOUR_GITHUB_USERNAME" with your actual GitHub username.')

