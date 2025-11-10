import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/6 pt-6 pb-10">
      <div className="max-w-7xl mx-auto px-4 text-white/70 flex flex-col md:flex-row items-center justify-between">
        <div>
          <div className="font-bold">911 Diecast Cars</div>
          <div className="text-xs mt-1">Premium diecast collectibles</div>
        </div>

        <div className="text-sm text-white/60 mt-4 md:mt-0">© {new Date().getFullYear()} 911 Diecast</div>
      </div>
    </footer>
  );
}
