import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Gamepad2, GraduationCap, Users } from 'lucide-react';

const Card = ({ title, desc, icon: Icon, color }: any) => (
  <motion.div
    whileHover={{ y: -10 }}
    className={`p-8 bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-t-4 ${color} space-y-4`}
  >
    <div className={`p-4 rounded-2xl w-fit ${color.replace('border-', 'bg-opacity-10 bg-')}`}>
      <Icon className={color.replace('border-', 'text-')} size={32} />
    </div>
    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </motion.div>
);

const Home = () => {
  return (
    <div className="space-y-16 pb-32">
      {/* Main Grid Layout from Design */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-8">
        
        {/* Left: Hero Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-7 bg-white p-12 rounded-[40px] shadow-sm border-4 border-white flex flex-col justify-center space-y-8"
        >
          <div className="inline-block px-4 py-1 bg-lavender rounded-full text-slate-700 text-sm font-bold w-fit">
            ✨ Learn English with Fun & Confidence
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
            Welcome to our <span className="text-pastel-pink underline decoration-white underline-offset-4">House!</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl">
            Join founders <span className="font-bold">Hiba, Khadija, & Roumaisa</span> for a safe, educational, and fun adventure. Master English through structured lessons and 30+ interactive games.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/pricing" className="btn-primary px-8 py-4">
              Start Learning Today 📚
            </Link>
            <Link to="/games" className="bg-slate-100 text-slate-700 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-200 transition-all hover:-translate-y-0.5">
              Explore Games 🎯
            </Link>
          </div>
          
          <div className="pt-8 flex flex-wrap gap-10">
            <div>
              <p className="text-3xl font-bold text-slate-800 tracking-tight">200+</p>
              <p className="text-slate-500 font-semibold text-sm">Happy Students</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-200 self-center"></div>
            <div>
              <p className="text-3xl font-bold text-slate-800 tracking-tight">30+</p>
              <p className="text-slate-500 font-semibold text-sm">Interactive Games</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-200 self-center"></div>
            <div>
              <p className="text-3xl font-bold text-slate-800 tracking-tight">24/7</p>
              <p className="text-slate-500 font-semibold text-sm">WhatsApp Help</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Category Cards */}
        <div className="lg:col-span-5 grid grid-rows-1 lg:grid-rows-2 gap-8">
          {/* Kids Section */}
          <Link to="/lessons">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-pastel-pink p-8 rounded-[40px] relative overflow-hidden flex flex-col justify-end group h-full cursor-pointer min-h-[280px]"
            >
              <div className="absolute top-8 right-8 text-7xl opacity-20 group-hover:scale-110 transition-transform">🧸</div>
              <div className="bg-white/90 p-6 rounded-3xl relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">Ages 5–10</span>
                <h3 className="text-2xl font-bold text-slate-800">The Kids World</h3>
                <p className="text-slate-600 text-sm">Alphabet, Phonics, & Songs 🎶</p>
                <div className="mt-2 text-xs font-bold text-pastel-pink uppercase tracking-tighter">10 Lessons • 10 Games</div>
              </div>
            </motion.div>
          </Link>

          {/* Teens Section */}
          <Link to="/lessons">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-lavender p-8 rounded-[40px] relative overflow-hidden flex flex-col justify-end group h-full cursor-pointer min-h-[280px]"
            >
              <div className="absolute top-8 right-8 text-7xl opacity-20 group-hover:scale-110 transition-transform">🎓</div>
              <div className="bg-white/90 p-6 rounded-3xl relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">Ages 11–18</span>
                <h3 className="text-2xl font-bold text-slate-800">The Teen Hub</h3>
                <p className="text-slate-600 text-sm">Grammar, Debate, & Writing ✍️</p>
                <div className="mt-2 text-xs font-bold text-indigo-400 uppercase tracking-tighter">10 Lessons • 10 Games</div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Trust Markers Section */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="glass-card p-8 space-y-4">
          <div className="bg-pastel-pink/20 w-12 h-12 rounded-2xl flex items-center justify-center text-pastel-pink">
            <Users size={24} />
          </div>
          <h3 className="text-xl font-bold">Expert Mentors</h3>
          <p className="text-slate-500 text-sm leading-relaxed">Guided by students from English studies at top universities.</p>
        </div>
        <div className="glass-card p-8 space-y-4">
          <div className="bg-lavender w-12 h-12 rounded-2xl flex items-center justify-center text-indigo-400">
            <GraduationCap size={24} />
          </div>
          <h3 className="text-xl font-bold">Fun Lessons</h3>
          <p className="text-slate-500 text-sm leading-relaxed">No boring lectures! We use songs, stories, and interaction.</p>
        </div>
        <div className="glass-card p-8 space-y-4">
          <div className="bg-mint w-12 h-12 rounded-2xl flex items-center justify-center text-emerald-500">
            <Gamepad2 size={24} />
          </div>
          <h3 className="text-xl font-bold">Gamified Learning</h3>
          <p className="text-slate-500 text-sm leading-relaxed">Earn points and advance through interactive games.</p>
        </div>
        <div className="glass-card p-8 space-y-4">
          <div className="bg-sky-blue w-12 h-12 rounded-2xl flex items-center justify-center text-sky-500">
            <CheckCircle2 size={24} />
          </div>
          <h3 className="text-xl font-bold">Safe Space</h3>
          <p className="text-slate-500 text-sm leading-relaxed">A structured, ad-free environment where parents can trust.</p>
        </div>
      </section>

      {/* CTA Band */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="bg-slate-800 rounded-[40px] p-16 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pastel-pink opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-lavender opacity-20 blur-3xl translate-y-1/2 -translate-x-1/2 rounded-full" />
          
          <h2 className="text-4xl md:text-5xl text-white font-bold tracking-tight relative z-10">Start your English journey today</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto relative z-10">
            Join 200+ students already learning with Hiba, Khadija, and Roumaisa. First intro lesson is completely free!
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <a href="https://wa.me/212631488611" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-2xl font-bold shadow-lg transition-all">
              Message on WhatsApp 💬
            </a>
            <Link to="/pricing" className="bg-white text-slate-800 px-10 py-4 rounded-2xl font-bold shadow-lg transition-all">
              View Pricing 💳
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
