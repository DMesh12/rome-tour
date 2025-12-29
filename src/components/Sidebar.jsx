import React from 'react';
import { X, Book, Palette, Building2, Hammer, Map, Camera } from 'lucide-react';

const Sidebar = ({ isMenuOpen, setIsMenuOpen, activeTab, setActiveTab }) => {
    const navItems = [
        { id: 'home', label: 'דף הבית', icon: Book },
        { id: 'painting', label: 'הציור (קראווג\'ו)', icon: Palette },
        { id: 'architecture', label: 'האדריכלות (בורומיני)', icon: Building2 },
        { id: 'sculpture', label: 'הפסל (ברניני)', icon: Hammer },
        { id: 'map', label: 'מפת המסלול', icon: Map },
        { id: 'recreation', label: 'שחזור יצירה', icon: Camera },
    ];

    return (
        <aside className={`
      bg-[#1c1917] text-stone-300 w-full md:w-80 flex-shrink-0 
      md:sticky md:top-0 md:h-screen overflow-y-auto
      transition-all duration-300 ease-in-out z-40
      ${isMenuOpen ? 'block fixed inset-0 z-50' : 'hidden md:block'}
    `}>
            {/* Mobile Close Button (Inside Overlay) */}
            {isMenuOpen && (
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-4 left-4 p-2 text-white md:hidden"
                >
                    <X size={30} />
                </button>
            )}

            <div className="p-10 border-b border-white/5 bg-gradient-to-b from-black/20 to-transparent">
                <h1 className="text-3xl font-bold font-serif mb-3 leading-tight text-amber-500 tracking-wide">כיכרות רומא</h1>
                <p className="text-stone-400 text-sm tracking-wide">סיור וירטואלי במאה ה-17</p>
                <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-xs text-amber-700/80 font-bold mb-2 uppercase tracking-wider">מגישים</p>
                    <p className="text-stone-200 font-medium">דניאל משולם</p>
                    <p className="text-stone-200 font-medium">אורי בנרף</p>
                </div>
            </div>
            <div className="py-6">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => {
                                setActiveTab(item.id);
                                setIsMenuOpen(false);
                            }}
                            className={`w-full flex items-center px-10 py-5 transition-all duration-200 group relative
                ${isActive
                                    ? 'text-white bg-white/5'
                                    : 'text-stone-400 hover:bg-white/5 hover:text-amber-100'
                                }`}
                        >
                            {isActive && (
                                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-amber-600 shadow-[0_0_15px_rgba(217,119,6,0.5)]"></div>
                            )}
                            <Icon size={20} className={`ml-4 transition-transform group-hover:scale-110 ${isActive ? 'text-amber-500' : 'text-stone-600 group-hover:text-amber-500/70'}`} />
                            <span className={`font-medium text-lg tracking-wide ${isActive ? 'font-bold' : ''}`}>{item.label}</span>
                        </button>
                    );
                })}
            </div>
        </aside>
    );
};

export default Sidebar;
