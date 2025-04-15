import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, 
  Brain, 
  ActivitySquare, 
  Calendar, 
  Shield, 
  Sparkles,
  Menu,
  X,
  CheckCircle,
  ChevronRight
} from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const testimonials = [
    {
      quote: "PsycheAI helped me recognize my anxiety patterns and take positive steps forward.",
      author: "Alex T."
    },
    {
      quote: "I've been tracking my depression symptoms for months now, and seeing the progress is incredibly motivating.",
      author: "Jamie K."
    },
    {
      quote: "The guided recommendations feel personalized and thoughtful. It's like having a wellness coach in your pocket.",
      author: "Sam R."
    }
  ];

  const NavbarItem = ({ text }) => (
    <motion.a 
      href="#" 
      className="relative text-purple-100 text-lg font-medium group hidden md:block"
      whileHover={{ scale: 1.05 }}
    >
      {text}
      <motion.span 
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-300 group-hover:w-full" 
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white min-h-screen font-sans overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-600/10 blur-3xl"
            animate={{
              x: [Math.random() * 100, Math.random() * -100],
              y: [Math.random() * 100, Math.random() * -100],
              scale: [1, 1.5, 1],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 25 + i * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.max(300, Math.random() * 600)}px`,
              height: `${Math.max(300, Math.random() * 600)}px`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <motion.nav 
        className={`flex justify-between items-center px-6 md:px-10 py-4 backdrop-blur-md bg-white/5 fixed w-full top-0 z-50 transition-all duration-300 ${
          scrollY > 20 ? "shadow-lg bg-indigo-900/80" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-2xl md:text-3xl font-bold tracking-wide text-purple-300 drop-shadow-md flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
          >
            <Heart className="inline mr-2 text-pink-400" size={24} />
          </motion.span>
          psyche<span className="text-indigo-300">AI</span>
        </motion.h1>

        <div className="hidden md:flex space-x-8">
          <NavbarItem text="Home" />
          <NavbarItem text="Assessments" />
          <NavbarItem text="Resources" />
          <NavbarItem text="About" />
        </div>

        <div className="hidden md:flex space-x-4">
          <motion.button 
            className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 transition-all rounded-full text-white font-medium shadow-md"
            whileHover={{ scale: 1.05, backgroundColor: "#4338ca" }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
          <motion.button 
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 transition-all rounded-full text-white font-medium shadow-md"
            whileHover={{ scale: 1.05, backgroundColor: "#7e22ce" }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 bg-indigo-900/95 backdrop-blur-lg z-40 border-b border-purple-500/20 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {["Home", "Assessments", "Resources", "About"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-purple-100 py-3 px-4 rounded-lg hover:bg-white/10"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item}
                </motion.a>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <motion.button 
                  className="px-4 py-3 bg-indigo-500 hover:bg-indigo-600 transition-all rounded-xl text-white font-medium shadow-md w-full"
                  whileTap={{ scale: 0.95 }}
                >
                  Login
                </motion.button>
                <motion.button 
                  className="px-4 py-3 bg-purple-600 hover:bg-purple-700 transition-all rounded-xl text-white font-medium shadow-md w-full"
                  whileTap={{ scale: 0.95 }}
                >
                  Register
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 text-center px-4 md:px-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 pointer-events-none"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="rgba(216, 180, 254, 0.3)" />
                <stop offset="100%" stopColor="rgba(129, 140, 248, 0)" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="40" fill="url(#gradient)" />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <motion.div
            className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-purple-300/20 pointer-events-none"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ delay: 0.7, duration: 1.5 }}
          >
            <Brain size={180} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl relative"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
              Your Mental Wellness
            </span>
            <br />
            <span className="relative">
              Companion
              <motion.div
                className="absolute -right-2 -top-2 text-yellow-300"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles size={24} />
              </motion.div>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 max-w-2xl mx-auto text-lg text-gray-300"
          >
            Assess anxiety and depression symptoms in minutes with clinically-validated tools. 
            Let AI guide your next step to wellness.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          >
            <motion.button 
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-3 rounded-full shadow-lg transition-all text-lg font-semibold flex items-center justify-center"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)" }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ChevronRight className="ml-1" size={20} />
              </motion.span>
            </motion.button>
            <motion.button 
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-full transition-all text-lg font-semibold mt-3 sm:mt-0"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.97 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="px-4 md:px-8 py-20 bg-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/30 pointer-events-none" />
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold mb-6"
        >
          How It Works
        </motion.h3>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12 text-center"
        >
          <p className="text-purple-200">Three simple steps to better understand your mental well-being</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {[
            { 
              title: "Choose Assessment", 
              desc: "Select between depression (PHQ-9) or anxiety (GAD-7) standard assessments.",
              icon: <ActivitySquare size={40} className="text-purple-300" />,
              color: "from-purple-500/20 to-indigo-500/20"
            },
            { 
              title: "Answer Questions", 
              desc: "Fill out a quick multi-step form designed by mental health professionals. Takes less than 5 minutes.",
              icon: <Calendar size={40} className="text-indigo-300" />,
              color: "from-indigo-500/20 to-blue-500/20"
            },
            { 
              title: "Get Insights", 
              desc: "Let AI analyze your results, visualize trends, and suggest personalized next steps.",
              icon: <Brain size={40} className="text-pink-300" />,
              color: "from-pink-500/20 to-purple-500/20"
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`bg-gradient-to-br ${item.color} backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10 flex flex-col items-center`}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.6 } }}
                className="mb-5"
              >
                {item.icon}
              </motion.div>
              <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
              <p className="text-gray-300 text-center">{item.desc}</p>
              
              {/* Connection line */}
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent transform translate-y-20 -z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-4 md:px-8 py-20 relative">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold mb-6"
        >
          Why Choose psycheAI?
        </motion.h3>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12 text-center"
        >
          <p className="text-purple-200">More than just another health app</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Clinically Validated",
              desc: "Based on medical standards (PHQ-9, GAD-7) used by professionals worldwide",
              icon: <CheckCircle size={32} className="text-green-400" />
            },
            {
              title: "Fast & Private",
              desc: "Complete assessments in minutes with complete data privacy",
              icon: <Shield size={32} className="text-blue-400" />
            },
            {
              title: "AI-Powered Insights",
              desc: "Receive personalized suggestions based on your unique patterns",
              icon: <Brain size={32} className="text-purple-400" />
            },
            {
              title: "Track Progress",
              desc: "Monitor your mental wellness journey with visual analytics",
              icon: <ActivitySquare size={32} className="text-pink-400" />
            },
            {
              title: "Data Security",
              desc: "Your information is encrypted and never shared",
              icon: <Shield size={32} className="text-indigo-400" />
            },
            {
              title: "Calming Experience",
              desc: "Designed with attention to detail for a soothing user experience",
              icon: <Heart size={32} className="text-red-400" />
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(130, 94, 241, 0.5)" }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex flex-col items-center text-center shadow-lg group hover:bg-gradient-to-br hover:from-indigo-800/40 hover:to-purple-800/40 transition-all duration-300"
            >
              <motion.div 
                className="mb-4 p-3 rounded-full bg-white/10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {feature.icon}
              </motion.div>
              <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 md:px-8 py-20 bg-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/30 pointer-events-none" />
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold mb-12"
        >
          What Our Users Say
        </motion.h3>
        
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-lg border border-white/10 text-center mb-10"
            >
              <div className="mb-6 text-yellow-300 flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Sparkles key={i} size={18} className="mx-1" />
                ))}
              </div>
              <p className="text-xl md:text-2xl italic text-gray-200 mb-6">"{testimonials[activeTestimonial].quote}"</p>
              <p className="text-lg text-purple-300 font-medium">{testimonials[activeTestimonial].author}</p>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-3 h-3 rounded-full ${i === activeTestimonial ? 'bg-purple-400' : 'bg-white/30'}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 md:px-8 py-24 bg-gradient-to-r from-purple-700 via-indigo-800 to-purple-700 text-center rounded-t-3xl relative overflow-hidden">
        {/* Animated bubbles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            animate={{
              y: [Math.random() * 100 + 100, -100],
              x: Math.random() * 20 - 10,
              opacity: [0, 0.7, 0],
              scale: [0.3, Math.random() * 0.6 + 0.7]
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 10 + 10,
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 50 + 20}px`,
              height: `${Math.random() * 50 + 20}px`,
            }}
          />
        ))}
        
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 relative z-10"
        >
          Ready to take control of your mental health?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-200 mb-10 max-w-2xl mx-auto relative z-10"
        >
          Sign up now for free and start your journey to better mental wellness with just a few clicks.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-800 px-8 py-4 rounded-full text-lg font-bold shadow-2xl transition-all hover:bg-purple-100 relative z-10"
        >
          Start Free Assessment
        </motion.button>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-12 bg-black/30 text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-left mb-12">
          <div>
            <h4 className="text-xl font-bold text-purple-300 mb-4">psycheAI</h4>
            <p className="text-gray-400">Empowering mental wellness through technology and compassion.</p>
          </div>
          <div>
            <h5 className="text-white font-medium mb-4">Resources</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Assessments</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Mental Health Guide</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Crisis Resources</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-medium mb-4">Company</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-300 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-medium mb-4">Connect</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Feedback</a></li>
            </ul>
          </div>
        </div>
        <div className="text-gray-400 text-sm border-t border-white/10 pt-8">
          © {new Date().getFullYear()} psycheAI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;