import Layout from '@/app/_components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-8">
          Welcome to Cloudmart
        </h1>

        {/* Hero Section */}
        <section className="mb-12">
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">
            Making work effortless and productive
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Empowering individuals and businesses with software applications that maximize productivity, track goals and simplify everyday work.
          </p>
        </section>

        {/* Quick Overview */}
        <section className="mb-12">
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-6">
            What We Do
          </h2>
          <div className="grid gap-6">
            <div className="bg-slate-800/70 p-6 rounded-lg border border-slate-800/30 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer">
              <h3 className="text-lg font-semibold text-white mb-3">Productivity Solutions</h3>
              <p className="text-slate-300">
                We create productivity software that empowers individuals to track goals, boost efficiency, and achieve more every day.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12">
          <div className="bg-slate-800/70 p-8 rounded-lg border border-slate-800/30 text-center hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out">
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">
              Ready to transform your workflow?
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              Discover how Cloudmart can help you work smarter and live better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/about" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                About Us
              </Link>
              <Link 
                href="/applications" 
                className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Our Applications
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
