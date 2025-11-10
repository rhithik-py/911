import React from 'react';
import AnimatedMapIcon from '../components/AnimatedMapIcon';

export default function Contact() {
  return (
    <main className="min-h-screen pt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-neutral-900/50 border border-white/6 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="text-white/70 mt-2">Questions about a release, shipping, or wholesale? Drop us a message.</p>

          <form className="mt-6 flex flex-col gap-4">
            <div className="input-floating">
              <input type="text" id="name" placeholder=" " required />
              <label htmlFor="name">Full name</label>
            </div>

            <div className="input-floating">
              <input type="email" id="email" placeholder=" " required />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-floating">
              <input type="text" id="subject" placeholder=" " required />
              <label htmlFor="subject">Subject</label>
            </div>

            <div className="input-floating">
              <textarea id="message" placeholder=" " rows="5" className="resize-none bg-transparent" />
              <label htmlFor="message">Message</label>
            </div>

            <button className="px-4 py-2 bg-accent2 rounded text-white">Send Message</button>
          </form>
        </div>

        <div className="flex items-center justify-center">
          <AnimatedMapIcon />
        </div>
      </div>
    </main>
  );
}
