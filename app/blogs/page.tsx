import React from 'react';

export default function BlogsPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white dark:bg-black transition-colors px-6">
      <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">
        Blogs
      </h1>
      <p className="text-blue-600 font-bold tracking-[0.3em] uppercase animate-pulse">
        Coming Soon...
      </p>
      <div className="mt-8 w-20 h-1 bg-blue-600 rounded-full" />
    </div>
  );
}