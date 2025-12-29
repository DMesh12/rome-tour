import React from 'react';
import { Map, Clock, MapPin, ArrowLeft } from 'lucide-react';
import SectionTitle from './SectionTitle';

const MapPage = () => (
    <div className="space-y-8 animate-fadeIn">
        <div className="bg-white p-10 rounded-xl shadow-xl border-t-4 border-emerald-700">
            <SectionTitle icon={Map} title="מסלול הסיור ברומא" colorClass="text-emerald-900" />

            <p className="text-stone-600 mb-8 text-lg leading-relaxed max-w-3xl">
                המסלול עובר בין שלוש יצירות המופת, בסדר הליכה הגיוני ממערב למזרח.
                <br />
                <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold mt-4 border border-emerald-100">
                    <Clock size={16} />
                    אורך המסלול: כ-2.1 ק"מ | זמן הליכה: כ-30 דקות
                </span>
            </p>

            {/* Map Placeholder Card */}
            <div className="w-full bg-stone-100 rounded-xl overflow-hidden border border-stone-200 relative mb-12 shadow-inner group p-12 text-center transition-all hover:bg-stone-50">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/map-markers.png')] opacity-5"></div>
                <div className="relative z-10">
                    <MapPin size={64} className="text-emerald-600 mb-6 mx-auto drop-shadow-md" />
                    <h3 className="text-3xl font-bold text-stone-800 mb-3 font-serif">מפת המסלול</h3>
                    <p className="text-stone-500 mb-8 max-w-md mx-auto">
                        צפה במסלול המלא, כולל נקודות עצירה וזמני הליכה, ישירות בגוגל מפות.
                    </p>

                    <a
                        href="https://www.google.com/maps/dir/Church+of+Saint+Louis+of+the+French,+Piazza+di+San+Luigi+de'+Francesi,+Roma+RM,+Italy/Church+of+St+Charles+at+the+Four+Fountains,+Via+del+Quirinale,+23,+Roma+RM,+Italy/Church+of+Santa+Maria+della+Vittoria,+Via+Venti+Settembre,+17,+Roma+RM,+Italy/data=!4m20!4m19!1m5!1m1!19sChIJLQGCLlBgLxMRuYQp8kv6syI!2m2!1d12.474740599999999!2d41.8996104!1m5!1m1!19sChIJJdz7sK5hLxMRqBCQGj4L6u4!2m2!1d12.490746999999999!2d41.901840799999995!1m5!1m1!19sChIJVbqwYKhhLxMRSAkyf1K0z1k!2m2!1d12.494294199999999!2d41.9046449!3e2"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center bg-emerald-700 text-white px-8 py-4 rounded-full hover:bg-emerald-800 transition font-bold shadow-lg transform hover:scale-105"
                    >
                        פתח את המסלול בגוגל מפות
                        <ArrowLeft className="mr-2" size={20} />
                    </a>
                </div>
            </div>

            <div className="space-y-0 relative max-w-2xl mx-auto">
                <div className="absolute top-4 bottom-4 right-[1.65rem] w-0.5 bg-stone-200"></div>

                {[
                    { id: 1, name: "סן לואיג'י דיי פראנצ'זי", art: "הקריאה למתי (קראווג'ו)", desc: "נתחיל בציור המהפכני בקפלה קונטרלי." },
                    { id: 2, name: "סן קרלו אלה קווטרו פונטנה", art: "האדריכלות של בורומיני", desc: "נמשיך מזרחה לפנינה האדריכלית בצומת המזרקות." },
                    { id: 3, name: "סנטה מריה דלה ויטוריה", art: "האקסטזה של סנטה תרזה (ברניני)", desc: "נסיים בשיא הדרמה הבארוקית." }
                ].map((stop) => (
                    <div key={stop.id} className="relative pr-16 pb-10 last:pb-0">
                        <span className="absolute top-1 right-0 w-14 h-14 bg-emerald-700 rounded-full text-white flex items-center justify-center font-bold text-xl z-10 border-4 border-white shadow-md font-serif">
                            {stop.id}
                        </span>
                        <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 transition hover:shadow-md">
                            <h3 className="font-bold text-xl text-stone-900 font-serif mb-1">{stop.name}</h3>
                            <div className="text-emerald-700 font-medium text-sm mb-3 tracking-wide">{stop.art}</div>
                            <p className="text-stone-500">{stop.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default MapPage;
