import React from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white min-h-screen font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 backdrop-blur-md bg-white/10 shadow-md fixed w-full top-0 z-50">
        <h1 className="text-3xl font-bold tracking-wide text-purple-300 drop-shadow">psyche<span className="text-indigo-300">AI</span></h1>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 transition-all rounded-full text-white font-medium shadow-md">Login</button>
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 transition-all rounded-full text-white font-medium shadow-md">Register</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 text-center px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-xl"
        >
          Your Mental Wellness Companion
        </motion.h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
          Assess anxiety and depression symptoms in minutes. Let AI guide your next step to wellness.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 flex justify-center gap-6"
        >
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg transition-all text-lg font-semibold">Get Started</button>
          <button className="bg-white/10 hover:bg-white/20 border border-white text-white px-6 py-3 rounded-full transition-all text-lg font-semibold">Learn More</button>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="px-8 py-20 bg-white/5">
        <h3 className="text-center text-3xl font-bold mb-14">How It Works</h3>
        <div className="grid sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Choose Assessment", desc: "Pick between depression (PHQ-9) or anxiety (GAD-7)." },
            { title: "Answer Questions", desc: "Fill out a quick multi-step form. Takes less than 5 minutes." },
            { title: "Get Instant Feedback", desc: "Let AI analyze your results and guide your next steps." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg text-center"
            >
              <h4 className="text-xl font-semibold text-indigo-200 mb-2">{item.title}</h4>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-8 py-20">
        <h3 className="text-center text-3xl font-bold mb-14">Why psycheAI?</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Backed by medical standards (PHQ-9, GAD-7)",
            "Fast, private, and accurate",
            "AI-powered suggestions",
            "Progress tracking",
            "Secure user data",
            "Modern, calming UI",
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/10 p-6 rounded-xl text-center text-gray-200 shadow-lg"
            >
              {feature}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 py-24 bg-gradient-to-r from-purple-700 via-indigo-800 to-purple-700 text-center rounded-t-3xl">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Ready to take control of your mental health?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-200 mb-10"
        >
          Sign up now and get started in just a few clicks.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white text-purple-800 px-8 py-4 rounded-full text-lg font-bold shadow-2xl transition-all hover:bg-purple-100"
        >
          Register Now
        </motion.button>
      </section>

      {/* Footer */}
      <footer className="px-8 py-10 text-center text-gray-400 text-sm bg-black/20 mt-10">
        © {new Date().getFullYear()} psycheAI. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
