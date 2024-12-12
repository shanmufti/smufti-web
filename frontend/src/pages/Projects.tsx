import React from 'react'

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Personal Website',
      description: 'Scalable personal portfolio using React, FastAPI, and GCP',
      technologies: ['React', 'FastAPI', 'Docker', 'GCP']
    },
    {
      title: 'Another Project',
      description: 'Brief description of another project',
      technologies: ['Technology 1', 'Technology 2']
    }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects