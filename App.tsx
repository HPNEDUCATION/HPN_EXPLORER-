import React, { useState, useEffect } from 'react';
import { DISTRICTS_DATA } from './constants';
import { DistrictData, CategoryType } from './types';
import ChatWidget from './components/ChatWidget';
import PlaceCard from './components/PlaceCard';
import { Menu, X, ChevronRight, ArrowLeft, Home, Search } from 'lucide-react';
import { Lang, T, DISTRICT_PA } from './i18n';
import { TAGLINE_PA } from './pa-content';
import { districtImage, onImgError } from './images';

const CATEGORIES: { id: CategoryType; label: string }[] = [
  { id: 'history', label: 'History' },
  { id: 'religious', label: 'Religious' },
  { id: 'nature', label: 'Nature & Wildlife' },
  { id: 'heritage', label: 'Heritage' },
  { id: 'food', label: 'Food & Dhabas' },
  { id: 'shopping', label: 'Shopping' },
  { id: 'education', label: 'Education' },
  { id: 'culture', label: 'Culture' },
  { id: 'accommodation', label: 'Stay' },
  { id: 'industry', label: 'Industry' },
  { id: 'farm', label: 'Farm Houses' },
];

const App: React.FC = () => {
  // Each district has its own link, e.g. /district/amritsar
  const districtFromPath = (): DistrictData | null => {
    const m = window.location.pathname.match(/^\/district\/([^/]+)\/?$/);
    return m ? DISTRICTS_DATA.find(d => d.id === m[1]) || null : null;
  };
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictData | null>(districtFromPath);
  const [activeCategory, setActiveCategory] = useState<CategoryType>('history');
  const [searchTerm, setSearchTerm] = useState('');
  const [lang, setLang] = useState<Lang>(() => {
    try { return localStorage.getItem('hpn-lang') === 'pa' ? 'pa' : 'en'; } catch { return 'en'; }
  });
  const t = T[lang];
  const dName = (d: DistrictData) => (lang === 'pa' ? DISTRICT_PA[d.id] || d.name : d.name);
  const tagline = (d: DistrictData) => (lang === 'pa' && TAGLINE_PA[d.id]) || d.tagline;
  const switchLang = (l: Lang) => {
    setLang(l);
    try { localStorage.setItem('hpn-lang', l); } catch {}
  };
  const [scrolled, setScrolled] = useState(false);

  // Browser back/forward buttons
  useEffect(() => {
    const onPop = () => setSelectedDistrict(districtFromPath());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => { document.documentElement.lang = lang === 'pa' ? 'pa' : 'en'; }, [lang]);

  // Page title follows the district
  useEffect(() => {
    document.title = selectedDistrict
      ? `${lang === 'pa' ? DISTRICT_PA[selectedDistrict.id] || selectedDistrict.name : selectedDistrict.name} | HPN EXPLORER`
      : 'HPN EXPLORER | Punjab Travel Guide';
  }, [selectedDistrict, lang]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter districts on home screen
  const filteredDistricts = DISTRICTS_DATA.filter(d => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (DISTRICT_PA[d.id] || '').includes(searchTerm.trim())
  );

  const handleDistrictSelect = (district: DistrictData) => {
    window.history.pushState({}, '', `/district/${district.id}`);
    setSelectedDistrict(district);
    setActiveCategory('history'); // Default to history
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    window.history.pushState({}, '', '/');
    setSelectedDistrict(null);
    setSearchTerm('');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navbar */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-md py-4 border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleBackToHome}>
            <span className="text-2xl font-bold font-serif text-punjab-600 tracking-wider">HPN EXPLORER</span>
            <span className="text-xs bg-punjab-100 text-punjab-700 px-2 py-0.5 rounded-full font-semibold hidden sm:inline-block">PB</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex rounded-full border border-slate-200 overflow-hidden text-sm font-semibold">
              <button onClick={() => switchLang('en')} className={`px-3 py-1 ${lang === 'en' ? 'bg-punjab-600 text-white' : 'text-slate-600'}`}>EN</button>
              <button onClick={() => switchLang('pa')} className={`px-3 py-1 ${lang === 'pa' ? 'bg-punjab-600 text-white' : 'text-slate-600'}`}>ਪੰਜਾਬੀ</button>
            </div>
            {selectedDistrict && (
              <button onClick={handleBackToHome} className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-punjab-600 transition-colors">
                <Home className="w-4 h-4" /> {t.allDistricts}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <main className="pt-20">
        {!selectedDistrict ? (
          // HOME SCREEN - DISTRICT GRID
          <div className="animate-in fade-in duration-500">
            {/* Hero */}
            <div className="bg-slate-900 text-white py-20 px-4 text-center relative overflow-hidden mb-12">
              <div className="absolute inset-0 bg-gradient-to-br from-punjab-900/60 to-slate-900"></div>
              <div className="relative z-10 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{t.heroTitle}</h1>
                <p className="text-lg text-slate-300 mb-8">{t.heroText}</p>
                
                {/* Search Bar */}
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder={t.search} 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-punjab-500"
                  />
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
              <h2 className="text-2xl font-bold text-slate-800 mb-8 border-l-4 border-punjab-500 pl-4">{t.selectDistrict}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredDistricts.map(district => (
                  <div 
                    key={district.id}
                    onClick={() => handleDistrictSelect(district)}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all cursor-pointer border border-slate-100 overflow-hidden flex flex-col"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={districtImage(district.id)} onError={onImgError} loading="lazy" 
                        alt={dName(district)} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">{dName(district)}</h3>
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <p className="text-sm text-slate-600 line-clamp-2 mb-4">{tagline(district)}</p>
                      <div className="flex items-center text-punjab-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                        {t.explore} <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // DISTRICT DETAIL SCREEN
          <div className="animate-in slide-in-from-right duration-500">
            {/* Header */}
            <div className="relative h-[50vh] min-h-[400px]">
              <img src={districtImage(selectedDistrict.id)} onError={onImgError} className="w-full h-full object-cover" alt={dName(selectedDistrict)} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              <div className="absolute top-4 left-4 md:hidden">
                <button onClick={handleBackToHome} className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/30">
                  <ArrowLeft className="w-6 h-6" />
                </button>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
                <div className="max-w-7xl mx-auto">
                  <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">{dName(selectedDistrict)}</h1>
                  <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl">{tagline(selectedDistrict)}</p>
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 relative">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Navigation (Desktop) / Horizontal Scroll (Mobile) */}
                <div className="lg:w-64 flex-shrink-0">
                  <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-slate-100 p-2 overflow-x-auto lg:overflow-visible flex lg:flex-col gap-1 hide-scrollbar z-30">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`
                          px-4 py-3 rounded-lg text-sm font-medium text-left whitespace-nowrap transition-all flex items-center justify-between
                          ${activeCategory === cat.id 
                            ? 'bg-punjab-50 text-punjab-700 border-l-4 border-punjab-500' 
                            : 'text-slate-600 hover:bg-slate-50'
                          }
                        `}
                      >
                        {t.cat[cat.id]}
                        {activeCategory === cat.id && <ChevronRight className="w-4 h-4 hidden lg:block" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 min-h-[60vh]">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">{t.cat[activeCategory]}</h2>
                    <p className="text-slate-500">
                      {t.exploreBest(t.cat[activeCategory], dName(selectedDistrict))}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedDistrict.categories[activeCategory]?.map((item) => (
                      <PlaceCard key={item.id} item={item} category={activeCategory} districtId={selectedDistrict.id} lang={lang} />
                    ))}
                  </div>

                  {(!selectedDistrict.categories[activeCategory] || selectedDistrict.categories[activeCategory]?.length === 0) && (
                    <div className="text-center py-20 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                      <p className="text-slate-500">{t.comingSoon}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-2xl font-serif text-white mb-4">HPN EXPLORER</p>
          <p className="mb-4">{t.footer1}</p>
          <p className="text-sm opacity-50">© {new Date().getFullYear()} HPN Explorer. {t.footer2}</p>
        </div>
      </footer>

      <ChatWidget currentDistrict={selectedDistrict ? dName(selectedDistrict) : undefined} lang={lang} />
    </div>
  );
};

export default App;
