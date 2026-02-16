import content from "../data/content.json";

export default function AboutSection() {
  const { personal, skills } = content;

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 shadow-xl">
              <div className="w-full h-full rounded-2xl bg-transparent bg-gray-200 dark:bg-gray-800 overflow-hidden flex items-center justify-center">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML =
                      '<span class="text-6xl">👤</span>';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bio + Skills */}
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              {personal.bio}
            </p>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
