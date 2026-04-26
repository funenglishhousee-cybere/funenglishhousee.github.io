import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, Clock, Target, CheckCircle2, Play, ChevronRight } from 'lucide-react';
import { lessonsData } from '../data/lessons';

const LessonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lesson = lessonsData.find(l => l.id === id);

  if (!lesson) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-display font-black mb-4">Lesson Not Found 🌸</h2>
        <p className="text-gray-600 mb-8">Oops! This lesson is still being prepared by our wonderful team.</p>
        <button onClick={() => navigate('/lessons')} className="btn-primary">Back to Lessons</button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 pb-32 space-y-12">
      <Link to="/lessons" className="inline-flex items-center gap-2 text-pastel-pink font-bold hover:underline">
        <ArrowLeft size={20} /> Back to All Lessons
      </Link>

      {/* Header */}
      <div className={`p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden ${lesson.ageGroup === 'Kids' ? 'bg-pastel-pink' : 'bg-lavender text-gray-800'}`}>
        <div className="relative z-10 space-y-6">
          <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
            {lesson.ageGroup} Module
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black leading-tight">{lesson.title}</h1>
          <div className="flex flex-wrap gap-6 text-sm font-bold opacity-90">
            <span className="flex items-center gap-2"><Clock size={16} /> {lesson.duration}</span>
            <span className="flex items-center gap-2"><Target size={16} /> Goal: {lesson.goal}</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      </div>

      {/* Content Sections */}
      <div className="space-y-16">
        {/* Warm-up */}
        <section className="space-y-4">
          <h3 className="text-2xl font-display font-black text-gray-800 flex items-center gap-3">
             <span className="p-2 bg-pastel-pink/20 rounded-xl text-pastel-pink">1</span>
             Warm-Up ☀️
          </h3>
          <div className="p-8 bg-soft-beige/30 rounded-[2.5rem] border border-soft-beige leading-relaxed text-lg italic text-gray-700">
            "{lesson.content.warmUp}"
          </div>
        </section>

        {/* Watch & Listen */}
        <section className="space-y-6">
          <h3 className="text-2xl font-display font-black text-gray-800 flex items-center gap-3">
             <span className="p-2 bg-lavender/40 rounded-xl text-lavender">2</span>
             Watch & Listen 📺
          </h3>
          <div className="bg-white p-8 rounded-[2.5rem] border-2 border-gray-100 shadow-sm space-y-6">
             <div className="aspect-video bg-gray-900 rounded-3xl flex items-center justify-center relative group overflow-hidden">
                {lesson.content.watchListen.youtubeId ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${lesson.content.watchListen.youtubeId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                ) : (
                  <>
                    <img src={`https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=2071`} alt="Video placeholder" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform group-hover:scale-105" />
                    <Play className="text-white fill-white relative z-10 drop-shadow-xl" size={64} />
                  </>
                )}
             </div>
             <div className="space-y-4">
                <p className="font-bold text-gray-800">About this video: <span className="font-normal text-slate-600">{lesson.content.watchListen.description}</span></p>
                {lesson.content.watchListen.visuals && (
                   <p className="font-bold text-gray-800">Key Visuals: <span className="font-normal text-slate-600">{lesson.content.watchListen.visuals}</span></p>
                )}
                {lesson.content.watchListen.script && (
                   <div className="p-6 bg-gray-50 rounded-2xl text-gray-700 font-mono text-sm border-l-4 border-pastel-pink">
                      {lesson.content.watchListen.script}
                   </div>
                )}
             </div>
          </div>
        </section>

        {/* Learn */}
        <section className="space-y-4">
          <h3 className="text-2xl font-display font-black text-gray-800 flex items-center gap-3">
             <span className="p-2 bg-mint rounded-xl text-emerald-600">3</span>
             Learn the Rules 📘
          </h3>
          <div className="bg-white p-8 rounded-[2.5rem] border-2 border-mint/20 space-y-6 shadow-sm">
             <p className="text-lg font-medium text-gray-700">{lesson.content.learn.description}</p>
             <ul className="space-y-3">
                {lesson.content.learn.points.map((p, i) => (
                   <li key={i} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" size={18} />
                      {p}
                   </li>
                ))}
             </ul>
          </div>
        </section>

        {/* Practice */}
        <section className="space-y-4">
          <h3 className="text-2xl font-display font-black text-gray-800 flex items-center gap-3">
             <span className="p-2 bg-sky-blue/40 rounded-xl text-blue-600">4</span>
             Practice Together 🤝
          </h3>
          <div className="space-y-4">
             {lesson.content.practice.questions.map((q, i) => (
                <div key={i} className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm flex justify-between items-center group">
                   <span className="font-bold text-gray-700 tracking-wide text-lg">{q.q}</span>
                   <span className="text-pastel-pink font-black opacity-0 group-hover:opacity-100 transition-opacity">Ans: {q.a}</span>
                </div>
             ))}
          </div>
        </section>

        {/* Quiz Yourself */}
        <section className="space-y-6">
           <div className="p-10 bg-gray-900 rounded-[3rem] text-white space-y-8">
              <h3 className="text-3xl font-display font-black flex items-center gap-3">
                 <span className="p-2 bg-white/10 rounded-xl">5</span>
                 Quiz Yourself 🎯
              </h3>
              {lesson.content.quiz.map((q, i) => (
                 <div key={i} className="space-y-4">
                    <p className="text-xl font-bold">{q.q}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                       {q.options.map((opt, oi) => (
                          <button key={oi} className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/20 transition-colors font-bold text-sm">
                             {opt}
                          </button>
                       ))}
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* Game Connection */}
        <div className="p-12 bg-pastel-pink/10 rounded-[3rem] border-2 border-dashed border-pastel-pink/40 flex flex-col md:flex-row items-center gap-8">
           <div className="text-6xl">🎮</div>
           <div className="flex-grow space-y-2">
              <h4 className="text-2xl font-black text-gray-800">Ready to play?</h4>
              <p className="text-gray-600">Head over to the games section to practice what you learned!</p>
           </div>
           <Link to="/games" className="btn-primary flex items-center gap-2">Play Games <Play fill="currentColor" size={14} /></Link>
        </div>

        {/* Completion */}
        <div className="pt-8 border-t border-gray-100 flex flex-wrap gap-4 justify-between items-center">
           <button className="flex items-center gap-2 font-bold text-gray-400 hover:text-gray-800 transition-colors uppercase tracking-widest text-xs">
              Mark as Completed 🌸
           </button>
           <button onClick={() => navigate('/lessons')} className="btn-primary bg-gray-900 text-white hover:bg-black px-12 group">
              Next Lesson <ChevronRight className="inline-block group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;
