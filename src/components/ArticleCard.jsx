export default function ArticleCard({ article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
        <time dateTime={article.date}>
          {new Date(article.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <span>&middot;</span>
        <span>{article.readTime}</span>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {article.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
        {article.excerpt}
      </p>

      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
