import React from 'react'

const About: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Professional Background</h2>
          <p>
            I'm a software engineer with experience in full-stack development,
            specializing in modern web technologies.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside">
            <li>React & TypeScript</li>
            <li>Python & FastAPI</li>
            <li>Cloud Technologies</li>
            <li>DevOps & CI/CD</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About