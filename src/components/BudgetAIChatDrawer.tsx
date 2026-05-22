import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, User as UserIcon, Send, X, MessageCircle } from 'lucide-react';
import { cn, safeLocalStorage } from '../lib/utils';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

interface BudgetAIChatDrawerProps {
  activeMobileTab: string;
}

const getAIResponse = (query: string): string => {
  const normalizedQuery = query.toLowerCase().trim();
  
  if (normalizedQuery.includes('викторин') || normalizedQuery.includes('тест') || normalizedQuery.includes('игра') || normalizedQuery.includes('вызов')) {
    return `Отличная идея! Я подготовил интерактивный экспресс-вызов в разделе "Викторины". \n\nПерейдите в среднюю вкладку меню ниже, чтобы запустить квиз прямо сейчас и заработать ценные баллы!`;
  }
  
  if (normalizedQuery.includes('доход') || normalizedQuery.includes('налог') || normalizedQuery.includes('ндфл') || normalizedQuery.includes('прибыль') || normalizedQuery.includes('сбор') || normalizedQuery.includes('вычет') || normalizedQuery.includes('бюджет')) {
    return `Согласно **Закону о бюджете города Москвы на 2026 год**, налоговые доходы составляют фундамент бюджета. Главными источниками выступают **НДФЛ** и **Налог на прибыль организаций** (их сумма превышает **80%** всех налоговых поступлений).\n\nСоциальный лимит вычета по 3-НДФЛ для личного обучения был планово проиндексирован и увеличен до **150 000 рублей**, на обучение детей действует отдельный лимит — 110 тыс. руб.`;
  }
  
  if (normalizedQuery.includes('транспорт') || normalizedQuery.includes('метро') || normalizedQuery.includes('электробус') || normalizedQuery.includes('дорог') || normalizedQuery.includes('мцд') || normalizedQuery.includes('бкл')) {
    return `Программа **«Развитие транспортной системы»** традиционно является наиболее бюджетоемкой госпрограммой Москвы. За счет бюджета в 2026 году продолжается активное развитие передовой инфраструктуры:\n\n1. Строительство новых радиальных веток метро (Троицкая, Рублево-Архангельская линии).\n2. Регулярная опережающая закупка современных низкопольных **электробусов** отечественного бренда.\n3. Финансирование полной интеграции дорожной сети, диаметров МЦД и уникальных речных электротрамвайщиков.`;
  }
  
  if (normalizedQuery.includes('социал') || normalizedQuery.includes('пенси') || normalizedQuery.includes('льгот') || normalizedQuery.includes('выплат') || normalizedQuery.includes('семь') || normalizedQuery.includes('поддержк')) {
    return `Бюджет города Москвы на 2026 год является строго **социально ориентированным**. Более **50%** всех расходов города направлено непосредственно на социальную сферу:\n\n* **Индексация доплат к пенсиям** (городской социальный стандарт) и социальных пособий семей с детьми на уровень выше инфляции.\n* Финансирование льготного и бесплатного проезда для школьников, студентов и пенсионеров.\n* Поддержка программ социальной интеграции, активного долголетия и адресной помощи нуждающимся гражданам.`;
  }
  
  if (normalizedQuery.includes('школ') || normalizedQuery.includes('колледж') || normalizedQuery.includes('детск') || normalizedQuery.includes('образован') || normalizedQuery.includes('мэш')) {
    return `Государственная программа **«Столичное образование»** обеспечивает равные учебные стандарты во всех районах Москвы. Ключевые статьи бюджета 2026 года включают:\n\n* Проект **«Мой Колледж»**: целевое финансирование подготовки ИТ и инженерных кадров.\n* Капитальный ремонт и технологическое оснащение сотен общеобразовательных школ по единому стандарту.\n* Развитие цифровой среды **МЭШ** (Московская электронная школа) и бесплатного горячего питания для младших классов.`;
  }
  
  if (normalizedQuery.includes('больниц') || normalizedQuery.includes('клиник') || normalizedQuery.includes('врач') || normalizedQuery.includes('здоров') || normalizedQuery.includes('медицин') || normalizedQuery.includes('емиас') || normalizedQuery.includes('лекарств')) {
    return `В рамках программы **«Столичное здравоохранение»** Москва переходит на новый стандарт амбулаторной помощи. Расходы бюджета гарантируют:\n\n* Полное льготное обеспечение необходимыми лекарственными препаратами граждан с хроническими заболеваниями.\n* Оснащение медицинских центров передовым диагностическим оборудованием и запуск флагманских скоропомощных корпусов.\n* Масштабирование цифровой системы **ЕМИАС** с использованием интеллектуальных нейросетей-помощников в диагностике.`;
  }
  
  if (normalizedQuery.includes('промышлен') || normalizedQuery.includes('инвест') || normalizedQuery.includes('завод') || normalizedQuery.includes('технополис') || normalizedQuery.includes('субсид') || normalizedQuery.includes('бизнес')) {
    return `Правительство Москвы активно субсидирует промышленность и новые ИТ-производства:\n\n* Особая экономическая зона **«Технополис Москва»** предлагает резидентам снижение налогов (0% на прибыль на 10 лет).\n* Предоставление льготных целевых займов через Московский Фонд развития промышленности.\n* Программа компенсации процентов по кредитам на закупку инновационного оборудования.`;
  }
  
  return `Спасибо за ваш вопрос о бюджете Москвы на 2026 год! Я с радостью помогу вам разобраться.\n\nПоскольку я являюсь профильным консультантом финансового органа, я могу предоставить вам подробные аналитические выкладки по направлениям:\n* 📊 **Доходы и налоги** (НДФЛ, вычеты)\n* 🚇 **Транспортная инфраструктура** (метро, электробусы)\n* 🏥 **Здравоохранение и образование** (школы, ЕМИАС, МЭШ)\n* ⚙️ **Промышленность и субсидии инвестициям**`;
};

