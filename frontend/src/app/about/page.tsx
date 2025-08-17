import Layout from '@/app/_components/Layout';

// Social media icons
const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.665 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323z"/>
  </svg>
);

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-8">
          About Cloudmart
        </h1>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">
            Our Mission: Making work effortless and productive.
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            To empower individuals and businesses with software applications that maximize productivity and simplify everyday work.
          </p>
        </section>

        {/* Vision Section */}
        <section className="mb-12">
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">
            Our Vision: Work Smarter. Live Better.
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            To transform the way individuals and businesses work worldwide by delivering software solutions that unlock effortless productivity.
          </p>
        </section>

        {/* Connect Section */}
        <section className="mb-12">
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-6">
            Connect With Us
          </h2>
          <div className="flex space-x-4">
            <a href="#" className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors">
              <TwitterIcon />
            </a>
            <a href="#" className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors">
              <LinkedInIcon />
            </a>
            <a href="#" className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors">
              <FacebookIcon />
            </a>
            <a href="#" className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors">
              <InstagramIcon />
            </a>
          </div>
        </section>

        {/* Legal Section */}
        <section>
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">
            Legal Entity & Compliance
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Cloudmart is currently in the process of legal entity registration. Full company details will be updated upon completion.
          </p>
        </section>
      </div>
    </Layout>
  );
}
