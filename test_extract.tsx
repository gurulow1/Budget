<script type="text/babel">
        // Embed crisp high-fidelity custom SVG icons
        const SVGIcons = {
            LandPlot: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m2 10 10-6 10 6-10 6-10-6Z"/><path d="m2 14 10 6 10-6"/><path d="m2 18 10 6 10-6"/></svg>
            ),
            User: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            ),
            ShieldCheck: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            ),
            GraduationCap: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
            ),
            Briefcase: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            ),
            Rocket: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4.5a2.17 2.17 0 0 1 3 .08"/><path d="M12 15v5s3.03-.55 4.5-2a2.17 2.17 0 0 0-.08-3"/></svg>
            ),
            Users: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            ),
            Info: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            ),
            Lightbulb: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A7 7 0 0 0 4 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
            ),
            Calculator: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><line x1="12" y1="18" x2="16" y2="18"/><line x1="12" y1="14" x2="16" y2="14"/><line x1="16" y1="10" x2="16" y2="10"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="8" y1="10" x2="8" y2="10"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="8" y1="18" x2="8" y2="18"/><line x1="8" y1="6" x2="16" y2="6"/></svg>
            ),
            Sparkles: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            ),
            AlertCircle: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            ),
            Target: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            ),
            PieChart: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
            ),
            Award: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/></svg>
            ),
            Globe: () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            )
        };

        const { useState, useEffect } = React;

        const PERSON_INFOS = {
            Student: {
                label: 'Студент',
                description: 'Доступные льготы на обучение, спорт, льготный проезд и стипендиальные программы.',
                suggestion: 'Рекомендуется: «Налоговый вычет за обучение в вузе и абонемент в фитнес-клуб».'
            },
            Professional: {
                label: 'Молодой специалист',
                description: 'Субсидии на приобретение жилья, повышение квалификации и налоговые льготы 3-НДФЛ.',
                suggestion: 'Рекомендуется: «Вычет за профессиональное обучение, ДМС и спортивные секции».'
            },
            Entrepreneur: {
                label: 'Предприниматель',
                description: 'Гранты Правительства Москвы для малого бизнеса, компенсации процентов по кредитам и льготная аренда.',
                suggestion: 'Рекомендуется: «Калькулятор налоговых каникул и расчет субсидий на оборудование».'
            },
            Family: {
                label: 'Семья с детьми',
                description: 'Материнский капитал, бесплатное питание в школах, компенсация детского сада и семейные программы.',
                suggestion: 'Рекомендуется: «Вычет за обучение детей, кружки, спортивные секции и летние лагеря».'
            }
        };

        // Static Dataset for Quizzes (fixing spelling errors & details)
        const quizzesData = [
            {
                id: "quiz-1",
                title: "Доходы бюджета Москвы",
                reward: 100,
                topic: "Налоговые источники, НДФЛ и корпоративные поступления",
                difficulty: "Легкий",
                questions: [
                    {
                        question: "Какой налог формирует наибольшую часть налоговых доходов бюджета города Москвы?",
                        options: ["Налог на прибыль организаций", "Налог на имущество физических лиц", "Транспортный налог"],
                        correct: 0,
                        explanation: "Налог на прибыль организаций и НДФЛ являются главными китами доходной части бюджета столицы."
                    },
                    {
                        question: "Куда зачисляется налог на профессиональный доход (самозанятые) в Москве?",
                        options: ["100% в федеральный бюджет", "100% в бюджет города Москвы", "60% в бюджет Москвы, 40% в ФОМС"],
                        correct: 2,
                        explanation: "Согласно Бюджетному кодексу РФ (ст. 56 и 146), 60% идет в субъект (Москва), а 40% направляется на обязательное медицинское страхование в ФОМС."
                    },
                    {
                        question: "Является ли торговый сбор в Москве региональным или местным налогом по кодексу?",
                        options: ["Региональным", "Местным (но в городах федерального значения регулируется законами субъекта и идет в его бюджет)", "Федеральным"],
                        correct: 1,
                        explanation: "Торговый сбор относится к местным сборам, но в городах федерального значения (Москва, СПб, Севастополь) он регулируется законами этих субъектов и зачисляется в их бюджет."
                    }
                ]
            },
            {
                id: "quiz-2",
                title: "Расходы на промышленность и субсидии",
                reward: 120,
                topic: "ГРБС, Фонды развития и промышленное импортозамещение",
                difficulty: "Средний",
                questions: [
                    {
                        question: "Какая ключевая цель предоставления субсидий промышленным организациям из бюджета Москвы?",
                        options: ["Возмещение затрат на покупку оборудования и импортозамещение", "Оплата рекламных кампаний за рубежом", "Покрытие штрафов предприятий"],
                        correct: 0,
                        explanation: "Субсидии Москвы направлены на модернизацию производств, компенсацию процентов по кредитам на оборудование и развитие инжиниринга."
                    },
                    {
                        question: "Что такое ГРБС в контексте распределения промышленных субсидий?",
                        options: ["Государственный реестр банковских счетов", "Главный распорядитель бюджетных средств", "Городской совет по бюджетным спорам"],
                        correct: 1,
                        explanation: "ГРБС (например, Департамент инвестиционной и промышленной политики) распределяет лимиты бюджетных обязательств до конечных получателей."
                    },
                    {
                        question: "В какой форме чаще всего предоставляется финансовая поддержка ИТ-промышленности Москвы?",
                        options: ["Прямой выкуп акций", "Гранты Мэра и льготные займы под пониженный % через Фонд развития промышленности", "Выдача наличных денег"],
                        correct: 1,
                        explanation: "Московский Фонд развития промышленности предоставляет целевые займы по ставкам значительно ниже банковских."
                    }
                ]
            },
            {
                id: "quiz-3",
                title: "Налоговые вычеты и НДФЛ 2026",
                reward: 100,
                topic: "Индексация социальных вычетов, лимиты и правила возврата",
                difficulty: "Сложный",
                questions: [
                    {
                        question: "Каков совокупный лимит для социальных налоговых вычетов (обучение, спорт, медицина) введен в действие?",
                        options: ["120 000 рублей", "150 000 рублей", "250 000 рублей"],
                        correct: 1,
                        explanation: "В рамках обновленного законодательства лимит увеличен со 120 тыс. до 150 тыс. рублей в год."
                    },
                    {
                        question: "Какую максимальную сумму чистыми можно вернуть за год за свое обучение при ставке НДФЛ 13%?",
                        options: ["15 600 рублей", "19 500 рублей", "50 000 рублей"],
                        correct: 1,
                        explanation: "13% от максимального лимита в 150 000 рублей составляет ровно 19 500 рублей."
                    },
                    {
                        question: "В течение какого срока после окончания года можно подать декларацию 3-НДФЛ на вычет?",
                        options: ["В течение 6 месяцев", "В течение 3 лет", "Только до 30 апреля следующего года"],
                        correct: 1,
                        explanation: "Налогоплательщик имеет право вернуть излишне уплаченный налог в течение 3 лет с момента понесенных расходов."
                    }
                ]
            }
        ];

        const App = () => {
            // General persisted states
            const [balance, setBalance] = useState(() => {
                const saved = localStorage.getItem('mos_game_balance_v3');
                return saved ? parseInt(saved, 10) : 0;
            });

            const [completedActivities, setCompletedActivities] = useState(() => {
                const saved = localStorage.getItem('mos_completed_activities_v3');
                return saved ? JSON.parse(saved) : [];
            });

            const [persona, setPersona] = useState(() => {
                const saved = localStorage.getItem('mos_active_persona_v3');
                return (saved || 'Student');
            });

            // Mobile Tabs navigation controller: 'calc', 'quests', 'analytics'
            const [activeMobileTab, setActiveMobileTab] = useState('calc');

            // Sub-tabs controllers inside Quests: 'quizzes', 'minigames', 'specials'
            const [activeQuestTab, setActiveQuestTab] = useState('quizzes');
            const [localToast, setLocalToast] = useState(null);

            // Set states in sync
            useEffect(() => {
                localStorage.setItem('mos_game_balance_v3', balance.toString());
            }, [balance]);

            useEffect(() => {
                localStorage.setItem('mos_completed_activities_v3', JSON.stringify(completedActivities));
            }, [completedActivities]);

            useEffect(() => {
                localStorage.setItem('mos_active_persona_v3', persona);
            }, [persona]);

            const showToast = (text, pts) => {
                setLocalToast({ text, pts });
                setTimeout(() => setLocalToast(null), 3000);
            };

            const triggerComplete = (id, pts, text) => {
                if (!completedActivities.includes(id)) {
                    setCompletedActivities(prev => [...prev, id]);
                    setBalance(prev => prev + pts);
                    showToast(text, pts);
                }
            };

            // Tax Calculator States
            const [calcEdu, setCalcEdu] = useState(45000);
            const [calcSport, setCalcSport] = useState(15000);
            const [calcResult, setCalcResult] = useState(null);

            // Sync slider defaults when persona undergoes changes (as in React App)
            useEffect(() => {
                if (persona === 'Student') {
                    setCalcEdu(45000);
                    setCalcSport(15000);
                } else if (persona === 'Professional') {
                    setCalcEdu(80000);
                    setCalcSport(40000);
                } else if (persona === 'Entrepreneur') {
                    setCalcEdu(110000);
                    setCalcSport(50000);
                } else if (persona === 'Family') {
                    setCalcEdu(130000);
                    setCalcSport(60000);
                }
                setCalcResult(null);
            }, [persona]);

            const handleCalculateTax = () => {
                const total = calcEdu + calcSport;
                const base = Math.min(total, 150000);
                setCalcResult(Math.round(base * 0.13));
                triggerComplete('calculator-task', 100, "Использован калькулятор вычетов 3-НДФЛ!");
            };

            // Quiz States
            const [activeQuiz, setActiveQuiz] = useState(null);
            const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
            const [selectedOption, setSelectedOption] = useState(null);
            const [quizScore, setQuizScore] = useState(0);

            // Games States
            const [activeGameId, setActiveGameId] = useState(null);

            // Game 1: Budget Balancer (Requires Social system >= 50% for standard of living)
            const [g1Ind, setG1Ind] = useState(15);
            const [g1Soc, setG1Soc] = useState(50);
            const [g1Tra, setG1Tra] = useState(35);
            const g1Total = g1Ind + g1Soc + g1Tra;

            // Game 2: Auditor
            const [g2Card, setG2Card] = useState(null);

            // Game 3: Strategist
            const [g3Res, setG3Res] = useState(null);

            // Game 4: Clicker
            const [g4List, setG4List] = useState([]);
            const g4Sum = g4List.reduce((acc, v) => acc + v, 0);
            const g4Clamped = Math.min(g4Sum, 150000);
            const g4Refund = Math.round(g4Clamped * 0.13);

            // Game 5: KPI Switches
            const [g5Sw1, setG5Sw1] = useState(false);
            const [g5Sw2, setG5Sw2] = useState(false);
            const [g5Sw3, setG5Sw3] = useState(false);

            // Specials progress
            const [s1Name, setS1Name] = useState('');
            const [s1Age, setS1Age] = useState('');
            const [s2Input, setS2Input] = useState(90000);

            const resetGamesInternal = () => {
                setActiveGameId(null);
                setG1Ind(15);
                setG1Soc(50);
                setG1Tra(35);
                setG2Card(null);
                setG3Res(null);
                setG4List([]);
                setG5Sw1(false);
                setG5Sw2(false);
                setG5Sw3(false);
                setS1Name('');
                setS1Age('');
                setS2Input(90000);
            };

            // Analytics chart segment data details (same as AnalyticsChart.tsx)
            const analyticsData = [
                { name: 'Образование', value: 32, color: '#2563EB' },      // Strong Corporate Blue
                { name: 'Транспортная система', value: 28, color: '#312E81' }, // Deep Midnight Indigo
                { name: 'Здравоохранение', value: 20, color: '#CC1111' },   // Moscow Government Red
                { name: 'Социальная поддержка', value: 15, color: '#10B981' }, // Pure Emerald Green
                { name: 'ЖКХ и благоустройство', value: 5, color: '#F59E0B' }, // Solid Amber
            ];

            // Pure SVG circular chart coordinate calculator
            let accumulated = 0;
            const svgSlices = analyticsData.map((item) => {
                const offset = 100 - accumulated;
                accumulated += item.value;
                return {
                    ...item,
                    dashArray: `${item.value} ${100 - item.value}`,
                    offset: offset
                };
            });

            return (
                <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-between pb-20 md:pb-0" id="standalone_container">
                    
                    {/* Floating Toast Notification */}
                    {localToast && (
                        <div className="fixed bottom-20 md:bottom-6 right-6 bg-slate-900 border border-slate-700 text-white p-4 rounded-2xl shadow-xl z-50 flex items-center justify-between w-80 sm:w-96 animate-slide-up">
                            <div className="flex items-center gap-3">
                                <div className="text-2xl">🎖️</div>
                                <div>
                                    <div className="text-[9px] font-extrabold text-[#CC1111] uppercase tracking-wider">Награда получена!</div>
                                    <div className="text-xs font-bold mt-0.5 leading-snug">{localToast.text}</div>
                                </div>
                            </div>
                            <div className="bg-emerald-600 px-2 py-1 rounded text-xs font-bold shrink-0 font-mono">+{localToast.pts} Б</div>
                        </div>
                    )}

                    {/* Official Banner Header */}
                    <header className="bg-white border-b border-[#E2E8F0] px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center shrink-0 shadow-xs gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#CC1111] text-white flex items-center justify-center shadow-md">
                                <SVGIcons.Globe />
                            </div>
                            <div>
                                <div className="flex flex-wrap items-baseline gap-1.5">
                                    <h1 className="text-sm sm:text-base font-extrabold text-[#0F172A] tracking-tight">Открытый бюджет города Москвы</h1>
                                    <span className="text-neutral-300 font-normal hidden sm:inline">//</span>
                                    <span className="text-[#CC1111] font-extrabold text-xs sm:text-sm">Игровые сервисы</span>
                                </div>
                                <span className="text-[10px] text-[#475569] font-bold tracking-wider block mt-0.5 uppercase">Официальный игровой и образовательный портал</span>
                            </div>
                        </div>

                        {/* Balance counter widget with reset option */}
                        <div className="flex items-center gap-3.5 w-full sm:w-auto justify-between sm:justify-start">
                            <div className="flex items-center gap-2.5 pl-3 pr-4 py-1.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex-1 sm:flex-none">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                <div className="text-left">
                                    <div className="text-[8px] uppercase font-bold tracking-widest text-[#475569] leading-none">Баланс «Миллион призов»:</div>
                                    <div className="font-extrabold text-sm text-[#CC1111] font-mono leading-none mt-1">{balance} баллов</div>
                                </div>
                            </div>

                            <button 
                                onClick={() => {
                                    if(confirm("Сбросить весь игровой прогресс, сбросить зафиксированные расходы калькулятора и заработанные очки?")) {
                                        setBalance(0);
                                        setCompletedActivities([]);
                                        setActiveQuiz(null);
                                        setActiveGameId(null);
                                        setCalcResult(null);
                                        setPersona('Student');
                                        resetGamesInternal();
                                        showToast("Прогресс обнулен", 0);
                                    }
                                }}
                                className="text-xs font-bold text-slate-500 hover:text-[#CC1111] bg-slate-100 hover:bg-slate-200/50 px-3 py-2 rounded-lg transition"
                            >
                                🔄 Сбросить
                            </button>
                        </div>
                    </header>

                    {/* DESKTOP SIDE-BY-SIDE GRID LAYOUT (visible on md and above) */}
                    <div className="hidden md:block max-w-7xl w-full mx-auto p-6 sm:p-8 space-y-6">
                        
                        {/* Selector Segment */}
                        <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs">
                            <div className="flex flex-col gap-4">
                                <div>
                                    <span className="text-[10px] font-bold text-[#CC1111] uppercase tracking-wider block mb-0.5">Персонализированный бюджет</span>
                                    <h2 className="text-lg font-bold text-[#0F172A] tracking-tight">Финансовый чекап профиля</h2>
                                    <p className="text-[#475569] text-xs">Выберите ваш статус, чтобы адаптировать расчеты, аналитику и игровые задания.</p>
                                </div>
                                
                                <div className="border-b border-[#E2E8F0] flex gap-2">
                                    {Object.keys(PERSON_INFOS).map((pKey) => {
                                        const pInfo = PERSON_INFOS[pKey];
                                        const isActive = persona === pKey;
                                        return (
                                            <button
                                                key={pKey}
                                                onClick={() => setPersona(pKey)}
                                                className={`px-4 py-2 text-xs font-bold border-b-2 transition-all duration-150 flex items-center gap-2 ${
                                                    isActive ? 'border-[#CC1111] text-[#CC1111]' : 'border-transparent text-slate-500 hover:text-slate-800'
                                                }`}
                                            >
                                                {pKey === 'Student' && <SVGIcons.GraduationCap />}
                                                {pKey === 'Professional' && <SVGIcons.Rocket />}
                                                {pKey === 'Entrepreneur' && <SVGIcons.Briefcase />}
                                                {pKey === 'Family' && <SVGIcons.Users />}
                                                <span>{pInfo.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>

                                <div className="bg-[#F8FAFC] rounded-xl p-3 border border-slate-150 flex items-start gap-3">
                                    <div className="bg-white p-2 rounded border mt-0.5"><SVGIcons.Info /></div>
                                    <div className="text-xs">
                                        <div className="font-extrabold text-[#0F172A] uppercase tracking-wide text-[9px]">Описание льготного профиля</div>
                                        <p className="font-medium text-slate-700 mt-0.5 leading-relaxed">{PERSON_INFOS[persona].description}</p>
                                        <p className="font-medium text-[#CC1111] mt-1 italic">{PERSON_INFOS[persona].suggestion}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sliders and Games Grid */}
                        <div className="grid grid-cols-12 gap-6 items-stretch">
                            
                            {/* Tax Calculator Card */}
                            <div className="col-span-12 xl:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="bg-[#F8FAFC] text-[#CC1111] p-2.5 rounded-xl border border-[#E2E8F0]">
                                            <SVGIcons.Calculator />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold text-[#CC1111] uppercase tracking-wider block">калькулятор социальных выплат</span>
                                            <h2 className="text-lg font-bold text-[#0F172A] tracking-tight">Калькулятор 3-НДФЛ на обучение и спорт</h2>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs font-semibold">
                                                <span>{persona === 'Entrepreneur' ? "Расходы на обучение персонала (в год)" : "Стоимость обучения в год (Вуз, курсы, лекции)"}</span>
                                                <span className="font-mono text-slate-800 font-bold">{calcEdu.toLocaleString('ru-RU')} ₽</span>
                                            </div>
                                            <input 
                                                type="range" min="0" max="300000" step="5000" value={calcEdu}
                                                onChange={(e) => { setCalcEdu(Number(e.target.value)); setCalcResult(null); }}
                                                className="w-full accent-[#CC1111]"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs font-semibold">
                                                <span>{persona === 'Entrepreneur' ? "Расходы на спорт сотрудников (в год)" : "Расходы на спорт и фитнес (абонементы, секции)"}</span>
                                                <span className="font-mono text-slate-800 font-bold">{calcSport.toLocaleString('ru-RU')} ₽</span>
                                            </div>
                                            <input 
                                                type="range" min="0" max="200000" step="5000" value={calcSport}
                                                onChange={(e) => { setCalcSport(Number(e.target.value)); setCalcResult(null); }}
                                                className="w-full accent-[#CC1111]"
                                            />
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 mt-5 flex gap-2.5">
                                        <SVGIcons.Info />
                                        <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                                            Согласно НК РФ общее ограничение по совокупной сумме социальных вычетов составляет <strong className="text-slate-800">150 000 ₽</strong> в год (для собственного обучения). На обучение детей действует отдельный лимит <strong className="text-slate-900">110 000 ₽</strong>. Вы получаете возврат <strong className="text-slate-900">13%</strong> от расходов.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 flex gap-4 items-center justify-between border-t border-slate-100 pt-4">
                                    <button 
                                        onClick={handleCalculateTax}
                                        className="px-5 py-2.5 bg-[#CC1111] hover:bg-[#A30E0E] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition self-stretch sm:self-auto"
                                    >
                                        Рассчитать вычет
                                    </button>

                                    {calcResult !== null && (
                                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2 flex items-center justify-between gap-3 self-stretch sm:self-auto">
                                            <div className="text-left">
                                                <span className="text-[9px] uppercase font-bold text-emerald-800 block leading-none">Возврат на карту:</span>
                                                <span className="font-mono text-base font-extrabold text-emerald-700">{calcResult.toLocaleString('ru-RU')} ₽</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Game & Educational Center Dashboard */}
                            <div className="col-span-12 xl:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] flex flex-col justify-between" id="gamer_container_block">
                                
                                <div className="flex justify-between items-center border-b pb-4 mb-4">
                                    <div className="flex items-center gap-2">
                                        <SVGIcons.Target />
                                        <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">Игровая платформа Открытого бюджета</h3>
                                    </div>

                                    <div className="flex p-0.5 bg-slate-100 rounded-lg">
                                        {['quizzes', 'minigames', 'specials'].map((section) => (
                                            <button
                                                key={section}
                                                onClick={() => {
                                                    setActiveQuestTab(section);
                                                    setActiveQuiz(null);
                                                    setActiveGameId(null);
                                                }}
                                                className={`px-3 py-1 text-[11px] font-bold rounded-md transition-all ${activeQuestTab === section ? 'bg-white text-[#CC1111] shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                                            >
                                                {section === 'quizzes' && "Викторины"}
                                                {section === 'minigames' && "Мини-игры"}
                                                {section === 'specials' && "Спецпроекты"}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex-1">
                                    {/* Sub-tab 1: QUIZZES */}
                                    {activeQuestTab === 'quizzes' && renderQuizTabContent(activeQuiz, quizzesData, completedActivities, setActiveQuiz, currentQuizIdx, setCurrentQuizIdx, selectedOption, setSelectedOption, quizScore, setQuizScore, triggerComplete)}

                                    {/* Sub-tab 2: MINI-GAMES */}
                                    {activeQuestTab === 'minigames' && renderGamesTabContent(activeGameId, setActiveGameId, g1Ind, setG1Ind, g1Soc, setG1Soc, g1Tra, setG1Tra, g1Total, triggerComplete, resetGamesInternal, g2Card, setG2Card, g3Res, setG3Res, g4List, setG4List, g4Sum, g4Clamped, g4Refund, g5Sw1, setG5Sw1, g5Sw2, setG5Sw2, g5Sw3, setG5Sw3)}

                                    {/* Sub-tab 3: SPECIALS */}
                                    {activeQuestTab === 'specials' && renderSpecialsTabContent(completedActivities, s1Name, setS1Name, s1Age, setS1Age, s2Input, setS2Input, triggerComplete)}
                                </div>

                                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <SVGIcons.Award />
                                            <span className="text-[9px] font-bold text-slate-500 uppercase">Прогресс вашего трека</span>
                                        </div>
                                        <p className="text-[11px] text-[#CC1111] font-bold font-mono mt-0.5">{completedActivities.length} из 11 лимитов ({Math.round(completedActivities.length / 11 * 100)}%)</p>
                                    </div>

                                    <div className="w-1/3 bg-slate-100 h-2 rounded-full overflow-hidden border">
                                        <div className="bg-emerald-600 h-full transition-all" style={{ width: `${completedActivities.length / 11 * 100}%` }}></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Analytics Breakdown Seal Block */}
                        {renderAnalyticsSection(analyticsData, svgSlices)}

                    </div>

                    {/* MOBILE TABBED LAYOUT (visible on screens under md) */}
                    <div className="md:hidden flex-1 flex flex-col w-full h-full p-4 overflow-y-auto space-y-4">
                        
                        {activeMobileTab === 'calc' && (
                            <div className="space-y-4 animate-slide-up">
                                {/* Compact Persona Selector */}
                                <div className="bg-white rounded-2xl p-4 border border-[#E2E8F0]">
                                    <span className="text-[9px] font-bold text-[#CC1111] uppercase tracking-wider block mb-1">Профиль чекапа</span>
                                    <div className="grid grid-cols-2 gap-2">
                                        {Object.keys(PERSON_INFOS).map((pKey) => {
                                            const isActive = persona === pKey;
                                            return (
                                                <button
                                                    key={pKey}
                                                    onClick={() => setPersona(pKey)}
                                                    className={`p-2 rounded-xl border text-[11px] font-bold flex flex-col items-center gap-1 text-center transition ${
                                                        isActive ? 'bg-[#CC1111]/5 border-[#CC1111] text-[#CC1111]' : 'bg-slate-50 border-slate-200 text-slate-600'
                                                    }`}
                                                >
                                                    <div className="scale-90">
                                                        {pKey === 'Student' && <SVGIcons.GraduationCap />}
                                                        {pKey === 'Professional' && <SVGIcons.Rocket />}
                                                        {pKey === 'Entrepreneur' && <SVGIcons.Briefcase />}
                                                        {pKey === 'Family' && <SVGIcons.Users />}
                                                    </div>
                                                    <span>{PERSON_INFOS[pKey].label}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                    
                                    <div className="mt-3 bg-[#F8FAFC] border rounded-lg p-2.5 text-[10px] text-slate-600">
                                        <strong>Ваш профиль:</strong> {PERSON_INFOS[persona].description}
                                        <div className="text-[#CC1111] font-semibold mt-1">{PERSON_INFOS[persona].suggestion}</div>
                                    </div>
                                </div>

                                {/* Main Tax Calculator Widget */}
                                <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] space-y-4">
                                    <div className="flex items-center gap-2">
                                        <div className="bg-[#F8FAFC] text-[#CC1111] p-2 rounded-lg border border-[#E2E8F0]">
                                            <SVGIcons.Calculator />
                                        </div>
                                        <div>
                                            <span className="text-[8px] font-bold text-[#CC1111] uppercase tracking-wider block">3-НДФЛ налог</span>
                                            <h2 className="text-xs sm:text-sm font-bold text-[#0F172A]">Обучение и спорт</h2>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="space-y-1">
                                            <div className="flex justify-between text-[11px] font-semibold text-slate-700">
                                                <span>{persona === 'Entrepreneur' ? "Учеба персонала" : "Стоимость учебы (год)"}</span>
                                                <span className="font-mono text-slate-800 font-bold">{calcEdu.toLocaleString('ru-RU')} ₽</span>
                                            </div>
                                            <input type="range" min="0" max="300000" step="5000" value={calcEdu} onChange={(e) => { setCalcEdu(Number(e.target.value)); setCalcResult(null); }} className="w-full accent-[#CC1111]" />
                                        </div>

                                        <div className="space-y-1">
                                            <div className="flex justify-between text-[11px] font-semibold text-slate-700">
                                                <span>{persona === 'Entrepreneur' ? "Спорт сотрудников" : "Затраты на спорт (год)"}</span>
                                                <span className="font-mono text-slate-800 font-bold">{calcSport.toLocaleString('ru-RU')} ₽</span>
                                            </div>
                                            <input type="range" min="0" max="200000" step="5000" value={calcSport} onChange={(e) => { setCalcSport(Number(e.target.value)); setCalcResult(null); }} className="w-full accent-[#CC1111]" />
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-[10px] text-slate-600 leading-normal">
                                        Лимит вычетов составляет <strong className="text-slate-800">150 000 ₽</strong> (для собственного обучения). На детей — 110 000 ₽ на ребенка. Возврат 13% от расходов.
                                    </div>

                                    <div className="flex flex-col gap-2 pt-2">
                                        <button onClick={handleCalculateTax} className="w-full py-2.5 bg-[#CC1111] hover:bg-[#A30E0E] text-white font-bold rounded-xl text-xs uppercase tracking-wider">
                                            Рассчитать вычет
                                        </button>
                                        
                                        {calcResult !== null && (
                                            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2 flex items-center justify-between">
                                                <span className="text-[10px] uppercase font-bold text-emerald-800">Возврат на карту:</span>
                                                <span className="font-mono text-xs font-black text-emerald-700">{calcResult.toLocaleString('ru-RU')} ₽</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeMobileTab === 'quests' && (
                            <div className="bg-white rounded-2xl p-4 border border-[#E2E8F0] space-y-4 animate-slide-up">
                                <div className="flex justify-between items-center border-b pb-3">
                                    <div className="flex items-center gap-1.5">
                                        <SVGIcons.Target />
                                        <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm">Игры и квесты</h3>
                                    </div>
                                    <div className="flex p-0.5 bg-slate-100 rounded-lg scale-90">
                                        {['quizzes', 'minigames', 'specials'].map((section) => (
                                            <button
                                                key={section}
                                                onClick={() => {
                                                    setActiveQuestTab(section);
                                                    setActiveQuiz(null);
                                                    setActiveGameId(null);
                                                }}
                                                className={`px-2 py-1 text-[10px] font-bold rounded-md transition-all ${activeQuestTab === section ? 'bg-white text-[#CC1111] shadow-xs' : 'text-slate-500'}`}
                                            >
                                                {section === 'quizzes' && "Викторины"}
                                                {section === 'minigames' && "Мини-игры"}
                                                {section === 'specials' && "Спецпроекты"}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="min-h-[280px]">
                                    {activeQuestTab === 'quizzes' && renderQuizTabContent(activeQuiz, quizzesData, completedActivities, setActiveQuiz, currentQuizIdx, setCurrentQuizIdx, selectedOption, setSelectedOption, quizScore, setQuizScore, triggerComplete)}
                                    {activeQuestTab === 'minigames' && renderGamesTabContent(activeGameId, setActiveGameId, g1Ind, setG1Ind, g1Soc, setG1Soc, g1Tra, setG1Tra, g1Total, triggerComplete, resetGamesInternal, g2Card, setG2Card, g3Res, setG3Res, g4List, setG4List, g4Sum, g4Clamped, g4Refund, g5Sw1, setG5Sw1, g5Sw2, setG5Sw2, g5Sw3, setG5Sw3)}
                                    {activeQuestTab === 'specials' && renderSpecialsTabContent(completedActivities, s1Name, setS1Name, s1Age, setS1Age, s2Input, setS2Input, triggerComplete)}
                                </div>

                                <div className="pt-3 border-t flex items-center justify-between gap-3 bg-white">
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Ваш прогресс: {completedActivities.length}/11</div>
                                    <div className="w-1/2 bg-slate-100 h-2 rounded-full overflow-hidden border">
                                        <div className="bg-emerald-600 h-full transition-all" style={{ width: `${completedActivities.length / 11 * 100}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeMobileTab === 'analytics' && (
                            <div className="space-y-4 animate-slide-up">
                                {renderAnalyticsSection(analyticsData, svgSlices)}
                            </div>
                        )}

                    </div>

                    {/* STICKY BOTTOM NAVIGATION BAR ON MOBILE (Locked h-16 background, hidden on desktop) */}
                    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E2E8F0] z-50 h-16 flex items-center justify-around px-4 shadow-md">
                        <button 
                            onClick={() => setActiveMobileTab('calc')}
                            className={`flex flex-col items-center justify-center gap-1 flex-1 py-1 transition-all outline-none border-t-2 ${
                                activeMobileTab === 'calc' ? "text-[#CC1111] border-[#CC1111]" : "text-slate-400 border-transparent"
                            }`}
                        >
                            <SVGIcons.Calculator />
                            <span className="text-[9px] font-extrabold uppercase tracking-tight">Калькулятор</span>
                        </button>
                        
                        <button 
                            onClick={() => {
                                setActiveMobileTab('quests');
                                setActiveQuiz(null);
                                setActiveGameId(null);
                            }}
                            className={`flex flex-col items-center justify-center gap-1 flex-1 py-1 transition-all outline-none border-t-2 ${
                                activeMobileTab === 'quests' ? "text-[#CC1111] border-[#CC1111]" : "text-slate-400 border-transparent"
                            }`}
                        >
                            <SVGIcons.Target />
                            <span className="text-[9px] font-extrabold uppercase tracking-tight">Квесты</span>
                        </button>
                        
                        <button 
                            onClick={() => setActiveMobileTab('analytics')}
                            className={`flex flex-col items-center justify-center gap-1 flex-1 py-1 transition-all outline-none border-t-2 ${
                                activeMobileTab === 'analytics' ? "text-[#CC1111] border-[#CC1111]" : "text-slate-400 border-transparent"
                            }`}
                        >
                            <SVGIcons.PieChart />
                            <span className="text-[9px] font-extrabold uppercase tracking-tight">Аналитика</span>
                        </button>
                    </div>

                    {/* Official Footer */}
                    <footer className="bg-white border-t border-[#E2E8F0] py-5 px-4 text-center text-[10px] font-semibold text-[#475569] flex flex-col sm:flex-row items-center justify-between gap-3 mt-12 shadow-sm shrink-0">
                        <span>© 1992–2026 Департамент финансов города Москвы, Официальный портал</span>
                        <div className="flex gap-3">
                            <a href="#rules" className="hover:text-slate-800">Служба ФНС РФ</a>
                            <span>•</span>
                            <a href="#active-citizen" className="text-[#CC1111] font-bold hover:underline">Портал Активный Гражданин</a>
                        </div>
                    </footer>

                </div>
            );
        };

        // RENDER HELPERS DECLARATIONS
        
        function renderQuizTabContent(activeQuiz, quizzesData, completedActivities, setActiveQuiz, currentQuizIdx, setCurrentQuizIdx, selectedOption, setSelectedOption, quizScore, setQuizScore, triggerComplete) {
            if (!activeQuiz) {
                return (
                    <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
                        {quizzesData.map((q) => (
                            <div key={q.id} className="p-3 border border-slate-200 rounded-xl bg-white flex items-center justify-between gap-3">
                                <div>
                                    <h4 className="text-xs font-bold text-slate-900 leading-snug">{q.title}</h4>
                                    <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">{q.topic}</p>
                                    <div className="flex items-center gap-2 mt-1.5">
                                        <span className="text-[9px] font-bold text-[#CC1111] bg-rose-50 border border-rose-100 px-1.5 py-0.5 rounded">+{q.reward} ПТС</span>
                                        {completedActivities.includes(q.id) && (
                                            <span className="text-[9px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded">Пройдено</span>
                                        )}
                                    </div>
                                </div>
                                <button 
                                    onClick={() => {
                                        setActiveQuiz(q);
                                        setCurrentQuizIdx(0);
                                        setSelectedOption(null);
                                        setQuizScore(0);
                                    }}
                                    className="px-3 py-1.5 bg-[#CC1111] hover:bg-[#A30E0E] text-white rounded-lg text-[10px] font-bold shrink-0 transition"
                                >
                                    Старт
                                </button>
                            </div>
                        ))}
                    </div>
                );
            }

            const currentQuestion = activeQuiz.questions[currentQuizIdx];
            return (
                <div className="bg-slate-50 border rounded-xl p-3 sm:p-4 animate-slide-up">
                    <div className="flex justify-between items-center pb-2 mb-2 border-b">
                        <span className="text-[9px] font-bold uppercase text-[#CC1111]">Вопрос {currentQuizIdx+1} из {activeQuiz.questions.length}</span>
                        <span className="text-[10px] font-mono font-bold text-slate-600">Очки: {quizScore}</span>
                    </div>

                    <p className="text-xs font-bold text-slate-800 leading-snug mb-3">
                        {currentQuestion.question}
                    </p>

                    <div className="space-y-1.5">
                        {currentQuestion.options.map((option, oIdx) => {
                            const isCorrect = oIdx === currentQuestion.correct;
                            const isClicked = selectedOption === oIdx;
                            const isAnySelected = selectedOption !== null;

                            return (
                                <button
                                    key={oIdx}
                                    disabled={isAnySelected}
                                    onClick={() => {
                                        setSelectedOption(oIdx);
                                        if (isCorrect) setQuizScore(v => v + 1);
                                    }}
                                    className={`w-full text-left p-2.5 rounded-lg border text-[11px] font-semibold flex items-center justify-between transition ${
                                        !isAnySelected 
                                            ? 'bg-white border-slate-200 hover:bg-neutral-50' 
                                            : isClicked && isCorrect
                                                ? 'bg-emerald-100 border-emerald-400 text-emerald-950'
                                                : isClicked && !isCorrect
                                                    ? 'bg-red-100 border-red-300 text-red-950'
                                                    : isCorrect
                                                        ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                                                        : 'bg-white border-slate-100 opacity-60'
                                    }`}
                                >
                                    <span>{option}</span>
                                </button>
                            );
                        })}
                    </div>

                    {selectedOption !== null && (
                        <div className="mt-3 p-2.5 bg-amber-50 border border-amber-100 rounded-lg text-[10px] text-slate-700 leading-relaxed">
                            <strong className="block text-amber-800 uppercase tracking-widest text-[8px] mb-0.5">Обоснование ФНС:</strong>
                            {currentQuestion.explanation}
                        </div>
                    )}

                    {selectedOption !== null && (
                        <div className="mt-3.5 flex justify-end">
                            <button 
                                onClick={() => {
                                    if (currentQuizIdx + 1 < activeQuiz.questions.length) {
                                        setCurrentQuizIdx(v => v + 1);
                                        setSelectedOption(null);
                                    } else {
                                        const earned = quizScore >= 2 ? activeQuiz.reward : Math.round(activeQuiz.reward / 2);
                                        triggerComplete(activeQuiz.id, earned, `Викторина "${activeQuiz.title}" закончена! Результат: ${quizScore}/3.`);
                                        setActiveQuiz(null);
                                    }
                                }}
                                className="px-3.5 py-1.5 bg-slate-800 text-white font-bold rounded-lg text-xs"
                            >
                                {currentQuizIdx + 1 === activeQuiz.questions.length ? "Завершить" : "Следующий"}
                            </button>
                        </div>
                    )}
                </div>
            );
        }

        function renderGamesTabContent(activeGameId, setActiveGameId, g1Ind, setG1Ind, g1Soc, setG1Soc, g1Tra, setG1Tra, g1Total, triggerComplete, resetGamesInternal, g2Card, setG2Card, g3Res, setG3Res, g4List, setG4List, g4Sum, g4Clamped, g4Refund, g5Sw1, setG5Sw1, g5Sw2, setG5Sw2, g5Sw3, setG5Sw3) {
            if (!activeGameId) {
                return (
                    <div className="space-y-2.5 max-h-[360px] overflow-y-auto">
                        <div className="p-3 border rounded-xl flex items-center justify-between gap-3 bg-white">
                            <div className="flex-1">
                                <h4 className="text-xs font-bold text-slate-900 leading-snug">Балансировщик бюджета (Сумма 100%)</h4>
                                <p className="text-[10px] text-slate-500 leading-normal">Кастомизируйте долю социальной защиты Москвы до 50% и более</p>
                            </div>
                            <button onClick={() => { resetGamesInternal(); setActiveGameId('game-1'); }} className="px-2.5 py-1.5 bg-[#CC1111] hover:bg-[#A30E0E] text-white rounded-lg text-[10px] font-bold uppercase transition">Играть</button>
                        </div>

                        <div className="p-3 border rounded-xl flex items-center justify-between gap-3 bg-white">
                            <div className="flex-1">
                                <h4 className="text-xs font-bold text-slate-900 leading-snug">Финансовый Аудитор (Поиск нецелевого)</h4>
                                <p className="text-[10px] text-slate-500 leading-normal">Найдите ордера нецелевого криптовалютного слива бюджетного фонда</p>
                            </div>
                            <button onClick={() => { resetGamesInternal(); setActiveGameId('game-2'); }} className="px-2.5 py-1.5 bg-[#CC1111] hover:bg-[#A30E0E] text-white rounded-lg text-[10px] font-bold uppercase transition">Аудит</button>
                        </div>

                        <div className="p-3 border rounded-xl flex items-center justify-between gap-3 bg-white">
                            <div className="flex-1">
                                <h4 className="text-xs font-bold text-slate-900 leading-snug">Инвест-Стратег (Выбор Технопарка)</h4>
                                <p className="text-[10px] text-slate-500 leading-normal">Направьте свободные средства бюджета на приоритетную зону инвестиций</p>
                            </div>
                            <button onClick={() => { resetGamesInternal(); setActiveGameId('game-3'); }} className="px-2.5 py-1.5 bg-[#CC1111] hover:bg-[#A30E0E] text-white rounded-lg text-[10px] font-bold uppercase transition">Начать</button>
                        </div>

                        <div className="p-3 border rounded-xl flex items-center justify-between gap-3 bg-white">
                            <div className="flex-1">
                                <h4 className="text-xs font-bold text-slate-900 leading-snug">Вычет-Клик (Сборщик декларации)</h4>
                                <p className="text-[10px] text-slate-500 leading-normal">Добавляйте чеки трат, чтобы перешагнуть предельную планку 150к</p>
                            </div>
                            <button onClick={() => { resetGamesInternal(); setActiveGameId('game-4'); }} className="px-2.5 py-1.5 bg-[#CC1111] hover:bg-[#A30E0E] text-white rounded-lg text-[10px] font-bold uppercase transition">Собрать</button>
                        </div>

                        <div className="p-3 border rounded-xl flex items-center justify-between gap-3 bg-white">
                            <div className="flex-1">
                                <h4 className="text-xs font-bold text-slate-900 leading-snug">Вектор Развития (KPI switches)</h4>
                                <p className="text-[10px] text-slate-500 leading-normal">Синхронизируйте все 3 тумблера субсидирования застройки</p>
                            </div>
                            <button onClick={() => { resetGamesInternal(); setActiveGameId('game-5'); }} className="px-2.5 py-1.5 bg-[#CC1111] hover:bg-[#A30E0E] text-white rounded-lg text-[10px] font-bold uppercase transition">Вектор</button>
                        </div>
                    </div>
                );
            }

            return (
                <div className="bg-slate-50 border p-3.5 sm:p-4 rounded-xl animate-slide-up">
                    
                    {/* GAME 1 */}
                    {activeGameId === 'game-1' && (
                        <div className="space-y-3">
                            <div className="text-[10px] font-extrabold uppercase text-[#CC1111] tracking-wider mb-2">Игра: Балансировщик городского бюджета</div>
                            <p className="text-[11px] font-bold text-slate-600 leading-snug">Социальное поддержка - ключевое звено Москвы, зафиксируйте ее долю не менее 50%, чтобы сумма весов была ровно 100%:</p>
                            
                            <div className="space-y-2 bg-white p-3 rounded-xl border border-slate-200">
                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs font-extrabold">
                                        <span>⚙️ Промышленность и субсидии:</span> <span className="font-mono text-[#CC1111]">{g1Ind}%</span>
                                    </div>
                                    <input type="range" min="0" max="100" value={g1Ind} onChange={(e) => setG1Ind(Number(e.target.value))} className="w-full h-1" />
                                </div>

                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs font-extrabold">
                                        <span>❤️ Социальная поддержка жителей:</span> <span className="font-mono text-emerald-700">{g1Soc}%</span>
                                    </div>
                                    <input type="range" min="0" max="100" value={g1Soc} onChange={(e) => setG1Soc(Number(e.target.value))} className="w-full h-1" />
                                </div>

                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs font-extrabold">
                                        <span>🚇 Транспортная система города:</span> <span className="font-mono text-blue-700">{g1Tra}%</span>
                                    </div>
                                    <input type="range" min="0" max="100" value={g1Tra} onChange={(e) => setG1Tra(Number(e.target.value))} className="w-full h-1" />
                                </div>
                            </div>

                            <div className="pt-2.5 border-t flex justify-between items-center bg-[#F8FAFC]">
                                <span className={`text-xs font-mono font-extrabold ${g1Total === 100 ? 'text-emerald-700' : 'text-amber-600'}`}>Сумма: {g1Total}% / 100%</span>
                                <button 
                                    disabled={g1Total !== 100}
                                    onClick={() => {
                                        if (g1Soc >= 50) {
                                            triggerComplete('game-1', 150, "Балансировщик выполнен! Бюджет Москвы успешно сбалансирован в пользу жителей.");
                                            setActiveGameId(null);
                                        } else { alert("Внимание: На долю Социальной поддержки выделено менее 50%! Увеличьте социальные ассигнования!"); }
                                    }}
                                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase ${g1Total === 100 ? 'bg-gradient-to-r from-[#CC1111] to-red-600 text-white shadow' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                                >
                                    Одобрить
                                </button>
                            </div>
                        </div>
                    )}

                    {/* GAME 2 */}
                    {activeGameId === 'game-2' && (
                        <div className="space-y-2">
                            <div className="text-[10px] font-extrabold uppercase text-[#CC1111] tracking-wider mb-1">Игра: Линейный Аудит Казны</div>
                            <p className="text-[10px] font-semibold text-slate-600 leading-snug mb-3">Нажмите на ордер казенного расхода, нарушающий Бюджетный кодекс:</p>
                            {[
                                { id: 1, title: "Траты ГРБС на покупку лазерных станков — 45 млн ₽", isErr: false, t: "Целевое импортозамещение заводов Москвы." },
                                { id: 2, title: "Льготная компенсация кредитов фабрике — 12 млн ₽", isErr: false, t: "Стандартная целевая дотация под развитие ИТ-сектора." },
                                { id: 3, title: "Выдача казенных средств на закупку криптовалюты — 80 млн ₽", isErr: true, t: "ВНИМАНИЕ: Бюджетный кодекс РФ категорически запрещает приобретение необеспеченных спекулятивных криптоактивов!" }
                            ].map((c) => (
                                <button
                                    key={c.id}
                                    disabled={g2Card !== null}
                                    onClick={() => {
                                        setG2Card(c.id);
                                        if (c.isErr) {
                                            triggerComplete('game-2', 150, "Предотвращена нецелевая покупка криптовалюты на 80 млн ₽!");
                                            setTimeout(() => { setActiveGameId(null); }, 3000);
                                        }
                                    }}
                                    className={`w-full text-left p-2.5 border rounded-lg text-xs leading-normal font-bold transition flex flex-col ${
                                        g2Card === c.id 
                                            ? (c.isErr ? 'bg-emerald-50 border-emerald-400 text-emerald-950' : 'bg-red-50 border-red-300 text-red-950') 
                                            : 'bg-white hover:border-slate-400'
                                    }`}
                                >
                                    <span>{c.title}</span>
                                    {g2Card === c.id && <span className="text-[10px] font-medium mt-1 leading-normal text-slate-600 border-t border-dashed border-slate-300 pt-1">{c.t}</span>}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* GAME 3 */}
                    {activeGameId === 'game-3' && (
                        <div className="space-y-3">
                            <div className="text-[10px] font-extrabold uppercase text-[#CC1111] tracking-wider">Игра: Инвест-направление</div>
                            <p className="text-[10px] text-slate-600 font-bold leading-normal">Какое московское технологическое направление заслуживает льготный приоритет?</p>
                            <div className="grid grid-cols-2 gap-2">
                                <button 
                                    onClick={() => {
                                        setG3Res('tech');
                                        triggerComplete('game-3', 150, "Успешно одобрено развитие Технопарка 'Строгино'!");
                                        setTimeout(() => setActiveGameId(null), 2500);
                                    }} 
                                    className={`p-3 border rounded-xl text-center font-bold text-xs hover:border-emerald-500 transition shadow-xs ${g3Res === 'tech' ? 'bg-emerald-50 border-emerald-500 text-emerald-800' : 'bg-white'}`}
                                >
                                    🚀 Технопарк 'Строгино'
                                </button>

                                <button 
                                    onClick={() => { setG3Res('trade'); }} 
                                    className={`p-3 border rounded-xl text-center font-bold text-xs hover:border-amber-500 transition shadow-xs ${g3Res === 'trade' ? 'bg-amber-50 border-amber-300 text-amber-800' : 'bg-white'}`}
                                >
                                    🏪 Розничные рынки
                                </button>
                            </div>
                            {g3Res && (
                                <p className="text-[10px] font-bold text-slate-700 leading-normal bg-white p-2.5 border rounded-xl mt-2 animate-slide-up">
                                    {g3Res === 'tech' ? "Верно! Технопарк 'Строгино' - ядро наукоемких патентов ЦАО города Москвы. Рост инвестиций +15%." : "Спекулятивные перепродажи не являются приоритетными по Закону о бюджете. Сделайте выбор в пользу инновационного парка!"}
                                </p>
                            )}
                        </div>
                    )}

                    {/* GAME 4 */}
                    {activeGameId === 'game-4' && (
                        <div className="space-y-2">
                            <div className="text-[10px] font-extrabold uppercase text-[#CC1111] tracking-wider">Квест-сборщик 3-НДФЛ налога</div>
                            <p className="text-[10px] font-semibold text-slate-600">Набирайте расходы чеками. Превысьте лимит 150 000 ₽, чтобы проверить налоговый ограничитель:</p>
                            <div className="flex gap-1.5 flex-wrap">
                                <button onClick={() => setG4List(v => [...v, 60000])} className="px-2 py-1 bg-white border border-slate-300 hover:border-slate-400 text-[10px] font-bold rounded-lg transition">+ Учеба (60к)</button>
                                <button onClick={() => setG4List(v => [...v, 40000])} className="px-2 py-1 bg-white border border-slate-300 hover:border-slate-400 text-[10px] font-bold rounded-lg transition">+ Фитнес (40к)</button>
                                <button onClick={() => setG4List(v => [...v, 80000])} className="px-2 py-1 bg-white border border-slate-300 hover:border-slate-400 text-[10px] font-bold rounded-lg transition">+ Клиника (80к)</button>
                            </div>
                            
                            <div className="bg-white p-3 border rounded-xl mt-2 text-[11px] font-mono leading-relaxed">
                                <div>Всего чеков добавлено: <span className="font-bold">{g4Sum.toLocaleString()} ₽</span></div>
                                <div className="text-[#CC1111]">База вычета (лимит): <span className="font-bold">{g4Clamped.toLocaleString()} ₽</span></div>
                                <div className="text-emerald-700 font-extrabold mt-1">Одобрено к возврату (13%): {g4Refund.toLocaleString()} ₽</div>
                            </div>

                            {g4Sum >= 150000 && (
                                <div className="pt-2 flex justify-end">
                                    <button 
                                        onClick={() => {
                                            triggerComplete('game-4', 150, "Налоговый вычет по лимиту 19 500 ₽ успешно утвержден ФНС РФ!");
                                            setActiveGameId(null);
                                        }}
                                        className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[10px] font-bold uppercase transition"
                                    >
                                        Подать декларацию
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* GAME 5 */}
                    {activeGameId === 'game-5' && (
                        <div className="space-y-3">
                            <div className="text-[10px] font-extrabold uppercase text-[#CC1111] tracking-wider">KPI-контроль инвест-субсидий</div>
                            <p className="text-[10px] font-semibold text-slate-600 leading-snug">Активируйте все 3 целевых критерия получения московских грантов:</p>
                            
                            <div className="space-y-1.5">
                                <label className="flex items-center justify-between p-2.5 border rounded-xl bg-white cursor-pointer hover:bg-slate-50 transition">
                                    <span className="text-xs font-bold text-slate-800">1. Техническая модернизация цехов</span>
                                    <input type="checkbox" checked={g5Sw1} onChange={() => setG5Sw1(!g5Sw1)} className="accent-[#CC1111]" />
                                </label>
                                <label className="flex items-center justify-between p-2.5 border rounded-xl bg-white cursor-pointer hover:bg-slate-50 transition">
                                    <span className="text-xs font-bold text-slate-800">2. Трудоустройство вчерашних выпускников</span>
                                    <input type="checkbox" checked={g5Sw2} onChange={() => setG5Sw2(!g5Sw2)} className="accent-[#CC1111]" />
                                </label>
                                <label className="flex items-center justify-between p-2.5 border rounded-xl bg-white cursor-pointer hover:bg-slate-50 transition">
                                    <span className="text-xs font-bold text-slate-800">3. Фильтрация отходов по экологическому эко-стандарту</span>
                                    <input type="checkbox" checked={g5Sw3} onChange={() => setG5Sw3(!g5Sw3)} className="accent-[#CC1111]" />
                                </label>
                            </div>

                            {g5Sw1 && g5Sw2 && g5Sw3 ? (
                                <button 
                                    onClick={() => {
                                        triggerComplete('game-5', 150, "Поздравляем! Комплексный вектор субсидирования одобрен без рисков!");
                                        setActiveGameId(null);
                                    }}
                                    className="w-full py-2 bg-[#CC1111] hover:bg-[#A30E0E] text-white rounded-xl font-bold text-xs uppercase transition tracking-wider"
                                >
                                    Одобрить Вектор на 2026 год
                                </button>
                            ) : null}
                        </div>
                    )}

                    {/* Back button */}
                    <div className="pt-3.5 flex justify-start">
                        <button onClick={() => setActiveGameId(null)} className="text-[10px] text-slate-500 hover:text-slate-900 bg-slate-200 px-3 py-1.5 rounded-lg transition font-bold leading-none">Вернуться к списку</button>
                    </div>
                </div>
            );
        }

        function renderSpecialsTabContent(completedActivities, s1Name, setS1Name, s1Age, setS1Age, s2Input, setS2Input, triggerComplete) {
            return (
                <div className="space-y-3.5 max-h-[360px] overflow-y-auto">
                    {/* Spec 1 */}
                    <div className="p-3.5 border border-slate-200 rounded-xl bg-white space-y-2.5">
                        <div>
                            <h4 className="text-xs font-bold text-[#0F172A] leading-snug">Mos.ID Поверка льгот (80 Б)</h4>
                            <p className="text-[10px] text-slate-500 leading-normal">Зарегистрируйте аккаунт, чтобы просканировать субсидии.</p>
                        </div>

                        {completedActivities.includes('special-1') ? (
                            <div className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-100">Аккаунт Mos.ID верифицирован!</div>
                        ) : (
                            <div className="flex gap-2">
                                <input type="text" placeholder="Имя" value={s1Name} onChange={e => setS1Name(e.target.value)} className="w-1/2 p-1.5 border border-slate-300 rounded-lg text-xs font-bold" />
                                <input type="number" placeholder="Лет" value={s1Age} onChange={e => setS1Age(e.target.value)} className="w-1/4 p-1.5 border border-slate-300 rounded-lg text-xs font-bold" />
                                <button 
                                    onClick={() => {
                                        if (s1Name && s1Age) { triggerComplete('special-1', 80, "Ваш профиль Mos.ID успешно верифицирован!"); }
                                        else { alert("Заполните имя и возраст!"); }
                                    }} 
                                    className="px-3 bg-slate-800 hover:bg-slate-900 text-white text-[10px] font-bold rounded-lg transition"
                                >
                                    Вход
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Spec 2 */}
                    <div className="p-3.5 border border-slate-200 rounded-xl bg-white space-y-2.5">
                        <div>
                            <h4 className="text-xs font-bold text-[#0F172A] leading-snug">Фискальный Эксперт 3-НДФЛ (120 Б)</h4>
                            <p className="text-[10px] text-slate-500">Задайте расходы на личное обучение свыше 100 000 ₽.</p>
                        </div>

                        {completedActivities.includes('special-2') ? (
                            <div className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-100">Проиндексированный расход зафиксирован!</div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <input type="range" min="0" max="200000" step="5000" value={s2Input} onChange={e => setS2Input(Number(e.target.value))} className="flex-1 accent-[#CC1111]" />
                                <button 
                                    onClick={() => {
                                        if (s2Input >= 100000) { triggerComplete('special-2', 120, "Спецпроект: Расходы свыше 100к верифицированы налоговой!"); }
                                        else { alert("Задайте ползунком расходы выше 100 тыс.руб.!"); }
                                    }} 
                                    className="px-3 py-1.5 bg-slate-800 text-white rounded-lg text-[10px] font-bold font-mono transition inline-block shrink-0 leading-none"
                                >
                                    {s2Input.toLocaleString()} ₽
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Spec 3 */}
                    <div className="p-3.5 border border-slate-200 rounded-xl bg-white space-y-2.5">
                        <div>
                            <h4 className="text-xs font-bold text-[#0F172A]">Аналитический Сёрфинг Казны (100 Б)</h4>
                            <p className="text-[10px] text-slate-500 leading-normal">Ознакомьтесь подробно с тремя сферами расходов бюджета.</p>
                        </div>

                        {completedActivities.includes('special-3') ? (
                            <div className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-100">Секторы успешно изучены</div>
                        ) : (
                            <div className="flex justify-end">
                                <button 
                                    onClick={() => { triggerComplete('special-3', 100, "Изучение структуры бюджета пройдено!"); }} 
                                    className="px-3 py-1.5 bg-[#CC1111] hover:bg-[#A30E0E] text-white text-[10px] font-bold rounded-lg transition uppercase tracking-wider"
                                >
                                    Изучить секторы
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        function renderAnalyticsSection(analyticsData, svgSlices) {
            return (
                <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#F8FAFC] text-[#CC1111] p-2 rounded-xl border border-[#E2E8F0]">
                                <SVGIcons.PieChart />
                            </div>
                            <div>
                                <span className="text-[9px] font-bold text-[#CC1111] uppercase tracking-wider block">Структура московского бюджета</span>
                                <h2 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight">Куда направляются ваши налоги</h2>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 bg-[#F8FAFC] border border-[#E2E8F0] px-3.5 py-1.5 rounded-lg">
                            <SVGIcons.Info />
                            <span className="text-[10px] text-[#475569] font-medium leading-none">Префектура ЦАО Москвы // Проект 2026 г.</span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                        {/* Interactive Vector SVG Donut Chart (Radius = 15.915) */}
                        <div className="w-48 h-48 sm:w-56 sm:h-56 relative flex items-center justify-center">
                            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                                {svgSlices.map((slice, idx) => (
                                    <circle
                                        key={idx}
                                        cx="18"
                                        cy="18"
                                        r="15.91549430918954"
                                        fill="transparent"
                                        stroke={slice.color}
                                        strokeWidth="4"
                                        strokeDasharray={slice.dashArray}
                                        strokeDashoffset={slice.offset}
                                        className="transition-all duration-300 hover:opacity-85 cursor-pointer"
                                    />
                                ))}
                            </svg>
                            
                            {/* Central Ring Label Seal */}
                            <div className="absolute flex flex-col items-center justify-center text-center bg-white/95 p-3 rounded-full w-28 h-28 border border-slate-100 shadow-sm">
                                <span className="text-xl font-black text-[#0F172A] font-mono leading-none">100%</span>
                                <span className="text-[7px] font-extrabold text-[#475569] uppercase tracking-wider mt-1 block leading-none">Налоги ЦАО<br/>размещены</span>
                            </div>
                        </div>

                        {/* Side List Legend with percentages */}
                        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                            {analyticsData.map((item) => (
                                <div key={item.name} className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 hover:border-[#E2E8F0] transition-colors bg-white">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-3 h-3 rounded-sm border" style={{ backgroundColor: item.color }} />
                                        <span className="text-xs font-semibold text-slate-700 leading-none">{item.name}</span>
                                    </div>
                                    <span className="text-xs font-mono font-bold text-[#CC1111] bg-slate-100 px-2 py-0.5 rounded-lg border border-slate-200">{item.value}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

        const rootEl = document.getElementById("root");
        const root = ReactDOM.createRoot(rootEl);
        root.render(<App />);
    </script> 