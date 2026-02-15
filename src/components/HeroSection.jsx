import { Link } from "react-router-dom";
import content from "../data/content.json";
import VisitorCounter from "./VisitorCounter";

export default function HeroSection() {
  const { personal } = content;

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="text-center">
          <p className="text-primary-600 dark:text-primary-400 font-medium text-sm sm:text-base mb-4">
            Hello, I am
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {personal.name}
          </h1>
          <VisitorCounter />
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4">
            {personal.title}
          </p>
          <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 text-lg mb-18">
            {personal.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={personal.heroCtaLink}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/25"
            >
              {personal.heroCtaText}
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <a
              href={personal.resumeUrl}
              download
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
