import React from 'react';
import { motion } from 'motion/react';
import { Heart, Target, ShieldCheck, Mail, MessageCircle } from 'lucide-react';

const TeamMember = ({ name, role, bio, emoji }: any) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-[2.5rem] border border-pastel-pink/20 shadow-xl shadow-gray-100 flex flex-col items-center text-center space-y-4"
  >
    <div className="w-32 h-32 bg-lavender rounded-full flex items-center justify-center text-5xl mb-4 border-4 border-white shadow-md">
      {emoji}
    </div>
    <h3 className="text-2xl font-display font-black text-gray-800">{name}</h3>
    <p className="text-pastel-pink font-bold uppercase tracking-wider text-xs">{role}</p>
    <p className="text-gray-600 leading-relaxed text-sm italic">"{bio}"</p>
  </motion.div>
);

const About = () => {
  return (
    <div className="space-y-32 pb-32">
      {/* Story Section */}
      <section className="px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <div className="inline-block px-4 py-1 bg-pastel-pink rounded-full text-white text-xs font-bold uppercase tracking-widest">
            Our Story & Mission
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
            Education with a <span className="text-pastel-pink underline decoration-white underline-offset-4">Heart</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Fun English House was born from the passion of three English studies students who believed that learning a new language should be as natural and exciting as playing a game.
          </p>
          <div className="space-y-6">
             <div className="glass-card p-6 flex gap-4 border-l-8 border-l-pastel-pink">
                <Target className="text-pastel-pink shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-lg">Our Mission</h4>
                  <p className="text-slate-600">To make quality English education accessible, fun, and safe for every Moroccan student.</p>
                </div>
             </div>
             <div className="glass-card p-6 flex gap-4 border-l-8 border-l-lavender">
                <Heart className="text-indigo-400 shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-lg">Our Values</h4>
                  <p className="text-slate-600">Encouragement, patience, and creative growth are at the heart of everything we do.</p>
                </div>
             </div>
          </div>
        </div>
        <div className="flex-1 relative">
           <img
            src="https://images.unsplash.com/photo-1544717297-fa95b3ee9263?auto=format&fit=crop&q=80&w=2069"
            alt="Founders illustration"
            className="rounded-[40px] shadow-sm border-4 border-white"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white/40 py-32 px-6 border-y border-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Meet Our Founders</h2>
            <p className="text-slate-500 font-medium italic">The hearts behind Fun English House.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <TeamMember
              name="Hiba Oubraim"
              role="Founding Partner"
              bio="Passionate about literacy and early childhood linguistics. Believes every child has a unique voice."
              emoji="👩‍🏫"
            />
            <TeamMember
              name="Khadija Al Kouali"
              role="Founding Partner"
              bio="Expert in interactive grammar and teenage communication. Dedicated to building confidence through debate."
              emoji="🎓"
            />
            <TeamMember
              name="Roumaisa Anadif"
              role="Founding Partner"
              bio="Creative designer of our story-based learning modules. Loves bringing cartoons into the classroom."
              emoji="🎨"
            />
          </div>
        </div>
      </section>

      {/* Student Breakdown */}
      <section className="px-6 max-w-7xl mx-auto text-center space-y-16">
        <h2 className="text-4xl font-bold text-slate-800">Who We Teach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <motion.div whileHover={{ scale: 1.02 }} className="bg-pastel-pink/10 p-12 rounded-[40px] border-4 border-white shadow-sm space-y-6">
              <span className="text-6xl block">🧸</span>
              <h3 className="text-3xl font-bold">Kids (5-10)</h3>
              <p className="text-slate-600">For the adventurers! We use play, colors, and sounds to spark curiosity.</p>
              <div className="text-xs font-bold text-pastel-pink uppercase tracking-widest">10 Primary Modules</div>
           </motion.div>
           <motion.div whileHover={{ scale: 1.02 }} className="bg-lavender/40 p-12 rounded-[40px] border-4 border-white shadow-sm space-y-6">
              <span className="text-6xl block">🧑‍🎓</span>
              <h3 className="text-3xl font-bold">Teens (11-18)</h3>
              <p className="text-slate-600">For the future leaders! We focus on communication, grammar, and real-world skills.</p>
              <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest">10 Advanced Modules</div>
           </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
