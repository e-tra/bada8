
'use client';

import { useState, useEffect } from 'react';
import BookSession from './BookSession';

export default function Hero() {
  const [showBookSession, setShowBookSession] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://public.readdy.ai/ai/video_res/9882066c-7a03-4211-8642-b0a8b08458eb.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/70"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl">
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              People Are the<br />
              <span className="text-amber-200 italic">Strategy</span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-gray-300 mb-16 max-w-2xl font-light leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Transforming organizations through intelligent talent strategy, conscious leadership, and human-centered design.
            </p>
            
            <div className={`relative transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button 
                onClick={() => setShowBookSession(true)}
                className="group bg-amber-200/20 hover:bg-amber-200/30 border border-amber-200/50 hover:border-amber-200 text-amber-200 px-8 py-4 rounded-full transition-all duration-500 hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                <span className="text-lg font-light tracking-wider">Begin Your Journey</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {showBookSession && (
        <div className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-sm flex items-center justify-center p-8">
          <div className="bg-gray-900 rounded-3xl p-12 max-w-4xl w-full relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowBookSession(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-amber-200 transition-colors"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>

            <div className="text-center mb-16">
              <h2 className="text-5xl font-light text-white mb-6">Ready to Transform?</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Let's explore how we can unlock your organization's potential together
              </p>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-gray-300 text-sm mb-3">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-200 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-3">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-200 transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-3">Company</label>
                <input
                  type="text"
                  name="company"
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-200 transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-gray-300 text-sm mb-3">Session Type</label>
                  <div className="relative">
                    <select
                      name="sessionType"
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-200 transition-colors appearance-none pr-8"
                      required
                    >
                      <option value="">Select session type</option>
                      <option value="strategy">Strategy Consultation</option>
                      <option value="assessment">Organization Assessment</option>
                      <option value="workshop">Leadership Workshop</option>
                      <option value="discovery">Discovery Call</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-4 top-4 text-gray-400"></i>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-3">Preferred Time</label>
                  <div className="relative">
                    <select
                      name="preferredTime"
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-200 transition-colors appearance-none pr-8"
                      required
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 5PM)</option>
                      <option value="evening">Evening (5PM - 8PM)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-4 top-4 text-gray-400"></i>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-3">Tell us about your challenge</label>
                <textarea
                  name="message"
                  rows={4}
                  maxLength={500}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-200 transition-colors resize-none"
                  placeholder="What transformation are you looking to achieve?"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-amber-200 text-gray-900 px-12 py-4 rounded-xl font-medium hover:bg-amber-100 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Book Your Session
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