export default function BudgetAIChatDrawer({ activeMobileTab }: BudgetAIChatDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>(() => {
    const saved = safeLocalStorage.getItem('mos_ai_drawer_history');
    if (saved) return JSON.parse(saved);
    return [
      {
        id: 'welcome-drawer',
        sender: 'ai',
        text: "Приветствую! Я Бюджетный Ассистент. Рад помочь вам разобраться в Законе о бюджете столицы на 2026 год!\n\nКакой столичный вопрос вас интересует?",
        timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
      }
    ];
  });
  
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat history
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, isTyping]);

  // Persist history
  useEffect(() => {
    safeLocalStorage.setItem('mos_ai_drawer_history', JSON.stringify(chatHistory));
  }, [chatHistory]);

  // Global event listener to open Drawer instantly
  useEffect(() => {
    const handleOpenEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ initialQuery?: string }>;
      setIsOpen(true);
      if (customEvent.detail?.initialQuery) {
        submitQuery(customEvent.detail.initialQuery);
      }
    };
    
    window.addEventListener('open_mos_ai_chat', handleOpenEvent);
    return () => window.removeEventListener('open_mos_ai_chat', handleOpenEvent);
  }, []);

  const submitQuery = (text: string) => {
    if (!text.trim()) return;
    
    // Check if duplicate query is running or already present as a fresh search
    const userMsg: ChatMessage = {
      id: `drawer-msg-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    };
    
    setChatHistory(prev => [...prev, userMsg]);
    setIsTyping(true);
    
    setTimeout(() => {
      const respText = getAIResponse(text);
      const aiMsg: ChatMessage = {
        id: `drawer-msg-${Date.now() + 1}`,
        sender: 'ai',
        text: respText,
        timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
      };
      setChatHistory(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    submitQuery(inputMessage);
    setInputMessage('');
  };

  const clearChat = () => {
    const resetList: ChatMessage[] = [
      {
        id: 'welcome-drawer',
        sender: 'ai',
        text: "Приветствую! Я Бюджетный Ассистент. Рад помочь вам разобраться в Законе о бюджете столицы на 2026 год!\n\nКакой столичный вопрос вас интересует?",
        timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
      }
    ];
    setChatHistory(resetList);
  };

  return (
    <>
      {/* 1. Mobile & Tablet Floating Action Button (FAB) (Audit #10) */}
      {activeMobileTab !== 'quests' && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 md:bottom-6 right-10 md:right-8 z-50 w-12 h-12 bg-[#CC1111] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#A30E0E] transition duration-200 cursor-pointer animate-pulse active:scale-95 border-2 border-white"
          title="Открыть Бюджетного Ассистента"
        >
          <MessageCircle size={20} className="stroke-[2.5px]" />
          <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-25 animate-ping pointer-events-none" />
        </button>
      )}

      {/* 2. Global Overlay Drawer Modal (responsive slider) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop wrapper */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-50"
            />

            {/* Panel slider container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-full sm:max-w-md bg-white shadow-2xl z-50 flex flex-col border-l border-[#E2E8F0]"
            >
              {/* Drawer Header Toolbar */}
              <div className="flex items-center justify-between p-4 border-b border-[#E2E8F0] bg-slate-50">
                <div className="flex items-center gap-2">
                  <div className="bg-[#CC1111]/10 text-[#CC1111] p-1 rounded-lg">
                    <Bot size={18} className="stroke-[2.5px]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-[#0F172A] leading-tight">Бюджетный Ассистент</h3>
                    <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block">Помощник граждан</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={clearChat}
                    className="text-[10px] font-extrabold text-slate-400 hover:text-red-700 bg-slate-100 hover:bg-red-50 hover:border-red-200 border border-slate-200 px-2.5 py-1 rounded-md transition cursor-pointer select-none"
                  >
                    Очистить
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-500 hover:text-slate-800 transition"
                  >
                    <X size={18} className="stroke-[2.5px]" />
                  </button>
                </div>
              </div>

              {/* Chat history list */}
              <div className="flex-1 p-4 overflow-y-auto bg-slate-50/30 space-y-3.5 no-scrollbar">
                
                {/* Audit #10: Quick chips for instant questions */}
                {chatHistory.length <= 1 && (
                  <div className="p-3 bg-white rounded-xl border border-slate-100 space-y-2">
                    <p className="text-[10px] uppercase tracking-wider font-extrabold text-[#CC1111]">Частые вопросы о бюджете:</p>
                    <div className="flex flex-col gap-1.5">
                      {[
                        { label: 'Каков бюджет Москвы?', query: 'Каков бюджет Москвы?' },
                        { label: 'Как получить налоговый вычет?', query: 'Как получить налоговый вычет?' },
                        { label: 'Сколько тратится на транспорт?', query: 'Сколько тратится на транспорт?' }
                      ].map((chip, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => submitQuery(chip.query)}
                          className="text-left text-xs text-[#0F172A] hover:text-[#CC1111] bg-slate-50 hover:bg-red-50/50 border border-slate-200/50 px-3 py-2 rounded-lg transition font-extrabold cursor-pointer select-none active:scale-98"
                        >
                          💡 {chip.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {chatHistory.map((msg) => {
                  const isAI = msg.sender === 'ai';
                  return (
                    <div
                      key={msg.id}
                      className={cn(
                        "flex gap-2 max-w-[85%]",
                        isAI ? "self-start" : "self-end flex-row-reverse ml-auto"
                      )}
                    >
                      <div
                        className={cn(
                          "w-6 h-6 rounded-md shrink-0 flex items-center justify-center text-[10px] select-none",
                          isAI ? "bg-[#0F172A] text-white" : "bg-red-100 text-[#CC1111] border border-red-200"
                        )}
                      >
                        {isAI ? <Bot size={11} /> : <UserIcon size={11} />}
                      </div>

                      <div className="space-y-0.5">
                        <div
                          className={cn(
                            "p-3 rounded-xl text-xs font-semibold leading-relaxed border shadow-xxs break-words",
                            isAI
                              ? "bg-[#0F172A] text-white border-neutral-800 rounded-tl-none whitespace-pre-wrap animate-pop"
                              : "bg-white text-slate-800 border-slate-200 rounded-tr-none animate-pop"
                          )}
                        >
                          {msg.text.split('\n').map((line, lIdx) => (
                            <p key={lIdx} className={cn(lIdx > 0 ? "mt-1.5" : "")}>
                              {line.split('**').map((part, pIdx) => {
                                const isBold = pIdx % 2 === 1;
                                return isBold ? <strong key={pIdx} className="text-amber-400 font-extrabold">{part}</strong> : part;
                              })}
                            </p>
                          ))}
                        </div>
                        <span className="text-[8px] font-mono text-slate-450 block text-right pr-1">
                          {msg.timestamp}
                        </span>
                      </div>
                    </div>
                  );
                })}

                {isTyping && (
                  <div className="flex gap-2 max-w-[75%] self-start animate-pulse">
                    <div className="w-6 h-6 rounded-md bg-[#0F172A] text-white flex items-center justify-center text-xs shrink-0 select-none">
                      <Bot size={11} />
                    </div>
                    <div className="bg-[#0F172A] text-white border border-neutral-800 p-3 rounded-xl rounded-tl-none font-bold text-xs flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Simple Input form controls */}
              <div className="p-3 border-t border-[#E2E8F0] bg-white">
                <form onSubmit={handleSendMessage} className="flex gap-1.5">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Напишите вопрос о метро, НДФЛ, школах..."
                    className="flex-1 text-xs font-semibold px-3 py-2.5 border border-slate-200 hover:border-slate-300 focus:border-[#CC1111]/75 rounded-xl outline-none min-w-0"
                  />
                  <button
                    type="submit"
                    disabled={!inputMessage.trim()}
                    className={cn(
                      "px-3.5 rounded-xl shadow-xs transition duration-150 flex items-center justify-center cursor-pointer select-none shrink-0",
                      inputMessage.trim()
                        ? "bg-[#CC1111] text-white hover:bg-[#A30E0E]"
                        : "bg-slate-100 text-slate-300 pointer-events-none"
                    )}
                  >
                    <Send size={13} />
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
