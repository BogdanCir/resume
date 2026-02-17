import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";
import content from "../data/content.json";

export default function Contact() {
  const { personal } = content;

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          {/* <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Whether it&apos;s about a role, a collaboration, or just to connect — I&apos;d love to hear from you.
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h2>
            <ContactForm />
          </div>

          {/* Info + social */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Info
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{personal.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  {/* <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> */}
                    {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /> */}
                    {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /> */}
                  {/* </svg> */}
                  {/* <span>{personal.location}</span> */}
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Find Me Online
              </h2>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
