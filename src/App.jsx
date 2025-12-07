import React, { useState } from 'react';
import {
  Map,
  Camera,
  Palette,
  Hammer,
  Building2,
  ChevronRight,
  Info,
  MapPin,
  Clock,
  ArrowLeft,
  BookOpen,
  User,
  Scroll,
  Scale,
  Image as ImageIcon,
  Book
} from 'lucide-react';

/* --- Components --- */

const SectionTitle = ({ icon: Icon, title, colorClass = "text-amber-900" }) => (
  <h3 className={`text-2xl font-bold ${colorClass} mb-4 flex items-center border-b border-gray-200 pb-2 font-serif`}>
    <Icon className="ml-3" size={24} />
    {title}
  </h3>
);

// רכיב עזר להצגת תמונה או ריבוע עם שם הקובץ אם התמונה חסרה
const ImageWithFallback = ({ src, alt, className, type }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`${className} bg-gray-100 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-300 overflow-hidden`}>
        <ImageIcon size={type === 'artist' ? 20 : 40} className="mb-2 opacity-50" />
        <span className="text-xs font-mono font-bold text-gray-500 px-2 text-center break-all">{src}</span>
        <span className="text-[10px] text-gray-400 mt-1">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} object-cover`}
      onError={() => setError(true)}
    />
  );
};

const ArtPage = ({ data }) => (
  <div className="space-y-10 animate-fadeIn pb-10">

    {/* Large Artwork Image Frame */}
    <div className="w-full h-80 bg-gray-200 rounded-2xl shadow-lg overflow-hidden border-4 border-white relative group">
      <ImageWithFallback
        src={data.image}
        alt={`יצירה: ${data.title}`}
        className="w-full h-full hover:scale-105 transition duration-700"
        type="artwork"
      />
      <div className="absolute bottom-0 right-0 bg-black/60 text-white px-4 py-1 text-xs backdrop-blur-sm rounded-tl-lg">
        {data.image}
      </div>
    </div>

    {/* Header Section with Artist Image */}
    <div className="bg-amber-50 p-6 rounded-2xl border-r-8 border-amber-700 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="relative z-10 flex-1">
        <h2 className="text-4xl font-bold text-amber-900 mb-2 font-serif tracking-wide">{data.title}</h2>
        <div className="flex items-center text-amber-800 font-medium text-xl">
          <User size={24} className="ml-2" />
          {data.artist}
        </div>
      </div>

      {/* Small Artist Image Frame */}
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-200 shrink-0">
          <ImageWithFallback
            src={data.artistImage}
            alt={`האמן: ${data.artist}`}
            className="w-full h-full"
            type="artist"
          />
        </div>
        <span className="text-xs text-amber-900/60 font-mono mt-1">{data.artistImage}</span>
      </div>
    </div>

    {/* Technical Details Grid */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-md border border-amber-100">
        <h4 className="font-bold text-gray-800 mb-4 flex items-center text-lg">
          <Info className="ml-2 text-amber-600" size={20} />
          תעודת זהות
        </h4>
        <ul className="space-y-3 text-gray-700">
          <li><span className="font-semibold text-amber-900">שנה:</span> {data.year}</li>
          <li><span className="font-semibold text-amber-900">חומר:</span> {data.material}</li>
          <li><span className="font-semibold text-amber-900">גודל/מידות:</span> {data.size}</li>
          <li><span className="font-semibold text-amber-900">מיקום:</span> {data.location}</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-amber-100">
        <h4 className="font-bold text-gray-800 mb-4 flex items-center text-lg">
          <Clock className="ml-2 text-amber-600" size={20} />
          שעות ביקור
        </h4>
        <p className="text-gray-700 whitespace-pre-line leading-relaxed">{data.hours}</p>
      </div>
    </div>

    {/* 1. Visual Analysis ("What we see") */}
    <section className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-amber-600">
      <SectionTitle icon={Palette} title="מה אנחנו רואים? (ניתוח חזותי)" />
      <div className="grid md:grid-cols-2 gap-6">
        {data.visualAnalysis.map((item, index) => (
          <div key={index} className="bg-amber-50/60 p-5 rounded-lg border border-amber-100 hover:bg-amber-100/50 transition duration-300">
            <strong className="text-amber-900 text-lg block mb-2 font-serif border-b border-amber-200/50 pb-1">{item.title}</strong>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">{item.content}</p>
          </div>
        ))}
      </div>
    </section>

    {/* 2. Context & Iconography ("What we know") */}
    <section className="bg-stone-50 p-8 rounded-xl shadow-lg border-t-4 border-stone-600">
      <SectionTitle icon={BookOpen} title="מה אנחנו יודעים? (רקע ואיקונוגרפיה)" colorClass="text-stone-800" />
      <div className="space-y-6">
        {data.context.map((item, index) => (
          <div key={index}>
            <h4 className="text-stone-800 font-bold text-lg mb-2 flex items-center">
              <span className="w-2 h-2 bg-stone-500 rounded-full ml-2"></span>
              {item.title}
            </h4>
            <p className="text-stone-700 leading-relaxed text-justify pl-4 border-r-2 border-stone-300 pr-4">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* 3. Politics & History ("Zeitgeist") */}
    <section className="bg-blue-50 p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
      <SectionTitle icon={Scale} title="רוח התקופה: פוליטיקה, כלכלה ותרבות" colorClass="text-blue-900" />
      <div className="space-y-4">
        <p className="text-blue-900/80 font-medium italic mb-4">
          כיצד השפיעו נסיבות הזמן על היצירה? (תשובה לשאלה 7)
        </p>
        {data.politics.map((item, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
            <h4 className="text-blue-800 font-bold mb-2">{item.title}</h4>
            <p className="text-gray-700 leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const MapPage = () => (
  <div className="space-y-6 animate-fadeIn">
    <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-600">
      <SectionTitle icon={Map} title="מסלול הסיור ברומא" colorClass="text-green-800" />

      <p className="text-gray-700 mb-6 text-lg">
        המסלול עובר בין שלוש יצירות המופת, בסדר הליכה הגיוני ממערב למזרח.
        <br />
        <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold mt-2">
          אורך המסלול: כ-2.1 ק"מ | זמן הליכה: כ-30 דקות
        </span>
      </p>

      {/* Map Placeholder Card - Replaces broken iframe */}
      <div className="w-full bg-stone-100 rounded-xl overflow-hidden border-2 border-stone-200 relative mb-8 shadow-inner group p-10 text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/map-markers.png')] opacity-10"></div>
        <MapPin size={64} className="text-green-600 mb-4 mx-auto" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">מפת המסלול</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          צפה במסלול המלא, כולל נקודות עצירה וזמני הליכה, ישירות בגוגל מפות.
        </p>

        <a
          href="https://www.google.com/maps/dir/Church+of+Saint+Louis+of+the+French,+Piazza+di+San+Luigi+de'+Francesi,+Roma+RM,+Italy/Church+of+St+Charles+at+the+Four+Fountains,+Via+del+Quirinale,+23,+Roma+RM,+Italy/Church+of+Santa+Maria+della+Vittoria,+Via+Venti+Settembre,+17,+Roma+RM,+Italy/data=!4m20!4m19!1m5!1m1!19sChIJLQGCLlBgLxMRuYQp8kv6syI!2m2!1d12.474740599999999!2d41.8996104!1m5!1m1!19sChIJJdz7sK5hLxMRqBCQGj4L6u4!2m2!1d12.490746999999999!2d41.901840799999995!1m5!1m1!19sChIJVbqwYKhhLxMRSAkyf1K0z1k!2m2!1d12.494294199999999!2d41.9046449!3e2"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition font-bold shadow-lg transform hover:scale-105"
        >
          פתח את המסלול בגוגל מפות
          <ArrowLeft className="mr-2" size={20} />
        </a>
      </div>

      <div className="space-y-0 relative">
        <div className="absolute top-0 bottom-0 right-4 w-1 bg-gray-200 rounded-full"></div>

        {[
          { id: 1, name: "סן לואיג'י דיי פראנצ'זי", art: "הקריאה למתי (קראווג'ו)", desc: "נתחיל בציור המהפכני בקפלה קונטרלי." },
          { id: 2, name: "סן קרלו אלה קווטרו פונטנה", art: "האדריכלות של בורומיני", desc: "נמשיך מזרחה לפנינה האדריכלית בצומת המזרקות." },
          { id: 3, name: "סנטה מריה דלה ויטוריה", art: "האקסטזה של סנטה תרזה (ברניני)", desc: "נסיים בשיא הדרמה הבארוקית." }
        ].map((stop) => (
          <div key={stop.id} className="relative pr-12 pb-8 last:pb-0">
            <span className="absolute top-1 right-0 w-9 h-9 bg-green-600 rounded-full text-white flex items-center justify-center font-bold z-10 border-4 border-white shadow-sm">
              {stop.id}
            </span>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <h3 className="font-bold text-lg text-gray-900">{stop.name}</h3>
              <div className="text-green-700 font-medium text-sm mb-1">{stop.art}</div>
              <p className="text-gray-500 text-sm">{stop.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const RecreationPage = () => (
  <div className="space-y-8 animate-fadeIn">
    <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-purple-600">
      <SectionTitle icon={Camera} title="שחזור יצירה (Tableau Vivant)" colorClass="text-purple-800" />

      <div className="bg-purple-50 p-6 rounded-lg mb-8 text-center border border-purple-100">
        <h3 className="text-xl font-bold text-purple-900 mb-2">היצירה לשחזור: האקסטזה של סנטה תרזה</h3>
        <p className="text-purple-700">מאת ג'אן לורנצו ברניני</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 h-full">
            <h4 className="font-bold text-gray-800 mb-4 border-b pb-2 flex items-center">
              <span className="bg-purple-100 p-1 rounded ml-2 text-purple-700">1</span>
              ציוד נדרש והכנה
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start"><span className="ml-2 text-purple-500">•</span><strong>שחקנים:</strong> דרושים שניים (תרזה והמלאך).</li>
              <li className="flex items-start"><span className="ml-2 text-purple-500">•</span><strong>לבוש:</strong> הרבה בדים/סדינים (לבן/בז') ליצירת נפח וקפלים מרובים (Drapery).</li>
              <li className="flex items-start"><span className="ml-2 text-purple-500">•</span><strong>אביזרים:</strong> מקל דק, מכחול או "חץ" זהוב עבור המלאך.</li>
              <li className="flex items-start"><span className="ml-2 text-purple-500">•</span><strong>חלל:</strong> חדר חשוך לחלוטין הוא קריטי להצלחת האפקט.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 h-full">
            <h4 className="font-bold text-gray-800 mb-4 border-b pb-2 flex items-center">
              <span className="bg-purple-100 p-1 rounded ml-2 text-purple-700">2</span>
              בימוי ותאורה (הכי חשוב!)
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start"><span className="ml-2 text-purple-500">•</span><strong>תאורה:</strong> השתמשו בפנס אחד חזק מלמעלה (כמו החלון הנסתר של ברניני) ליצירת צללים דרמטיים.</li>
              <li className="flex items-start"><span className="ml-2 text-purple-500">•</span><strong>תרזה:</strong> ראש שמוט לאחור, עיניים חצי עצומות, פה פתוח באנחה, יד שמוטה.</li>
              <li className="flex items-start"><span className="ml-2 text-purple-500">•</span><strong>המלאך:</strong> עומד מעל, חיוך עדין וממזרי, מחזיק את החץ בעדינות.</li>
              <li className="flex items-start"><span className="ml-2 text-purple-500">•</span><strong>זווית צילום:</strong> מלמטה למעלה (Low Angle) להעצמת הדרמה.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 border-4 border-dashed border-gray-200 rounded-2xl p-16 text-center bg-gray-50 hover:bg-gray-100 transition duration-300">
        <Camera size={64} className="mx-auto text-gray-300 mb-4" />
        <h3 className="text-2xl font-bold text-gray-400">מקום להדבקת התמונה</h3>
        <p className="text-gray-400 mt-2">כאן תמקמו את התוצר הסופי של השחזור שלכם.</p>
      </div>
    </div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- DATA OBJECT WITH FULL RESEARCH CONTENT & IMAGES ---
  const artworkData = {
    painting: {
      title: "הקריאה למתי",
      artist: "קראווג'ו (Caravaggio)",
      image: "paint.png", // <--- שם הקובץ שביקשת לתמונה הגדולה
      artistImage: "caravaggio.jpg", // <--- שם קובץ לתמונת האמן
      year: "1599–1600",
      material: "שמן על בד",
      size: "322 ס\"מ × 340 ס\"מ",
      location: "קפלה קונטרלי, כנסיית סן לואיג'י דיי פראנצ'זי (San Luigi dei Francesi)",
      hours: "ב'-ו': 09:30–12:45, 14:30–18:30\nשבת: 09:30–12:45, 14:30–18:30\nא': 11:30–12:45, 14:30–18:30\n(סגור בחמישי אחה\"צ)",
      visualAnalysis: [
        { title: "קומפוזיציה", content: "הקומפוזיציה מחולקת לשני מישורים אופקיים (התחתון האנושי והעליון הריק/אלוהי). יד ישו יוצרת וקטור אלכסוני ברור המוביל את העין ישירות למתי, שמצביע על עצמו בהפתעה." },
        { title: "אור וצל (Tenebrism)", content: "שימוש קיצוני בקיארוסקורו. אלומת אור חזקה וממוקדת פורצת מימין למעלה, מסמלת את האור האלוהי שבוחר במתי, על רקע חושך מוחלט המבליט את הדרמה." },
        { title: "אשליית עומק ונפח", content: "הדמויות בעלות נפח פיסולי כמעט. קראווג'ו משתמש בקיצור (Foreshortening) של השולחן ושל רגלי הדמויות כדי לפרוץ את מישור התמונה אל עבר הצופה." },
        { title: "לבוש וצבע", content: "הצבעים ריאליסטיים וכהים. המוכסים לבושים בבגדי המאה ה-17 (כובעי נוצות, בדים עשירים), בניגוד ללבוש התנ\"כי הפשוט של ישו ופטרוס, כדי להנגיש את הנס לזמן ההווה." }
      ],
      context: [
        { title: "ביוגרפיה", content: "קראווג'ו היה אמן סוער ומרדן שחי חיי שוליים אלימים. בחירתו להשתמש במודלים מהרחוב (קבצנים ואנשי שוליים) לייצוג קדושים הייתה מהפכנית והביאה את הקדושה 'לגובה העיניים'." },
        { title: "איקונוגרפיה וסיפור", content: "הציור מתאר את רגע הבחירה (מתי ט, 9). היד המושטת של ישו היא ציטוט ויזואלי ל'בריאת האדם' של מיכלאנג'לו, אך כאן ישו הוא 'האדם השני' הגואל. קראווג'ו מדגיש את ההפתעה האנושית מול הקריאה האלוהית." }
      ],
      politics: [
        { title: "פוליטיקה (הקונטר-רפורמציה)", content: "היצירה משרתת את הכנסייה במאבקה בפרוטסטנטים. בעוד הפרוטסטנטים ביטלו את הדימויים, הקתולים השתמשו באמנות ריאליסטית ורגשית כדי לחבר את המאמין הפשוט לדת." },
        { title: "כלכלה", content: "היצירה הוזמנה לקראת שנת היובל (1600), תקופה של שגשוג וצליינות ברומא, שבה הכנסייה השקיעה הון בפיאור מבניה." }
      ]
    },
    architecture: {
      title: "סן קרלו אלה קווטרו פונטנה",
      artist: "פרנצ'סקו בורומיני (Francesco Borromini)",
      image: "arc.png", // <--- שם הקובץ שביקשת לתמונה הגדולה
      artistImage: "borromini.jpg", // <--- שם קובץ לתמונת האמן
      year: "1638–1641 (פנים), 1667 (חזית)",
      material: "לבנים, טיח (Stucco) ואבן טרוורטין",
      size: "כנסייה זעירה (נאמר ששטחה נכנס כולו לתוך אחד מעמודי התמך של סן פייטרו)",
      location: "Via del Quirinale, 23 (צומת ארבע המזרקות)",
      hours: "ב'-שבת: 10:00–13:00\nא': 12:00–13:00",
      visualAnalysis: [
        { title: "חזית בתנועה", content: "החזית המפורסמת היא גלית (Undulating) – קעורה, קמורה ושוב קעורה. בורומיני הפך את האבן לחומר שנראה חי ונושם, בניגוד לקווים הישרים של הרנסנס." },
        { title: "תכנית קרקע", content: "במקום צורות פשוטות, התכנית היא אליפסה מורכבת המבוססת על חיבור של משולשים שווי צלעות ומעגלים, היוצרים מתח ודינמיות בחלל." },
        { title: "אור ופנים", content: "החלל הפנימי לבן לחלוטין. האור נכנס מ'פנס' (Lantern) בראש הכיפה ומחלונות נסתרים, ומעצים את תחושת הגובה והרוחניות." },
        { title: "עיטור הכיפה", content: "הכיפה מעוטרת בצורות גיאומטריות (צלבים, משושים, מתומנים) ההולכים וקטנים כלפי מעלה, אשליה אופטית המגביהה את התקרה." }
      ],
      context: [
        { title: "ביוגרפיה", content: "בורומיני היה אדריכל מלנכולי ופרפקציוניסט, שראה באדריכלות מתמטיקה מקודשת. הוא התאבד בסוף חייו, אולי בשל התסכול מהתחרות עם ברניני." },
        { title: "משמעות המסדר", content: "הכנסייה נבנתה עבור המסדר הטריניטארי (השילוש הקדוש), ולכן השימוש האובססיבי במספר 3 ובמשולשים בתכנון." }
      ],
      politics: [
        { title: "כלכלה (האילוץ ככוח יוצר)", content: "המסדר המזמין היה עני מאוד (עסק בפדיון שבויים). לבורומיני לא היה תקציב לשיש וזהב, ולכן השתמש בטיח זול. היופי נובע אך ורק מהתחכום הצורני ומהאור – ניצחון הרוח על החומר." },
        { title: "תרבות", content: "האדריכלות משקפת את חוסר השקט של הבארוק ואת החיפוש אחר תנועה ודרמה גם בחומר הדומם." }
      ]
    },
    sculpture: {
      title: "האקסטזה של סנטה תרזה",
      artist: "ג'אן לורנצו ברניני (Gian Lorenzo Bernini)",
      image: "stat.png", // <--- שם הקובץ שביקשת לתמונה הגדולה
      artistImage: "bernini.jpg", // <--- שם קובץ לתמונת האמן
      year: "1647–1652",
      material: "שיש קרארה, ברונזה מוזהבת, זכוכית, סטוקו",
      size: "גובה הדמויות כ-3.5 מטר (בתוך הנישה)",
      location: "קפלה קורנרו, כנסיית סנטה מריה דלה ויטוריה",
      hours: "כל יום: 07:00–12:00, 15:30–19:00",
      visualAnalysis: [
        { title: "מרקם וחומר", content: "ברניני 'מנצח' את השיש ויוצר הבדלים טקסטורליים מדהימים: עור הפנים החלק של תרזה, הגלימה המחוספסת והכבדה של המלאך, והבד המתנופף והסוער של גלימת הנזירה." },
        { title: "תיאטרליות (Bel Composto)", content: "שילוב של פיסול, אדריכלות וציור. בני משפחת קורנרו צופים בנס מתוך 'תאי תיאטרון' בצדדים, מה שהופך את האירוע הדתי למופע בימתי." },
        { title: "אור נסתר", content: "ברניני יצר חלון נסתר מעל הפסל ששופך אור טבעי על קרני הברונזה המוזהבות, כך שהאור נראה כאילו הוא יורד מהשמיים." },
        { title: "אשליית תנועה", content: "רגע קפוא בזמן. הבגדים נראים כמתנופפים ברוח סערה רוחנית, והדמויות נראות כאילו הן מרחפות באוויר ללא משקל." }
      ],
      context: [
        { title: "איקונוגרפיה", content: "מבוסס על האוטוביוגרפיה של תרזה מאווילה. ברניני מעז לתרגם חוויה מיסטית רוחנית לדימוי גופני וחושי מאוד (אקסטזה פיזית) כדי להמחיש את עוצמת האהבה האלוהית." },
        { title: "ביוגרפיה", content: "ברניני היה איש תיאטרון וכריזמטי, 'נסיך הבארוק'. ביצירה זו הוא משלב את כל כישרונותיו כדי ליצור חוויה טוטאלית לצופה." }
      ],
      politics: [
        { title: "תעמולה (Propaganda)", content: "זוהי יצירת מופת של תעמולה קתולית. הכנסייה רצתה להוכיח את אמיתות הניסים והקדושים (נגד הפרוטסטנטים) באמצעות פנייה לרגש ולחושים של הצופה." },
        { title: "חברה ומעמד", content: "הקפלה היא גם מפגן כוח ועושר של משפחת קורנרו הפטרונית, המנציחה את עצמה כעדה לנס האלוהי." }
      ]
    }
  };

  const navItems = [
    { id: 'home', label: 'דף הבית', icon: Book },
    { id: 'painting', label: 'הציור (קראווג\'ו)', icon: Palette },
    { id: 'architecture', label: 'האדריכלות (בורומיני)', icon: Building2 },
    { id: 'sculpture', label: 'הפסל (ברניני)', icon: Hammer },
    { id: 'map', label: 'מפת המסלול', icon: Map },
    { id: 'recreation', label: 'שחזור יצירה', icon: Camera },
  ];

  return (
    <div className="min-h-screen bg-stone-100 font-sans text-right text-gray-800" dir="rtl">
      {/* Mobile Nav Button */}
      <div className="md:hidden bg-amber-900 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <h1 className="font-serif font-bold text-xl">סיור ברומא הבארוקית</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
          <div className="space-y-1.5">
            <div className="w-6 h-0.5 bg-white rounded"></div>
            <div className="w-6 h-0.5 bg-white rounded"></div>
            <div className="w-6 h-0.5 bg-white rounded"></div>
          </div>
        </button>
      </div>

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar Navigation */}
        <nav className={`
          bg-amber-900 text-amber-50 w-full md:w-72 flex-shrink-0 
          transition-all duration-300 ease-in-out z-40
          ${isMenuOpen ? 'block' : 'hidden md:block'}
        `}>
          <div className="p-8 border-b border-amber-800 bg-amber-950/30">
            <h1 className="text-3xl font-bold font-serif mb-2 leading-tight">כיכרות רומא</h1>
            <p className="text-amber-300/80 text-sm">סיור וירטואלי במאה ה-17</p>
            <div className="mt-4 pt-4 border-t border-amber-800/50">
              <p className="text-xs text-amber-400 font-bold mb-1">מגישים:</p>
              <p className="text-sm font-medium">דניאל משולם</p>
              <p className="text-sm font-medium">אורי בנרף</p>
            </div>
          </div>
          <div className="py-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center px-8 py-4 transition-all duration-200 group
                    ${activeTab === item.id
                      ? 'bg-amber-800 text-white border-r-4 border-amber-400 shadow-inner'
                      : 'text-amber-200 hover:bg-amber-800/50 hover:text-white border-r-4 border-transparent'
                    }`}
                >
                  <Icon size={20} className={`ml-4 transition-transform group-hover:scale-110 ${activeTab === item.id ? 'text-amber-300' : ''}`} />
                  <span className="font-medium text-lg">{item.label}</span>
                  {activeTab === item.id && <ChevronRight size={16} className="mr-auto opacity-70" />}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-12 max-w-6xl mx-auto w-full bg-stone-100 min-h-screen">
          {activeTab === 'home' && (
            <div className="space-y-12 animate-fadeIn max-w-4xl mx-auto">
              {/* Hero Banner */}
              <div className="bg-gradient-to-br from-amber-800 via-amber-900 to-black text-white p-12 rounded-3xl shadow-2xl text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10">
                  <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 tracking-wide">רומא של הבארוק</h1>
                  <p className="text-xl md:text-2xl text-amber-100/90 max-w-2xl mx-auto font-light leading-relaxed">
                    מסע בין אקסטזה דתית, אדריכלות מהפכנית וציור ריאליסטי ברומא של המאה ה-17.
                  </p>
                </div>
              </div>

              {/* Submitters Badge - Prominent */}
              <div className="bg-white border-r-4 border-amber-500 shadow-md rounded-lg p-6 flex flex-col md:flex-row justify-between items-center text-center md:text-right">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">עבודה מסכמת בקורס: כיכרות רומא</h3>
                  <p className="text-gray-500">תאריך הגשה: ינואר 2026</p>
                </div>
                <div className="mt-4 md:mt-0 bg-amber-50 px-6 py-3 rounded-full border border-amber-100">
                  <span className="text-gray-600 ml-2">מגישים:</span>
                  <span className="font-bold text-amber-900 text-lg">דניאל משולם, אורי בנרף</span>
                </div>
              </div>

              {/* Comparison Section (Q9) */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-gray-700">
                <SectionTitle icon={Scale} title="רומא אז והיום: השוואה היסטורית" colorClass="text-gray-800" />
                <div className="prose max-w-none text-gray-700 leading-relaxed text-lg">
                  <p>
                    יש דמיון מפתיע בין תקופת הבארוק לתקופה הנוכחית. כמו במאה ה-17, גם אנחנו חיים בעידן של
                    <strong> חוסר ודאות עמוק</strong>, מלחמות ושינויים אידיאולוגיים. הבארוק היה עידן של "פייק ניוז" ויזואלי –
                    הכנסייה והפטרונים השתמשו באמנות כ<strong>מכשיר תעמולה (Propaganda)</strong> כדי לשכנע את ההמונים, לרגש אותם
                    ולגרום להם להאמין בנרטיב מסוים באמצעות אשליות אופטיות ודרמה.
                  </p>
                  <p className="mt-4">
                    גם היום, התרבות החזותית (מדיה חברתית, חדשות) משמשת לעתים קרובות ליצירת אשליות, מניפולציה רגשית ושכנוע המונים,
                    כשהגבול בין אמת למציאות מבויימת הופך מטושטש, בדיוק כמו הגבול בין השיש למציאות בפסליו של ברניני.
                  </p>
                </div>
              </div>

              {/* Navigation Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { id: 'painting', title: 'הציור', desc: 'קראווג\'ו והמהפכה הריאליסטית', icon: Palette, color: 'text-orange-700', bg: 'bg-orange-50' },
                  { id: 'architecture', title: 'האדריכלות', desc: 'הגאונות הגיאומטרית של בורומיני', icon: Building2, color: 'text-blue-700', bg: 'bg-blue-50' },
                  { id: 'sculpture', title: 'הפסל', desc: 'הדרמה והאקסטזה של ברניני', icon: Hammer, color: 'text-purple-700', bg: 'bg-purple-50' }
                ].map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.id}
                      onClick={() => setActiveTab(card.id)}
                      className="bg-white p-6 rounded-xl shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all border border-gray-100 group text-center"
                    >
                      <div className={`${card.bg} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition`}>
                        <Icon className={card.color} size={32} />
                      </div>
                      <h3 className="font-bold text-xl mb-2 text-gray-800">{card.title}</h3>
                      <p className="text-gray-500 text-sm">{card.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Bibliography */}
              <div className="bg-stone-200/50 p-8 rounded-xl text-sm text-stone-600">
                <h4 className="font-bold mb-4 text-stone-800 text-lg flex items-center">
                  <Scroll size={20} className="ml-2" />
                  מקורות וביבליוגרפיה
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>ככרות רומא - הנחיות למטלת סוף הקורס.</li>
                  <li>סילבוס הקורס (רשימת קריאה).</li>
                  <li>Wittkower, R., <em>Art and Architecture in Italy 1600-1750</em>, Pelican History of Art, 1958.</li>
                  <li>Hibbard, H., <em>Bernini</em>, Penguin, 1984.</li>
                  <li>אתר כנסיית סן לואיג'י דיי פראנצ'זי (saint-louis-des-francais.org), נדלה בינואר 2026.</li>
                  <li>אתר גלריית בורגזה (למידע היסטורי), נדלה בינואר 2026.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'painting' && <ArtPage data={artworkData.painting} />}
          {activeTab === 'architecture' && <ArtPage data={artworkData.architecture} />}
          {activeTab === 'sculpture' && <ArtPage data={artworkData.sculpture} />}
          {activeTab === 'map' && <MapPage />}
          {activeTab === 'recreation' && <RecreationPage />}
        </main>
      </div>
    </div>
  );
}