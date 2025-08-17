import Layout from '@/app/_components/Layout';

export default function Applications() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-8">
          Applications
        </h1>
        
        <div className="bg-slate-800/70 rounded-lg p-8 text-center border border-slate-800/30 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer">
          <h2 className="text-lg font-semibold text-white mb-4">
            Coming Soon
          </h2>
          <p className="text-slate-300">
            Our applications management system is currently under development. 
            Check back soon for a comprehensive SaaS application discovery and management experience.
          </p>
        </div>
      </div>
    </Layout>
  );
}
