'use client';

import Layout from '@/app/_components/Layout';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';

export default function Subscriptions() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-8">
          Subscriptions
        </h1>
        
        <div className="bg-slate-800/70 rounded-lg p-8 text-center border border-slate-800/30 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out">
          <SignedIn>
            <h2 className="text-lg font-semibold text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-slate-300">
              Our subscription management system is currently under development. 
              Check back soon for comprehensive SaaS subscription tracking and management.
            </p>
          </SignedIn>
          <SignedOut>
            <p className="text-slate-300">
              Please &quot;Sign In&quot; to view subscriptions.
            </p>
            <p className="mt-3">
              <SignInButton mode="modal">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow cursor-pointer">
                  Sign In
                </button>
              </SignInButton>
            </p>
          </SignedOut>
        </div>
      </div>
    </Layout>
  );
}
