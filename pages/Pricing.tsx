import React from 'react';
import { Check, Mail, Phone, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const Pricing = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center space-y-6">
        <div className="w-24 h-24 bg-mint text-emerald-500 rounded-full flex items-center justify-center text-4xl mb-4 animate-bounce">
          🎉
        </div>
        <h1 className="text-4xl font-bold text-slate-800 tracking-tight">Success! Welcome aboard!</h1>
        <p className="text-xl text-slate-600 max-w-lg">
          Thank you for enrolling in Fun English House. One of our founders will contact you on WhatsApp within 2 hours to finalize your first session.
        </p>
        <a href="https://wa.me/212631488611" className="btn-primary">Message us on WhatsApp 💬</a>
      </div>
    );
  }

  return (
    <div className="space-y-32 pb-32 pt-8">
      {/* Header */}
      <section className="px-6 max-w-7xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 tracking-tight">Simple, Transparent <span className="text-pastel-pink underline decoration-white underline-offset-8 decoration-4">Pricing</span></h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Every student starts with a free trial lesson. No credit card required. Choose the plan that fits your goals.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white border-4 border-white rounded-[40px] p-12 space-y-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-pastel-pink text-white text-[10px] font-bold px-6 py-2 rounded-bl-3xl uppercase tracking-widest leading-none">POPULAR</div>
          <h2 className="text-3xl font-bold text-slate-800">Monthly Plan</h2>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-slate-800">300 DH</span>
            <span className="text-slate-500 font-bold">/Month</span>
          </div>
          <ul className="space-y-4">
             {[
               "2 Sessions per week",
               "Full access to 40+ Games",
               "24/7 WhatsApp Support",
               "Progress Reports for Parents",
               "Personalized Feedback"
             ].map(item => (
               <li key={item} className="flex items-center gap-3 text-slate-600 font-medium">
                 <div className="bg-pastel-pink/20 p-1 rounded-full"><Check size={16} className="text-pastel-pink" /></div>
                 {item}
               </li>
             ))}
          </ul>
        </div>

        <div className="bg-slate-800 rounded-[40px] p-12 space-y-8 shadow-sm text-white border-4 border-slate-700/50">
          <h2 className="text-3xl font-bold">Half-Year Plan</h2>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold">1500 DH</span>
            <span className="text-slate-400 font-bold">/6 Months</span>
          </div>
          <p className="text-emerald-400 font-bold text-sm tracking-wide">✨ Save 300 DH!</p>
          <ul className="space-y-4">
             {[
               "All Monthly Features",
               "Priority Scheduling",
               "Exam Prep Resources",
               "1-on-1 Consultation Monthly",
               "Access to Special Events"
             ].map(item => (
               <li key={item} className="flex items-center gap-3 text-slate-300 font-medium">
                 <div className="bg-emerald-500/20 p-1 rounded-full"><Check size={16} className="text-emerald-500" /></div>
                 {item}
               </li>
             ))}
          </ul>
        </div>
      </section>

      {/* Registration Form */}
      <section className="px-6 max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
           <h2 className="text-4xl font-bold text-slate-800 tracking-tight">Secure Your Spot ✨</h2>
           <p className="text-slate-500 font-medium italic">Fill out the form below to start your free trial.</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-4 border-white">
           <div className="space-y-2">
              <label className="block font-bold text-slate-700 text-sm ml-2">Full Name</label>
              <input required type="text" className="w-full bg-white p-4 border-2 border-slate-100 focus:border-pastel-pink rounded-2xl outline-none transition-all" placeholder="Enter student name" />
           </div>
           <div className="space-y-2">
              <label className="block font-bold text-slate-700 text-sm ml-2">Age</label>
              <select className="w-full bg-white p-4 border-2 border-slate-100 focus:border-pastel-pink rounded-2xl outline-none transition-all">
                 <option>5-10 Years (Kids)</option>
                 <option>11-18 Years (Teens)</option>
              </select>
           </div>
           <div className="space-y-2 lg:col-span-2">
              <label className="block font-bold text-slate-700 text-sm ml-2">Email Address</label>
              <input required type="email" className="w-full bg-white p-4 border-2 border-slate-100 focus:border-pastel-pink rounded-2xl outline-none transition-all" placeholder="example@email.com" />
           </div>
           <div className="space-y-2 lg:col-span-2">
              <label className="block font-bold text-slate-700 text-sm ml-2">WhatsApp Number</label>
              <input required type="tel" className="w-full bg-white p-4 border-2 border-slate-100 focus:border-pastel-pink rounded-2xl outline-none transition-all" placeholder="+212 ..." />
           </div>
           <div className="space-y-2 lg:col-span-2">
              <label className="block font-bold text-slate-700 text-sm ml-2">Choose Plan</label>
              <div className="grid grid-cols-2 gap-4">
                 <label className="block cursor-pointer">
                    <input type="radio" name="plan" className="hidden peer" defaultChecked />
                    <div className="p-4 border-2 border-slate-100 rounded-2xl peer-checked:border-pastel-pink peer-checked:bg-pastel-pink/5 text-center font-bold">Monthly</div>
                 </label>
                 <label className="block cursor-pointer">
                    <input type="radio" name="plan" className="hidden peer" />
                    <div className="p-4 border-2 border-slate-100 rounded-2xl peer-checked:border-pastel-pink peer-checked:bg-pastel-pink/5 text-center font-bold">Half-Year</div>
                 </label>
              </div>
           </div>
           <button type="submit" className="lg:col-span-2 btn-primary py-4 text-lg">Enroll Now Sparkle ✨</button>
           <p className="lg:col-span-2 text-center text-xs text-slate-400 font-medium italic">First lesson is free. Our team will contact you for scheduling before any payment.</p>
        </form>
      </section>
    </div>
  );
};

export default Pricing;
