import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Trophy, RotateCcw, Star, Heart } from 'lucide-react';

// --- GAME: WORD MATCH (KIDS) ---
const WordMatchGame = () => {
  const pairs = [
    { id: 1, word: 'Cat', match: '🐱' },
    { id: 2, word: 'Dog', match: '🐶' },
    { id: 3, word: 'Sun', match: '☀️' },
    { id: 4, word: 'Apple', match: '🍎' },
  ];

  const [cards, setCards] = useState<any[]>([]);
  const [selected, setSelected] = useState<any[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const shuffled = [...pairs.map(p => ({ ...p, type: 'word' })), ...pairs.map(p => ({ ...p, type: 'emoji' }))]
      .sort(() => Math.random() - 0.5);
    setCards(shuffled.map((card, index) => ({ ...card, uniqueId: index })));
  }, []);

  const handleCardClick = (card: any) => {
    if (selected.length === 2 || matched.includes(card.id) || selected.some(s => s.uniqueId === card.uniqueId)) return;

    const newSelected = [...selected, card];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      if (newSelected[0].id === newSelected[1].id && newSelected[0].type !== newSelected[1].type) {
        setMatched([...matched, newSelected[0].id]);
        setScore(score + 10);
        setSelected([]);
      } else {
        setTimeout(() => setSelected([]), 1000);
      }
    }
  };

  const resetGame = () => {
    setMatched([]);
    setSelected([]);
    setScore(0);
    const shuffled = [...pairs.map(p => ({ ...p, type: 'word' })), ...pairs.map(p => ({ ...p, type: 'emoji' }))]
      .sort(() => Math.random() - 0.5);
    setCards(shuffled.map((card, index) => ({ ...card, uniqueId: index })));
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 text-xl font-black text-gray-800">
          <Star className="text-yellow-400 fill-yellow-400" />
          Score: {score}
        </div>
        <button onClick={resetGame} className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><RotateCcw size={20} /></button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {cards.map((card) => {
          const isSelected = selected.some(s => s.uniqueId === card.uniqueId);
          const isMatched = matched.includes(card.id);
          return (
            <motion.button
              key={card.uniqueId}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCardClick(card)}
              className={`h-32 rounded-3xl text-3xl font-bold flex items-center justify-center transition-all border-b-4 ${
                isMatched 
                ? 'bg-mint/20 border-emerald-500/20 text-emerald-500 opacity-50' 
                : isSelected
                ? 'bg-pastel-pink border-pastel-pink/50 text-white'
                : 'bg-white border-gray-100 hover:border-pastel-pink/30 text-gray-800 shadow-sm'
              }`}
            >
              {isSelected || isMatched ? (card.type === 'word' ? card.word : card.match) : '?'}
            </motion.button>
          );
        })}
      </div>

      {matched.length === pairs.length && (
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center p-8 bg-green-500 rounded-[2.5rem] text-white space-y-4">
          <Trophy size={64} className="mx-auto" />
          <h3 className="text-3xl font-black">You Win! 🌟</h3>
          <p className="font-bold">Amazing job matching all the words!</p>
          <button onClick={resetGame} className="btn-secondary bg-white text-green-600 px-8">Play Again</button>
        </motion.div>
      )}
    </div>
  );
};

// --- GAME: GRAMMAR BATTLE (TEENS) ---
const GrammarBattle = () => {
  const questions = [
    { id: 1, sentence: "She ___ to school every day.", options: ["go", "goes", "going"], correct: 1 },
    { id: 2, sentence: "They ___ watching TV now.", options: ["is", "am", "are"], correct: 2 },
    { id: 3, sentence: "I ___ English study for two hours.", options: ["have been", "am", "has"], correct: 0 },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = (index: number) => {
    if (index === questions[current].correct) {
      setScore(score + 20);
    }
    
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setGameOver(true);
    }
  };

  if (gameOver) {
    return (
      <div className="text-center p-12 bg-gray-900 rounded-[3rem] text-white space-y-6">
        <h2 className="text-4xl font-display font-black">Battle Finished! ⚔️</h2>
        <div className="text-6xl font-black text-pastel-pink">{score} Points</div>
        <p className="text-gray-400">Great work on your grammar skills!</p>
        <button onClick={() => { setCurrent(0); setScore(0); setGameOver(false); }} className="btn-primary">Try Again</button>
      </div>
    );
  }

  return (
    <div className="space-y-8 bg-white p-12 rounded-[3.5rem] border-2 border-gray-100">
      <div className="flex justify-between items-center font-bold text-gray-400 text-sm">
        <span>QUESTION {current + 1}/{questions.length}</span>
        <span>SCORE: {score}</span>
      </div>
      <h3 className="text-3xl font-display font-black text-gray-800 text-center leading-relaxed">
        {questions[current].sentence}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {questions[current].options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            className="p-6 bg-lavender/10 border-2 border-transparent hover:border-lavender rounded-3xl font-bold text-lg text-gray-800 transition-all hover:scale-105 active:scale-95"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

const GameDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const getGameComponent = () => {
    switch (id) {
      case 'word-match': return <WordMatchGame />;
      case 'grammar-fight': return <GrammarBattle />;
      default: return (
        <div className="text-center p-12 bg-soft-beige/20 rounded-[3rem] border-2 border-dashed border-gray-200">
          <p className="text-gray-500 font-bold italic mb-6">This game is being programmed by our team right now! 🌸</p>
          <button onClick={() => navigate('/games')} className="btn-primary">Pick Another Game</button>
        </div>
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 pb-32 space-y-12">
      <Link to="/games" className="inline-flex items-center gap-2 text-pastel-pink font-bold hover:underline">
        <ArrowLeft size={20} /> Back to Game Center
      </Link>

      <div className="space-y-4">
        <h1 className="text-4xl font-display font-black text-gray-900 capitalize flex items-center gap-4">
           🎮 {id?.replace(/-/g, ' ')}
        </h1>
        <p className="text-gray-600 font-medium">Practice your English and win stars! 🌟</p>
      </div>

      <div className="relative">
         {getGameComponent()}
      </div>

      <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row items-center gap-6 text-sm">
         <div className="flex gap-2">
            <Heart size={20} className="text-red-400 fill-red-400" />
            <Heart size={20} className="text-red-400 fill-red-400" />
            <Heart size={20} className="text-red-400 fill-red-400" />
         </div>
         <p className="text-gray-500 font-medium">Tip: Read the lesson associated with this game if you find it difficult!</p>
         <Link to="/lessons" className="md:ml-auto text-pastel-pink font-bold hover:underline">Review Lessons →</Link>
      </div>
    </div>
  );
};

export default GameDetail;
