import React from 'react';
import { User, Info, Clock, Palette, BookOpen, Scale } from 'lucide-react';
import SectionTitle from './SectionTitle';
import ImageWithFallback from './ImageWithFallback';

const ArtPage = ({ data }) => (
    <div className="space-y-12 animate-fadeIn pb-10">

        {/* Large Artwork Image Frame */}
        <div className="w-full aspect-video bg-stone-200 rounded-sm shadow-2xl overflow-hidden border-8 border-stone-800 relative group">
            <ImageWithFallback
                src={data.image}
                alt={`יצירה: ${data.title}`}
                className="w-full h-full hover:scale-105 transition duration-[2s] ease-in-out"
                type="artwork"
            />
            <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                <span className="text-white/80 text-xs font-mono uppercase tracking-widest">{data.image}</span>
            </div>
        </div>

        {/* Header Section with Artist Image */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-r-8 border-amber-700 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="relative z-10 flex-1 space-y-2">
                <h2 className="text-5xl font-bold text-stone-900 font-serif tracking-tight">{data.title}</h2>
                <div className="flex items-center text-amber-800 font-medium text-2xl font-serif italic">
                    <User size={24} className="ml-2" />
                    {data.artist}
                </div>
            </div>

            {/* Small Artist Image Frame */}
            <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-stone-200 shrink-0 ring-1 ring-stone-200">
                    <ImageWithFallback
                        src={data.artistImage}
                        alt={`האמן: ${data.artist}`}
                        className="w-full h-full"
                        type="artist"
                    />
                </div>
                <span className="text-xs text-stone-500 font-mono mt-2">{data.artistImage}</span>
            </div>
        </div>

        {/* Technical Details Grid */}
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-stone-100 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-stone-800 mb-6 flex items-center text-xl font-serif">
                    <Info className="ml-2 text-amber-700" size={24} />
                    תעודת זהות
                </h4>
                <ul className="space-y-4 text-stone-600">
                    <li className="flex border-b border-stone-100 pb-2"><span className="font-bold text-stone-900 w-24 shrink-0">שנה:</span> {data.year}</li>
                    <li className="flex border-b border-stone-100 pb-2"><span className="font-bold text-stone-900 w-24 shrink-0">חומר:</span> {data.material}</li>
                    <li className="flex border-b border-stone-100 pb-2"><span className="font-bold text-stone-900 w-24 shrink-0">מידות:</span> {data.size}</li>
                    <li className="flex"><span className="font-bold text-stone-900 w-24 shrink-0">מיקום:</span> {data.location}</li>
                </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-stone-100 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-stone-800 mb-6 flex items-center text-xl font-serif">
                    <Clock className="ml-2 text-amber-700" size={24} />
                    שעות ביקור
                </h4>
                <p className="text-stone-600 whitespace-pre-line leading-loose">{data.hours}</p>
            </div>
        </div>

        {/* 1. Visual Analysis ("What we see") */}
        <section className="bg-white p-10 rounded-xl shadow-xl border-t-4 border-amber-600">
            <SectionTitle icon={Palette} title="מה אנחנו רואים? (ניתוח חזותי)" />
            <div className="grid md:grid-cols-2 gap-8">
                {data.visualAnalysis.map((item, index) => (
                    <div key={index} className="bg-amber-50/40 p-6 rounded-lg border border-amber-100 hover:bg-amber-50 transition duration-300">
                        <strong className="text-amber-900 text-xl block mb-3 font-serif border-b border-amber-200/50 pb-2">{item.title}</strong>
                        <p className="text-stone-700 leading-relaxed">{item.content}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* 2. Context & Iconography ("What we know") */}
        <section className="bg-stone-50 p-10 rounded-xl shadow-xl border-t-4 border-stone-600">
            <SectionTitle icon={BookOpen} title="מה אנחנו יודעים? (רקע ואיקונוגרפיה)" colorClass="text-stone-800" />
            <div className="space-y-8">
                {data.context.map((item, index) => (
                    <div key={index} className="relative pl-6 border-r-4 border-stone-300 pr-6">
                        <h4 className="text-stone-900 font-bold text-xl mb-3 font-serif">
                            {item.title}
                        </h4>
                        <p className="text-stone-700 leading-relaxed text-justify">
                            {item.content}
                        </p>
                    </div>
                ))}
            </div>
        </section>

        {/* 3. Politics & History ("Zeitgeist") */}
        <section className="bg-slate-50 p-10 rounded-xl shadow-xl border-t-4 border-slate-600">
            <SectionTitle icon={Scale} title="רוח התקופה: פוליטיקה, כלכלה ותרבות" colorClass="text-slate-900" />
            <div className="space-y-6">
                <p className="text-slate-700 font-medium italic border-r-4 border-slate-300 pr-4 py-2 bg-slate-100/50 rounded-l-md">
                    כיצד השפיעו נסיבות הזמן על היצירה? (תשובה לשאלה 7)
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    {data.politics.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                            <h4 className="text-slate-800 font-bold mb-3 text-lg font-serif">{item.title}</h4>
                            <p className="text-slate-600 leading-relaxed">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
);

export default ArtPage;
