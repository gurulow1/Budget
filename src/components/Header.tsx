import { motion, AnimatePresence } from 'motion/react';
import { User, LandPlot, ShieldCheck, Trophy, Sparkles, BookOpen, Layers, CheckCircle2, Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn, safeLocalStorage } from '../lib/utils';

function AnimatedNumber({ value }: { value: number }) {
  return (
    <span className="relative inline-flex h-[1.3em] overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0, position: "absolute" }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className="inline-block font-mono font-bold"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const getLevelInfo = (xp: number) => {
  if (xp <= 150) {
    return { level: 1, title: "Налоговый новичок", min: 0, max: 150, progress: (xp / 150) * 100, nextLevelXp: 150 };
  } else if (xp <= 400) {
    return { level: 2, title: "Бюджетный эксперт", min: 150, max: 400, progress: ((xp - 150) / 250) * 100, nextLevelXp: 400 };
  } else if (xp <= 750) {
    return { level: 3, title: "Финансовый аналитик", min: 400, max: 750, progress: ((xp - 400) / 350) * 100, nextLevelXp: 750 };
  } else if (xp <= 1200) {
    return { level: 4, title: "Бюджетный стратег", min: 750, max: 1200, progress: ((xp - 750) / 450) * 100, nextLevelXp: 1200 };
  } else {
    return { level: 5, title: "Городской стратег", min: 1200, max: 2500, progress: 100, nextLevelXp: 2500 };
  }
};

interface HeaderProps {
  balance: number;
  totalXp?: number;
  completedActivities?: string[];
}

export default function Header({ balance, totalXp = 100, completedActivities = [] }: HeaderProps) {
  const [prevBalance, setPrevBalance] = useState(balance);
  const [floatingPoints, setFloatingPoints] = useState<number | null>(null);
  
  // Toggle profile dropdown Menu on Desktop clicked
  const [profileOpen, setProfileOpen] = useState(false);

  // Manual dark mode state & sync (Audit #14 / Theme Request)
  const [isDark, setIsDark] = useState(() => {
    const saved = safeLocalStorage.getItem('mos_theme');
    return saved === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      safeLocalStorage.setItem('mos_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      safeLocalStorage.setItem('mos_theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    if (balance > prevBalance) {
      setFloatingPoints(balance - prevBalance);
      setPrevBalance(balance);
      
      const timer = setTimeout(() => {
        setFloatingPoints(null);
      }, 2200);
      return () => clearTimeout(timer);
    } else if (balance < prevBalance) {
      setPrevBalance(balance);
    }
  }, [balance, prevBalance]);

  const lvlInfo = getLevelInfo(totalXp);
  const solvedCount = completedActivities.filter(id => id.startsWith('quiz-')).length;

  return (
    <>
      {/* DESKTOP HEADER */}
      <header className="hidden md:flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 py-4 px-6 bg-white rounded-2xl border border-[#E2E8F0] shadow-xs relative z-30 select-none">
        
        {/* Left side: Site title in official style */}
        <div className="flex items-center gap-3.5">
          <div className="flex items-center justify-center bg-[#CC1111] w-10 h-10 rounded-xl text-white shadow-sm shrink-0">
            <LandPlot size={20} className="stroke-[2.5px]" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-x-2 text-sm sm:text-base font-extrabold text-[#0F172A] tracking-tight">
              <span>Открытый бюджет города Москвы</span>
              <span className="text-neutral-300 font-normal hidden sm:inline">//</span>
              <span className="text-[#CC1111] font-bold">Игровые сервисы</span>
            </div>
            <span className="text-[11px] text-[#475569] font-black tracking-widest block sm:mt-0.5 uppercase">
              Официальный интерактивный портал
            </span>
          </div>
        </div>
         
        {/* Right side: User Account & Balance widget */}
        <div className="flex items-center gap-4">
          
          {/* Audit #10: Desktop Mini Search Bar */}
          <div className="relative hidden xl:block min-w-[200px]">
            <input
              type="text"
              placeholder="Поиск по бюджету... (Enter)"
              className="w-full text-xs font-semibold pl-8 pr-3 py-2 bg-[#F8FAFC] border border-[#E2E8F0] hover:border-slate-300 focus:border-[#CC1111]/60 focus:bg-white rounded-xl outline-none transition-all placeholder:text-slate-400"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const val = e.currentTarget.value;
                  if (val.trim()) {
                    window.dispatchEvent(new CustomEvent('open_mos_ai_chat', { detail: { initialQuery: val } }));
                    e.currentTarget.value = '';
                  }
                }
              }}
            />
            <svg
              className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400 stroke-[2.5px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          {/* XP Progress Bar Widget in Header */}
          <div className="hidden lg:flex flex-col gap-1 text-right min-w-[140px]">
            <span className="text-[9px] font-black text-[#CC1111] uppercase tracking-wider">
              {lvlInfo.title}
            </span>
            <div className="flex items-center justify-end gap-1.5 text-xs font-bold text-slate-700">
              <span className="font-mono text-[10px]">Lvl {lvlInfo.level} • {totalXp} XP</span>
            </div>
            {/* Visual Progress Line */}
            <div className="w-32 bg-slate-100 h-1.5 rounded-full overflow-hidden border border-slate-200">
              <div 
                className="h-full bg-linear-to-r from-[#CC1111] to-[#E11D48] rounded-full transition-all duration-300"
                style={{ width: `${lvlInfo.progress}%` }}
              />
            </div>
          </div>

          {/* Balance Widget */}
          <div className="relative flex-1 sm:flex-initial">
            <div className="flex items-center justify-between sm:justify-start gap-3 pl-4 pr-4 py-2 bg-[#F8FAFC] hover:bg-neutral-100/30 border border-[#E2E8F0] rounded-xl transition-all duration-200 min-w-0">
              <span className="text-xs font-black text-[#475569] uppercase tracking-wider shrink-0">
                Баланс:
              </span>
              <div className="flex items-baseline gap-1.5 min-w-[100px] justify-end sm:justify-start">
                <span className="font-black text-[#CC1111] text-lg tabular-nums tracking-tight">
                  <AnimatedNumber value={balance} />
                </span>
                <span className="text-[10px] font-bold text-[#475569] leading-tight shrink-0">
                  призовых баллов "Миллион призов"
                </span>
              </div>

              {/* Floating Points Notification */}
              <AnimatePresence>
                {floatingPoints && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.8 }}
                    animate={{ opacity: 1, y: -45, scale: 1.1 }}
                    exit={{ opacity: 0, y: -60, scale: 0.9 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute right-4 bottom-full font-bold text-emerald-600 bg-white border border-emerald-100 px-2.5 py-1 rounded-full shadow-md text-xs z-20 flex items-center gap-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    +{floatingPoints} баллов
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Light/Dark Mode Switcher in Desktop Header */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="hidden md:flex items-center justify-center p-2.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-[#F1F5F9] text-slate-500 hover:text-[#CC1111] transition-all cursor-pointer active:scale-95 duration-100 shrink-0 outline-none"
            title={isDark ? "Включить светлую тему" : "Включить темную тему"}
          >
            {isDark ? <Sun size={16} className="text-amber-500" /> : <Moon size={16} className="text-slate-600" />}
          </button>
          
          {/* User profile from Mos.ID - CLickable with Dropdown menu (Audit #8) */}
          <div className="relative">
            <button 
              onClick={() => setProfileOpen(!profileOpen)}
              className={cn(
                "flex items-center gap-2.5 pl-3 pr-4 py-2 bg-[#F8FAFC] rounded-xl border transition-all cursor-pointer select-none outline-none",
                profileOpen ? "border-[#CC1111] bg-[#CC1111]/5" : "border-[#E2E8F0] hover:bg-[#F1F5F9]"
              )}
            >
              <div className="bg-[#CC1111] text-white p-2 rounded-lg relative">
                <User size={15} className="stroke-[2.5px] text-white" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-white" />
              </div>
              <div className="flex flex-col items-start leading-none text-left">
                <span className="text-xs font-black text-[#0F172A]">Алексей М.</span>
                <span className="text-[9px] font-bold text-[#CC1111] uppercase tracking-wider mt-1 flex items-center gap-0.5">
                  <ShieldCheck size={10} className="text-emerald-500 shrink-0" />
                  Мой профиль
                </span>
              </div>
            </button>

            {/* Profile drop Menu layout */}
            <AnimatePresence>
              {profileOpen && (
                <>
                  <div className="fixed inset-0 z-40 cursor-default" onClick={() => setProfileOpen(false)} />
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-72 bg-white border border-[#E2E8F0] shadow-lg rounded-2xl p-4 z-50 flex flex-col gap-3.5"
                  >
                    <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#CC1111] to-[#E11D48] text-white font-extrabold flex items-center justify-center text-sm shadow-sm select-none">
                        АМ
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold text-[#0F172A] leading-snug">Алексей Морозов</h4>
                        <span className="text-[9px] bg-emerald-50 text-emerald-800 font-extrabold border border-emerald-200 uppercase tracking-wider px-2 py-0.5 rounded leading-none block w-max mt-1">
                          Mos.ID подтвержден
                        </span>
                      </div>
                    </div>

                    {/* Level HUD widget inside dropdown */}
                    <div className="bg-slate-50 border border-slate-150 rounded-xl p-3 flex flex-col gap-2">
                      <div className="flex justify-between items-center text-xs font-black leading-none">
                        <span className="text-slate-500 uppercase text-[9px]">Текущий Уровень:</span>
                        <span className="text-[#CC1111]">Lvl {lvlInfo.level}</span>
                      </div>
                      <span className="text-sm font-black text-[#0F172A] leading-none mb-1">
                        {lvlInfo.title}
                      </span>
                      
                      {/* Mini Bar */}
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-linear-to-r from-[#CC1111] to-[#10B981] rounded-full"
                          style={{ width: `${lvlInfo.progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-[9px] text-[#64748B] font-extrabold font-mono mt-0.5 leading-none">
                        <span>{lvlInfo.min} XP</span>
                        <span>{totalXp} / {lvlInfo.nextLevelXp} XP</span>
                      </div>
                    </div>

                    {/* Statistics Checklist metrics */}
                    <div className="space-y-2 text-xs font-bold text-slate-700">
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-50">
                        <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                          <Trophy size={13} className="text-[#CC1111]" />
                          Полученные баллы:
                        </span>
                        <span className="font-mono text-[#0F172A]">{balance} Б</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-1.5 border-b border-slate-50">
                        <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                          <BookOpen size={13} className="text-[#CC1111]" />
                          Решенные квизы:
                        </span>
                        <span className="font-mono text-[#0F172A]">{solvedCount} из 5</span>
                      </div>

                      <div className="flex justify-between items-center py-1.5">
                        <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                          <Layers size={13} className="text-[#CC1111]" />
                          Уровень доступа:
                        </span>
                        <span className="text-emerald-600 font-black">Максимальный</span>
                      </div>
                    </div>

                    <div className="text-[10px] text-slate-400 font-semibold text-center leading-relaxed">
                      Авторизация выполнена в защищенной игровой зоне бюджета Москвы.
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

          </div>
        </div>
      </header>

      {/* MOBILE COMPACT HEADER */}
      <header className="flex md:hidden items-center justify-between h-14 px-3.5 bg-white rounded-xl border border-[#E2E8F0] shadow-xs w-full relative z-20 select-none">
        
        {/* Left aspect: Only icon logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-[#CC1111] w-8.5 h-8.5 rounded-xl text-white shadow-sm shrink-0">
            <LandPlot size={17} className="stroke-[2.5px]" />
          </div>
          <span className="text-xs font-black text-[#0F172A] tracking-tight">Открытый бюджет</span>
        </div>

        {/* Right aspect: Balance and profile info */}
        <div className="flex items-center gap-2 min-w-0">
          
          {/* Balance element */}
          <div className="relative flex items-center gap-1 px-2 py-1.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-emerald-700 min-w-0">
            <div className="w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center text-[10px] text-white font-extrabold shadow-sm shrink-0">
              ₽
            </div>
            <span className="font-extrabold text-[#CC1111] text-xs font-mono tracking-tight leading-none">
              <AnimatedNumber value={balance} />
            </span>
            <span className="text-[9px] font-black text-[#475569] leading-none shrink-0">Б</span>

            {/* Floating points */}
            <AnimatePresence>
              {floatingPoints && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: -28, scale: 1.05 }}
                  exit={{ opacity: 0, y: -40, scale: 0.95 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute right-0 bottom-full font-bold text-emerald-600 bg-white border border-emerald-100 px-1.5 py-0.5 rounded-full shadow-md text-[9px] z-50 whitespace-nowrap"
                >
                  +{floatingPoints} Б
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Compact Theme Switcher in Mobile Header */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-1.5 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] text-slate-500 hover:text-[#CC1111] active:scale-90 transition-all cursor-pointer shrink-0 outline-none"
            title={isDark ? "Светлая тема" : "Темная тема"}
          >
            {isDark ? <Sun size={12} className="text-amber-500" /> : <Moon size={12} className="text-slate-600" />}
          </button>

          {/* Aleksey User block copy */}
          <div className="flex items-center gap-1.5 pl-1.5 pr-2 py-1.5 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] min-w-0 shrink-0">
            <div className="bg-[#CC1111]/10 text-[#CC1111] p-1 rounded-md shrink-0">
              <User size={11} className="stroke-[2.5px]" />
            </div>
            <span className="text-[10px] font-extrabold text-[#0F172A] leading-none truncate max-w-[45px]">Алексей</span>
          </div>

        </div>
      </header>

      {/* MOBILE XP WIDGET BAR - UNDER MAIN SHAPKA (Audit #8: Level 1 • Налоговый новичок • 100/150 XP progress bar) */}
      <div className="flex md:hidden flex-col gap-1 px-3.5 py-2 bg-gradient-to-r from-slate-900 to-[#1E293B] rounded-xl border border-white/5 text-white shadow-xs select-none">
        <div className="flex items-center justify-between text-[10px] font-black tracking-tight leading-none">
          <span className="text-amber-400 font-black">Lvl {lvlInfo.level} • {lvlInfo.title}</span>
          <span className="text-slate-400 font-mono">{totalXp}/{lvlInfo.nextLevelXp} XP</span>
        </div>
        {/* Progress bar line height 4px */}
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1 border border-slate-700/50">
          <div 
            className="bg-gradient-to-r from-[#CC1111] to-[#E11D48] h-full rounded-full transition-all duration-300"
            style={{ width: `${lvlInfo.progress}%` }}
          />
        </div>
      </div>
    </>
  );
}
