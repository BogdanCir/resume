import ProjectCard from "../components/ProjectCard";
import content from "../data/content.json";

export default function Projects() {
  const { projects } = content;

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
             I have worked on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
