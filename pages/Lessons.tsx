import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Target, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { lessonsData } from '../data/lessons';

const LessonCard: React.FC<{ lesson: any }> = ({ lesson }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="glass-card p-8 border-4 border-white flex flex-col space-y-6"
  >
    <div className="flex justify-between items-start">
      <div className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
        lesson.ageGroup === 'Kids' ? 'bg-pastel-pink/20 text-pastel-pink' : 'bg-lavender text-indigo-400'
      }`}>
        {lesson.ageGroup} (5-10)
      </div>
      <div className="flex items-center gap-1 text-slate-400 text-[10px] font-bold uppercase tracking-tighter">
        <Clock size={12} /> {lesson.duration}
      </div>
    </div>
    
    <div className="space-y-3">
      <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{lesson.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{lesson.description}</p>
    </div>

    <div className="pt-4 mt-auto">
      <Link
        to={`/lessons/${lesson.id}`}
        className={`flex items-center justify-between w-full p-4 rounded-2xl font-bold transition-all ${
          lesson.ageGroup === 'Kids' 
          ? 'bg-pastel-pink text-white hover:bg-lavender hover:text-indigo-400' 
          : 'bg-lavender text-indigo-400 hover:bg-pastel-pink hover:text-white'
        }`}
      >
        Start Lesson <ArrowRight size={20} />
      </Link>
    </div>
  </motion.div>
);

const Lessons = () => {
  const kidsLessons = lessonsData.filter(l => l.ageGroup === 'Kids');
  const teenLessons = lessonsData.filter(l => l.ageGroup === 'Teens');

  return (
    <div className="space-y-32 pb-32">
      <section className="px-6 max-w-7xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-display font-black text-gray-900">Explore Our <span className="text-pastel-pink">Lessons</span></h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Every lesson is designed to be interactive, fun, and effective. Pick your level and start learning!
        </p>
      </section>

      {/* Kids Grid */}
      <section className="px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex items-center gap-4">
          <span className="text-4xl">🧸</span>
          <h2 className="text-4xl font-display font-black text-gray-800">Kids Lessons (Ages 5-10)</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kidsLessons.map(lesson => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
          {/* Mock data for the rest of the 10 */}
          {Array.from({ length: Math.max(0, 10 - kidsLessons.length) }).map((_, i) => (
            <div key={`mock-k-${i}`} className="opacity-50 grayscale">
               <LessonCard lesson={{ id: 'coming-soon', title: 'New Adventure', description: 'This lesson is being prepared by our team!', ageGroup: 'Kids', duration: '??', id_mock: true }} />
            </div>
          ))}
        </div>
      </section>

      {/* Teens Grid */}
      <section className="px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex items-center gap-4">
          <span className="text-4xl">🎓</span>
          <h2 className="text-4xl font-display font-black text-gray-800">Teen Lessons (Ages 11-18)</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teenLessons.map(lesson => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
          {/* Mock data for the rest of the 10 */}
          {Array.from({ length: Math.max(0, 10 - teenLessons.length) }).map((_, i) => (
            <div key={`mock-t-${i}`} className="opacity-50 grayscale">
               <LessonCard lesson={{ id: 'coming-soon', title: 'New Skills', description: 'Advanced modules coming soon!', ageGroup: 'Teens', duration: '??' }} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Lessons;
