import React from 'react';
import { Camera } from 'lucide-react';
import SectionTitle from './SectionTitle';

const RecreationPage = () => (
    <div className="space-y-8 animate-fadeIn">
        <div className="bg-white p-10 rounded-xl shadow-xl border-t-4 border-purple-700">
            <SectionTitle icon={Camera} title="שחזור יצירה (Tableau Vivant)" colorClass="text-purple-900" />

            <div className="bg-purple-50 p-8 rounded-xl mb-10 text-center border border-purple-100">
                <h3 className="text-2xl font-bold text-purple-900 mb-2 font-serif">היצירה לשחזור: האקסטזה של סנטה תרזה</h3>
                <p className="text-purple-700 font-medium italic">מאת ג'אן לורנצו ברניני</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 h-full">
                        <h4 className="font-bold text-stone-800 mb-4 border-b pb-2 flex items-center font-serif text-lg">
                            <span className="bg-purple-100 w-8 h-8 flex items-center justify-center rounded-full ml-3 text-purple-700 text-sm">1</span>
                            ציוד נדרש והכנה
                        </h4>
                        <ul className="space-y-4 text-stone-600">
                            <li className="flex items-start"><span className="ml-2 text-purple-500 font-bold">•</span><strong>שחקנים:</strong> דרושים שניים (תרזה והמלאך).</li>
                            <li className="flex items-start"><span className="ml-2 text-purple-500 font-bold">•</span><strong>לבוש:</strong> הרבה בדים/סדינים (לבן/בז') ליצירת נפח וקפלים מרובים (Drapery).</li>
                            <li className="flex items-start"><span className="ml-2 text-purple-500 font-bold">•</span><strong>אביזרים:</strong> מקל דק, מכחול או "חץ" זהוב עבור המלאך.</li>
                            <li className="flex items-start"><span className="ml-2 text-purple-500 font-bold">•</span><strong>חלל:</strong> חדר חשוך לחלוטין הוא קריטי להצלחת האפקט.</li>
                        </ul>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 h-full">
                        <h4 className="font-bold text-stone-800 mb-4 border-b pb-2 flex items-center font-serif text-lg">
                            <span className="bg-purple-100 w-8 h-8 flex items-center justify-center rounded-full ml-3 text-purple-700 text-sm">2</span>
                            בימוי ותאורה (הכי חשוב!)
                        </h4>
                        <ul className="space-y-4 text-stone-600">
                            <li className="flex items-start"><span className="ml-2 text-purple-500 font-bold">•</span><strong>תאורה:</strong> השתמשו בפנס אחד חזק מלמעלה (כמו החלון הנסתר של ברניני) ליצירת צללים דרמטיים.</li>
                            <li className="flex items-start"><span className="ml-2 text-purple-500 font-bold">•</span><strong>תרזה:</strong> ראש שמוט לאחור, עיניים חצי עצומות, פה פתוח באנחה, יד שמוטה.</li>
                            <li className="flex items-start"><span className="ml-2 text-purple-500 font-bold">•</span><strong>המלאך:</strong> עומד מעל, חיוך עדין וממזרי, מחזיק את החץ בעדינות.</li>
                            <li className="flex items-start"><span className="ml-2 text-purple-500 font-bold">•</span><strong>זווית צילום:</strong> מלמטה למעלה (Low Angle) להעצמת הדרמה.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-4 border-dashed border-stone-200 rounded-2xl p-20 text-center bg-stone-50 hover:bg-stone-100 transition duration-300 group cursor-pointer">
                <Camera size={64} className="mx-auto text-stone-300 mb-6 group-hover:text-purple-400 transition" />
                <h3 className="text-2xl font-bold text-stone-400 group-hover:text-stone-600 transition font-serif">מקום להדבקת התמונה</h3>
                <p className="text-stone-400 mt-2">כאן תמקמו את התוצר הסופי של השחזור שלכם.</p>
            </div>
        </div>
    </div>
);

export default RecreationPage;
