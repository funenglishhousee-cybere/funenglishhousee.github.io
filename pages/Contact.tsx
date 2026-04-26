import React from 'react';
import { Mail, MessageCircle, Instagram, Facebook, Clock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const ContactItem = ({ icon: Icon, title, value, href, color }: any) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="glass-card flex items-center gap-6 p-8 border-4 border-white shadow-sm hover:scale-[1.02] transition-transform"
  >
    <div className={`p-4 rounded-2xl ${color}`}>
      <Icon size={28} className="text-white" />
    </div>
    <div>
      <h4 className="font-bold text-slate-400 text-[10px] uppercase tracking-widest">{title}</h4>
      <p className="text-xl font-bold text-slate-800 tracking-tight">{value}</p>
    </div>
  </a>
);

const Contact = () => {
  return (
    <div className="space-y-32 pb-32 pt-8">
      {/* Header */}
      <section className="px-6 max-w-7xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 tracking-tight">Get in <span className="text-pastel-pink underline decoration-white underline-offset-4 decoration-4">Touch</span></h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          We’re here to help you on your English journey! Reach out to us anytime.
        </p>
      </section>

      {/* Grid */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <ContactItem
              icon={MessageCircle}
              title="WhatsApp"
              value="+212 631488611"
              href="https://wa.me/212631488611"
              color="bg-green-500"
           />
           <ContactItem
              icon={Mail}
              title="Email"
              value="funenglishhousee@gmail.com"
              href="mailto:funenglishhousee@gmail.com"
              color="bg-pastel-pink"
           />
           <ContactItem
              icon={Instagram}
              title="Instagram"
              value="@funenglishhouse_"
              href="https://www.instagram.com/funenglishhouse_/"
              color="bg-pink-600"
           />
           <ContactItem
              icon={Facebook}
              title="Facebook"
              value="Fun English House"
              href="https://web.facebook.com/profile.php?id=61576521525950"
              color="bg-blue-600"
           />
        </div>

        <div className="glass-card p-12 space-y-12 border-4 border-white bg-lavender/30">
           <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-800 flex items-center gap-4 tracking-tight">
                 <Clock className="text-indigo-400" size={32} />
                 Response Time
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                We value your time! Our founders reply to all WhatsApp messages and emails within <span className="font-bold text-slate-800">2 hours</span> during business hours.
              </p>
           </div>

           <div className="space-y-8">
              <h3 className="text-3xl font-bold text-slate-800 tracking-tight underline decoration-white decoration-4 underline-offset-8">Frequently Asked Questions</h3>
              <div className="space-y-8">
                 {[
                   { q: "Is the first lesson really free?", a: "Yes! Every new student gets a 30-minute intro session for free." },
                   { q: "How do lessons happen?", a: "We use private Google Meet or Zoom sessions with interactive screens." },
                   { q: "What schedule do you have?", a: "We are flexible! We match our founders' availability with your free time." }
                 ].map((faq, i) => (
                   <div key={i} className="space-y-2 border-l-4 border-pastel-pink pl-4">
                      <p className="font-bold text-slate-800">🧸 {faq.q}</p>
                      <p className="text-slate-500 text-sm">{faq.a}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
