import { ExternalLink, Bot, BookOpen } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "ChaturAI - A Unified AI Browser Extension",
      type: "Public Chrome Extension",
      icon: Bot,
      description: "Conceptualized and deployed a public Chrome extension providing a unified interface for major LLMs including ChatGPT, Gemini, Groq, and Claude.",
      link: "https://chromewebstore.google.com/detail/kehohalijgkilbmdiiidbmfokdbjappf?utm_source=item-share-cb",
      tags: ["Chrome Extension", "AI/LLM", "JavaScript"]
    },
    {
      title: "Machine Learning in Radiation Therapy",
      type: "Academic Thesis",
      icon: BookOpen,
      description: "Conducted academic research evaluating Machine Learning integration into clinical Radiation Therapy workflows.",
      tags: ["Machine Learning", "Research", "Healthcare"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto h-full flex flex-col pt-8">
      <div className="mb-12 shrink-0">
        <h2 className="text-4xl font-bold mb-4">Technical Projects</h2>
        <p className="text-zinc-400">Showcasing my technical and academic ventures.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-md overflow-hidden transition-colors flex flex-col h-full shadow-xl"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 flex-1">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                
                <div className="text-xs font-semibold tracking-wider text-blue-400 mb-2 uppercase">
                  {project.type}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/10 text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
