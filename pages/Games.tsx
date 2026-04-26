import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Trophy, Star, Play } from 'lucide-react';
import { motion } from 'motion/react';

const GameCard: React.FC<{ game: any }> = ({ game }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="glass-card p-8 border-4 border-white hover:border-pastel-pink flex flex-col space-y-6 transition-colors group"
  >
    <div className="flex justify-between items-start">
      <div className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
        game.ageGroup === 'Kids' ? 'bg-mint text-emerald-700' : 'bg-sky-blue text-blue-700'
      }`}>
        {game.ageGroup}
      </div>
      <Star className="text-yellow-400 fill-yellow-400" size={18} />
    </div>
    
    <div className="space-y-3">
      <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{game.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{game.description}</p>
    </div>

    <div className="pt-4 mt-auto">
      <Link
        to={`/games/${game.id}`}
        className="flex items-center justify-center gap-2 w-full p-4 bg-slate-800 text-white rounded-2xl font-bold hover:bg-pastel-pink transition-colors group-hover:shadow-lg"
      >
        Play Now <Play fill="currentColor" size={16} />
      </Link>
    </div>
  </motion.div>
);

const Games = () => {
  const games = [
    { id: 'word-match', title: 'Word Match Game', ageGroup: 'Kids', description: 'Match the words to their pictures!' },
    { id: 'alphabet-puzzle', title: 'Alphabet Puzzle', ageGroup: 'Kids', description: 'Complete the ABC board.' },
    { id: 'vocab-quiz', title: 'Vocabulary Challenge', ageGroup: 'Teens', description: 'Test your word knowledge.' },
    { id: 'grammar-fight', title: 'Grammar Battle', ageGroup: 'Teens', description: 'Correct the sentences to win.' },
  ];

  return (
    <div className="space-y-32 pb-32">
      <section className="px-6 max-w-7xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-display font-black text-gray-900">Play & <span className="text-pastel-pink">Learn</span></h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Games are the best way to practice! Earn points and trophies as you master English skills.
        </p>
      </section>

      {/* Grid */}
      <section className="px-6 max-w-7xl mx-auto space-y-16">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
             <Trophy className="text-yellow-400" size={32} />
             <h2 className="text-4xl font-display font-black text-gray-800">Featured Games</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {games.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
            {/* Mock more games */}
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="opacity-40 grayscale pointer-events-none">
                 <GameCard game={{ id: 'locked', title: 'Locked Content', description: 'Coming soon!', ageGroup: i % 2 === 0 ? 'Kids' : 'Teens' }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Games;
