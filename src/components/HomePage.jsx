import React from 'react';
import { Scale, Palette, Building2, Hammer } from 'lucide-react';
import SectionTitle from './SectionTitle';

const HomePage = ({ setActiveTab }) => (
    <div className="space-y-16 animate-fadeIn max-w-5xl mx-auto">
        {/* Hero Banner */}
        <div className="bg-stone-900 rounded-[2rem] shadow-2xl relative overflow-hidden text-center min-h-[500px] flex flex-col justify-center items-center p-8 group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2596&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[3s] group-hover:scale-105 opacity-60 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30"></div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6 px-4">
                <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
                <h1 className="text-6xl md:text-8xl font-bold font-serif tracking-tighter text-white mb-2 drop-shadow-lg">
                    רומא <span className="text-amber-500 italic">הבארוקית</span>
                </h1>
                <p className="text-xl md:text-2xl text-stone-200 font-light leading-relaxed max-w-2xl mx-auto">
                    מסע בין אקסטזה דתית, אדריכלות מהפכנית וציור ריאליסטי ברומא של המאה ה-17.
                </p>

                <div className="pt-8">
                    <button
                        onClick={() => setActiveTab('painting')}
                        className="bg-white text-stone-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-500 hover:text-white transition-colors duration-300 shadow-xl"
                    >
                        התחל בסיור
                    </button>
                </div>
            </div>
        </div>

        {/* Comparison Section (Q9) */}
        <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-12 bg-white p-10 rounded-2xl shadow-xl border-t-8 border-stone-800">
                <SectionTitle icon={Scale} title="רומא אז והיום: השוואה היסטורית" colorClass="text-stone-800" />
                <div className="prose max-w-none text-stone-600 leading-loose text-lg font-light space-y-4">
                    <p>
                        יש דמיון מפתיע בין תקופת הבארוק לתקופה הנוכחית. כמו במאה ה-17, גם אנחנו חיים בעידן של
                        <strong className="text-amber-700 font-bold mx-1">חוסר ודאות עמוק</strong>,
                        מלחמות ושינויים אידיאולוגיים. הבארוק היה עידן של "פייק ניוז" ויזואלי –
                        הכנסייה והפטרונים השתמשו באמנות כ<strong className="text-amber-700 font-bold mx-1">מכשיר תעמולה (Propaganda)</strong>
                        כדי לשכנע את ההמונים, לרגש אותם ולגרום להם להאמין בנרטיב מסוים באמצעות אשליות אופטיות ודרמה.
                    </p>
                    <p>
                        גם היום, התרבות החזותית (מדיה חברתית, חדשות) משמשת לעתים קרובות ליצירת אשליות, מניפולציה רגשית ושכנוע המונים,
                        כשהגבול בין אמת למציאות מבויימת הופך מטושטש, בדיוק כמו הגבול בין השיש למציאות בפסליו של ברניני.
                    </p>
                </div>
            </div>
        </div>

        {/* Navigation Cards */}
        <div>
            <h3 className="text-2xl font-bold text-stone-400 mb-8 font-serif text-center uppercase tracking-widest">תחנות הסיור</h3>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { id: 'painting', title: 'הציור', desc: 'המהפכה הריאליסטית של קראווג\'ו', icon: Palette, image: 'paint.png' },
                    { id: 'architecture', title: 'האדריכלות', desc: 'הגאונות הגיאומטרית של בורומיני', icon: Building2, image: 'arc.png' },
                    { id: 'sculpture', title: 'הפסל', desc: 'הדרמה והאקסטזה של ברניני', icon: Hammer, image: 'stat.png' }
                ].map((card) => {
                    const Icon = card.icon;
                    return (
                        <div
                            key={card.id}
                            onClick={() => setActiveTab(card.id)}
                            className="group bg-white rounded-xl shadow-lg cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden relative h-96 flex flex-col justify-end"
                        >
                            {/* Background Image / Overlay */}
                            <div className="absolute inset-0 bg-stone-200">
                                <img src={card.image} alt={card.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-60 transition duration-300"></div>
                            </div>

                            <div className="relative z-10 p-8">
                                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mb-4 text-white shadow-lg transform group-hover:scale-110 transition">
                                    <Icon size={24} />
                                </div>
                                <h3 className="font-bold text-3xl mb-2 text-white font-serif">{card.title}</h3>
                                <p className="text-stone-200 text-sm font-light">{card.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
);

export default HomePage;
