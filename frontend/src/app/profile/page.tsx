'use client';

import Layout from '@/app/_components/Layout';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs';

const ProfileIcon = () => (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

export default function Profile() {
  const { user } = useUser();
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-8">
          Profile
        </h1>
        
        <div className="bg-slate-800/70 rounded-lg p-8 border border-slate-800/30 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out">
          <SignedIn>
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-slate-700/60 rounded-full flex items-center justify-center mr-6">
                <UserButton />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">{user?.fullName}</h2>
                <p className="text-slate-300">{user?.primaryEmailAddress?.emailAddress}</p>
                {user && user.createdAt && <p className="text-slate-400 text-sm">Member since: {new Date(user.createdAt).toLocaleDateString()}</p>}
              </div>
            </div>
            
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/60 rounded-lg p-4 border border-slate-900/30 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer">
                <h3 className="text-base font-semibold text-white mb-2">Account Settings</h3>
                <p className="text-slate-300 text-sm">Manage your account preferences and security settings.</p>
              </div>
              <div className="bg-slate-900/60 rounded-lg p-4 border border-slate-900/30 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer">
                <h3 className="text-base font-semibold text-white mb-2">Preferences</h3>
                <p className="text-slate-300 text-sm">Customize your Cloudmart experience and notifications.</p>
              </div>
            </div> */}
          </SignedIn>
          <SignedOut>
            <SignInButton/>
          </SignedOut>
        </div>
      </div>
    </Layout>
  );
}
