import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, MessageCircle, Phone, MapPin, Clock, ChevronRight, Star, CheckCircle2, ShieldCheck, Cpu, Users, Sparkles, Heart, Calendar, CreditCard, ChevronDown, Quote, Zap, Crown } from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Procedimentos', path: '/procedimentos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Resultados', path: '/resultados' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-effect py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-bold tracking-widest text-brand-dark">
          LUMIÈRE
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm uppercase tracking-widest transition-colors hover:text-brand-gold ${location.pathname === link.path ? 'text-brand-gold font-medium' : 'text-brand-dark'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-dark text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-widest hover:bg-brand-gold transition-all duration-300 shadow-lg hover:shadow-brand-gold/20"
          >
            Agendar Avaliação
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-brand-nude overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-display text-brand-dark hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-dark text-white w-full py-4 rounded-xl text-center font-medium tracking-widest"
              >
                AGENDAR AVALIAÇÃO
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-brand-nude pt-20 pb-10 border-t border-brand-rose/30">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="space-y-6">
        <h3 className="text-2xl font-display font-bold tracking-widest">LUMIÈRE</h3>
        <p className="text-brand-gray leading-relaxed text-sm">
          Excelência em estética avançada. Unimos tecnologia de ponta e cuidado humanizado para realçar sua beleza natural com sofisticação.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="p-2 bg-white rounded-full text-brand-dark hover:text-brand-gold transition-colors shadow-sm">
            <Instagram size={18} />
          </a>
          <a href="#" className="p-2 bg-white rounded-full text-brand-dark hover:text-brand-gold transition-colors shadow-sm">
            <Facebook size={18} />
          </a>
        </div>
      </div>

      <div>
        <h4 className="font-display text-lg mb-6">Links Rápidos</h4>
        <ul className="space-y-3 text-sm text-brand-gray">
          <li><Link to="/" className="hover:text-brand-gold transition-colors">Início</Link></li>
          <li><Link to="/procedimentos" className="hover:text-brand-gold transition-colors">Procedimentos</Link></li>
          <li><Link to="/sobre" className="hover:text-brand-gold transition-colors">Sobre a Clínica</Link></li>
          <li><Link to="/resultados" className="hover:text-brand-gold transition-colors">Resultados</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display text-lg mb-6">Contato</h4>
        <ul className="space-y-4 text-sm text-brand-gray">
          <li className="flex items-start space-x-3">
            <MapPin size={18} className="text-brand-gold shrink-0" />
            <span>Av. Paulista, 2000 - Jardins, São Paulo - SP</span>
          </li>
          <li className="flex items-center space-x-3">
            <Phone size={18} className="text-brand-gold shrink-0" />
            <span>(11) 99999-9999</span>
          </li>
          <li className="flex items-center space-x-3">
            <MessageCircle size={18} className="text-brand-gold shrink-0" />
            <span>WhatsApp: (11) 99999-9999</span>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-display text-lg mb-6">Horário</h4>
        <ul className="space-y-3 text-sm text-brand-gray">
          <li className="flex justify-between">
            <span>Segunda - Sexta:</span>
            <span>09h às 20h</span>
          </li>
          <li className="flex justify-between">
            <span>Sábado:</span>
            <span>09h às 14h</span>
          </li>
          <li className="pt-4 italic text-brand-gold">Atendimento com hora marcada.</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-brand-rose/20 text-center text-xs text-brand-gray tracking-widest">
      © 2026 LUMIÈRE ESTÉTICA AVANÇADA. TODOS OS DIREITOS RESERVADOS.
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5511999999999"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl whatsapp-pulse transition-transform hover:scale-110"
    aria-label="Contato via WhatsApp"
  >
    <MessageCircle size={32} fill="currentColor" />
  </a>
);

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number; key?: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ subtitle, title, light = false, centered = true }: { subtitle: string; title: string; light?: boolean; centered?: boolean }) => (
  <div className={`${centered ? 'text-center' : 'text-left'} mb-16`}>
    <span className={`${light ? 'text-brand-gold-light' : 'text-brand-gold'} uppercase tracking-[0.3em] text-xs font-bold mb-4 block`}>
      {subtitle}
    </span>
    <h2 className={`text-4xl md:text-5xl font-display ${light ? 'text-white' : 'text-brand-dark'}`}>
      {title}
    </h2>
  </div>
);

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-brand-rose/20 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="font-display text-lg md:text-xl text-brand-dark group-hover:text-brand-gold transition-colors">
          {question}
        </span>
        <ChevronDown className={`text-brand-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-brand-gray leading-relaxed text-sm md:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Pages ---

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=2070"
            alt="Estética de Luxo"
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-8xl font-display mb-8 leading-[1.1] text-brand-dark">
              Sua beleza em sua <span className="italic text-brand-gold">melhor versão</span>.
            </h1>
            <p className="text-lg md:text-xl text-brand-gray mb-10 leading-relaxed max-w-lg font-light">
              Protocolos exclusivos e tecnologias de ponta para resultados naturais, sofisticados e duradouros.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="https://wa.me/5511999999999"
                className="bg-brand-dark text-white px-12 py-6 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-gold transition-all duration-500 shadow-2xl text-center flex items-center justify-center group"
              >
                Agendar Avaliação <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/procedimentos"
                className="bg-white/80 backdrop-blur-md border border-brand-dark/5 text-brand-dark px-12 py-6 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-all duration-500 text-center shadow-lg"
              >
                Ver Procedimentos
              </Link>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-gold/50 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-brand-gold/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* 2. Diferenciais (Cards com Ícones) */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="Por que escolher a Lumière?" 
            subtitle="Diferenciais" 
            centered 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Personalização Total', desc: 'Cada face é única. Criamos protocolos sob medida para seus objetivos.', icon: <Sparkles size={32} /> },
              { title: 'Equipe de Elite', desc: 'Profissionais altamente qualificados e em constante atualização.', icon: <Users size={32} /> },
              { title: 'Tecnologia de Ponta', desc: 'Equipamentos padrão ouro aprovados pelos maiores órgãos.', icon: <Zap size={32} /> },
              { title: 'Experiência Premium', desc: 'Ambiente luxuoso projetado para seu conforto e privacidade.', icon: <Crown size={32} /> },
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="p-10 rounded-[2.5rem] bg-brand-nude/30 border border-brand-rose/10 text-center hover:shadow-xl transition-all duration-500 group">
                  <div className="text-brand-gold mb-8 flex justify-center group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                  <h3 className="font-display text-2xl mb-4 text-brand-dark">{item.title}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Procedimentos Principais */}
      <section className="py-32 bg-brand-nude/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <SectionTitle 
              title="Realce sua beleza natural" 
              subtitle="Nossos Procedimentos" 
            />
            <Link to="/procedimentos" className="text-brand-gold text-sm uppercase tracking-widest font-bold flex items-center hover:translate-x-2 transition-transform mb-4">
              Ver todos os serviços <ChevronRight size={18} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: 'Harmonização Facial', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800', desc: 'Equilíbrio e simetria com resultados naturais e elegantes.' },
              { name: 'Bioestimuladores', img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800', desc: 'Estímulo de colágeno para uma pele firme, densa e radiante.' },
              { name: 'Preenchimento Labial', img: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=800', desc: 'Volume, contorno e hidratação para lábios perfeitos.' },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700">
                  <div className="h-80 overflow-hidden relative">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-10">
                    <h3 className="font-display text-3xl mb-4 text-brand-dark">{p.name}</h3>
                    <p className="text-brand-gray text-base mb-8 leading-relaxed font-light">{p.desc}</p>
                    <Link to="/procedimentos" className="inline-flex items-center text-brand-gold text-xs uppercase tracking-[0.2em] font-bold group-hover:gap-4 transition-all">
                      Saiba mais <ChevronRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Antes e Depois (Galeria) */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="Resultados que falam por si" 
            subtitle="Transformações" 
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { 
                title: 'Harmonização Facial Full Face', 
                before: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
                after: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800'
              },
              { 
                title: 'Preenchimento Labial Natural', 
                before: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=800',
                after: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=800' // Placeholder
              }
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.2}>
                <div className="space-y-6">
                  <div className="flex gap-4 aspect-[4/3]">
                    <div className="flex-1 relative rounded-[2rem] overflow-hidden shadow-lg">
                      <img src={item.before} alt="Antes" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold">Antes</div>
                    </div>
                    <div className="flex-1 relative rounded-[2rem] overflow-hidden shadow-lg border-2 border-brand-gold/20">
                      <img src={item.after} alt="Depois" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute top-4 left-4 bg-brand-gold text-brand-dark text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold">Depois</div>
                    </div>
                  </div>
                  <h4 className="font-display text-2xl text-center text-brand-dark">{item.title}</h4>
                </div>
              </Reveal>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/resultados" className="bg-brand-nude text-brand-dark px-10 py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-brand-rose/20 transition-all">
              Ver Galeria Completa
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Sobre a Clínica */}
      <section className="py-32 bg-brand-nude/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="relative">
                <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
                  <img src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&q=80&w=1000" alt="Clínica Lumière" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -z-0"></div>
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-rose/10 rounded-full blur-3xl -z-0"></div>
                
                <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-[2rem] shadow-xl z-20 max-w-[200px] hidden md:block">
                  <span className="text-4xl font-display text-brand-gold block mb-2">10+</span>
                  <span className="text-xs uppercase tracking-widest font-bold text-brand-dark">Anos de Excelência</span>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="space-y-8">
                <SectionTitle 
                  title="Onde a ciência encontra a arte da beleza" 
                  subtitle="Sobre a Lumière" 
                />
                <p className="text-brand-gray text-lg leading-relaxed font-light">
                  A Lumière nasceu do desejo de oferecer uma experiência estética verdadeiramente diferenciada. Não acreditamos em padrões impostos, mas sim em realçar o que cada pessoa tem de mais belo.
                </p>
                <p className="text-brand-gray text-lg leading-relaxed font-light">
                  Nossa clínica combina um ambiente de luxo com protocolos científicos rigorosos, garantindo que cada tratamento seja não apenas eficaz, mas uma jornada de bem-estar.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div>
                    <h5 className="font-display text-xl mb-2 text-brand-dark">Missão</h5>
                    <p className="text-brand-gray text-sm font-light">Transformar vidas através da autoestima e do autocuidado consciente.</p>
                  </div>
                  <div>
                    <h5 className="font-display text-xl mb-2 text-brand-dark">Valores</h5>
                    <p className="text-brand-gray text-sm font-light">Ética, naturalidade, inovação constante e acolhimento premium.</p>
                  </div>
                </div>
                <Link to="/sobre" className="inline-block bg-brand-dark text-white px-10 py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-brand-gold transition-all shadow-lg">
                  Conheça nossa história
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Equipe */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="Especialistas dedicados a você" 
            subtitle="Nossa Equipe" 
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Dra. Beatriz Lumière', role: 'Diretora Clínica & Harmonização', img: 'https://images.unsplash.com/photo-1559839734-2b71f153678f?auto=format&fit=crop&q=80&w=800' },
              { name: 'Dra. Juliana Costa', role: 'Especialista em Bioestimuladores', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800' },
              { name: 'Dra. Mariana Silva', role: 'Dermatologia Estética', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800' },
            ].map((member, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="group text-center">
                  <div className="aspect-[3/4] rounded-[3rem] overflow-hidden mb-8 shadow-lg grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="font-display text-2xl text-brand-dark mb-2">{member.name}</h3>
                  <p className="text-brand-gold text-xs uppercase tracking-widest font-bold">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Tecnologias e Equipamentos */}
      <section className="py-32 bg-brand-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="space-y-8">
                <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold block">Inovação</span>
                <h2 className="text-4xl md:text-6xl font-display leading-tight">Tecnologia Padrão Ouro Mundial</h2>
                <p className="text-white/70 text-lg font-light leading-relaxed">
                  Investimos constantemente nos equipamentos mais avançados do mercado para garantir resultados superiores com o máximo de conforto e segurança.
                </p>
                <ul className="space-y-6">
                  {[
                    { name: 'Ultraformer III', desc: 'Ultrassom micro e macrofocado para lifting e gordura.' },
                    { name: 'Lavieen', desc: 'Laser de Thulium para rejuvenescimento e brilho instantâneo.' },
                    { name: 'Fotona 4D', desc: 'O sistema de laser mais versátil para face e corpo.' },
                  ].map((tech, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0">
                        <Zap size={20} className="text-brand-gold" />
                      </div>
                      <div>
                        <h4 className="font-display text-xl text-brand-gold">{tech.name}</h4>
                        <p className="text-sm text-white/50">{tech.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="relative">
                <div className="aspect-square rounded-[4rem] overflow-hidden border border-white/10">
                  <img src="https://images.unsplash.com/photo-1579154235602-3c2051ed3044?auto=format&fit=crop&q=80&w=1000" alt="Tecnologia" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. Depoimentos */}
      <section className="py-32 bg-brand-nude/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="O que nossas clientes dizem" 
            subtitle="Experiências" 
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Alessandra M.', text: 'A melhor clínica que já frequentei. O atendimento é impecável e os resultados da minha harmonização ficaram extremamente naturais.', stars: 5 },
              { name: 'Carolina S.', text: 'Fiz o protocolo de bioestimuladores e minha pele nunca esteve tão firme. Dra. Beatriz é uma artista!', stars: 5 },
              { name: 'Fernanda R.', text: 'Ambiente maravilhoso, me sinto em um spa de luxo. As tecnologias são realmente diferenciadas.', stars: 5 },
            ].map((dep, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="p-10 rounded-[3rem] bg-white shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
                  <div className="flex gap-1 mb-6">
                    {[...Array(dep.stars)].map((_, i) => <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />)}
                  </div>
                  <p className="text-brand-gray italic mb-8 flex-grow leading-relaxed font-light">"{dep.text}"</p>
                  <span className="font-display text-lg text-brand-dark">{dep.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle 
            title="Dúvidas Frequentes" 
            subtitle="FAQ" 
            centered
          />
          
          <div className="mt-12">
            <AccordionItem 
              question="Os procedimentos são dolorosos?" 
              answer="Utilizamos as melhores técnicas de anestesia tópica e injetável, além de equipamentos com sistemas de resfriamento integrados para garantir o máximo conforto durante toda a sessão."
            />
            <AccordionItem 
              question="Quanto tempo duram os resultados?" 
              answer="A durabilidade varia conforme o procedimento. Botox dura em média 4 a 6 meses, enquanto preenchimentos e bioestimuladores podem durar de 12 a 24 meses, dependendo do metabolismo individual."
            />
            <AccordionItem 
              question="Preciso de repouso após os tratamentos?" 
              answer="A maioria dos nossos procedimentos permite o retorno imediato às atividades cotidianas. Fornecemos todas as orientações pós-procedimento detalhadas para cada caso."
            />
            <AccordionItem 
              question="Como agendar uma avaliação?" 
              answer="Você pode agendar clicando em qualquer botão de WhatsApp do site ou ligando diretamente para nossa recepção. Nossa equipe está pronta para encontrar o melhor horário para você."
            />
          </div>
        </div>
      </section>

      {/* 10. Chamada Final */}
      <section className="py-32 bg-brand-nude relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-7xl font-display mb-8 text-brand-dark leading-tight">Pronta para revelar sua <span className="italic">melhor versão</span>?</h2>
            <p className="text-xl text-brand-gray mb-12 font-light leading-relaxed">
              Não deixe sua autoestima para depois. Agende hoje mesmo sua avaliação personalizada com nossos especialistas.
            </p>
            <a
              href="https://wa.me/5511999999999"
              className="inline-flex items-center bg-brand-dark text-white px-12 py-6 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:bg-brand-gold transition-all duration-500 shadow-2xl group"
            >
              Agendar via WhatsApp <ChevronRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 11. Localização */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="space-y-8">
                <SectionTitle 
                  title="Venha nos visitar" 
                  subtitle="Onde Estamos" 
                />
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-nude flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-display text-xl text-brand-dark">Endereço</h4>
                      <p className="text-brand-gray font-light">Av. Brigadeiro Faria Lima, 4500 - Itaim Bibi, São Paulo - SP</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-nude flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-display text-xl text-brand-dark">Horário de Funcionamento</h4>
                      <p className="text-brand-gray font-light">Segunda a Sexta: 08h às 20h<br />Sábado: 09h às 14h</p>
                    </div>
                  </div>
                </div>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-brand-gold text-xs uppercase tracking-widest font-bold border-b border-brand-gold pb-1 hover:opacity-70 transition-opacity"
                >
                  Ver no Google Maps
                </a>
              </div>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="h-[500px] rounded-[4rem] overflow-hidden shadow-2xl border border-brand-rose/10 grayscale hover:grayscale-0 transition-all duration-1000">
                {/* Placeholder para o Mapa */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.448460930062!2d-46.6816434!3d-23.5882443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5744e0eb0569%3A0x112c4eb3077a1641!2sAv.%20Brig.%20Faria%20Lima%2C%204500%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004538-132!5e0!3m2!1spt-BR!2sbr!4v1711280000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

const Procedimentos = () => {
  const list = [
    { name: 'Limpeza de Pele Premium', desc: 'Protocolo completo de higienização, extração e hidratação profunda com ativos de luxo.', benefits: ['Pele renovada e purificada', 'Remoção profunda de impurezas', 'Luminosidade e viço imediatos'] },
    { name: 'Botox (Toxina Botulínica)', desc: 'Suavização de rugas dinâmicas e prevenção de novas linhas com técnica de naturalidade.', benefits: ['Aspecto descansado e jovial', 'Prevenção de rugas profundas', 'Resultados naturais sem congelamento'] },
    { name: 'Preenchimento com Ácido Hialurônico', desc: 'Reposição de volume e contorno em lábios, olheiras, malar, mandíbula e mento.', benefits: ['Contorno facial definido', 'Volume natural e harmônico', 'Rejuvenescimento imediato'] },
    { name: 'Harmonização Facial Full Face', desc: 'Planejamento estratégico global para equilibrar e realçar os traços do rosto.', benefits: ['Simetria e equilíbrio facial', 'Realce da beleza individual', 'Protocolo único e personalizado'] },
    { name: 'Depilação a Laser Indolor', desc: 'Tecnologia de ponta para eliminação definitiva dos pelos com máximo conforto.', benefits: ['Praticidade no dia a dia', 'Pele lisa e sem foliculite', 'Economia de tempo e recursos'] },
    { name: 'Drenagem Linfática Método Lumière', desc: 'Técnica exclusiva para redução imediata de edemas, toxinas e retenção hídrica.', benefits: ['Desinchaço e leveza corporal', 'Relaxamento profundo', 'Melhora da circulação e celulite'] },
    { name: 'Lipo sem Cortes (Ultrassom)', desc: 'Protocolos avançados para gordura localizada, celulite e flacidez corporal.', benefits: ['Modelagem da silhueta', 'Firmeza da pele', 'Resultados visíveis em poucas sessões'] },
    { name: 'Microagulhamento Drug Delivery', desc: 'Indução de colágeno potencializada com aplicação de ativos estéreis específicos.', benefits: ['Melhora da textura e poros', 'Tratamento de cicatrizes e manchas', 'Pele densa e rejuvenescida'] },
    { name: 'Peeling de Diamante & Químico', desc: 'Renovação celular profunda para tratamento de manchas, poros e linhas finas.', benefits: ['Clareamento e uniformidade', 'Pele com textura de seda', 'Estímulo de colágeno novo'] },
    { name: 'Bioestimuladores de Colágeno', desc: 'Tratamento padrão ouro para flacidez facial e corporal com efeito duradouro.', benefits: ['Efeito lifting natural', 'Pele firme e espessa', 'Resultados que duram até 24 meses'] },
  ];

  return (
    <div className="pt-40 pb-32 bg-brand-nude/10">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-24">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Excelência Técnica</span>
            <h1 className="text-5xl md:text-8xl font-display mb-8 text-brand-dark">Procedimentos</h1>
            <p className="text-brand-gray max-w-3xl mx-auto text-xl leading-relaxed font-light">
              Combinamos as melhores tecnologias do mundo com a expertise de nossos especialistas para entregar resultados que superam expectativas.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {list.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="p-12 rounded-[4rem] bg-white border border-brand-rose/10 hover:shadow-2xl transition-all duration-700 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-nude/50 rounded-bl-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <h3 className="font-display text-3xl md:text-4xl mb-6 text-brand-dark group-hover:text-brand-gold transition-colors duration-500">{p.name}</h3>
                  <p className="text-brand-gray mb-10 leading-relaxed text-lg font-light">{p.desc}</p>
                  
                  <div className="space-y-4 mb-12">
                    {p.benefits.map((b, j) => (
                      <div key={j} className="flex items-start text-brand-dark/80 font-medium">
                        <CheckCircle2 size={20} className="text-brand-gold mr-4 shrink-0 mt-1" />
                        <span className="text-sm md:text-base">{b}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href="https://wa.me/5511999999999"
                    className="inline-flex items-center gap-3 bg-brand-dark text-white px-10 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-gold transition-all duration-500 shadow-lg group/btn"
                  >
                    Agendar Avaliação <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        <div className="mt-32 p-16 rounded-[4rem] bg-brand-dark text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display mb-8">Não encontrou o que procurava?</h2>
            <p className="text-lg text-white/70 mb-12 font-light">
              Nossos especialistas podem criar um protocolo exclusivo combinando diferentes técnicas para atingir seus objetivos específicos.
            </p>
            <a
              href="https://wa.me/5511999999999"
              className="inline-block bg-brand-gold text-brand-dark px-12 py-6 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white transition-all shadow-2xl"
            >
              Consultar Especialista
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sobre = () => (
  <div className="pt-40 pb-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
        <Reveal>
          <div className="space-y-10">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold block">Nossa História</span>
            <h1 className="text-5xl md:text-8xl font-display leading-[1.1] text-brand-dark">Excelência, Cuidado e <span className="italic text-brand-gold">Autoestima</span>.</h1>
            <div className="space-y-8 text-brand-gray leading-relaxed text-lg font-light">
              <p>
                A Lumière nasceu do desejo de transformar a experiência estética em algo verdadeiramente exclusivo e humano. Fundada por especialistas apaixonadas pela beleza natural, nossa clínica se tornou referência em tratamentos de alto padrão.
              </p>
              <p>
                Acreditamos que cada rosto conta uma história e cada corpo merece ser celebrado. Por isso, não trabalhamos com padrões, mas com a valorização da individualidade de cada paciente.
              </p>
              <p>
                Nossa missão é proporcionar resultados que não apenas transformam a aparência, mas renovam a confiança e o bem-estar de quem nos escolhe.
              </p>
            </div>
            <div className="pt-6">
              <a
                href="https://wa.me/5511999999999"
                className="bg-brand-dark text-white px-12 py-6 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-gold transition-all duration-500 shadow-2xl inline-block"
              >
                Falar com a Dra. Beatriz
              </a>
            </div>
          </div>
        </Reveal>
        
        <Reveal delay={0.3}>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
              <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000" alt="Clínica Lumière" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-12 -left-12 bg-brand-dark text-white p-12 rounded-[3rem] hidden md:block shadow-2xl z-20">
              <p className="text-5xl font-display mb-2 text-brand-gold">10+</p>
              <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-70">Anos de Experiência</p>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-nude rounded-full -z-0 blur-3xl"></div>
          </div>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { title: 'Missão', text: 'Promover a autoestima através de procedimentos estéticos seguros e resultados naturais.', icon: <Heart size={32} /> },
          { title: 'Visão', text: 'Ser a principal referência em estética de luxo e tecnologia avançada no Brasil.', icon: <Star size={32} /> },
          { title: 'Valores', text: 'Ética, transparência, excelência técnica e atendimento humanizado em cada detalhe.', icon: <ShieldCheck size={32} /> },
        ].map((v, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="text-center p-12 rounded-[3rem] bg-brand-nude/20 border border-brand-rose/10 hover:shadow-xl transition-all duration-500 h-full flex flex-col items-center">
              <div className="text-brand-gold mb-8">{v.icon}</div>
              <h3 className="font-display text-3xl mb-6 text-brand-dark">{v.title}</h3>
              <p className="text-brand-gray text-base leading-relaxed font-light">{v.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </div>
);

const Resultados = () => (
  <div className="pt-40 pb-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <Reveal>
        <div className="text-center mb-24">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Transformações</span>
          <h1 className="text-5xl md:text-8xl font-display mb-8 text-brand-dark">Resultados</h1>
          <p className="text-brand-gray max-w-2xl mx-auto text-xl font-light leading-relaxed">
            A prova real do nosso compromisso com a naturalidade e a satisfação de nossas pacientes.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
        {[
          { title: 'Harmonização Facial', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1200&sig=1' },
          { title: 'Bioestimuladores', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1200&sig=2' },
          { title: 'Preenchimento Labial', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1200&sig=3' },
          { title: 'Lifting Facial', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1200&sig=4' },
        ].map((item, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="group relative overflow-hidden rounded-[4rem] shadow-lg aspect-video">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-12">
                <span className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-4">Caso Real</span>
                <h3 className="text-white font-display text-3xl italic mb-4">{item.title}</h3>
                <p className="text-white/70 text-sm font-light leading-relaxed">"Resultados que respeitam sua anatomia e realçam sua beleza única."</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="bg-brand-nude/30 p-16 md:p-24 rounded-[5rem] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-display mb-8 text-brand-dark">Cada rosto é único.</h2>
          <p className="text-brand-gray max-w-2xl mx-auto mb-12 text-lg font-light leading-relaxed">
            Nossos resultados são baseados em avaliações criteriosas. O que funciona para uma pessoa pode não ser o ideal para outra. Por isso, priorizamos a consulta inicial para traçar o seu plano de beleza exclusivo.
          </p>
          <a
            href="https://wa.me/5511999999999"
            className="inline-block bg-brand-dark text-white px-12 py-6 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-gold transition-all duration-500 shadow-2xl"
          >
            Agendar Minha Avaliação
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Contato = () => (
  <div className="pt-40 pb-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <Reveal>
          <div className="space-y-12">
            <div>
              <span className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Atendimento</span>
              <h1 className="text-5xl md:text-8xl font-display mb-8 text-brand-dark">Vamos conversar?</h1>
              <p className="text-brand-gray text-xl font-light leading-relaxed">
                Estamos prontos para tirar suas dúvidas e agendar o melhor horário para sua transformação.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-start space-x-8 group">
                <div className="p-5 bg-brand-nude rounded-3xl text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-display text-2xl mb-2 text-brand-dark">WhatsApp</h4>
                  <p className="text-brand-gray text-lg font-light">(11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-start space-x-8 group">
                <div className="p-5 bg-brand-nude rounded-3xl text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-display text-2xl mb-2 text-brand-dark">Endereço</h4>
                  <p className="text-brand-gray text-lg font-light">Av. Brigadeiro Faria Lima, 4500 - Itaim Bibi, São Paulo - SP</p>
                </div>
              </div>
              <div className="flex items-start space-x-8 group">
                <div className="p-5 bg-brand-nude rounded-3xl text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="font-display text-2xl mb-2 text-brand-dark">Horário de Atendimento</h4>
                  <p className="text-brand-gray text-lg font-light">Seg - Sex: 08h às 20h | Sáb: 09h às 14h</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl border border-brand-rose/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-nude/30 rounded-bl-full -z-0"></div>
            
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-dark/50 ml-2">Nome Completo</label>
                  <input type="text" className="w-full p-5 bg-brand-nude/20 border border-transparent rounded-2xl focus:outline-none focus:bg-white focus:border-brand-gold/30 transition-all duration-300" placeholder="Seu nome" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-dark/50 ml-2">WhatsApp</label>
                  <input type="tel" className="w-full p-5 bg-brand-nude/20 border border-transparent rounded-2xl focus:outline-none focus:bg-white focus:border-brand-gold/30 transition-all duration-300" placeholder="(11) 99999-9999" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-dark/50 ml-2">Procedimento de Interesse</label>
                <div className="relative">
                  <select className="w-full p-5 bg-brand-nude/20 border border-transparent rounded-2xl focus:outline-none focus:bg-white focus:border-brand-gold/30 transition-all duration-300 appearance-none">
                    <option>Selecione um procedimento</option>
                    <option>Harmonização Facial</option>
                    <option>Botox</option>
                    <option>Preenchimento Labial</option>
                    <option>Bioestimuladores</option>
                    <option>Outros</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-brand-gold pointer-events-none" size={20} />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-dark/50 ml-2">Mensagem</label>
                <textarea className="w-full p-5 bg-brand-nude/20 border border-transparent rounded-2xl focus:outline-none focus:bg-white focus:border-brand-gold/30 transition-all duration-300 h-40 resize-none" placeholder="Como podemos te ajudar?"></textarea>
              </div>
              <button className="w-full bg-brand-dark text-white py-6 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-brand-gold transition-all duration-500 shadow-xl hover:shadow-brand-gold/20">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  </div>
);

// --- Main App ---

export { Navbar, Footer, WhatsAppButton, Home, Procedimentos, Sobre, Resultados, Contato, Reveal, SectionTitle, AccordionItem };
